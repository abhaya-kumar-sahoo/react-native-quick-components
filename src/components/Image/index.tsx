import { Image } from 'react-native';
import type { CustomImageProps } from '../../types/types';
import React, { useMemo } from 'react';
import { DefaultColors } from '../../types/colors';
import { styles } from '../../styles';

export const AppImage: React.FC<CustomImageProps> = ({
  source,
  resizeMode = 'cover',
  BG,
  BOC,
  ...rest // Rest props for Image component
}) => {
  const colorType = BOC?.split(':')[0] ?? 'red';
  const colorName = BOC?.split(':')[1] ?? '100';
  const colorBGType = BG?.split(':')[0] ?? 'red';
  const colorBGName = BG?.split(':')[1] ?? '100';
  const { style: restStyle, ...remainingProps } = rest;

  const textStyle = useMemo(() => {
    return styles({
      ...(BOC
        ? {
            BOC: BOC?.includes(':')
              ? (DefaultColors as any)[colorType][colorName]
              : BOC,
          }
        : {}),
      ...(BG
        ? {
            BG: BG?.includes(':')
              ? (DefaultColors as any)[colorBGType][colorBGName]
              : BG,
          }
        : {}),
      ...rest,
    }).image;
  }, [BG, BOC, colorBGName, colorBGType, colorName, colorType, rest]);

  return (
    <Image
      source={source}
      resizeMode={resizeMode}
      style={[textStyle, restStyle]}
      {...remainingProps}
    />
  );
};
