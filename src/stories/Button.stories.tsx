// src/stories/Button.stories.tsx
import React from 'react';
import {Meta} from '@storybook/react'
import Button from '../components/Button';

export default {
    component: Button,
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/RLEekW5RcKzmNUMm6ihcDb/Material-UI-for-Figma-(and-MUI-X)-(Community)?node-id=6465-8337&m=dev',
        examples: [ButtonExample],
      },
  },
} 

export function ButtonExample() {
    return <Button>Hello</Button>
  }