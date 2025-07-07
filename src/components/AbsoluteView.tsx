import React from 'react';
import { View } from 'react-native';
import { styleMapper } from '../utility/styleMapper';
import type { BoxProps } from './BoxView';

const AbsoluteView: React.FC<BoxProps> = ({ children, style, ...props }) => {
  const computedStyles = styleMapper({
    position: 'absolute',
    t: 10,
    l: 10,
    z: 999,
    ...props,
  });

  return (
    <View style={[computedStyles, style]} {...props}>
      {children}
    </View>
  );
};

export default AbsoluteView;
