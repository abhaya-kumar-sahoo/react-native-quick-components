// src/components/Container.tsx
import React from 'react';
import { View, Pressable, type PressableProps } from 'react-native';
import { styleMapper } from '../utility/styleMapper';
import type { BoxProps } from './BoxView';

export type ContainerProps = BoxProps & {
  onPress?: PressableProps['onPress'];
  activeOpacity?: number;
  disabled?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  onPress,
  activeOpacity = 0.8,
  disabled = false,
  ...props
}) => {
  const computedStyles = styleMapper({
    fw: 'wrap',
    ...props,
  });

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

export default Container;
