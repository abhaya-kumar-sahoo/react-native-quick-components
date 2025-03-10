// import type { ViewStyle } from 'react-native';
// import { config } from '../config/index';
// import { DefaultColors } from '../types/colors';
// import { moderateScale, scale, verticalScale } from '../utils/size';
// import {
//   heightPct,
//   responsiveHeight,
//   responsiveWidth,
//   widthPct,
// } from '../utils/responsive_fontsize';
// const responsive_type = config?.responsive?.type;
// const { enableResponsive, responsive } = config;
// const defaultWidth = responsive?.defaultScreenSize?.width;
// const defaultHeight = responsive?.defaultScreenSize?.height;
// const isPctType = responsive_type === 'percentage';

// // Common size styles with condtrue),nl spreading

// // const commonSizes = (value: any = {}, isOverflow?: boolean) => {
// //   const isPercentage = (val: any) =>
// //     typeof val === 'string' && val.trim().endsWith('%');

// //   const getScaledValue = (key: string, scaleFn: any) =>
// //     config.enableResponsive &&
// //     value[key] !== undefined &&
// //     !isPercentage(value[key])
// //       ? responsive_type === 'percentage'
// //         ? scaleFn(value[key])
// //         : scaleFn(
// //             value[key],
// //             scaleFn === 'responsiveWidth'
// //               ? config.responsive?.defaultScreenSize?.width
// //               : config.responsive?.defaultScreenSize?.height
// //           )
// //       : value[key];

// //   return {
// //     width: getScaledValue(
// //       '$w',
// //       responsive_type === 'percentage' ? widthPct : responsiveWidth
// //     ),
// //     height: getScaledValue(
// //       '$h',
// //       responsive_type === 'percentage' ? heightPct : responsiveHeight
// //     ),
// //     minWidth: getScaledValue(
// //       '$minW',
// //       responsive_type === 'percentage' ? widthPct : responsiveWidth
// //     ),
// //     minHeight: getScaledValue(
// //       '$minH',
// //       responsive_type === 'percentage' ? heightPct : responsiveHeight
// //     ),
// //     maxWidth: getScaledValue(
// //       '$maxW',
// //       responsive_type === 'percentage' ? widthPct : responsiveWidth
// //     ),
// //     maxHeight: getScaledValue(
// //       '$maxH',
// //       responsive_type === 'percentage' ? heightPct : responsiveHeight
// //     ),
// //     aspectRatio: value?.$aspectRatio,
// //     ...(value?.$overflow || isOverflow
// //       ? { overflow: value?.$overflow ?? (isOverflow ? 'hidden' : undefined) }
// //       : {}),
// //   };
// // };

// const commonSizes = (value: any = {}, isOverflow?: boolean) => {
//   const isPercentage = (val: any) =>
//     typeof val === 'string' && val.trim().endsWith('%');

//   const getScaledValue = (key: string, fn: any) =>
//     enableResponsive && value[key] !== undefined && !isPercentage(value[key])
//       ? isPctType
//         ? fn(value[key])
//         : fn(value[key], fn === responsiveWidth ? defaultWidth : defaultHeight)
//       : value[key];

//   return {
//     width: getScaledValue('$w', isPctType ? widthPct : responsiveWidth),
//     height: getScaledValue('$h', isPctType ? heightPct : responsiveHeight),
//     minWidth: getScaledValue('$minW', isPctType ? widthPct : responsiveWidth),
//     minHeight: getScaledValue(
//       '$minH',
//       isPctType ? heightPct : responsiveHeight
//     ),
//     maxWidth: getScaledValue('$maxW', isPctType ? widthPct : responsiveWidth),
//     maxHeight: getScaledValue(
//       '$maxH',
//       isPctType ? heightPct : responsiveHeight
//     ),
//     aspectRatio: value.$aspectRatio,
//     ...(value.$overflow || isOverflow
//       ? { overflow: value.$overflow ?? (isOverflow ? 'hidden' : undefined) }
//       : {}),
//   };
// };

// // Common width and height styles
// const commonWidthHeight = (value?: any) => ({
//   ...(value?.$size !== undefined
//     ? {
//         width: config.enableResponsive
//           ? isPctType
//             ? widthPct(value?.$size)
//             : responsiveWidth(
//                 value?.$size,
//                 config.responsive?.defaultScreenSize?.width
//               )
//           : value?.$size,
//         height: config.enableResponsive
//           ? isPctType
//             ? heightPct(value?.$size)
//             : responsiveHeight(
//                 value?.$size,
//                 config.responsive?.defaultScreenSize?.width
//               )
//           : value?.$size,
//       }
//     : {}),
// });

