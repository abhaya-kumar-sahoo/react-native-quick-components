import { StyleSheet, Dimensions } from 'react-native';

import {
  commonBackGroundColor,
  commonBorder,
  commonPadMadStyles,
  commonSizes,
  commonTextStyles,
  commonWidthHeight,
  centerY,
  centerX,
  center,
} from './style.component';
const { width } = Dimensions.get('window');

export const styles = (value: any) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      ...(value?.ALI !== undefined
        ? { alignItems: value?.ALI }
        : { alignItems: 'center' }),
      ...(value?.JC !== undefined
        ? { justifyContent: value?.JC }
        : { justifyContent: 'space-between' }),
      flexWrap: value?.flexWrap, // Use flexWrap directly
      ...(value?.gap !== undefined ? { gap: value?.gap } : {}), // Conditionally apply gap
      ...(value?.rowGap !== undefined ? { rowGap: value?.rowGap } : {}), // Conditionally apply rowGap
      ...(value?.colGap !== undefined ? { columnGap: value?.colGap } : {}), // Conditionally apply columnGap
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonBorder(value),
      ...commonSizes(value),
      ...centerX(value),
      ...centerY(value),
      ...center(value),
    },
    column: {
      flexDirection: 'column',
      ...(value?.ALI !== undefined
        ? { alignItems: value?.ALI }
        : { alignItems: 'center' }),
      ...(value?.JC !== undefined
        ? { justifyContent: value?.JC }
        : { justifyContent: 'space-between' }),
      flexWrap: value?.flexWrap, // Use flexWrap directly
      ...(value?.gap !== undefined ? { gap: value?.gap } : {}), // Conditionally apply gap
      ...(value?.rowGap !== undefined ? { rowGap: value?.rowGap } : {}), // Conditionally apply rowGap
      ...(value?.colGap !== undefined ? { columnGap: value?.colGap } : {}), // Conditionally apply columnGap
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonBorder(value),
      ...commonSizes(value),
      ...centerX(value),
      ...centerY(value),
      ...center(value),
    },

    container: {
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonBorder(value),
      ...commonSizes(value),
      alignSelf: 'flex-start',
      overflow: 'hidden',
      ...centerX(value),
      ...centerY(value),
      ...center(value),
      // borderRadius: 20,
    },
    view: {
      ...(value?.FLX !== undefined ? { flex: value.FLX } : {}),
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonBorder(value),
      ...commonSizes(value),
      ...centerX(value),
      ...centerY(value),
      ...center(value),
    },
    flex_view: {
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonBorder(value),
      ...commonSizes(value),
      ...centerX(value),
      ...centerY(value),
      ...center(value),
      flex: 1,
    },
    text: {
      ...commonTextStyles(value),
    },

    textInput: {
      ...commonTextStyles(value),
      ...commonBorder(value),
      ...commonSizes(value),
      ...commonBackGroundColor(value),
    },
    box: {
      flexBasis: value?.flexBasis,
      flexGrow: value?.flexGrow,
      flexShrink: value?.flexShrink,
      flexWrap: value?.flexWrap,
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonBorder(value),
      ...commonSizes(value),
      ...commonWidthHeight(value),
      ...centerX(value),
      ...centerY(value),
      ...center(value),
    },
    circle: {
      ...commonWidthHeight(value),
      borderRadius: value?.SIZE,
      borderWidth: value?.BOW,
      borderColor: value?.BOC,
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      overflow: 'hidden',
      ...centerX(value),
      ...centerY(value),
      ...center(value),
      // ...commonSizes(value),
      //...commonWidthHeight(value),
    },
    image: {
      ...commonBackGroundColor(value),
      ...commonPadMadStyles(value),
      ...commonSizes(value),
      ...commonWidthHeight(value),
      ...commonBorder(value),
    },
    divider: {
      ...(value?.isVertical !== undefined
        ? { width: value?.HW ?? 1 }
        : { width: value?.VW ?? width * 0.09 }),
      ...(value?.isVertical !== undefined
        ? { height: value?.HH ?? 30 }
        : { height: value?.VH ?? 1 }),
      backgroundColor: value?.BG,
      marginVertical: value?.MY,
      marginHorizontal: value?.MX,
    },
    button: {
      ...(value?.H !== undefined ? { height: value?.H ?? 60 } : {}),
      ...(value?.W !== undefined ? { width: value?.W ?? '70%' } : {}),
      ...commonPadMadStyles(value),
      ...commonSizes(value),
      ...commonWidthHeight(value),
      ...commonBorder(value),
      ...commonBackGroundColor(value),
      alignSelf: 'flex-start',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    rowStyle: {
      flexDirection: 'row',
      justifyContent: value !== undefined ? 'space-around' : 'flex-start',
      alignItems: 'center',
    },
    absolute: {
      position: 'absolute',
      ...(value?.T !== undefined ? { top: value?.T } : {}),
      ...(value?.L !== undefined ? { left: value?.L } : {}),
      ...(value?.R !== undefined ? { right: value?.R } : {}),
      ...(value?.B !== undefined ? { bottom: value?.B } : {}),
      ...(value?.zIndex !== undefined
        ? { zIndex: value?.zIndex }
        : { zIndex: 1 }),
      ...commonPadMadStyles(value),
      ...commonSizes(value),
      ...commonWidthHeight(value),
      ...commonBorder(value),
      ...commonBackGroundColor(value),
      ...centerX(value),
      ...centerY(value),
      ...center(value),
    },
  });
