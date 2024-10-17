import { Text } from 'react-native';
import type { CustomTextProps } from '../../types/types';
import React from 'react';
import { styles } from '../../styles';

export const AppText: React.FC<CustomTextProps> = ({
  children,
  ...rest // Rest props for Text component
}) => {
  const { style: restStyle, ...remainingProps } = rest;

  const textStyle = styles(rest).text;

  return (
    <Text style={[textStyle, restStyle]} {...remainingProps}>
      {children}
    </Text>
  );
};
