import * as React from 'react';
import { StatusBar } from 'react-native';
import {
  AppText,
  BoxView,
  ColView,
  Divider,
  FlexSafeView,
  TextInputBox,
  AbsoluteBox,
  AppButton,
  CircleView,
  RowView,
  AppView,
  HorizSpace,
  VertSpace,
  defaultConfig,
} from 'react-native-quick-components';

export default function App() {
  React.useLayoutEffect(() => {
    defaultConfig({
      // defaultBackgroundColor: 'black',
      defaultTextColor: 'black',
      defaultFontSize: 16,
      // enableResponsive: false,
    });
  }, []);

  return (
    <FlexSafeView _p={20} _bow={2} _boc="green:400">
      <StatusBar barStyle={'light-content'} />
      {/* <AppImage  /> */}
      <BoxView
        _w={100}
        _h={100}
        _bor={20}
        _m={30}
        _shadowColor="green:900"
        _center
        _elev={10}
        _shadowOpacity={1}
        _shadowRadius={20}
        _shadowOffset={{ width: -5, height: 1 }}
        _bg="green:200"
      >
        <AppText
          _bold
          _c="orange:800"
          _fontFamily="serif"
          _lineHeight={30}
          _fontSize={30}
          _textAline="right"
        >
          AB
        </AppText>
        <CircleView _size={160} _bg="green" />
      </BoxView>
      <AbsoluteBox _b={0} _bg="pink:500">
        <AppView>
          <AppText>Absolute</AppText>
        </AppView>
      </AbsoluteBox>
      <TextInputBox
        placeholder="Enter Password"
        secureTextEntry={true}
        _inputStyle={{ color: 'black' }}
        _containerStyles={{ marginVertical: 10 }}
        onChangeText={() => {}}
      />

      <Divider _c="lime:800" _h={1} _w={100} _bor={10} />
      <RowView _jc="flex-start">
        <AppText>ABHAYA</AppText>
        <HorizSpace size={20} />
        <AppText>ABHAYA</AppText>
        <BoxView />
      </RowView>

      <ColView _jc="space-between">
        <AppText>ABHAYA</AppText>
        <VertSpace />
        <AppText>ABHAYA</AppText>
      </ColView>
      <CircleView _size={80} _bow={1} _bg="red" />
      <AppButton />
    </FlexSafeView>
  );
}
