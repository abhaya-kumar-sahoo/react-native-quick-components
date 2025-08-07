// src/components/Box.tsx
import React from 'react';
import {
  Pressable,
  View,
  type PressableProps,
  type ViewProps,
} from 'react-native';
import type { StyleProps } from '../types/style.types';
import { styleMapper } from '../utility/styleMapper';

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
  ...props
}) => {
  const computedStyles = styleMapper(props);

  // If onPress is provided, use Pressable, otherwise use View
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) => [
          computedStyles,
          { opacity: pressed && !disabled ? activeOpacity : 1 },
        ]}
        {...props}
      >
        {children}
      </Pressable>
    );
  }
  return (
    <View style={[computedStyles, style]} {...props}>
      {children}
    </View>
  );
};

export default BoxView;
