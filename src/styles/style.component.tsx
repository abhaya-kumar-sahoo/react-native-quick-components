import type { ViewStyle } from 'react-native';
import { config } from '../config/index';
import { DefaultColors } from '../types/colors';
import { moderateScale, scale, verticalScale } from '../utils/size';

const commonPadMadStyles = (value?: any) => ({
  ...(value?.P !== undefined
    ? {
        padding: config.enableResponsive ? moderateScale(value.P) : value.P,
      }
    : {}),
  ...(value?.PL !== undefined
    ? {
        paddingLeft: config.enableResponsive
          ? moderateScale(value.PL)
          : value.PL,
      }
    : {}),
  ...(value?.PR !== undefined
    ? {
        paddingRight: config.enableResponsive
          ? moderateScale(value.PR)
          : value.PR,
      }
    : {}),
  ...(value?.PT !== undefined
    ? {
        paddingTop: config.enableResponsive
          ? verticalScale(value.PT)
          : value.PT,
      }
    : {}),
  ...(value?.PB !== undefined
    ? {
        paddingBottom: config.enableResponsive
          ? verticalScale(value.PB)
          : value.PB,
      }
    : {}),
  ...(value?.PX !== undefined
    ? {
        paddingHorizontal: config.enableResponsive
          ? moderateScale(value.PX)
          : value.PX,
      }
    : {}),
  ...(value?.PY !== undefined
    ? {
        paddingVertical: config.enableResponsive
          ? verticalScale(value.PY)
          : value.PY,
      }
    : {}),
  ...(value?.ML !== undefined
    ? {
        marginLeft: config.enableResponsive
          ? moderateScale(value.ML)
          : value.ML,
      }
    : {}),
  ...(value?.MR !== undefined
    ? {
        marginRight: config.enableResponsive
          ? moderateScale(value.MR)
          : value.MR,
      }
    : {}),
  ...(value?.MT !== undefined
    ? {
        marginTop: config.enableResponsive ? verticalScale(value.MT) : value.MT,
      }
    : {}),
  ...(value?.MB !== undefined
    ? {
        marginBottom: config.enableResponsive
          ? verticalScale(value.MB)
          : value.MB,
      }
    : {}),
  ...(value?.MX !== undefined
    ? {
        marginHorizontal: config.enableResponsive
          ? moderateScale(value.MX)
          : value.MX,
      }
    : {}),
  ...(value?.MY !== undefined
    ? {
        marginVertical: config.enableResponsive
          ? verticalScale(value.MY)
          : value.MY,
      }
    : {}),
});

const colorType = (C: string) => C?.split(':')[0] ?? 'red';
const colorName = (C: string) => C?.split(':')[1] ?? '100';
const color = (C: string) =>
  C.includes(':') ? (DefaultColors as any)[colorType(C)][colorName(C)] : C;

// Common background color style
const commonBackGroundColor = (value?: any, enabled = false) => ({
  ...(value?.BG
    ? { backgroundColor: color(value?.BG) }
    : config.defaultBackgroundColor
      ? {
          backgroundColor: enabled
            ? config.defaultBackgroundColor
            : 'transparent',
        }
      : {}),
});

// Common border styles with conditional spreading
const commonBorder = (value?: any) => ({
  ...(value?.BOR !== undefined ? { borderRadius: value.BOR } : {}),
  ...(value?.BOW !== undefined ? { borderWidth: value.BOW } : {}),
  ...(value?.BOC !== undefined ? { borderColor: color(value.BOC) } : {}),
  ...(value?.BTRL !== undefined ? { borderTopLeftRadius: value.BTRL } : {}),
  ...(value?.BTRR !== undefined ? { borderTopRightRadius: value.BTRR } : {}),
  ...(value?.BTLR !== undefined ? { borderBottomLeftRadius: value.BTLR } : {}),
  ...(value?.BTBR !== undefined ? { borderBottomRightRadius: value.BTBR } : {}),
});

// Common size styles with conditional spreading
const commonSizes = (value?: any) => ({
  ...(value?.W !== undefined
    ? { width: config.enableResponsive ? moderateScale(value.W) : value.W }
    : {}),
  ...(value?.H !== undefined
    ? { height: config.enableResponsive ? verticalScale(value.H) : value.H }
    : {}),
  ...(value?.MIN_W !== undefined
    ? {
        minWidth: config.enableResponsive
          ? moderateScale(value.MIN_W)
          : value.MIN_W,
      }
    : {}),
  ...(value?.MIN_H !== undefined
    ? {
        minHeight: config.enableResponsive
          ? verticalScale(value.MIN_H)
          : value.MIN_H,
      }
    : {}),
  ...(value?.MAX_W !== undefined
    ? {
        maxWidth: config.enableResponsive
          ? moderateScale(value.MAX_W)
          : value.MAX_W,
      }
    : {}),
  ...(value?.MAX_H !== undefined
    ? {
        maxHeight: config.enableResponsive
          ? verticalScale(value.MAX_H)
          : value.MAX_H,
      }
    : {}),
  ...(value?.ASPECT_RATIO !== undefined
    ? { aspectRatio: value.ASPECT_RATIO }
    : {}),
});

const commonTextStyles = (value?: any) => ({
  ...(value?.C !== undefined
    ? { color: color(value?.C) }
    : config.defaultTextColor
      ? { color: config.defaultTextColor }
      : {}),
  ...(value?.F_SIZE !== undefined
    ? { fontSize: scale(value.F_SIZE) }
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
    ? {
        width: config.enableResponsive
          ? moderateScale(value?.SIZE)
          : value?.SIZE,
        height: config.enableResponsive
          ? moderateScale(value?.SIZE)
          : value?.SIZE,
      }
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
