import { TouchableOpacity } from 'react-native';
import type { CustomCircleProps } from '../../types/types';
import React, { useMemo } from 'react';
import { styles } from '../../styles';
import { DefaultColors } from '../../types/colors';

export const CircleView: React.FC<CustomCircleProps> = ({
  children,
  BG,
  ...rest // Rest props for Image component
}) => {
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
    }).circle;
  }, [BG, colorName, colorType, rest]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[optimizedStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
