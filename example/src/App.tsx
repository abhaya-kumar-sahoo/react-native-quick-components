import * as React from 'react';

import {
  AppImage,
  AppText,
  CircleView,
  FlexView,
  init,
} from 'react-native-quick-components';
init({
  defaultFontSize: 50,
  defaultBackgroundColor: 'black',
  defaultTextColor: 'green',
});

export default function App() {
  return (
    <FlexView FullColumnCenter>
      <CircleView SIZE={200} BG="red" />
      <AppText C="cyan">Abhaya</AppText>
      <AppImage
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_FMjpg_UX1000_.jpg',
        }}
        SIZE={100}
        resizeMode="cover"
        BOR={60}
        BOW={2}
        BOC="white"
      />
    </FlexView>
  );
}
