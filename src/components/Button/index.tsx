import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import type { AppButtonProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';
import { AbsoluteBox } from '../Absolute';

export const AppButton: React.FC<AppButtonProps> = ({
  $title = 'Press',
  onPress,
  $textStyle = { $fs: 15.5 },
  $leftComponent,
  $rightComponent,
  $bg = 'green',
  $px = 15,
  $py = 5,
  $bor = 5,
  $loading,
  $loaderColor = 'white',
  $loaderSize = 'small',
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const { style: containerStyleProps, ...remainingTextProps } =
    $textStyle || {};

  // Include BG in the rest object before passing it to styles
  const buttonStyle = styles({ $bg, $px, $py, $bor, ...rest }).button;
  const textStyles = styles($textStyle).text;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled={!onPress && $loading}
      onPress={onPress}
      style={[
        buttonStyle,
        restStyle,
        { position: 'relative', overflow: 'hidden' },
      ]}
      {...remainingProps}
    >
      {/* Left Component */}
      {$leftComponent && (
        <View style={{ overflow: 'hidden' }}>{$leftComponent}</View>
      )}

      <Text
        style={[
          textStyles,
          containerStyleProps,
          { opacity: $loading ? 0.4 : 1 },
        ]}
        {...remainingTextProps}
      >
        {$title}
      </Text>
      {$loading && (
        <AbsoluteBox
          $b={0}
          $t={0}
          $l={0}
          $r={0}
          $z={999999}
          $overflow="hidden"
          $center
        >
          <ActivityIndicator color={$loaderColor} size={$loaderSize} />
        </AbsoluteBox>
      )}
      {/* Right Component */}
      {$rightComponent && (
        <View style={{ overflow: 'hidden' }}>{$rightComponent}</View>
      )}
    </TouchableOpacity>
  );
};
