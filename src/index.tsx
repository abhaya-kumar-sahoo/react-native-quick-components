import { init } from './components/config';
import { AppText } from './components/Text';
import { BoxView } from './components/Box';
import { AppImage } from './components/Image';
import { AppView } from './components/View';
import { AppButton } from './components/Button';
import { AppTextInput } from './components/TextInput';
import { CircleView } from './components/Circle';
import { ColView, RowView } from './components/Flex/row.col.index';
import { AbsoluteView } from './components/Absolute';
import { FlexView } from './components/Flex/flex.index';
import { FlexSafeView } from './components/Flex/flex.safearea.index';

// const ColorContext = createContext(null);

// const Wrapper = ({ children, C = 'amber:100' }) => {
//   const colorType = C.split(':')[0] ?? 'red';
//   // const colorName = C.split(':')[1] ?? '100';
//   return;
//   <ColorContext.Provider value={colorType}>{children}</ColorContext.Provider>;
// };

export {
  AppText,
  init,
  BoxView,
  AppImage,
  AppView,
  AppButton,
  AppTextInput,
  CircleView,
  ColView,
  RowView,
  AbsoluteView,
  FlexView,
  FlexSafeView,
};
