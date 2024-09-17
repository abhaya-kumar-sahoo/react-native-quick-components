import { StyleSheet } from 'react-native';

// Common padding and margin styles with conditional spreading
const commonPadMadStyles = (value?: any) => ({
  ...(value?.P ? { padding: value.P } : {}),
  ...(value?.PL ? { paddingLeft: value.PL } : {}),
  ...(value?.PR ? { paddingRight: value.PR } : {}),
  ...(value?.PT ? { paddingTop: value.PT } : {}),
  ...(value?.PB ? { paddingBottom: value.PB } : {}),
  ...(value?.PX ? { paddingHorizontal: value.PX } : {}),
  ...(value?.PY ? { paddingVertical: value.PY } : {}),
  ...(value?.ML ? { marginLeft: value.ML } : {}),
  ...(value?.MT ? { marginTop: value.MT } : {}),
  ...(value?.MB ? { marginBottom: value.MB } : {}),
  ...(value?.MX ? { marginHorizontal: value.MX } : {}),
  ...(value?.MY ? { marginVertical: value.MY } : {}),
});

// Common background color style
const commonBackGroundColor = (value?: any) => ({
  ...(value?.BG && { backgroundColor: value?.BG }),
});

// Common border styles with conditional spreading
const commonBorderRadius = (value?: any) => ({
  ...(value?.BOR ? { borderRadius: value.BOR } : {}),
  ...(value?.BOW ? { borderWidth: value.BOW } : {}),
  ...(value?.BOC ? { borderColor: value.BOC } : {}),
  ...(value?.BTRL ? { borderTopLeftRadius: value.BTRL } : {}),
  ...(value?.BTRR ? { borderTopRightRadius: value.BTRR } : {}),
  ...(value?.BTLR ? { borderBottomLeftRadius: value.BTLR } : {}),
  ...(value?.BTBR ? { borderBottomRightRadius: value.BTBR } : {}),
});

// Common size styles with conditional spreading
const commonSizes = (value?: any) => ({
  ...(value?.W ? { width: value.W } : {}),
  ...(value?.H ? { height: value.H } : {}),
  ...(value?.MIN_W ? { minWidth: value.MIN_W } : {}),
  ...(value?.MIN_H ? { minHeight: value.MIN_H } : {}),
  ...(value?.MAX_W ? { maxWidth: value.MAX_W } : {}),
  ...(value?.MAX_H ? { maxHeight: value.MAX_H } : {}),
  ...(value?.ASPECT_RATIO ? { aspectRatio: value.ASPECT_RATIO } : {}),
});

// Common width and height styles
const commonWidthHeight = (value?: any) => ({
  ...(value?.SIZE ? { width: value?.SIZE, height: value?.SIZE } : {}),
});
export const styles = (value: any) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    column: {
      flexDirection: 'column',
    },
    rowCenter: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    columnCenter: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      ...(value?.C ? { color: value.C } : {}),
      ...(value?.F_SIZE ? { fontSize: value.F_SIZE } : {}),
      ...(value?.F_WEIGHT ? { fontWeight: value.F_WEIGHT } : {}),
      ...(value?.FONT ? { fontFamily: value.FONT } : {}),
      ...(value?.ALINE ? { textAlign: value.ALINE } : {}),
      ...(value?.LINE_H ? { lineHeight: value.LINE_H } : {}),
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonSizes(value),
    },
    box: {
      flexBasis: value?.flexBasis,
      flexGrow: value?.flexGrow,
      flexShrink: value?.flexShrink,
      flexWrap: value?.flexWrap,
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonBorderRadius(value),
      //...commonShadow(value),
      ...commonSizes(value),
      ...commonWidthHeight(value),
    },
    circle: {
      ...commonWidthHeight(value),
      borderRadius: value?.SIZE,
      borderWidth: value?.BOW,
      borderColor: value?.BOC,
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),

      // ...commonSizes(value),
      //...commonWidthHeight(value),
    },
  });
