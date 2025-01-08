import type { ViewStyle } from 'react-native';
import { config } from '../config/index';
import { DefaultColors } from '../types/colors';
import { moderateScale, scale, verticalScale } from '../utils/size';

const commonPadMadStyles = (value: any = {}) => {
  const getScaledValue = (key: string, scaleFn: any) =>
    config.enableResponsive && value[key] !== undefined
      ? scaleFn(value[key])
      : value[key];

  return {
    padding: getScaledValue('_p', moderateScale),
    paddingLeft: getScaledValue('_pl', moderateScale),
    paddingRight: getScaledValue('_pr', moderateScale),
    paddingTop: getScaledValue('_pt', verticalScale),
    paddingBottom: getScaledValue('_pb', verticalScale),
    paddingHorizontal: getScaledValue('_px', moderateScale),
    paddingVertical: getScaledValue('_py', verticalScale),
    margin: getScaledValue('_m', moderateScale),
    marginLeft: getScaledValue('_ml', moderateScale),
    marginRight: getScaledValue('_mr', moderateScale),
    marginTop: getScaledValue('_mt', verticalScale),
    marginBottom: getScaledValue('_mb', verticalScale),
    marginHorizontal: getScaledValue('_mx', moderateScale),
    marginVertical: getScaledValue('_my', verticalScale),

    ///////
  };
};

const colorType = (c: string) => c?.split(':')[0] ?? 'red';
const colorName = (c: string) => c?.split(':')[1] ?? '100';
const color = (c: string) =>
  c.includes(':') ? (DefaultColors as any)[colorType(c)][colorName(c)] : c;

// Common background color style
const commonBackGroundColor = (value?: any, enabled = false) => ({
  ...(value?._bg
    ? { backgroundColor: color(value?._bg) }
    : config.defaultBackgroundColor
      ? {
          backgroundColor: enabled
            ? config.defaultBackgroundColor
            : 'transparent',
        }
      : {}),
});

const commonShadowStyles = (value?: any) => ({
  ...(value?._shadowColor !== undefined
    ? { shadowColor: color(value?._shadowColor) }
    : {}),

  ...(value?._shadowOffset !== undefined
    ? {
        shadowOffset: {
          width: value?._shadowOffset?.width,
          height: value?._shadowOffset?.height,
        },
      }
    : {}),
  ...(value?._shadowOpacity !== undefined
    ? { shadowOpacity: value?._shadowOpacity }
    : {}),
  ...(value?._shadowRadius !== undefined
    ? { shadowOpacity: value?._shadowRadius }
    : {}),

  ...(value?._elev !== undefined ? { elevation: value?._elev } : {}),
});

const commonJcAlineFlexStyle = (value?: any) => ({
  ///////////
  ...(value?._flex !== undefined ? { flex: value._flex } : {}),
  ...(value?._jc !== undefined
    ? { justifyContent: value?._jc }
    : { justifyContent: 'space-between' }),
  ...(value?._alignItems !== undefined
    ? { alignItems: value?._alignItems }
    : { alignItems: 'center' }),
});

const commonAlignSelf = (value?: any) => ({
  ...(value?._alignSelf !== undefined
    ? { alignSelf: value?._alignSelf }
    : { alignSelf: 'baseline' }),
});

const commonColor = (value?: any, enabled = false) => ({
  ...(value
    ? { backgroundColor: color(value) }
    : config.defaultBackgroundColor
      ? {
          backgroundColor: enabled
            ? config.defaultBackgroundColor
            : 'transparent',
        }
      : {}),
});

// Common border styles with conditional spreading
const commonBorder = (value: any = {}) => {
  const getValue = (key: string, transformFn = (v: any) => v) =>
    value[key] !== undefined ? transformFn(value[key]) : undefined;
  return {
    borderRadius: getValue('_bor'),
    borderWidth: getValue('_bow'),
    borderColor: getValue('_boc', color),
    borderTopLeftRadius: getValue('_btrl'),
    borderTopRightRadius: getValue('_btrr'),
    borderBottomLeftRadius: getValue('_btlr'),
    borderBottomRightRadius: getValue('_btbr'),
  };
};

