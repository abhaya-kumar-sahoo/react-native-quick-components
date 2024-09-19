/* eslint-disable react-native/no-inline-styles */
import { TextInput, View } from 'react-native';
import type { CustomTextInputProps } from '../../types/types';
import React, { Fragment, useMemo } from 'react';
import { DefaultColors } from '../../types/colors';
import { styles } from '../../styles';

export const AppTextInput: React.FC<CustomTextInputProps> = ({
  C = 'amber:100',
  BG,
  BOC,
  leftComponent,
  rightComponent,
  containerStyle,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const {
    style: containerStyleProps,
    // rest: containerRestProps,
    ...remainingContainerProps
  } = containerStyle || {};

  const colorType = C?.split(':')[0] ?? 'red';
  const colorName = C?.split(':')[1] ?? '100';
  const colorBOCType = BOC?.split(':')[0] ?? 'red';
  const colorBOCName = BOC?.split(':')[1] ?? '100';
  const colorBGType = BG?.split(':')[0] ?? 'red';
  const colorBGName = BG?.split(':')[1] ?? '100';

  const colorContainerBOCType = containerStyle?.BOC?.split(':')[0] ?? 'red';
  const colorContainerBOCName = containerStyle?.BOC?.split(':')[1] ?? '100';
  const colorContainerBGType = containerStyle?.BG?.split(':')[0] ?? 'red';
  const colorContainerBGName = containerStyle?.BG?.split(':')[1] ?? '100';
  const textStyle = useMemo(() => {
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
      ...(C
        ? {
            C: C?.includes(':')
              ? (DefaultColors as any)[colorType][colorName]
              : C,
          }
        : {}),
      ...rest,
    }).textInput;
  }, [
    BG,
    BOC,
    C,
    colorBGName,
    colorBGType,
    colorBOCName,
    colorBOCType,
    colorName,
    colorType,
    rest,
  ]);

  const containerStyles = useMemo(() => {
    return styles({
      ...(containerStyle?.BOC
        ? {
            BOC: containerStyle?.BOC?.includes(':')
              ? (DefaultColors as any)[colorContainerBOCType][
                  colorContainerBOCName
                ]
              : containerStyle?.BOC,
          }
        : {}),
      ...(containerStyle?.BG
        ? {
            BG: containerStyle?.BG?.includes(':')
              ? (DefaultColors as any)[colorContainerBGType][
                  colorContainerBGName
                ]
              : containerStyle?.BG,
          }
        : {}),

      ...containerStyle,
    }).container;
  }, [
    colorContainerBGName,
    colorContainerBGType,
    colorContainerBOCName,
    colorContainerBOCType,
    containerStyle,
  ]);

  return (
    <View
      style={[containerStyles, containerStyleProps, styles(true).rowStyle]}
      {...remainingContainerProps}
    >
      <Fragment>
        {leftComponent && (
          <View style={{ overflow: 'hidden' }}>{leftComponent}</View>
        )}
      </Fragment>
      <TextInput style={[textStyle, restStyle]} {...remainingProps} />
      <Fragment>
        {rightComponent && (
          <View style={{ overflow: 'hidden' }}>{rightComponent}</View>
        )}
      </Fragment>
    </View>
  );
};
