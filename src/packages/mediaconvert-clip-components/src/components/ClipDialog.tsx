import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import DialogBody from '@craftercms/studio-ui/components/DialogBody';
import DialogFooter from '@craftercms/studio-ui/components/DialogFooter';
import PrimaryButton from '@craftercms/studio-ui/components/PrimaryButton';
import { showSystemNotification } from '@craftercms/studio-ui/state/actions/system';
import { useDispatch } from 'react-redux';

import { createClip } from '../utils';

export interface ClipDialogProps {
    text: string;
    selectedItems: string[];
}

const ClipDialog = (props: ClipDialogProps) => {

    const dispatch = useDispatch();

    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [value, setValue] = useState<number[]>([0, 0]);
    const [duration, setDuration] = useState(0);
    const [marks, setMarks] = useState([]);
    const videoRef = useRef(null);

    const { selectedItems } = props;
    const videoPath = selectedItems[0];

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.onloadedmetadata = () => {
                setDuration(video.duration);
                setMarks([
                    { value: 0, label: '0s' },
                    { value: `${Math.round(video.duration * 0.2)}`, label: `${Math.round(video.duration * 0.2)}s` },
                    { value: `${Math.round(video.duration * 0.4)}`, label: `${Math.round(video.duration * 0.4)}s` },
                    { value: `${Math.round(video.duration * 0.6)}`, label: `${Math.round(video.duration * 0.6)}s` },
                    { value: `${Math.round(video.duration * 0.8)}`, label: `${Math.round(video.duration * 0.8)}s` },
                    { value: video.duration, label: `${Math.round(video.duration)}s` },
                ]);
                setValue([Math.round(video.duration * 0.2), Math.round(video.duration * 0.37)]);
            }

            video.ontimeupdate = () => {
                if (video.currentTime >= value[1]) {
                    video.pause();
                }
            };

            video.onplay = () => {
                if (video.currentTime < value[0] || video.currentTime > value[1]) {
                    video.currentTime = value[0];
                }
            };
        }
    }, [value]);

    function valuetext(value: number) {
        return `${value}`;
    }

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleClip = async () => {
        setIsSubmitting(true);
        try {
            const response = await createClip(videoPath, value[0], value[1]);
            if (response) {
                dispatch(
                    showSystemNotification({
                        message: `MediaConvert job id: ${response}`
                    })
                );
            } else {
                dispatch(
                    showSystemNotification({
                        message: 'Clip failed'
                    })
                );
            }
        } catch (error) {
            console.error(error);
            dispatch(
                showSystemNotification({
                    message: 'Clip failed'
                })
            );
        } finally {
            setIsSubmitting(false);
        }
    };


  return (
    <React.Fragment>
        <DialogBody>
            <video ref={videoRef} controls style={{ height: '71.5vh'}}>
                <source src={`${videoPath}`} type="video/mp4" />
            </video>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                min={0}
                max={duration}
                value={value}
                marks={marks}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                style={{
                margin:'5px',
                width:'98%',
                paddingLeft: '5px',
                paddingRight: '5px'
                }}
            />
        </DialogBody>
        <DialogFooter>
            <PrimaryButton
                onClick={handleClip}
                loading={isSubmitting}
            >
                Clip Video
            </PrimaryButton>
        </DialogFooter>
    </React.Fragment>
  )
}

export default ClipDialog