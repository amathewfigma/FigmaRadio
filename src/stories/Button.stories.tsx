// src/stories/Button.stories.tsx
import React from 'react';
import {Meta} from '@storybook/react'
import Button from '../components/Button';
import { Label } from '@mui/icons-material';


export default {
    component: Button,
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/NUjy4PvikhRDfeKSSEZp6C/MUI-Code-Connect-w%2F-React-%26-Storybook?node-id=6465-8337&m=dev',
        examples: [ButtonExample],
      },
    
    
  },

} 



export function ButtonExample() {
    return <Button onClick ={onClick}></Button>;
       
  }

  