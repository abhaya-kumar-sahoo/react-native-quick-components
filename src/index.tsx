/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import type {
  AbsoluteViewProps,
  AppButtonProps,
  CustomCircleProps,
  CustomImageProps,
  CustomTextProps,
  CustomViewProps,
  FlexViewProps,
  RowViewProps,
} from './types/types';

interface NewConfig {
  defaultTextColor?: string;
  defaultBackgroundColor?: string | null;
  defaultFontFamily?: string | null;
  defaultFontSize?: string | number;
  colorTypes?: any;
}
let config: NewConfig = {
  defaultTextColor: 'blue',
  defaultBackgroundColor: null,
  defaultFontFamily: null,
  defaultFontSize: 20,
  colorTypes: null,
};

export const init = (newConfig: NewConfig) => {
  if (newConfig.defaultTextColor) {
    config.defaultTextColor = newConfig.defaultTextColor;
  }
  if (newConfig.defaultBackgroundColor) {
    config.defaultBackgroundColor = newConfig.defaultBackgroundColor;
  }
  if (newConfig.defaultFontFamily) {
    config.defaultFontFamily = newConfig.defaultFontFamily;
  }
  if (newConfig.defaultFontSize) {
    config.defaultFontSize = newConfig.defaultFontSize;
  }
  if (newConfig.colorTypes) {
    config.colorTypes = newConfig.colorTypes;
  }
};

const applyCommonStyles = ({
  FullColumnCenter,
  FullRowCenter,
  RowSpacBtw,
  ColumnSpacBtw,
  ColumnCenterStart,
  RowCenterStart,
  P,
  PL,
  PR,
  PT,
  PB,
  PX,
  PY,
  M,
  ML,
  MB,
  MT,
  MR,
  MY,
  MX,
  BOR,
  BOW,
  BOC,
  SIZE,
  W,
  H,
  BG,
  center_me,
  style,
}: {
  P?: number | string;
  PL?: number | string;
  PR?: number | string;
  PT?: number | string;
  PB?: number | string;
  PX?: number | string;
  PY?: number | string;
  M?: number | string;
  ML?: number | string;
  MB?: number | string;
  MT?: number | string;
  MR?: number | string;
  MY?: number | string;
  MX?: number | string;
  BOR?: number | string;
  BOW?: number | string;
  BOC?: string;
  center_me?: string;
  BG?: string;
  SIZE?: number;
  W?: number | string | undefined;
  H?: number | string | undefined;
  style?: any;
  FullColumnCenter?: boolean;
  FullRowCenter?: boolean;
  RowSpacBtw?: boolean;
  ColumnSpacBtw?: boolean;
  ColumnCenterStart?: boolean;
  RowCenterStart?: boolean;
}) => {
  return {
    // padding
    ...(P ? { padding: P } : {}),
    ...(PL ? { paddingLeft: PL } : {}),
    ...(PR ? { paddingRight: PR } : {}),
    ...(PT ? { paddingTop: PT } : {}),
    ...(PB ? { paddingBottom: PB } : {}),
    ...(PX ? { paddingHorizontal: PX } : {}),
    ...(PY ? { paddingVertical: PY } : {}),
    // margin
    ...(M ? { margin: M } : {}),
    ...(ML ? { marginLeft: ML } : {}),
    ...(MR ? { marginRight: MR } : {}),
    ...(MT ? { marginTop: MT } : {}),
    ...(MB ? { marginBottom: MB } : {}),
    ...(MX ? { marginHorizontal: MX } : {}),
    ...(MY ? { marginVertical: MY } : {}),
    // border
    ...(BOR ? { borderRadius: BOR } : {}),
    ...(BOW ? { borderWidth: BOW, borderColor: BOC } : {}),
    //sizes
    ...(SIZE ? { width: SIZE, height: SIZE } : {}),
    ...(W ? { width: W } : {}),
    ...(H ? { height: H } : {}),
    //colors
    ...(BG
      ? { backgroundColor: BG }
      : { backgroundColor: config.defaultBackgroundColor }),

    //center

    ...(FullColumnCenter
      ? { justifyContent: 'center', alignItems: 'center' }
      : {}),
    ...(RowCenterStart
      ? {
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }
      : {}),
    ...(FullRowCenter
      ? { justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }
      : {}),
    ...(RowSpacBtw
      ? {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }
      : {}),
    ...(ColumnSpacBtw
      ? { justifyContent: 'space-between', alignItems: 'center' }
      : {}),
    ...(ColumnCenterStart
      ? { justifyContent: 'center', alignItems: 'flex-start' }
      : {}),

    ...(center_me ? { alignSelf: center_me } : {}),

    //custom styles
    ...(typeof style === 'object' ? style : {}),
  };
};

