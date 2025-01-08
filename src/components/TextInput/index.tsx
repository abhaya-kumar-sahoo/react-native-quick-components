/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TextInput, View } from 'react-native';
import type { CustomTextInputProps } from '../../types/types';
import { styles } from '../../styles';

export const AppTextInput: React.FC<CustomTextInputProps> = ({
  _leftComponent,
  _rightComponent,
  _styleContainer,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const { style: containerStyleProps, ...remainingContainerProps } =
    _styleContainer || {};

  // Simplifying the usage of styles
  const inputBoxStyles = styles(rest).textInput;
  const containerBoxStyles = styles(_styleContainer).container;

  return (
    <View
      style={[containerBoxStyles, containerStyleProps, styles(true).rowStyle]}
      {...remainingContainerProps}
    >
      {_leftComponent && (
        <View style={{ overflow: 'hidden' }}>{_leftComponent}</View>
      )}
      <TextInput style={[inputBoxStyles, restStyle]} {...remainingProps} />
      {_rightComponent && (
        <View style={{ overflow: 'hidden' }}>{_rightComponent}</View>
      )}
    </View>
  );
};
