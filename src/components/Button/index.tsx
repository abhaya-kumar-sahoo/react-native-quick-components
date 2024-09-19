import { Text, TouchableOpacity, View } from 'react-native';
import type { AppButtonProps } from '../../types/types';
import React, { Fragment, useMemo } from 'react';
import { DefaultColors } from '../../types/colors';
import { styles } from '../../styles';

export const AppButton: React.FC<AppButtonProps> = ({
  title = 'Press',
  C = 'white',
  BG = 'red',
  BOC,
  textStyle,
  leftComponent,
  rightComponent,
  BOR = 100,
  PX = 100,
  PY = 3,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const { style: containerStyleProps, ...remainingTextProps } = textStyle || {};

  const colorType = C?.split(':')[0] ?? 'red';
  const colorName = C?.split(':')[1] ?? '100';
  const colorBOCType = BOC?.split(':')[0] ?? 'red';
  const colorBOCName = BOC?.split(':')[1] ?? '100';
  const colorBGType = BG?.split(':')[0] ?? 'red';
  const colorBGName = BG?.split(':')[1] ?? '100';

  const buttonStyle = useMemo(() => {
    return styles({
      ...(BOC
        ? {
            BOC: BOC?.includes(':')
              ? (DefaultColors as any)[colorBOCType][colorBOCName]
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
      ...(BOR !== undefined
        ? {
            BOR,
          }
        : {}),
      ...(PX !== undefined
        ? {
            PX,
          }
        : {}),
      ...(PY !== undefined
        ? {
            PY,
          }
        : {}),

      ...rest,
    }).button;
  }, [
    BG,
    BOC,
    BOR,
    PX,
    PY,
    colorBGName,
    colorBGType,
    colorBOCName,
    colorBOCType,
    rest,
  ]);

  const textStyles = useMemo(() => {
    return styles({
      ...(C
        ? {
            C: C?.includes(':')
              ? (DefaultColors as any)[colorType][colorName]
              : C,
          }
        : {}),

      ...textStyle,
    }).text;
  }, [C, colorName, colorType, textStyle]);

  return (
    <TouchableOpacity
      {...remainingProps}
      activeOpacity={0.6}
      style={[buttonStyle, restStyle]}
      {...remainingProps}
    >
      <Fragment>
        {leftComponent && (
          <View style={{ overflow: 'hidden' }}>{leftComponent}</View>
        )}
      </Fragment>
      <Text style={[textStyles, containerStyleProps]} {...remainingTextProps}>
        {title}
      </Text>
      <Fragment>
        {rightComponent && (
          <View style={{ overflow: 'hidden' }}>{rightComponent}</View>
        )}
      </Fragment>
    </TouchableOpacity>
  );
};
