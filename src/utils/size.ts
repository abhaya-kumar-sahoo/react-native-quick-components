import { Dimensions } from 'react-native';
import { config } from '../config';
import { mobileSizes } from './phone.sizes';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
const screenSizes =
  config.setCustomAppSize &&
  typeof config.setCustomAppSize.width === 'number' &&
  typeof config.setCustomAppSize.height === 'number' &&
  config.setCustomAppSize.width > 0 &&
  config.setCustomAppSize.height > 0
    ? config.setCustomAppSize
    : mobileSizes.find((s) => s.model === config.defaultAppSize)?.windowSize;
//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = screenSizes?.width ?? 350;
const guidelineBaseHeight = screenSizes?.height ?? 680;
export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
export const moderateVerticalScale = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
