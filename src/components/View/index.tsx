import { TouchableOpacity } from 'react-native';
import type { CustomViewProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const AppView: React.FC<CustomViewProps> = ({
  children,
  onPress,
  ...rest // Rest props for Text component
}) => {
  const { style: restStyle, ...remainingProps } = rest;

  const textStyle = styles(rest).view;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={onPress !== undefined ? false : true}
      style={[textStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
