import * as React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import {
  Dialog,
  DialogTitle
} from '@mui/material'

export interface ExampleComponentProps {
  text: string
}

const ClipDialog = ({}: ExampleComponentProps) => {
  const [open, setOpen] = React.useState(false)

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 40,
      label: '40',
    },
    {
      value: 60,
      label: '60',
    },
    {
      value: 80,
      label: '80',
    },
    {
      value: 100,
      label: '100',
    },
  ];
  
    function valuetext(value: number) {
      return `${value}`;
    }
    
      const [value, setValue] = React.useState<number[]>([20, 37]);
    
      const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
      };
  
      
  return (
    <React.Fragment>

        <Box sx={{ width: 300 }}>

          <video controls style={{ 'margin':'5px', 'width':'1521px'}} >
            <source src="/shared-assets/videos/flower.webm" type="video/webm" />
            <source src="/shared-assets/videos/flower.mp4" type="video/mp4" />
          </video>

          <Slider
            getAriaLabel={() => 'Temperature range'}
            value={value}
            marks={marks}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            style={{ 'margin':'5px', 'width':'1521px'}}
          />
          
          </Box> 

    </React.Fragment>
  )
}

export default ClipDialog