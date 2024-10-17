import { View } from 'react-native';
import type { DividerProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const Divider: React.FC<DividerProps> = ({ ...rest }) => {
  const { ...remainingProps } = rest;

  const textStyle = styles(rest).divider;

  return <View style={[textStyle]} {...remainingProps} />;
};
