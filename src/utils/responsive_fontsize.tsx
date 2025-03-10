import { Platform, StatusBar, Dimensions } from 'react-native';
import { isIphoneX } from './isIphoneX';

export function fontSizePct(percent: number) {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height
      ? 0
      : Platform.OS === 'ios'
        ? 78
        : StatusBar.currentHeight || 0;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

export function fontSizeScreenHeight(
  fontSize: number,
  standardScreenHeight = 680
) {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height
      ? 0
      : Platform.OS === 'ios'
        ? 78
        : StatusBar.currentHeight || 0;

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}

// Get the adjusted device dimensions accounting for status bars and notches
const getAdjustedDimensions = () => {
  const { height, width } = Dimensions.get('window');
  const isLandscape = width > height;

  // Calculate offset for status bar or notch
  const offset = isLandscape
    ? 0
    : Platform.OS === 'ios'
      ? 78
      : StatusBar.currentHeight || 0;

  // Adjust device height based on device type
  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? (isLandscape ? width : height) - offset
      : isLandscape
        ? width
        : height;

  return { deviceWidth: width, deviceHeight, isLandscape };
};
/**
 * Calculate responsive width based on percentage of screen width
 * @param percent - Percentage of screen width (0-100)
 * @returns Calculated width in pixels
 */
export function widthPct(percent: number) {
  const { deviceWidth } = getAdjustedDimensions();
  const widthValue = (percent * deviceWidth) / 100;
  return Math.round(widthValue);
}

/**
 * Calculate responsive height based on percentage of adjusted screen height
 * @param percent - Percentage of screen height (0-100)
 * @returns Calculated height in pixels
 */
export function heightPct(percent: number) {
  const { deviceHeight } = getAdjustedDimensions();
  const heightValue = (percent * deviceHeight) / 100;
  return Math.round(heightValue);
}

/**
 * Calculate responsive width based on reference screen width
 * @param size - Size in pixels on reference device
 * @param standardScreenWidth - Reference screen width (default: 375)
 * @returns Calculated width in pixels
 */
export function responsiveWidth(size: number, standardScreenWidth = 375) {
  const { deviceWidth } = getAdjustedDimensions();
  const widthValue = (size * deviceWidth) / standardScreenWidth;
  return Math.round(widthValue);
}

/**
 * Calculate responsive height based on reference screen height
 * @param size - Size in pixels on reference device
 * @param standardScreenHeight - Reference screen height (default: 680)
 * @returns Calculated height in pixels
 */
export function responsiveHeight(size: number, standardScreenHeight = 680) {
  const { deviceHeight } = getAdjustedDimensions();
  const heightValue = (size * deviceHeight) / standardScreenHeight;
  return Math.round(heightValue);
}
