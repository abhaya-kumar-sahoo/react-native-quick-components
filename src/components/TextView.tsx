// src/components/Text.tsx
import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import type { FontStyleProps } from '../types/style.types';
import { fontStyleMapper } from '../utility/styleMapper';

export type TextProps = RNTextProps & Omit<FontStyleProps, 'style'>;

const TextView: React.FC<TextProps> = ({ style, children, ...props }) => {
  const computedStyles = fontStyleMapper(props);
  return (
    <RNText style={[computedStyles, style]} {...props}>
      {children}
    </RNText>
  );
};

export default TextView;
