import React, { type ReactNode } from 'react';
import type {
  ImageProps,
  ImageStyle,
  StyleProp,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
  ViewProps,
} from 'react-native';
// type FontFamily = (typeof config.Colors)[number];

export interface TextStylingProps {
  C?: string; // color
  FONT?: string; // font family
  F_SIZE?: number; // font size
  T_ALIGN?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // text align
  LINE_H?: number; // line height
  N_LINE?: number; // number of lines
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
  BOC?: string; // border color
}

// Background and Shadow Props
export interface BackgroundProps {
  BG?: string; // background color
}
// Background and Shadow Props
interface CenterProps {
  center_me?: ViewStyle['alignSelf']; // background color
  FullRowCenter?: boolean;
  FullColumnCenter?: boolean;
  RowCenterStart?: boolean;
  RowSpacBtw?: boolean;
  ColumnSpacBtw?: boolean;
  ColumnCenterStart?: boolean;
}

// Size Props
export interface SizeProps {
  W?: number; // width
  H?: number; // height
  FLEX?: number;
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
  SIZE?: number;
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

export type CustomCircleProps = SpacingProps &
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
    BG?: string;
    JC?: ViewStyle['justifyContent'];
    ALI?: ViewStyle['alignItems'];
  };
export type AbsoluteViewProps = TouchableOpacityProps &
  BorderProps &
  CenterProps &
  SpacingProps & {
    children?: ReactNode;
    BG?: string;
    T?: number;
    B?: number;
    L?: number;
    R?: number;
  };

export type CustomImageProps = CustomImageProp & {
  style?: StyleProp<ImageStyle>; // style
};

export type CustomTextProps = TextProps & AppTextProps;
export type CustomViewProps = TouchableOpacityProps & AppViewProps;
export type FlexViewProps = ViewProps & AppViewProps;
