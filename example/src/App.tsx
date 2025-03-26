import { useLayoutEffect } from 'react';
import {
  AppText,
  FlexSafeView,
  SCREEN_H,
  defaultConfig,
  AppSwitch,
} from 'react-native-quick-components';

export default function App() {
  useLayoutEffect(() => {
    defaultConfig({
      defaultBackgroundColor: 'black',
      defaultTextColor: 'white',
    });
  }, []);
  return (
    <FlexSafeView>
      <AppText $bold $c="pink:900" $fs={100}>
        {SCREEN_H}
      </AppText>
      <AppSwitch />
    </FlexSafeView>
  );
}
