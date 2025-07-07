// src/components/Grid.tsx
import React from 'react';
import { Pressable, type PressableProps } from 'react-native';
import { styleMapper } from '../utility/styleMapper';
import type { StyleProps } from '../types/style.types';
export type BtnProps = PressableProps &
  Omit<StyleProps, 'style'> & {
    activeOpacity?: number;
  };

const ButtonView: React.FC<BtnProps> = ({
  children,
  style,
  activeOpacity = 0.9,

  ...props
}) => {
  const computedStyles = styleMapper({
    center: true,
    shadow: 'heavy',
    w: '100%',
    bg: '#434365',
    br: 10,
    py: 10,
    px: 10,
    ...props,
  });

  return (
    <Pressable
      style={({ pressed }) => {
        const resolvedStyle =
          typeof style === 'function' ? style({ pressed }) : style;
        return [
          computedStyles,
          resolvedStyle,
          { opacity: pressed ? activeOpacity : 1 }, // Active opacity effect
        ];
      }}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export default ButtonView;
