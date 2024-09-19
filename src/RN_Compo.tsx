import { useWindowDimensions } from 'react-native';

// const widthRatio =Dimensions.set()

export const useAppDimensions = (width: number, height: number) => {
  const guidelineBaseWidth = width ?? 375;
  const guidelineBaseHeight = height ?? 812;
  const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = useWindowDimensions();
  const horizontalScale = (size: number) =>
    (SCREEN_WIDTH / guidelineBaseWidth) * size;
  const verticalScale = (size: number) =>
    (SCREEN_HEIGHT / guidelineBaseHeight) * size;
  const moderateScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;
  return {
    verticalScale,
    moderateScale,
    horizontalScale,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
  };
};

// const sizes = [
//   {
//     name: 'iPhone SE (1st Gen)',
//     values: { width: 320, height: 568 },
//   },
//   {
//     name: 'iPhone 5/5s/5c',
//     values: { width: 320, height: 568 },
//   },
//   {
//     name: 'iPhone SE (2nd Gen)',
//     values: { width: 375, height: 667 },
//   },
//   {
//     name: 'Google Pixel 4a',
//     values: { width: 393, height: 851 },
//   },
//   {
//     name: 'iPhone 6/6s/7/8',
//     values: { width: 375, height: 667 },
//   },
//   {
//     name: 'iPhone 6/7/8 Plus',
//     values: { width: 414, height: 736 },
//   },
//   {
//     name: 'Samsung Galaxy S10e',
//     values: { width: 360, height: 760 },
//   },
//   {
//     name: 'Google Pixel 5',
//     values: { width: 393, height: 851 },
//   },
//   {
//     name: 'Samsung Galaxy S9',
//     values: { width: 360, height: 740 },
//   },
//   {
//     name: 'Google Pixel 3',
//     values: { width: 393, height: 786 },
//   },
//   {
//     name: 'iPhone X/XS/11 Pro',
//     values: { width: 375, height: 812 },
//   },
//   {
//     name: 'iPhone XR/11',
//     values: { width: 414, height: 896 },
//   },
//   {
//     name: 'iPhone XS Max/11 Pro Max',
//     values: { width: 414, height: 896 },
//   },
//   {
//     name: 'Google Pixel 4 XL',
//     values: { width: 412, height: 869 },
//   },
//   {
//     name: 'Samsung Galaxy S10',
//     values: { width: 360, height: 760 },
//   },
//   {
//     name: 'Samsung Galaxy Note 10',
//     values: { width: 412, height: 869 },
//   },
//   {
//     name: 'Samsung Galaxy S10+',
//     values: { width: 412, height: 869 },
//   },
//   {
//     name: 'Samsung Galaxy Note 10+',
//     values: { width: 412, height: 869 },
//   },
//   {
//     name: 'Samsung Galaxy S20/S20+',
//     values: { width: 412, height: 915 },
//   },
//   {
//     name: 'Samsung Galaxy Note 20 Ultra',
//     values: { width: 412, height: 915 },
//   },
//   {
//     name: 'Google Pixel 6 Pro',
//     values: { width: 412, height: 915 },
//   },
//   {
//     name: 'Samsung Galaxy Fold',
//     values: { width: 768, height: 896 },
//   },
//   {
//     name: 'Samsung Galaxy Z Fold 2',
//     values: { width: 819, height: 931 },
//   },
//   {
//     name: 'Huawei Mate Xs',
//     values: { width: 820, height: 945 },
//   },
//   {
//     name: 'Microsoft Surface Duo',
//     values: { width: 540, height: 720 },
//   },
// ];
