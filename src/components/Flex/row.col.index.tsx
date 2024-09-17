import { TouchableOpacity } from 'react-native';
import type { RowViewProps } from '../../types/types';
import { applyCommonStyles } from '../../utils/style.utils';
import React from 'react';
import { styles } from '../../styles';

export const RowView: React.FC<RowViewProps> = ({
  children,
  ALI = 'center',
  JC = 'space-between',
  gap = 0,
  colGap,
  rowGap,
  flexWrap = 'wrap',
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.row,
        applyCommonStyles(rest),
        restStyle,
        {
          ...(ALI !== undefined && { alignItems: ALI }),
          ...(JC !== undefined && { justifyContent: JC }),
          flexWrap, // Use flexWrap directly
          ...(gap !== undefined && { gap }), // Conditionally apply gap
          ...(rowGap !== undefined && { rowGap }), // Conditionally apply rowGap
          ...(colGap !== undefined && { columnGap: colGap }), // Conditionally apply columnGap
        },
      ]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};

export const ColView: React.FC<RowViewProps> = ({
  children,
  ALI = 'center',
  JC = 'space-between',
  gap = 0,
  colGap,
  rowGap,
  flexWrap = 'wrap',
  ...rest
}) => {
  const { style: restStyle, ...remainingProps } = rest;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.column,
        applyCommonStyles(rest),
        restStyle,
        {
          ...(ALI !== undefined && { alignItems: ALI }),
          ...(JC !== undefined && { justifyContent: JC }),
          flexWrap, // Use flexWrap directly
          ...(gap !== undefined && { gap }), // Conditionally apply gap
          ...(rowGap !== undefined && { rowGap }), // Conditionally apply rowGap
          ...(colGap !== undefined && { columnGap: colGap }), // Conditionally apply columnGap
        },
      ]}
      {...remainingProps}
    >
      {children}
    </TouchableOpacity>
  );
};
