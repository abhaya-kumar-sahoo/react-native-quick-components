import { AppText } from './components/Text';
import { BoxView } from './components/Box';
import { AppImage } from './components/Image';
import { AppView } from './components/View';
import { AppButton } from './components/Button';
import { AppTextInput } from './components/TextInput';
import { CircleView } from './components/Circle';
import { ColView, RowView } from './components/Flex/row.col.index';
import { AbsoluteBox } from './components/Absolute';
import { FlexView } from './components/Flex/flex.index';
import { FlexSafeView } from './components/Flex/flex.safearea.index';
import { defaultConfig } from './config';
import { Divider } from './components/Divider';
import {
  isIOS,
  isAndroid,
  isMacOs,
  isTv,
  isWeb,
  isWindows,
  SCREEN_H,
  SCREEN_W,
  isLandscape,
  isPortrait,
} from './utils/platform';
import {
  scale,
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from './utils/size';
export {
  AppText,
  BoxView,
  AppImage,
  AppView,
  AppButton,
  AppTextInput,
  CircleView,
  ColView,
  RowView,
  AbsoluteBox,
  FlexView,
  Divider,
  FlexSafeView,
  defaultConfig,
  isIOS,
  isAndroid,
  isMacOs,
  isTv,
  isWeb,
  isWindows,
  SCREEN_H,
  SCREEN_W,
  isLandscape,
  isPortrait,
  scale,
  moderateScale,
  moderateVerticalScale,
  verticalScale,
};
