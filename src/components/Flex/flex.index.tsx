import { View } from 'react-native';
import type { FlexViewProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const FlexView: React.FC<FlexViewProps> = ({ children, ...rest }) => {
  const { style: restStyle, ...remainingProps } = rest;
  const textStyle = styles(rest).flex_view;
  return (
    <View style={[textStyle, restStyle]} {...remainingProps}>
      {children}
    </View>
  );
};
