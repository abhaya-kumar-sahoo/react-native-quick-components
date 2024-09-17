import { TouchableOpacity } from 'react-native';
import type { CustomViewProps } from '../../types/types';
import { applyCommonStyles } from '../../utils/style.utils';
import React from 'react';

export const AppView: React.FC<CustomViewProps> = ({
  children,
  ...rest // Rest props for Text component
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[applyCommonStyles(rest)]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};
