import { Image } from 'react-native';
import type { CustomImageProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const AppImage: React.FC<CustomImageProps> = ({
  source,
  resizeMode = 'cover',
  ...rest // Rest props for Image component
}) => {
  const { style: restStyle, ...remainingProps } = rest;

  const textStyle = styles(rest).image;

  return (
    <Image
      source={source}
      resizeMode={resizeMode}
      style={[textStyle, restStyle]}
      {...remainingProps}
    />
  );
};
