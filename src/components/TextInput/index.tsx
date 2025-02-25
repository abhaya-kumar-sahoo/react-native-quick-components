/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TextInput, View } from 'react-native';
import type { CustomTextInputProps } from '../../types/types';
import { styles } from '../../styles';

export const AppTextInput: React.FC<CustomTextInputProps> = ({
  $leftComponent,
  $rightComponent,
  $styleContainer,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const { style: containerStyleProps, ...remainingContainerProps } =
    $styleContainer || {};

  // Simplifying the usage of styles
  const inputBoxStyles = styles(rest).textInput;
  const containerBoxStyles = styles($styleContainer).container;

  return (
    <View
      style={[containerBoxStyles, containerStyleProps, styles(true).rowStyle]}
      {...remainingContainerProps}
    >
      {$leftComponent && (
        <View style={{ overflow: 'hidden' }}>{$leftComponent}</View>
      )}
      <TextInput style={[inputBoxStyles, restStyle]} {...remainingProps} />
      {$rightComponent && (
        <View style={{ overflow: 'hidden' }}>{$rightComponent}</View>
      )}
    </View>
  );
};
