// src/components/TextView.tsx
import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import type { FontStyleProps } from '../types/style.types';
import { fontStyleMapper } from '../utility/styleMapper';

import { useAccessibility } from '../accessibility/AccessibilityProvider';

export type TextProps = RNTextProps & Omit<FontStyleProps, 'style'>;

const TextView: React.FC<TextProps> = ({
  style,
  children,
  accessible = true,
  accessibilityRole = 'text',
  allowFontScaling = true,
  maxFontSizeMultiplier,
  adjustsFontSizeToFit,
  minimumFontScale,
  ...props
}) => {
  const { getScaledSize, isLargeTextEnabled } = useAccessibility();

  const computedStyles = fontStyleMapper(props);

  // Apply font scaling for accessibility
  const accessibilityStyles = {
    fontSize:
      computedStyles.fontSize !== undefined
        ? getScaledSize(computedStyles.fontSize as number)
        : undefined,
  };

  // Enhanced accessibility props
  const accessibilityProps = {
    accessible,
    accessibilityRole,
    allowFontScaling,
    maxFontSizeMultiplier:
      maxFontSizeMultiplier || (isLargeTextEnabled ? 2.0 : 1.3),
    adjustsFontSizeToFit,
    minimumFontScale,
  };

  return (
    <RNText
      style={[computedStyles, accessibilityStyles, style]}
      {...accessibilityProps}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default TextView;
