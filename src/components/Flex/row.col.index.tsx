import { TouchableOpacity } from 'react-native';
import type { RowViewProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const RowView: React.FC<RowViewProps> = ({
  children,
  onPress,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;

  const textStyle = styles(rest).row;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={!onPress}
      onPress={onPress}
      style={[textStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};

export const ColView: React.FC<RowViewProps> = ({
  children,
  onPress,
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;

  const textStyle = styles(rest).column;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={!onPress}
      onPress={onPress}
      style={[textStyle, restStyle]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
