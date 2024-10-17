import * as React from 'react';
import {
  AppText,
  FlexSafeView,
  defaultConfig,
} from 'react-native-quick-components';

defaultConfig({
  defaultBackgroundColor: 'black',
  defaultTextColor: 'white',
  defaultFontSize: 16,
  // defaultFontFamily: 'Arial',
});

export default function App() {
  return (
    <FlexSafeView BOW={2} BOC="green:400" center>
      <AppText>ABHAYA</AppText>
    </FlexSafeView>
  );
}
