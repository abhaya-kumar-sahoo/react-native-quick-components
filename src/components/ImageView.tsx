// src/components/Row.tsx
import React from 'react';
import { imageStyleMapper } from '../utility/styleMapper';
import { Image, type ImageProps } from 'react-native';
import type { ImageStyleProps } from '../types/style.types';
export type ImgProps = ImageProps & Omit<ImageStyleProps, 'style'>;

const ImageView: React.FC<ImgProps> = ({ style, testID, ...props }) => {
  const computedStyles = imageStyleMapper({
    ai: 'center',
    ...props,
  });

  return (
    <Image testID={testID} style={[computedStyles, style ?? {}]} {...props} />
  );
};

export default ImageView;
