import * as React from 'react';
import {
  AppText,
  AppTextInput,
  ColView,
  FlexSafeView,
  RowView,
  defaultConfig,
} from 'react-native-quick-components';

export default function App() {
  React.useLayoutEffect(() => {
    defaultConfig({
      defaultBackgroundColor: 'black',
      defaultTextColor: 'white',
      defaultFontSize: 16,
      defaultAppSize: 'Nokia G60',
    });
  }, []);
  return (
    <FlexSafeView BG="zinc:700" BOW={2} BOC="green:400">
      <RowView>
        <AppText F_SIZE={90} C={'red'}>
          ABHAYA
        </AppText>
      </RowView>
      <ColView>
        <AppText>ABHAYA</AppText>
      </ColView>
      <AppTextInput BG="lime:500" W={100} />
    </FlexSafeView>
  );
}
