// src/components/Box.tsx
import React from 'react';
import { View, type ViewProps } from 'react-native';
import type { StyleProps } from '../types/style.types';
import { styleMapper } from '../utility/styleMapper';

export type BoxProps = ViewProps & Omit<StyleProps, 'style'>;

const BoxView: React.FC<BoxProps> = ({ style, children, ...props }) => {
  const computedStyles = styleMapper(props);
  return (
    <View style={[computedStyles, style]} {...props}>
      {children}
    </View>
  );
};

export default BoxView;
