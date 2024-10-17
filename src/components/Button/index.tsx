/* eslint-disable react-native/no-inline-styles */
import { Text, TouchableOpacity, View } from 'react-native';
import type { AppButtonProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const AppButton: React.FC<AppButtonProps> = ({
  title = 'Press',
  onPress,
  textStyle,
  leftComponent,
  rightComponent,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const { style: containerStyleProps, ...remainingTextProps } = textStyle || {};

  // Direct usage of styles without useMemo
  const buttonStyle = styles(rest).button;
  const textStyles = styles(textStyle).text;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={!onPress}
      onPress={onPress}
      style={[buttonStyle, restStyle]}
      {...remainingProps}
    >
      {/* Left Component */}
      {leftComponent && (
        <View style={{ overflow: 'hidden' }}>{leftComponent}</View>
      )}

      {/* Button Text */}
      <Text style={[textStyles, containerStyleProps]} {...remainingTextProps}>
        {title}
      </Text>

      {/* Right Component */}
      {rightComponent && (
        <View style={{ overflow: 'hidden' }}>{rightComponent}</View>
      )}
    </TouchableOpacity>
  );
};
