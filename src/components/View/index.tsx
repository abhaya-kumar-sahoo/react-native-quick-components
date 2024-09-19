import { TouchableOpacity } from 'react-native';
import type { CustomViewProps } from '../../types/types';
import React, { useMemo } from 'react';
import { DefaultColors } from '../../types/colors';
import { styles } from '../../styles';

export const AppView: React.FC<CustomViewProps> = ({
  children,
  BG,
  BOC,
  onPress,
  ...rest // Rest props for Text component
}) => {
  const colorType = BOC?.split(':')[0] ?? 'red';
  const colorName = BOC?.split(':')[1] ?? '100';
  const colorBGType = BG?.split(':')[0] ?? 'red';
  const colorBGName = BG?.split(':')[1] ?? '100';
  const { style: restStyle, ...remainingProps } = rest;

  const textStyle = useMemo(() => {
    return styles({
      ...(BOC
        ? {
            BOC: BOC?.includes(':')
              ? (DefaultColors as any)[colorType][colorName]
              : BOC,
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
    }).view;
  }, [BG, BOC, colorBGName, colorBGType, colorName, colorType, rest]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={onPress !== undefined ? false : true}
      style={[textStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
