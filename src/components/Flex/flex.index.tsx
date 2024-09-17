import { View } from 'react-native';
import { applyCommonStyles } from '../../utils/style.utils';
import type { FlexViewProps } from '../../types/types';
import React from 'react';

export const FlexView: React.FC<FlexViewProps> = ({ children, ...props }) => {
  return (
    <View style={[{ flex: 1 }, applyCommonStyles(props)]} {...props}>
      {children}
    </View>
  );
};
