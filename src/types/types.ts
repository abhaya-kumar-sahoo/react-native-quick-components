import React, { type ReactNode } from 'react';
import type {
  ImageProps,
  ImageStyle,
  StyleProp,
  TextProps,
  TextStyle,
  ViewStyle,
  ViewProps,
  TouchableOpacityProps,
  TextInputProps,
  ImagePropsBase,
} from 'react-native';
import type { DefaultColors } from './colors';

type ColorSuggestion =
  | keyof typeof DefaultColors
  | `${keyof typeof DefaultColors}:${keyof (typeof DefaultColors)['slate']}`
  | (string & {});

export interface TextStylingProps {
  C?: ColorSuggestion;
  FONT?: string; // font family
  F_SIZE?: number; // font size
  ALINE?: TextStyle['textAlign']; // text align
  LINE_H?: number; // line height
  F_WEIGHT?: TextStyle['fontWeight'];
}

// Spacing Props
export interface SpacingProps {
  P?: number; // padding
  PL?: number; // padding left
  PR?: number; // padding right
  PT?: number; // padding top
  PB?: number; // padding bottom
  PX?: number; // padding horizontal
  PY?: number; // padding vertical
  M?: number; // margin
  ML?: number; // margin left
  MB?: number; // margin bottom
  MT?: number; // margin top
  MR?: number; // margin right
  MX?: number; // margin horizontal
  MY?: number; // margin vertical
}

// Border Props
export interface BorderProps {
  BOR?: number; // border radius
  BOW?: number;
  BOC?: ColorSuggestion; // border color
}

// Background and Shadow Props
export interface BackgroundProps {
  BG?: ColorSuggestion; // background color
}
// Background and Shadow Props
interface CenterProps {
  alignSelf?: ViewStyle['alignSelf']; // background color]
  center?: boolean;
  centerX?: boolean;
  centerY?: boolean;
}

// Size Props
export interface SizeProps {
  W?: number | string; // width
  H?: number | string; // height
  FLX?: number;
}

// Combined Text Props
export interface AppTextProps
  extends TextStylingProps,
    SpacingProps,
    BorderProps,
    BackgroundProps,
    SizeProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>; // style
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  inputBoxStyle?: AppViewProps & {
    rest?: object;
  }; // container
}

// Combined View Props
export interface AppViewProps
  extends SpacingProps,
    BorderProps,
    BackgroundProps,
    CenterProps,
    SizeProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>; // style
}

// Combined View Props
export interface CustomBoxProps {
  flexBasis?: ViewStyle['flexBasis'];
  flexGrow?: ViewStyle['flexGrow'];
  flexShrink?: ViewStyle['flexShrink'];
  flexWrap?: ViewStyle['flexWrap'];
  gap?: ViewStyle['gap'];
  rowGap?: ViewStyle['rowGap'];
  colGap?: ViewStyle['columnGap'];
}

// Source Props
export interface SourceProps {
  source: ImageProps['source'];
}

// Image Styling Props
export interface ImageStylingProps {
  resizeMode?: ImageProps['resizeMode'];
  BOR?: number;
}

export interface BoxSizeProps {
  SIZE?: number | string;
}

export interface CustomImageProp
  extends SourceProps,
    ImageStylingProps,
    SpacingProps,
    BorderProps,
    BackgroundProps,
    BoxSizeProps,
    SizeProps {
  style?: StyleProp<ImageStyle>; // style
}

export type CustomCircleProps = TouchableOpacityProps &
  SpacingProps &
  BoxSizeProps &
  CenterProps &
  BackgroundProps &
  BorderProps & {
    style?: StyleProp<ImageStyle>;
    children?: ReactNode;
    // style
  };
export type RowViewProps = TouchableOpacityProps &
  BorderProps &
  CenterProps &
  SpacingProps & {
    children?: ReactNode;
    BG?: ColorSuggestion;
    JC?: ViewStyle['justifyContent'];
    ALI?: ViewStyle['alignItems'];
    gap?: ViewStyle['gap'];
    rowGap?: ViewStyle['rowGap'];
    colGap?: ViewStyle['columnGap'];
    flexWrap?: ViewStyle['flexWrap'];
  };
export type AbsoluteViewProps = TouchableOpacityProps &
  BorderProps &
  CenterProps &
  SpacingProps & {
    children?: ReactNode;
    BG?: ColorSuggestion;
    T?: number;
    B?: number;
    L?: number;
    R?: number;
    SIZE?: number | string;
  };

export type AppButtonProps = TouchableOpacityProps &
  BorderProps &
  SpacingProps & {
    title?: string;
    C?: ColorSuggestion;
    BG?: ColorSuggestion;
    onPress?: () => void;
    PX?: number | undefined;
    PY?: number | undefined;
    MX?: number | undefined;
    MY?: number | undefined;
    W?: number; // width
    H?: number; // height
    style?: StyleProp<TouchableOpacityProps>;
    textStyle?: AppTextProps & {
      rest?: object;
    }; // container
    leftComponent?: React.ReactNode;
    rightComponent?: React.ReactNode;
  };

export type CustomImageProps = CustomImageProp &
  ImagePropsBase & {
    style?: StyleProp<ImageStyle>; // style
  };

export type DividerProps = {
  HW?: number | string; // width
  HH?: number | string; // height
  VW?: number | string; // width
  VH?: number | string; // height
  BG?: ColorSuggestion;
  isVertical?: boolean;
  BOR?: number;
  BOC?: number;
  BOW?: number;
  MX?: number | string;
  MY?: number | string;
};

export type CustomTextProps = TextProps & AppTextProps;
export type CustomTextInputProps = TextInputProps & AppTextProps;
export type CustomViewProps = TouchableOpacityProps & AppViewProps;
export type FlexViewProps = ViewProps & AppViewProps;
export type BoxProps = CustomBoxProps & AppViewProps & TouchableOpacityProps;
