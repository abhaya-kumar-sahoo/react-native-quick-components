import { Text } from 'react-native';
import type { CustomTextProps } from '../../types/types';
import React, { useMemo } from 'react';
import { DefaultColors } from '../../types/colors';
import { styles } from '../../styles';

export const AppText: React.FC<CustomTextProps> = ({
  children,
  C = 'amber:100',
  BG,
  ...rest // Rest props for Text component
}) => {
  const colorType = C?.split(':')[0] ?? 'red';
  const colorName = C?.split(':')[1] ?? '100';
  const colorBGType = BG?.split(':')[0] ?? 'red';
  const colorBGName = BG?.split(':')[1] ?? '100';
  const { style: restStyle, ...remainingProps } = rest;

  const textStyle = useMemo(() => {
    return styles({
      ...(C
        ? {
            C: C?.includes(':')
              ? (DefaultColors as any)[colorType][colorName]
              : C,
          }
        : {}),
      ...(BG
        ? {
            BG: BG?.includes(':')
              ? (DefaultColors as any)[colorBGType][colorBGName]
              : BG,
          }
        : {}),

      ...rest,
    }).text;
  }, [BG, C, colorBGName, colorBGType, colorName, colorType, rest]);

  return (
    <Text style={[textStyle, restStyle]} {...remainingProps}>
      {children}
    </Text>
  );
};
