import * as React from 'react';

import {
  AppText,
  CircleView,
  FlexView,
  init,
} from 'react-native-quick-components';
init({
  defaultFontSize: 50,
  // defaultBackgroundColor: 'black',
  defaultTextColor: 'green',
});

export default function App() {
  return (
    <FlexView FullColumnCenter>
      <CircleView SIZE={200} BG="red" />
      <AppText>Abhaya</AppText>
    </FlexView>
  );
}