// Common size styles with conditional spreading

const commonSizes = (value: any = {}, isOverflow?: boolean) => {
  const isPercentage = (val: any) =>
    typeof val === 'string' && val.trim().endsWith('%');

  const getScaledValue = (key: string, scaleFn: any) =>
    config.enableResponsive &&
    value[key] !== undefined &&
    !isPercentage(value[key])
      ? scaleFn(value[key])
      : value[key];

  return {
    width: getScaledValue('_w', moderateScale),
    height: getScaledValue('_h', verticalScale),
    minWidth: getScaledValue('_minW', moderateScale),
    minHeight: getScaledValue('_minH', verticalScale),
    maxWidth: getScaledValue('_maxW', moderateScale),
    maxHeight: getScaledValue('_maxH', verticalScale),
    aspectRatio: value?._aspectRatio,
    ...(value?._overflow || isOverflow
      ? { overflow: value?._overflow ?? (isOverflow ? 'hidden' : undefined) }
      : {}),
  };
};

const commonTextStyles = (value?: any) => ({
  ...(value?._c !== undefined
    ? { color: color(value?._c) }
    : config.defaultTextColor
      ? { color: config.defaultTextColor }
      : {}),
  ...(value?._fontSize !== undefined
    ? { fontSize: scale(value._fontSize) }
    : config.defaultFontSize
      ? { fontSize: config.defaultFontSize }
      : {}),
  ...(value?._bold !== undefined
    ? { fontWeight: typeof value?._bold === 'string' ? value?._bold : 'bold' }
    : {}),
  ...(value?._fontFamily !== undefined
    ? { fontFamily: value._fontFamily }
    : config.defaultFontFamily
      ? { fontFamily: config.defaultFontFamily }
      : {}),
  ...(value?._textAline !== undefined ? { textAlign: value._textAline } : {}),
  ...(value?._lineHeight !== undefined
    ? { lineHeight: value._lineHeight }
    : {}),

  ...commonPadMadStyles(value),
  ...commonSizes(value),
});

// Common width and height styles
const commonWidthHeight = (value?: any) => ({
  ...(value?._size !== undefined
    ? {
        width: config.enableResponsive
          ? moderateScale(value?._size)
          : value?._size,
        height: config.enableResponsive
          ? moderateScale(value?._size)
          : value?._size,
      }
    : {}),
});

const center = (value?: any) =>
  value?._center !== undefined
    ? {
        alignItems: 'center' as ViewStyle['alignItems'],
        justifyContent: 'center' as ViewStyle['justifyContent'],
      }
    : {};

const centerX = (value?: any) =>
  value?._centerX !== undefined
    ? { alignItems: 'center' as ViewStyle['alignItems'] }
    : {};

const centerY = (value?: any) =>
  value?._centerY !== undefined
    ? { justifyContent: 'center' as ViewStyle['justifyContent'] }
    : {};

const commonGapStyles = (value?: any) => ({
  flexWrap: value?._flexWrap, // Use flexWrap directly
  ...(value?._gap !== undefined ? { gap: value?._gap } : {}), // Conditionally apply gap
  ...(value?._rowGap !== undefined ? { rowGap: value?._rowGap } : {}), // Conditionally apply rowGap
  ...(value?._colGap !== undefined ? { columnGap: value?._colGap } : {}), // Conditionally apply columnGap
});

const commonFlexStyle = (value?: any) => ({
  ...(value?._flex !== undefined ? { flex: value._flex } : {}),
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
  commonColor,
  commonJcAlineFlexStyle,
  commonGapStyles,
  commonFlexStyle,
  commonShadowStyles,
  commonAlignSelf,
};
