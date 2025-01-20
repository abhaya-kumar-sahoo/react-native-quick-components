/* eslint-disable react-native/no-inline-styles */
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import type { AppButtonProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';
import { AbsoluteBox } from '../Absolute';

export const AppButton: React.FC<AppButtonProps> = ({
  _title = 'Press',
  onPress,
  _textStyle,
  _leftComponent,
  _rightComponent,
  _bg = 'green',
  _px = 15,
  _py = 5,
  _bor = 5,
  _loading,
  _loaderColor = 'white',
  _loaderSize = 'small',
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const { style: containerStyleProps, ...remainingTextProps } =
    _textStyle || {};

  // Include BG in the rest object before passing it to styles
  const buttonStyle = styles({ _bg, _px, _py, _bor, ...rest }).button;
  const textStyles = styles(_textStyle).text;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={!onPress && _loading}
      onPress={onPress}
      style={[
        buttonStyle,
        restStyle,
        { position: 'relative', overflow: 'hidden' },
      ]}
      {...remainingProps}
    >
      {/* Left Component */}
      {_leftComponent && (
        <View style={{ overflow: 'hidden' }}>{_leftComponent}</View>
      )}

      <Text
        style={[
          textStyles,
          containerStyleProps,
          { opacity: _loading ? 0.4 : 1 },
        ]}
        {...remainingTextProps}
      >
        {_title}
      </Text>
      {_loading && (
        <AbsoluteBox
          _b={0}
          _t={0}
          _l={0}
          _r={0}
          _zIndex={999999}
          _overflow="hidden"
          _center
        >
          <ActivityIndicator color={_loaderColor} size={_loaderSize} />
        </AbsoluteBox>
      )}
      {/* Right Component */}
      {_rightComponent && (
        <View style={{ overflow: 'hidden' }}>{_rightComponent}</View>
      )}
    </TouchableOpacity>
  );
};
