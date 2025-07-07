// src/components/Grid.tsx
import React from 'react';
import { View } from 'react-native';
import { styleMapper } from '../utility/styleMapper';
import type { BoxProps } from './BoxView';

const Container: React.FC<BoxProps> = ({ children, style, ...props }) => {
  const computedStyles = styleMapper({
    fw: 'wrap',
    ...props,
  });

  return (
    <View style={[computedStyles, style]} {...props}>
      {children}
    </View>
  );
};

export default Container;
