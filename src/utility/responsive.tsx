import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native';
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

function isIphoneX() {
  const dime = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dime.height === 780 ||
      dime.width === 780 ||
      dime.height === 812 ||
      dime.width === 812 ||
      dime.height === 844 ||
      dime.width === 844 ||
      dime.height === 896 ||
      dime.width === 896 ||
      dime.height === 926 ||
      dime.width === 926)
  );
}

export function fontSize(percent: number) {
  const { height, width } = Dimensions.get('window');
  const standardLength = width > height ? width : height;
  const offset =
    width > height
      ? 0
      : Platform.OS === 'ios'
        ? 78
        : (StatusBar.currentHeight ?? 0); // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - offset
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// Get screen dimensions

// Base design dimensions (your design mockup size)
const DESIGN_WIDTH = 375; // iPhone 11 Pro width (most common design base)

// Calculate scale factors
const WIDTH_SCALE = SCREEN_WIDTH / DESIGN_WIDTH;

// =============================================================================
// 1. RESPONSIVE WIDTH FUNCTIONS
// =============================================================================

/**
 * Responsive Width - Percentage based
 * @param {number} percentage - Width percentage (0-100)
 * @returns {number} - Calculated width
 */
export const rw = (percentage: number) => {
  const value = (percentage * SCREEN_WIDTH) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

// =============================================================================
// 2. RESPONSIVE HEIGHT FUNCTIONS
// =============================================================================

/**
 * Responsive Height - Percentage based
 * @param {number} percentage - Height percentage (0-100)
 * @returns {number} - Calculated height
 */
export const rh = (percentage: number) => {
  const value = (percentage * SCREEN_HEIGHT) / 100;
  return Math.round(PixelRatio.roundToNearestPixel(value));
};

// =============================================================================
// 3. RESPONSIVE FONT SIZE FUNCTIONS
// =============================================================================

/**
 * Responsive Font Size - Width based scaling (RECOMMENDED)
 * @param {number} designFontSize - Font size from design
 * @param {number} minSize - Minimum font size (default: 10)
 * @param {number} maxSize - Maximum font size (default: 30)
 * @returns {number} - Responsive font size
 */
export const rf = (designFontSize: number, minSize = 10, maxSize = 30) => {
  const scaledSize = designFontSize * WIDTH_SCALE;
  const constrainedSize = Math.max(minSize, Math.min(maxSize, scaledSize));
  return Math.round(PixelRatio.roundToNearestPixel(constrainedSize));
};

// =============================================================================
// 5. RESPONSIVE BORDER FUNCTIONS
// =============================================================================

/**
 * Responsive Border Radius
 * @param {number} designRadius - Border radius from design
 * @param {number} maxRadius - Maximum radius (optional)
 * @returns {number} - Scaled border radius
 */
export const rbr = (designRadius: number, maxRadius?: number) => {
  const scaledRadius = designRadius * WIDTH_SCALE;
  const finalRadius = maxRadius
    ? Math.min(maxRadius, scaledRadius)
    : scaledRadius;
  return Math.round(PixelRatio.roundToNearestPixel(finalRadius));
};

/**
 * Responsive Border Width - Always crisp
 * @param {number} designWidth - Border width from design
 * @returns {number} - Optimized border width
 */
export const rbw = (designWidth: number) => {
  if (designWidth <= 1) return 1; // Always 1px for thin borders
  if (designWidth <= 2) return 2; // 2px for medium borders

  const scaledWidth = designWidth * WIDTH_SCALE;
  return Math.max(1, Math.round(PixelRatio.roundToNearestPixel(scaledWidth)));
};
