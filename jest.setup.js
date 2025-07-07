// jest.setup.js
import { Platform, Dimensions, PixelRatio, StatusBar } from 'react-native';

Object.defineProperty(Platform, 'OS', {
  get: () => 'ios',
});

Object.defineProperty(Dimensions, 'get', {
  value: () => ({
    width: 375,
    height: 812,
  }),
});

Object.defineProperty(PixelRatio, 'roundToNearestPixel', {
  value: (n) => Math.round(n),
});

Object.defineProperty(StatusBar, 'currentHeight', {
  value: 24,
});
