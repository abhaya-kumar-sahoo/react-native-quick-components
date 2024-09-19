import { TouchableOpacity } from 'react-native';
import type { CustomCircleProps } from '../../types/types';
import React, { useMemo } from 'react';
import { styles } from '../../styles';
import { DefaultColors } from '../../types/colors';

export const CircleView: React.FC<CustomCircleProps> = ({
  children,
  BG,
  BOC,
  onPress,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const colorType = BG?.split(':')[0] ?? 'red';
  const colorName = BG?.split(':')[1] ?? '100';
  const colorBOCType = BOC?.split(':')[0] ?? 'red';
  const colorBOCName = BOC?.split(':')[1] ?? '100';
  const optimizedStyle = useMemo(() => {
    return styles({
      ...(BG
        ? {
            BG: BG?.includes(':')
              ? (DefaultColors as any)[colorType][colorName]
              : BG,
          }
        : {}),
      ...(BOC
        ? {
            BOC: BOC?.includes(':')
              ? (DefaultColors as any)[colorBOCType][colorBOCName]
              : BOC,
          }
        : {}),
      ...rest,
    }).circle;
  }, [BG, BOC, colorBOCName, colorBOCType, colorName, colorType, rest]);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={onPress !== undefined ? false : true}
      style={[optimizedStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
