import * as React from 'react';

import {
  AppButton,
  AppImage,
  AppText,
  AppTextInput,
  BoxView,
  CircleView,
  ColView,
  FlexView,
  init,
  RowView,
} from 'react-native-quick-components';
init({
  defaultBackgroundColor: 'black',
});

export default function App() {
  const [first, setFirst] = React.useState('');

  return (
    <FlexView FullColumnCenter>
      <CircleView BOC="white" BOW={4} SIZE={200} BG="teal" />

      <AppText
        numberOfLines={1}
        F_SIZE={30}
        BG="amber:500"
        C="blue:600"
        F_WEIGHT="900"
        FONT="serif"
      >
        abhaya-dev
      </AppText>
      <AppImage
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13BKV8WV4_tnm5OWK4RV-G9O5tzpfzGezdw&usqp=CAU',
        }}
        SIZE={100}
        resizeMode="cover"
        BOR={60}
        BOW={2}
        BOC="blue:200"
      />
      <AppButton
        BG="red"
        title="Press me"
        PX={19}
        BOC="white"
        BOW={2}
        center
        C="teal:100"
        onPress={() => {}}
      />
      <AppTextInput
        BOR={10}
        BOW={4}
        value={first}
        onChangeText={setFirst}
        BOC="white"
        W={250}
        PX={10}
        H={40}
        BG="cyan:400"
      />
      <RowView BG="cyan:800" rowGap={20} colGap={20}>
        <BoxView BG="red" W={100}>
          <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
            Row 1
          </AppText>
        </BoxView>
        <BoxView>
          <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
            Row 2
          </AppText>
        </BoxView>
        <BoxView>
          <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
            Row 3
          </AppText>
        </BoxView>
      </RowView>
      <ColView>
        <BoxView>
          <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
            Row 1 ff
          </AppText>
        </BoxView>
        <BoxView>
          <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
            Row 2 ewrfer
          </AppText>
        </BoxView>
        <BoxView>
          <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
            Row 3 erver
          </AppText>
        </BoxView>
      </ColView>
    </FlexView>
  );
}
