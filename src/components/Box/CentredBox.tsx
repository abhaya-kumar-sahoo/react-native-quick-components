import { TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import type { BoxProps } from '../../types/types';
import React from 'react';

export const CentredBoxView: React.FC<BoxProps> = ({
  children,
  onPress,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const boxStyle = styles(rest).centredBox;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={!onPress}
      onPress={onPress}
      style={[boxStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
