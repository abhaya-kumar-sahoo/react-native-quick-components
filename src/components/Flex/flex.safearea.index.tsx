import { SafeAreaView } from 'react-native';
import type { FlexViewProps } from '../../types/types';
import { applyCommonStyles } from '../../utils/style.utils';
import React from 'react';

export const FlexSafeView: React.FC<FlexViewProps> = ({
  children,
  ...props
}) => {
  return (
    <SafeAreaView style={[{ flex: 1 }, applyCommonStyles(props)]} {...props}>
      {children}
    </SafeAreaView>
  );
};
