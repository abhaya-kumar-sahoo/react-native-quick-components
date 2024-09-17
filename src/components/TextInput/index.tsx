import { TextInput } from 'react-native';
import type { CustomTextInputProps } from '../../types/types';
import { applyTextStyles } from '../../utils/style.utils';
import React from 'react';
import { DefaultColors } from '../../types/colors';
import { config } from '../config';

export const AppTextInput: React.FC<CustomTextInputProps> = ({
  F_SIZE,
  FONT,
  C = 'amber:100',
  LINE_H,
  F_WEIGHT,
  N_LINE,
  ...rest
}) => {
  const colorType = C.split(':')[0] ?? 'red';
  const colorName = C.split(':')[1] ?? '100';

  return (
    <TextInput
      numberOfLines={N_LINE}
      style={[
        F_SIZE ? { fontSize: F_SIZE } : { fontSize: config.defaultFontSize },
        C
          ? {
              color: C.includes(':')
                ? (DefaultColors as any)[colorType][colorName]
                : C,
            }
          : { color: config.defaultTextColor },
        FONT ? { fontFamily: FONT } : {},
        LINE_H ? { lineHeight: LINE_H } : {},
        F_WEIGHT ? { fontWeight: F_WEIGHT } : {},
        applyTextStyles(rest),
      ]}
      {...rest}
    />
  );
};
