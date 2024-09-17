import { Text, TouchableOpacity } from 'react-native';
import type { AppButtonProps } from '../../types/types';
import React from 'react';
import { DefaultColors } from '../../types/colors';
import { config } from '../config';

export const AppButton: React.FC<AppButtonProps> = ({
  title = 'Press',
  C = 'white',
  BG = 'red',
  PX = 20,
  PY = 3,
  MX = undefined,
  MY = undefined,
  F_SIZE = 20,
  W,
  H,
  // border
  BOR = 40,
  BOW = undefined,
  BOC = undefined,
  FONT,
  F_WEIGHT,
  center = false,

  ...props
}) => {
  const colorType = C?.split(':')[0] ?? 'red';
  const colorName = C?.split(':')[1] ?? '100';

  // const color = (DefaultColors as any)[colorType][colorName];

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      style={[
        BG
          ? {
              backgroundColor: BG.includes(':')
                ? (DefaultColors as any)[colorType][colorName]
                : BG,
            }
          : {},

        BOR ? { borderRadius: BOR } : {},
        {
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: center ? 'center' : 'baseline',
        },
        // size
        W ? { width: W } : {},
        H ? { height: H } : {},
        //border
        BOR ? { borderRadius: BOR } : {},
        BOC
          ? {
              borderColor: BG.includes(':')
                ? (DefaultColors as any)[colorType][colorName]
                : BG,
            }
          : {},
        BOW ? { borderWidth: BOW } : {},
        // margin

        MX ? { marginHorizontal: MX } : {},
        MY ? { margin: MY } : {},

        // padding

        PX ? { paddingHorizontal: PX } : {},
        PY ? { paddingBottom: PY + 3, paddingTop: PY } : {},
      ]}
    >
      <Text
        style={[
          F_SIZE ? { fontSize: F_SIZE } : {},
          C
            ? {
                color: C.includes(':')
                  ? (DefaultColors as any)[colorType][colorName]
                  : C,
              }
            : { color: config.defaultTextColor },
          FONT ? { fontFamily: FONT } : {},
          F_WEIGHT ? { fontWeight: F_WEIGHT } : {},
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
