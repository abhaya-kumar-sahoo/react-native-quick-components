// src/components/Spacer.tsx
import React from 'react';
import Box, { type BoxProps } from './BoxView';

const Spacer: React.FC<BoxProps> = ({ w = '100%', h = 10, ...props }) => {
  return <Box w={w} h={h} {...props} />;
};

export default Spacer;
