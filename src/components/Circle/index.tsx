import { TouchableOpacity } from 'react-native';
import type { CustomCircleProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const CircleView: React.FC<CustomCircleProps> = ({
  children,
  onPress,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  const optimizedStyle = styles(rest).circle;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={!onPress}
      style={[optimizedStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
