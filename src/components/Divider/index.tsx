import { View } from 'react-native';
import type { DividerProps } from '../../types/types';
import React, { useMemo } from 'react';
import { DefaultColors } from '../../types/colors';
import { styles } from '../../styles';

export const Divider: React.FC<DividerProps> = ({
  BG = 'gray:500',
  ...rest // Rest props for Text component
}) => {
  const colorBGType = BG?.split(':')[0] ?? 'red';
  const colorBGName = BG?.split(':')[1] ?? '100';
  const { ...remainingProps } = rest;
  //   const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = useWindowDimensions();

  const textStyle = useMemo(() => {
    return styles({
      ...(BG
        ? {
            BG: BG?.includes(':')
              ? (DefaultColors as any)[colorBGType][colorBGName]
              : BG,
          }
        : {}),
      ...rest,
    }).divider;
  }, [BG, colorBGName, colorBGType, rest]);

  return <View style={[textStyle]} {...remainingProps} />;
};
