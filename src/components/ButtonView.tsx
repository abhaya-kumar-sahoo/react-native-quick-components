// src/components/ButtonView.tsx
import React from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { styleMapper } from '../utility/styleMapper';
import type { StyleProps } from '../types/style.types';
import {
  useAccessibility,
  useAccessibilityAnnouncement,
} from '../accessibility/AccessibilityProvider';

export type BtnProps = PressableProps &
  Omit<StyleProps, 'style'> & {
    activeOpacity?: number;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
  };

const ButtonView: React.FC<BtnProps> = ({
  children,
  style,
  activeOpacity = 0.9,
  variant = 'primary',
  size = 'md',
  disabled = false,
  accessible = true,
  accessibilityRole = 'button',
  accessibilityLabel,
  accessibilityHint,
  onPress,
  ...props
}) => {
  const { getAccessibleTouchTarget, shouldRespectReducedMotion } =
    useAccessibility();
  const { announce } = useAccessibilityAnnouncement();

  // Get variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          bg: '#f8f9fa',
          bc: '#dee2e6',
          bw: 1,
        };
      case 'outline':
        return {
          bg: '#ffffff',
          bc: '#007bff',
          bw: 1,
        };
      case 'ghost':
        return {
          bg: 'transparent',
          shadow: 'none',
        };
      default: // primary
        return {
          bg: '#007bff',
        };
    }
  };

  // Get size-specific styles
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { py: 4, px: 8 };
      case 'lg':
        return { py: 24, px: 32 };
      default: // md
        return { py: 8, px: 16 };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const computedStyles = styleMapper({
    center: true,
    // @ts-ignore
    shadow: variant === 'ghost' ? 'none' : 'medium',
    br: 'md',
    ...sizeStyles,
    ...variantStyles,
    ...props,
  });

  // Apply accessibility touch target sizing
  const accessibilityStyles = {
    ...getAccessibleTouchTarget(44),
  };

  // Handle button press with accessibility announcement
  const handlePress = (event: any) => {
    if (disabled) return;

    // Announce button press for screen readers
    if (accessibilityLabel) {
      announce(`${accessibilityLabel} pressed`, 'medium');
    }

    onPress?.(event);
  };

  // Enhanced accessibility props
  const accessibilityProps = {
    accessible,
    accessibilityRole,
    accessibilityLabel,
    accessibilityHint,
    accessibilityState: {
      disabled: disabled || false,
      ...props.accessibilityState,
    },
  };

  return (
    <Pressable
      style={({ pressed }) => {
        const resolvedStyle =
          typeof style === 'function' ? style({ pressed }) : style;

        // Respect reduced motion preference
        const pressedOpacity = shouldRespectReducedMotion()
          ? 0.95
          : activeOpacity;

        return [
          computedStyles,
          accessibilityStyles,
          resolvedStyle,
          {
            opacity: pressed && !disabled ? pressedOpacity : disabled ? 0.6 : 1,
          },
        ];
      }}
      onPress={handlePress}
      disabled={disabled}
      {...accessibilityProps}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default ButtonView;
