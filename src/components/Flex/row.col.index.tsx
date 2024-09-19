import { TouchableOpacity } from 'react-native';
import type { RowViewProps } from '../../types/types';
import React, { useMemo } from 'react';
import { styles } from '../../styles';
import { DefaultColors } from '../../types/colors';

export const RowView: React.FC<RowViewProps> = ({
  children,
  BG,
  BOC,
  onPress,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const colorType = BOC?.split(':')[0] ?? 'red';
  const colorName = BOC?.split(':')[1] ?? '100';
  const colorBGType = BG?.split(':')[0] ?? 'red';
  const colorBGName = BG?.split(':')[1] ?? '100';

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
    }).row;
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

export const ColView: React.FC<RowViewProps> = ({
  children,
  BG,
  BOC,
  onPress,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const colorType = BOC?.split(':')[0] ?? 'red';
  const colorName = BOC?.split(':')[1] ?? '100';
  const colorBGType = BG?.split(':')[0] ?? 'red';
  const colorBGName = BG?.split(':')[1] ?? '100';

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
    }).column;
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
