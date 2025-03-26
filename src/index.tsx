// Components
import { AppText } from './components/Text';
import { BoxView } from './components/Box';
import { AppImage } from './components/Image';
import { AppView } from './components/View';
import { AppButton } from './components/Button';
// import { AppTextInput } from './components/TextInput';
import { CircleView } from './components/Circle';
import { ColView, RowView } from './components/Flex/row.col.index';
import { AbsoluteBox } from './components/Absolute';
import { FlexView } from './components/Flex/flex.index';
import { FlexSafeView } from './components/Flex/flex.safearea.index';
import { Divider } from './components/Divider';
// import TextInputBox from './components/TextInput/PasswordInput';
import { VertSpace, HorizSpace } from './utils';
import { CentreView } from './components/Box/CentreView';
// Config
import { defaultConfig } from './config';
// import AppModal from './components/Modals/index';
import { fontSizePct, fontSizeScreenHeight } from './utils/responsive_fontsize';
import { isIphoneX } from './utils/isIphoneX';
import { AppSwitch } from './Animated/Switch/CustomSwitch';
import {
  EyeIcon,
  CloseIcon,
  EmailIcon,
  EyeClosedIcon,
  PasswordIcon,
  PhoneIcon,
} from './assets/icons/icons';
// Platform Utilities
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

// Size Utilities
import {
  scale,
  moderateScale,
  moderateVerticalScale,
  verticalScale,
} from './utils/size';

// Export Size Icons
export {
  EyeIcon,
  CloseIcon,
  EmailIcon,
  EyeClosedIcon,
  PasswordIcon,
  PhoneIcon,
};

// Export Components
export {
  AppText,
  BoxView,
  AppImage,
  AppView,
  AppButton,
  // // AppTextInput,
  CircleView,
  ColView,
  RowView,
  AbsoluteBox,
  FlexView,
  FlexSafeView,
  Divider,
  // TextInputBox,
  VertSpace,
  HorizSpace,
  // AppModal,
  CentreView,
  AppSwitch,
};

// // Export Config
export { defaultConfig };

// Export Platform Utilities
export {
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
  isIphoneX,
};

// Export Size Utilities
export {
  scale,
  moderateScale,
  moderateVerticalScale,
  verticalScale,
  fontSizePct,
  fontSizeScreenHeight,
};
