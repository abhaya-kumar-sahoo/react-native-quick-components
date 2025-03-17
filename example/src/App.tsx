import * as React from 'react';
import { StatusBar } from 'react-native';
import {
  AppText,
  BoxView,
  ColView,
  Divider,
  FlexSafeView,
  AbsoluteBox,
  AppButton,
  CircleView,
  RowView,
  AppView,
  HorizSpace,
  VertSpace,
  defaultConfig,
  CentreView,
} from 'react-native-quick-components';

export default function App() {
  React.useLayoutEffect(() => {
    defaultConfig({
      defaultBackgroundColor: 'black',
      defaultTextColor: 'white',
      defaultFontSize: 16,
      enableResponsive: true,
    });
  }, []);

  return (
    <FlexSafeView $bg="black" $p={20} $bow={2} $boc="green:400">
      <StatusBar barStyle={'light-content'} />
      <CentreView
        $w={100}
        $h={100}
        $bor={20}
        $boc="gray:50"
        $m={30}
        $bow={2}
        $sc="green:900"
        $el={10}
        $overflow="hidden"
        $sop={1}
        $sr={20}
        $sof={{ width: -5, height: 1 }}
        $bg="green:200"
        $p={10}
      >
        <AppText $bold $c="orange:600" $lh={0} $fs={'lg'} $ta="justify">
          AB
        </AppText>
        <CircleView $size={160} $bow={2} $boc="gray:100" $bg="green" />
      </CentreView>
      <BoxView $bg="amber:600" $size={100} $center $bor={10}>
        <AppText>A</AppText>
      </BoxView>
      <AbsoluteBox $b={0} $bg="pink:500">
        <AppView>
          <AppText>Absolute</AppText>
        </AppView>
      </AbsoluteBox>

      <Divider $c="lime:800" $h={1} $w={100} $bor={10} />
      <RowView $fe>
        <AppText $c="amber:100">ABHAYA</AppText>
        <HorizSpace size={20} />
        <AppText>ABHAYA</AppText>
        <BoxView />
      </RowView>
      <RowView $spe $bg="red">
        <AppText>ABHAYA</AppText>
        <AppText>ABHAYA</AppText>
      </RowView>
      <ColView $h={'10%'} $spa $bg="cyan:600">
        <AppText>ABHAYA</AppText>
        <VertSpace />
        <AppText>ABHAYA</AppText>
      </ColView>
      <CircleView $size={80} $bow={1} $bg="red" $boc="teal:500" />
      <AppButton />
    </FlexSafeView>
  );
}