// const commonPadMadStyles = (value: any = {}) => {
//   const getScaledValue = (key: string, fn: any) =>
//     enableResponsive && value[key] !== undefined
//       ? isPctType
//         ? fn(value[key])
//         : fn(value[key], fn === responsiveWidth ? defaultWidth : defaultHeight)
//       : value[key];
//   return {
//     padding: getScaledValue('$p', isPctType ? widthPct : responsiveWidth),
//     paddingLeft: getScaledValue('$pl', isPctType ? widthPct : responsiveWidth),
//     paddingRight: getScaledValue('$pr', isPctType ? widthPct : responsiveWidth),
//     paddingTop: getScaledValue('$pt', isPctType ? heightPct : responsiveHeight),
//     paddingBottom: getScaledValue(
//       '$pb',
//       isPctType ? heightPct : responsiveHeight
//     ),
//     paddingHorizontal: getScaledValue(
//       '$px',
//       isPctType ? widthPct : responsiveWidth
//     ),
//     paddingVertical: getScaledValue(
//       '$py',
//       isPctType ? heightPct : responsiveHeight
//     ),
//     margin: getScaledValue('$m', isPctType ? widthPct : responsiveWidth),
//     marginLeft: getScaledValue('$ml', isPctType ? widthPct : responsiveWidth),
//     marginRight: getScaledValue('$mr', isPctType ? widthPct : responsiveWidth),
//     marginTop: getScaledValue('$mt', isPctType ? heightPct : responsiveHeight),
//     marginBottom: getScaledValue(
//       '$mb',
//       isPctType ? heightPct : responsiveHeight
//     ),
//     marginHorizontal: getScaledValue(
//       '$mx',
//       isPctType ? widthPct : responsiveWidth
//     ),
//     marginVertical: getScaledValue(
//       '$my',
//       isPctType ? heightPct : responsiveHeight
//     ),
//   };
// };

// // Helper to check if the color is in a valid hex format
// const isHexColor = (c: string) => /^#([0-9A-Fa-f]{3}){1,2}$/.test(c);

// // Helper to check if the color is in rgba/hsla format
// const isRgbaOrHsla = (c: string) =>
//   /^(rgba|hsla)\(\d+,\s*\d+%,\s*\d+%,\s*(\d+(\.\d+)?|1(\.0+)?)\)$/.test(c);

// // Enhanced color function
// const color = (c: string) => {
//   if (!c) return 'red'; // Default to 'red' if no color is provided

//   if (c.includes(':')) {
//     // Handle "colorType:colorName" custom format
//     const colorType = (x: string) => x?.split(':')[0] ?? 'red';
//     const colorName = (x: string) => x?.split(':')[1] ?? '100';
//     return (DefaultColors as any)[colorType(c)][colorName(c)];
//   }

//   // Handle valid React Native color formats
//   if (isHexColor(c) || isRgbaOrHsla(c)) {
//     return c;
//   }

//   // Fallback to named colors (e.g., "blue") or return the input
//   return c;
// };

// // Common background color style
// const commonBackGroundColor = (value?: any, enabled = false) => ({
//   ...(value?.$bg
//     ? { backgroundColor: color(value?.$bg) }
//     : config.defaultBackgroundColor
//       ? {
//           backgroundColor: enabled
//             ? config.defaultBackgroundColor
//             : 'transparent',
//         }
//       : {}),
// });
// const commonBorderColor = (value?: any) => ({
//   ...(value?.$boc ? { borderColor: color(value?.$boc) } : {}),
// });

// const commonTextColor = (value?: any) => ({
//   ...(value?.$c !== undefined
//     ? { color: color(value?.$c) }
//     : config.defaultTextColor
//       ? { color: config.defaultTextColor }
//       : {}),
// });

// const commonShadowStyles = (value?: any) => ({
//   ...(value?.$sc !== undefined ? { shadowColor: color(value?.$sc) } : {}),

//   ...(value?.$sof !== undefined
//     ? {
//         shadowOffset: {
//           width: value?.$sof?.width,
//           height: value?.$sof?.height,
//         },
//       }
//     : {}),
//   ...(value?.$sop !== undefined ? { shadowOpacity: value?.$sop } : {}),
//   ...(value?.$sr !== undefined ? { shadowRadius: value?.$sr } : {}),

//   ...(value?.$el !== undefined ? { elevation: value?.$el } : {}),
// });