const applyTextStyles = ({
  P,
  PL,
  PR,
  PT,
  PB,
  PX,
  PY,
  M,
  ML,
  MB,
  MT,
  MR,
  MY,
  MX,
  BOR,
  BOW,
  BOC,
  W,
  H,
  BG,
  center_me,
  style,
}: {
  P?: number | string;
  PL?: number | string;
  PR?: number | string;
  PT?: number | string;
  PB?: number | string;
  PX?: number | string;
  PY?: number | string;
  M?: number | string;
  ML?: number | string;
  MB?: number | string;
  MT?: number | string;
  MR?: number | string;
  MY?: number | string;
  MX?: number | string;
  BOR?: number | string;
  BOW?: number | string;
  BOC?: string;
  center_me?: string;
  BG?: string;
  SIZE?: number;
  W?: number | string | undefined;
  H?: number | string | undefined;
  style?: any;
}) => {
  return {
    // padding
    ...(P ? { padding: P } : {}),
    ...(PL ? { paddingLeft: PL } : {}),
    ...(PR ? { paddingRight: PR } : {}),
    ...(PT ? { paddingTop: PT } : {}),
    ...(PB ? { paddingBottom: PB } : {}),
    ...(PX ? { paddingHorizontal: PX } : {}),
    ...(PY ? { paddingVertical: PY } : {}),
    // margin
    ...(M ? { margin: M } : {}),
    ...(ML ? { marginLeft: ML } : {}),
    ...(MR ? { marginRight: MR } : {}),
    ...(MT ? { marginTop: MT } : {}),
    ...(MB ? { marginBottom: MB } : {}),
    ...(MX ? { marginHorizontal: MX } : {}),
    ...(MY ? { marginVertical: MY } : {}),
    // border
    ...(BOR ? { borderRadius: BOR } : {}),
    ...(BOW ? { borderWidth: BOW, borderColor: BOC } : {}),
    //sizes
    ...(W ? { width: W } : {}),
    ...(H ? { height: H } : {}),
    //colors
    ...(BG ? { backgroundColor: BG } : {}),

    //center

    ...(center_me ? { alignSelf: center_me } : {}),

    //custom styles
    ...(typeof style === 'object' ? style : {}),
  };
};
export const AppText: React.FC<CustomTextProps> = ({
  children,
  F_SIZE,
  FONT,
  C,
  LINE_H,
  N_LINE = 5,
  FONT_WEIGHT,
  ...rest // Rest props for Text component
}) => {
  return (
    <Text
      numberOfLines={N_LINE}
      style={[
        F_SIZE ? { fontSize: F_SIZE } : { fontSize: config.defaultFontSize },
        C ? { color: C } : { color: config.defaultTextColor },
        FONT ? { fontFamily: FONT } : {},
        LINE_H ? { lineHeight: LINE_H } : {},
        FONT_WEIGHT ? { fontWeight: FONT_WEIGHT } : {},
        applyTextStyles(rest),
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const AppView: React.FC<CustomViewProps> = ({
  children,
  ...rest // Rest props for Text component
}) => {
  return (
    <TouchableOpacity style={[applyCommonStyles(rest)]} {...rest}>
      {children}
    </TouchableOpacity>
  );
};

export const AppImage: React.FC<CustomImageProps> = ({
  source,
  resizeMode = 'contain',
  ...rest // Rest props for Image component
}) => {
  console.log('fontSize', rest);

  return (
    <Image
      source={source}
      resizeMode={resizeMode}
      style={[applyCommonStyles(rest)]}
      {...rest}
    />
  );
};

export const CircleView: React.FC<CustomCircleProps> = ({
  children,
  SIZE = 50,
  ...rest // Rest props for Image component
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
        },
        applyCommonStyles(rest),
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

export const RowView: React.FC<RowViewProps> = ({
  children,
  ALI = 'center',
  JC = 'space-between',
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        { flexDirection: 'row', alignItems: ALI, justifyContent: JC },
        applyCommonStyles(rest),
      ]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
};

export const ColumView: React.FC<RowViewProps> = ({
  children,
  ALI = 'center',
  JC = 'center',
  ...props
}) => {
  return (
    <View
      style={[
        { flexDirection: 'column', alignItems: ALI, justifyContent: JC },
        applyCommonStyles(props),
      ]}
    >
      {children}
    </View>
  );
};

export const AbsoluteView: React.FC<AbsoluteViewProps> = ({
  children,
  T,
  B,
  L,
  R,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        true ? { position: 'absolute' } : {},
        T !== undefined ? { top: T } : {},
        B !== undefined ? { bottom: B } : {},
        L !== undefined ? { left: L } : {},
        R !== undefined ? { right: R } : {},
        applyCommonStyles(props),
      ]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export const FlexView: React.FC<FlexViewProps> = ({ children, ...props }) => {
  return (
    <View style={[{ flex: 1 }, applyCommonStyles(props)]} {...props}>
      {children}
    </View>
  );
};

export const FlexSafeView: React.FC<FlexViewProps> = ({
  children,
  ...props
}) => {
  return (
    <SafeAreaView style={[{ flex: 1 }, applyCommonStyles(props)]} {...props}>
      {children}
    </SafeAreaView>
  );
};

export const AppButton: React.FC<AppButtonProps> = ({
  title = 'Press',
  C = 'white',
  BG = 'red',
  PX = 20,
  PY = 3,
  MX = undefined,
  MY = undefined,
  F_SIZE = 20,
  W,
  H,
  // border
  BOR = 40,
  BOW = undefined,
  BOC = undefined,
  FONT = 'CalibriBold',
  FONT_WEIGHT,
  center = false,

  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.6}
      style={[
        BG ? { backgroundColor: BG } : {},

        BOR ? { borderRadius: BOR } : {},
        {
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: center ? 'center' : 'baseline',
        },
        // size
        W ? { width: W } : {},
        H ? { height: H } : {},
        //border
        BOR ? { borderRadius: BOR } : {},
        BOC ? { borderColor: BOC } : {},
        BOW ? { borderWidth: BOW } : {},
        // margin

        MX ? { marginHorizontal: MX } : {},
        MY ? { margin: MY } : {},

        // padding

        PX ? { paddingHorizontal: PX } : {},
        PY ? { paddingBottom: PY + 3, paddingTop: PY } : {},
      ]}
    >
      <AppText FONT_WEIGHT={FONT_WEIGHT} C={C} FONT={FONT} F_SIZE={F_SIZE}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};
