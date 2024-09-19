import type { ViewStyle } from 'react-native';
import { config } from '../components/config/index';

const commonPadMadStyles = (value?: any) => ({
  ...(value?.P !== undefined ? { padding: value.P } : {}),
  ...(value?.PL !== undefined ? { paddingLeft: value.PL } : {}),
  ...(value?.PR !== undefined ? { paddingRight: value.PR } : {}),
  ...(value?.PT !== undefined ? { paddingTop: value.PT } : {}),
  ...(value?.PB !== undefined ? { paddingBottom: value.PB } : {}),
  ...(value?.PX !== undefined ? { paddingHorizontal: value.PX } : {}),
  ...(value?.PY !== undefined ? { paddingVertical: value.PY } : {}),
  ...(value?.ML !== undefined ? { marginLeft: value.ML } : {}),
  ...(value?.MT !== undefined ? { marginTop: value.MT } : {}),
  ...(value?.MB !== undefined ? { marginBottom: value.MB } : {}),
  ...(value?.MX !== undefined ? { marginHorizontal: value.MX } : {}),
  ...(value?.MY !== undefined ? { marginVertical: value.MY } : {}),
});

// Common background color style
const commonBackGroundColor = (value?: any) => ({
  ...(value?.BG
    ? { backgroundColor: value?.BG }
    : config.defaultBackgroundColor
      ? { backgroundColor: config.defaultBackgroundColor }
      : {}),
});

// Common border styles with conditional spreading
const commonBorder = (value?: any) => ({
  ...(value?.BOR !== undefined ? { borderRadius: value.BOR } : {}),
  ...(value?.BOW !== undefined ? { borderWidth: value.BOW } : {}),
  ...(value?.BOC !== undefined ? { borderColor: value.BOC } : {}),
  ...(value?.BTRL !== undefined ? { borderTopLeftRadius: value.BTRL } : {}),
  ...(value?.BTRR !== undefined ? { borderTopRightRadius: value.BTRR } : {}),
  ...(value?.BTLR !== undefined ? { borderBottomLeftRadius: value.BTLR } : {}),
  ...(value?.BTBR !== undefined ? { borderBottomRightRadius: value.BTBR } : {}),
});

// Common size styles with conditional spreading
const commonSizes = (value?: any) => ({
  ...(value?.W !== undefined ? { width: value.W } : {}),
  ...(value?.H !== undefined ? { height: value.H } : {}),
  ...(value?.MIN_W !== undefined ? { minWidth: value.MIN_W } : {}),
  ...(value?.MIN_H !== undefined ? { minHeight: value.MIN_H } : {}),
  ...(value?.MAX_W !== undefined ? { maxWidth: value.MAX_W } : {}),
  ...(value?.MAX_H !== undefined ? { maxHeight: value.MAX_H } : {}),
  ...(value?.ASPECT_RATIO !== undefined
    ? { aspectRatio: value.ASPECT_RATIO }
    : {}),
});

const commonTextStyles = (value?: any) => ({
  ...(value?.C !== undefined
    ? { color: value.C }
    : config.defaultTextColor
      ? { color: config.defaultTextColor }
      : {}),
  ...(value?.F_SIZE !== undefined
    ? { fontSize: value.F_SIZE }
    : config.defaultFontSize
      ? { fontSize: config.defaultFontSize }
      : {}),
  ...(value?.F_WEIGHT !== undefined ? { fontWeight: value.F_WEIGHT } : {}),
  ...(value?.FONT !== undefined
    ? { fontFamily: value.FONT }
    : config.defaultFontFamily
      ? { fontFamily: config.defaultFontFamily }
      : {}),
  ...(value?.ALINE !== undefined ? { textAlign: value.ALINE } : {}),
  ...(value?.LINE_H !== undefined ? { lineHeight: value.LINE_H } : {}),
  // ...commonBackGroundColor(value),
  ...commonPadMadStyles(value),
  ...commonSizes(value),
});

// Common width and height styles
const commonWidthHeight = (value?: any) => ({
  ...(value?.SIZE !== undefined
    ? { width: value?.SIZE, height: value?.SIZE }
    : {}),
});

const center = (value?: any) => ({
  ...(value?.center !== undefined
    ? { alignItems: 'center' as ViewStyle['alignItems'] }
    : {}),
  ...(value?.center !== undefined
    ? { justifyContent: 'center' as ViewStyle['justifyContent'] }
    : {}),
});
const centerX = (value?: any) => ({
  ...(value?.centerX !== undefined
    ? { alignItems: 'center' as ViewStyle['alignItems'] }
    : {}),
});
const centerY = (value?: any) => ({
  ...(value?.centerY !== undefined
    ? { justifyContent: 'center' as ViewStyle['justifyContent'] }
    : {}),
});
export {
  commonBackGroundColor,
  commonWidthHeight,
  commonPadMadStyles,
  commonTextStyles,
  commonBorder,
  commonSizes,
  center,
  centerX,
  centerY,
};
