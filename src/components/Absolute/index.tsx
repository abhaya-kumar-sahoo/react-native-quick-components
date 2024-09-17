import { TouchableOpacity } from 'react-native';
import type { AbsoluteViewProps } from '../../types/types';
import { applyCommonStyles } from '../../utils/style.utils';
import React from 'react';

export const AbsoluteView: React.FC<AbsoluteViewProps> = ({
  children,
  T,
  B,
  L,
  R,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        true ? { position: 'absolute' } : {},
        T !== undefined ? { top: T } : {},
        B !== undefined ? { bottom: B } : {},
        L !== undefined ? { left: L } : {},
        R !== undefined ? { right: R } : {},
        applyCommonStyles(props),
      ]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};
