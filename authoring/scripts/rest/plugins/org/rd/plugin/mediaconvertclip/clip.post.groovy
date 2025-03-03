import groovy.json.JsonSlurper
import jakarta.servlet.http.HttpServletResponse

import plugins.org.rd.plugin.mediaconvertclip.MediaConvertService

def result = [:]
def invalidParams = false
def paramsList = []
def reader = request.getReader()
def body = ''

def content = reader.readLine()
while (content != null) {
    body += content
    content = reader.readLine()
}

if (!body) {
    response.setStatus(HttpServletResponse.SC_BAD_REQUEST)
    result.message = 'Body is empty.'
    return result
}
def postParams = new JsonSlurper().parseText(body)

if (!postParams) {
    response.setStatus(HttpServletResponse.SC_BAD_REQUEST)
    result.message = 'Body is empty.'
    return result
}

def siteId = params.siteId
def videoPath = postParams.videoPath
def startTime = postParams.startTime
def endTime = postParams.endTime

if (!siteId) {
    invalidParams = true
    paramsList += 'siteId'
}

if (!videoPath) {
    invalidParams = true
    paramsList += 'videoPath'
}

if (!startTime) {
    invalidParams = true
    paramsList += 'startTime'
}

if (!endTime) {
    invalidParams = true
    paramsList += 'endTime'
}

if (invalidParams) {
    response.setStatus(HttpServletResponse.SC_BAD_REQUEST)
    result.message = 'Invalid parameter(s): ' + paramsList
    return result
}

def mediaConvertService = new MediaConvertService(pluginConfig)

return mediaConvertService.createClip(videoPath, startTime.toDouble(), endTime.toDouble())