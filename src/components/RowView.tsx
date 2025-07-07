// src/components/Row.tsx
import React from 'react';
import { type BoxProps } from './BoxView';
import { styleMapper } from '../utility/styleMapper';
import { View } from 'react-native';

const RowView: React.FC<BoxProps> = ({ style, testID, children, ...props }) => {
  const computedStyles = styleMapper({
    jc: 'space-between',
    ai: 'center',
    fd: 'row',
    ...props,
  });

  return (
    <View testID={testID} style={[computedStyles, style]} {...props}>
      {children}
    </View>
  );
};

export default RowView;
