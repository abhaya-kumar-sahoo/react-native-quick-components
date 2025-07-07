// src/components/FlexView.tsx
import React from 'react';
import Box, { type BoxProps } from './BoxView';
import { styleMapper } from '../utility/styleMapper';

const FlexView: React.FC<BoxProps> = ({ children, style, ...props }) => {
  const computedStyles = styleMapper({
    f: 1,
    px: 10,
    ...props,
  });
  return (
    <Box style={[computedStyles, style]} {...props}>
      {children}
    </Box>
  );
};

export default FlexView;
