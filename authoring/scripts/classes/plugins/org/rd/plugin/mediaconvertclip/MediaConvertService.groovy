package plugins.org.rd.plugin.mediaconvertclip

@Grab(group='software.amazon.awssdk', module='mediaconvert', version='2.29.52', initClass=false)
@Grab(group='software.amazon.awssdk', module='auth', version='2.29.52', initClass=false)
@Grab(group='software.amazon.awssdk', module='regions', version='2.29.52', initClass=false)

import software.amazon.awssdk.auth.credentials.*
import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.mediaconvert.MediaConvertClient
import software.amazon.awssdk.services.mediaconvert.model.*
import software.amazon.awssdk.services.mediaconvert.model.JobSettings
import software.amazon.awssdk.services.mediaconvert.model.OutputGroupSettings

/**
 * This class is a service class that maps console functionality to AWS MediaConvert services
 */
public class MediaConvertService {

    MediaConvertClient mediaConvertClient

    def pluginConfig

    def REGION = 'us-east-1'
    def MEDIA_CONVERT_ROLE_ARN = 'arn:aws:iam::xxxxxxxx:role/media-convert-demo'
    def MEDIA_CONVERT_ENDPOINT = 'https://xxxxxxxx.mediaconvert.us-east-1.amazonaws.com'
    def S3_BUCKET = 'aws-video-center-demo'
    def INPUT_PREFIX = 'preview'
    def OUTPUT_PREFIX = 'clipped'

    /**
     * Constructor
     */
    MediaConvertService(pluginConfig) {
        this.pluginConfig = pluginConfig
    }

    /**
     * Look up credentials for AWS from the site
     * @return object containing credentials
     */
    def lookupAwsMediaCredentials() {
        def creds = [region: '', apiKey: '', apiSecret: '', endpoint: '']

        creds.region = pluginConfig.getString('awsRegion') ?: REGION
        creds.apiKey = pluginConfig.getString('awsApiKey')
        creds.apiSecret = pluginConfig.getString('awsApiSecret')
        creds.s3Bucket = pluginConfig.getString('awsS3Bucket') ?: S3_BUCKET
        creds.inputPrefix = pluginConfig.getString('awsInputPrefix') ?: INPUT_PREFIX
        creds.outputPrefix = pluginConfig.getString('awsOutputPrefix') ?: OUTPUT_PREFIX
        creds.roleArn = pluginConfig.getString('awsRoleArn') ?: MEDIA_CONVERT_ROLE_ARN
        creds.endpoint = pluginConfig.getString('awsMediaConvertEndpoint') ?: MEDIA_CONVERT_ENDPOINT

        return creds
    }

    /**
     * Create and return the MediaConvert client. If one does not exist, create it.
     */
    def createMediaConvertClient() {
        if (this.mediaConvertClient == null) {
            def creds = this.lookupAwsMediaCredentials()
            AwsCredentialsProvider credProvider

            if (creds.apiKey && creds.apiSecret) {
                AwsBasicCredentials awsCreds = AwsBasicCredentials.create(creds.apiKey, creds.apiSecret)
                credProvider = StaticCredentialsProvider.create(awsCreds)
            } else {
                credProvider = DefaultCredentialsProvider.create()
            }

            this.mediaConvertClient = MediaConvertClient.builder()
                    .endpointOverride(URI.create(creds.endpoint))
                    .region(Region.of(creds.region))
                    .credentialsProvider(credProvider)
                    .build()
        }

        return this.mediaConvertClient
    }

    /**
     * Create a clip of a video
     * @param videoPath the path to the video in S3
     * @param startTime the start time of the clip
     * @param endTime the end time of the clip
     * @return the job ID of the clip creation
     */
    def createClip(String videoPath, double startTime, double endTime) {
        this.createMediaConvertClient()
        def creds = this.lookupAwsMediaCredentials()
        def inputPrefix = creds.inputPrefix
        def outputPrefix = creds.outputPrefix
        def s3Bucket = creds.s3Bucket
        def mediaConvertRoleArn = creds.roleArn

        def inputS3Key = inputPrefix + videoPath
        def outputS3Key = outputPrefix + videoPath;

        CreateJobRequest jobRequest = CreateJobRequest.builder()
                .role(mediaConvertRoleArn)
                .settings(JobSettings.builder()
                        .inputs(Input.builder()
                                .fileInput("s3://" + s3Bucket + "/" + inputS3Key)
                                .timecodeSource(InputTimecodeSource.EMBEDDED)
                                .inputClippings(InputClipping.builder()
                                            .startTimecode(formatTimecode(startTime))
                                            .endTimecode(formatTimecode(endTime))
                                            .build())
                                .build())
                        .outputGroups(OutputGroup.builder()
                                .outputGroupSettings(OutputGroupSettings.builder()
                                        .type(OutputGroupType.FILE_GROUP_SETTINGS)
                                        .fileGroupSettings(FileGroupSettings.builder()
                                                .destination('s3://' + s3Bucket + '/' + outputS3Key)
                                                .build())
                                        .build())
                                .outputs(Output.builder()
                                        .containerSettings(ContainerSettings.builder()
                                                .container(ContainerType.MP4)
                                                .build())
                                        .videoDescription(VideoDescription.builder()
                                            .codecSettings(VideoCodecSettings.builder()
                                                .codec(VideoCodec.H_264)
                                                .h264Settings(H264Settings.builder()
                                                    .bitrate(5000000)
                                                    .rateControlMode(H264RateControlMode.CBR)
                                                    .gopSize(90.0 as Double)
                                                    .build())
                                                .build())
                                            .build())
                                        .build())
                                .build())
                        .build())
                .build()

        CreateJobResponse response = this.mediaConvertClient.createJob(jobRequest)
        return response.job().id()
    }

    def formatTimecode(double seconds) {
        int hours = (int) (seconds / 3600)
        int minutes = (int) ((seconds % 3600) / 60)
        int secs = (int) (seconds % 60)
        int frames = (int) ((seconds - (int) seconds) * 30)
        return String.format('%02d:%02d:%02d:%02d', hours, minutes, secs, frames)
    }
}