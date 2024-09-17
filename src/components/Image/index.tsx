import { Image } from 'react-native';
import type { CustomImageProps } from '../../types/types';
import React from 'react';
import { applyCommonStyles } from '../../utils/style.utils';

export const AppImage: React.FC<CustomImageProps> = ({
  source,
  resizeMode = 'contain',
  ...rest // Rest props for Image component
}) => {
  return (
    <Image
      source={source}
      resizeMode={resizeMode}
      style={[applyCommonStyles(rest)]}
      {...rest}
    />
  );
};
