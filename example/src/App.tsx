import * as React from 'react';

import {
  AppButton,
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
      <AppText C="red">Abhaya</AppText>
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
      <AppButton
        BG="green"
        title="Pressjwhrcjverjvcejvrhe"
        PX={19}
        center
        onPress={() => {}}
      />
    </FlexView>
  );
}
