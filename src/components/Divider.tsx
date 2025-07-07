// src/components/Divider.tsx
import React from 'react';
import Box, { type BoxProps } from './BoxView';

interface DividerProps extends BoxProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
}

const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  color = '#ccc',
  style,
  ...props
}) => {
  const dividerStyle =
    orientation === 'horizontal'
      ? { height: thickness, width: '100%' as const }
      : { width: thickness, height: '100%' as const };
  return <Box bg={color} style={[dividerStyle, style]} {...props} />;
};

export default Divider;
