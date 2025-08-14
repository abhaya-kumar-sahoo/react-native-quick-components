// src/components/BoxView.tsx
import React from 'react';
import {
  Pressable,
  View,
  type PressableProps,
  type ViewProps,
} from 'react-native';
import type { StyleProps } from '../types/style.types';
import { styleMapper } from '../utility/styleMapper';

import { useAccessibility } from '../accessibility/AccessibilityProvider';

export type BoxProps = ViewProps & Omit<StyleProps, 'style'>;
export type ContainerProps = BoxProps & {
  onPress?: PressableProps['onPress'];
  activeOpacity?: number;
  disabled?: boolean;
};

const BoxView: React.FC<ContainerProps> = ({
  style,
  onPress,
  activeOpacity = 0.8,
  disabled = false,
  children,
  accessible = true,
  accessibilityRole,
  accessibilityLabel,
  accessibilityHint,
  accessibilityState,
  ...props
}) => {
  const { getAccessibleTouchTarget } = useAccessibility();

  const computedStyles = styleMapper(props);

  // Apply accessibility touch target sizing for pressable elements
  const accessibilityStyles = onPress
    ? {
        minWidth: getAccessibleTouchTarget(44).width,
        minHeight: getAccessibleTouchTarget(44).height,
      }
    : {};

  // Enhanced accessibility props
  const accessibilityProps = {
    accessible,
    accessibilityRole: accessibilityRole || (onPress ? 'button' : undefined),
    accessibilityLabel,
    accessibilityHint,
    accessibilityState: {
      disabled,
      ...accessibilityState,
    },
  };

  // If onPress is provided, use Pressable, otherwise use View
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          computedStyles,
          accessibilityStyles,
          { opacity: pressed && !disabled ? activeOpacity : 1 },
          style,
        ]}
        {...accessibilityProps}
        {...props}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View style={[computedStyles, style]} {...accessibilityProps} {...props}>
      {children}
    </View>
  );
};

export default BoxView;
