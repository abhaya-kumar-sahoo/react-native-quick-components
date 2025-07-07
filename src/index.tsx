// src/index.ts
export { default as BoxView } from './components/BoxView';
export { default as FlexView } from './components/FlexView';
export { default as RowView } from './components/RowView';
export { default as ImageView } from './components/ImageView';
export { default as CircleBox } from './components/CircleBox';
export { default as Spacer } from './components/Spacer';
export { default as Divider } from './components/Divider';
export { default as CenterView } from './components/CenterView'; // Import the Card component
export { default as Container } from './components/Container'; // Import the
export { default as TextView } from './components/TextView';
export { default as AbsoluteView } from './components/AbsoluteView';
export { default as ButtonView } from './components/ButtonView';

export {
  useAppState,
  useDebounce,
  useNetInfo,
  useThrottle,
  useToggle,
} from './hooks/index';

export { rbr, rbw, rf, rh, rw, fontSize } from './utility/responsive';
export {
  SCREEN_H,
  SCREEN_W,
  isAndroid,
  isIOS,
  isMacOs,
  isTv,
  isWeb,
  isWindows,
} from './utility/platform';