// const commonJcAlineFlexStyle = (value?: any) => ({
//   ...(value?.$flex !== undefined ? { flex: value.$flex } : {}),
//   justifyContent: value?.$fs
//     ? 'flex-start'
//     : value?.$center
//       ? 'center'
//       : value?.$fe
//         ? 'flex-end'
//         : value?.$spb
//           ? 'space-between'
//           : value?.$spe
//             ? 'space-evenly'
//             : value?.$spa
//               ? 'space-around'
//               : 'flex-start',

//   ...(value?.$alignItems !== undefined
//     ? { alignItems: value?.$alignItems }
//     : { alignItems: 'center' }),
// });

// const commonFlexStyles = (value?: any) => ({
//   ...(value?.$fb !== undefined && { flexBasis: value.$fb }),
//   ...(value?.$fg !== undefined && { flexGrow: value.$fg }),
//   ...(value?.$fs !== undefined && {
//     flexShrink: value.$fs,
//   }),
//   ...(value?.$fw !== undefined && { flexWrap: value.$fw }),
// });

// const commonAlignSelf = (value?: any, isEnabled?: boolean) => ({
//   ...(value?.$as !== undefined
//     ? { alignSelf: value?.$as }
//     : { alignSelf: isEnabled ? 'center' : 'baseline' }),
// });

// const commonColor = (value?: any, enabled = false) => ({
//   ...(value
//     ? { backgroundColor: color(value) }
//     : config.defaultBackgroundColor
//       ? {
//           backgroundColor: enabled
//             ? config.defaultBackgroundColor
//             : 'transparent',
//         }
//       : {}),
// });

// // Common border styles with conditional spreading
// const commonBorder = (value: any = {}) => {
//   const getValue = (key: string, transformFn = (v: any) => v) =>
//     value[key] !== undefined ? transformFn(value[key]) : undefined;
//   return {
//     borderRadius: getValue('$bor'),
//     borderWidth: getValue('$bow'),
//     borderTopLeftRadius: getValue('$btrl'),
//     borderTopRightRadius: getValue('$btrr'),
//     borderBottomLeftRadius: getValue('$btlr'),
//     borderBottomRightRadius: getValue('$btbr'),
//     ...commonBorderColor(value),
//   };
// };

// const commonTextStyles = (value?: any) => ({
//   ...(value?.$fs !== undefined
//     ? { fontSize: scale(value.$fs) }
//     : config.defaultFontSize
//       ? { fontSize: config.defaultFontSize }
//       : {}),
//   ...(value?.$bold !== undefined
//     ? { fontWeight: typeof value?.$bold === 'string' ? value?.$bold : 'bold' }
//     : {}),
//   ...(value?.$ff !== undefined
//     ? { fontFamily: value.$ff }
//     : config.defaultFontFamily
//       ? { fontFamily: config.defaultFontFamily }
//       : {}),
//   ...(value?.$ta !== undefined ? { textAlign: value.$ta } : {}),
//   ...(value?.$lh !== undefined ? { lineHeight: value.$lh } : {}),
//   ...commonTextColor(value),
//   ...commonPadMadStyles(value),
//   ...commonSizes(value),
// });

// const center = (value?: any) =>
//   value?.$center !== undefined
//     ? {
//         alignItems: 'center' as ViewStyle['alignItems'],
//         justifyContent: 'center' as ViewStyle['justifyContent'],
//       }
//     : {};

// const centerX = (value?: any) =>
//   value?.$centerX !== undefined
//     ? { alignItems: 'center' as ViewStyle['alignItems'] }
//     : {};

// const centerY = (value?: any) =>
//   value?.$centerY !== undefined
//     ? { justifyContent: 'center' as ViewStyle['justifyContent'] }
//     : {};

// const commonGapStyles = (value?: any) => ({
//   flexWrap: value?.$fw, // Use flexWrap directly
//   ...(value?.$g !== undefined ? { gap: value?.$g } : {}), // Conditionally apply gap
//   ...(value?.$rg !== undefined ? { rowGap: value?.$rg } : {}), // Conditionally apply rowGap
//   ...(value?.$cg !== undefined ? { columnGap: value?.$cg } : {}), // Conditionally apply columnGap
// });

// const commonFlexStyle = (value?: any) => ({
//   ...(value?.$f !== undefined ? { flex: value.$f } : {}),
// });

// export {
//   commonBackGroundColor,
//   commonWidthHeight,
//   commonPadMadStyles,
//   commonTextStyles,
//   commonBorder,
//   commonSizes,
//   center,
//   centerX,
//   centerY,
//   commonColor,
//   commonJcAlineFlexStyle,
//   commonGapStyles,
//   commonFlexStyle,
//   commonShadowStyles,
//   commonAlignSelf,
//   commonBorderColor,
//   commonTextColor,
//   commonFlexStyles,
// };
