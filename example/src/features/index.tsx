import * as React from 'react';
import { Alert, ScrollView } from 'react-native';
import {
  AbsoluteBox,
  AppButton,
  AppImage,
  AppText,
  AppTextInput,
  AppView,
  BoxView,
  CircleView,
  ColView,
  FlexView,
  RowView,
  defaultConfig,
} from 'react-native-quick-components';

export default function Features() {
  const [first, setFirst] = React.useState('');
  React.useLayoutEffect(() => {
    defaultConfig({
      defaultBackgroundColor: 'black',
      defaultTextColor: 'white',
      defaultFontSize: 16,
    });
  }, []);
  return (
    <FlexView>
      <ScrollView>
        <AbsoluteBox
          B={0}
          R={0}
          disabled={false}
          BG="gray"
          onPress={() => {}}
          BOR={50}
          BOW={10}
          BOC="yellow:800"
        >
          <AppButton
            BG="red"
            title="Press me"
            PX={19}
            BOC="white"
            textStyle={{ PX: 10, PY: 5, F_WEIGHT: '900' }}
            BOW={2}
            C="gray:900"
            leftComponent={<AppText>FF</AppText>}
            rightComponent={<AppText>FF</AppText>}
            onPress={() => {
              Alert.alert('Press me');
            }}
          />
        </AbsoluteBox>

        <CircleView BOC="cyan:500" BOW={4} SIZE={100} BG="teal" />
        <AppView W={300} H={80} BG="red" BOC="green" BOW={10} BOR={20}>
          <AppText
            F_SIZE={20}
            C="white"
            F_WEIGHT="bold"
            BOC="teal:200"
            BOW={4}
            PX={20}
            PY={10}
          >
            Hello, World!
          </AppText>
        </AppView>
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
          textStyle={{ PX: 10, PY: 5, F_WEIGHT: '900' }}
          BOW={2}
          C="gray:900"
          leftComponent={<AppText>FF</AppText>}
          rightComponent={<AppText>FF</AppText>}
          onPress={() => {
            Alert.alert('Press me');
          }}
        />
        <AppTextInput
          BOR={40}
          value={first}
          placeholder="GVHGVH"
          onChangeText={setFirst}
          BOC="white"
          W={250}
          C="red"
          H={40}
          PX={10}
          BG="green"
        />
        <BoxView BG="emerald:500">
          <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
            Abhaya Kumar Sahoo{' '}
          </AppText>
          <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
            Abhaya Kumar
          </AppText>
        </BoxView>
        <RowView BG="cyan:800" colGap={10}>
          <BoxView BG="red">
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
        <ColView rowGap={10}>
          <BoxView>
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
        </ColView>
      </ScrollView>
    </FlexView>
  );
}
