import { TouchableOpacity } from 'react-native';
import type { AbsoluteViewProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const AbsoluteBox: React.FC<AbsoluteViewProps> = ({
  children,
  onPress,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;

  const optimizedStyle = styles(rest).absolute;
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      activeOpacity={0.6}
      style={[restStyle, optimizedStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
