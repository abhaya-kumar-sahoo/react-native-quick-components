import { TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import type { BoxProps } from '../../types/types';
import React, { useMemo } from 'react';
import { DefaultColors } from '../../types/colors';

export const BoxView: React.FC<BoxProps> = ({ children, BG, ...rest }) => {
  const { style: restStyle, ...remainingProps } = rest;
  const colorType = BG?.split(':')[0] ?? 'red';
  const colorName = BG?.split(':')[1] ?? '100';

  const optimizedStyle = useMemo(() => {
    return styles({
      ...(BG
        ? {
            BG: BG?.includes(':')
              ? (DefaultColors as any)[colorType][colorName]
              : BG,
          }
        : {}),
      ...rest,
    }).box;
  }, [BG, colorName, colorType, rest]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[optimizedStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
