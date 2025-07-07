// src/components/CircleBox.tsx
import React, { useMemo } from 'react';
import Box, { type BoxProps } from './BoxView';
import { StyleSheet } from 'react-native';
import { styleMapper } from '../utility/styleMapper';

interface CircleBoxProps extends BoxProps {
  size?: number;
}

const CircleBox: React.FC<CircleBoxProps> = ({
  size = 50,
  style,
  children,
  ...props
}) => {
  const containerStyle = useMemo(() => getCircleStyle(size), [size]);
  const computedStyles = styleMapper(props);

  return (
    <Box style={[containerStyle.container, computedStyles, style]} {...props}>
      {children}
    </Box>
  );
};

export default CircleBox;
const getCircleStyle = (size: number) =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
