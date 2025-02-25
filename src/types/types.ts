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
  ModalProps,
  ActivityIndicatorProps,
} from 'react-native';
import type { DefaultColors } from './colors';
import type { HeightWidthTypes } from './h_w_types';
import type { TextStylingProps } from './text.types';
import type { SizeProps, SpacingProps } from './size.types';
import type { CustomBoxProps } from './box.types';
import type { BorderProps } from './border.types';

export type ColorSuggestion =
  | keyof typeof DefaultColors
  | `${keyof typeof DefaultColors}:${keyof (typeof DefaultColors)['slate']}`
  | (string & {});

/**
 * Interface for handling overflow properties.
 */
export interface OverFlowTypes {
  /**
   * Specifies how to handle content that overflows the component's bounds.
   * Accepts `visible`, `hidden`, or `scroll`.
   *
   * @example
   * // Set overflow to hidden:
   * <Component $overflow="hidden" />
   */
  $overflow?: ViewStyle['overflow'];
}

/**
 * Interface for defining background styling properties.
 */
export interface BackgroundProps {
  /**
   * Specifies the background color of the component.
   * Accepts any valid color value (e.g., `"#fff"`, `"rgba(255,255,255,0.8)"`, or named colors).
   *
   * @example
   * // Set background color to light gray:
   * <Component $bg="#f0f0f0" />
   */
  $bg?: ColorSuggestion;
}

// Background and Shadow Props
/**
 * Interface for handling alignment and centering properties of a component.
 */
export interface CenterProps {
  /**
   * Specifies how the component is aligned along the cross-axis within its parent container.
   * Accepts `auto`, `flex-start`, `flex-end`, `center`, `baseline`, or `stretch`.
   *
   * @example
   * // Align the component to the center along the cross-axis:
   * <Component $alignSelf="center" />
   */
  $alignSelf?: ViewStyle['alignSelf'];

  /**
   * Centers the component both horizontally and vertically within its parent.
   * Equivalent to setting `$centerX` and `$centerY` to `true`.
   *
   * @example
   * // Center the component in both directions:
   * <Component $center={true} />
   */
  $center?: boolean;

  /**
   * Centers the component horizontally within its parent.
   *
   * @example
   * // Center the component horizontally:
   * <Component $centerX={true} />
   */
  $centerX?: boolean;

  /**
   * Centers the component vertically within its parent.
   *
   * @example
   * // Center the component vertically:
   * <Component $centerY={true} />
   */
  $centerY?: boolean;
}

/**
 * Interface for defining size-related properties for a component.
 * Extends `OverFlowTypes` to include overflow handling.
 */

// Combined Text Props
export interface AppTextProps
  extends TextStylingProps,
    SpacingProps,
    BorderProps,
    BackgroundProps,
    SizeProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export interface AppTextInputProps
  extends TextStylingProps,
    SpacingProps,
    BorderProps,
    BackgroundProps,
    SizeProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>; // style
  $leftComponent?: React.ReactNode;
  $rightComponent?: React.ReactNode;
  $styleContainer?: AppViewProps & {
    rest?: object;
  }; // container
}

type AlertType = 'success' | 'warning' | 'error';
type InputType = 'user' | 'email' | 'phone' | 'password';

interface TextBoxProp extends TextInputProps {
  onBlur?: () => void;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onSubmitEditing?: () => void;
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  value?: string;
  /////
  blurOnSubmit?: boolean;
  $alertType?: AlertType;
  $iconColor?: string;
  $iconSize?: number;
  $hint?: string;
  $hintColor?: string;
  $hintStyles?: TextStyle;
  $inputStyle?: TextStyle;
  $rtl?: boolean;
  $containerStyles?: ViewStyle;
  $inputType?: InputType;
  $dividerColor?: string;
  $dividerWidth?: number;
  $dividerHeight?: number;
  $dividerMarginLeft?: number;
  $dividerMarginRight?: number;
  $dividerMarginHorizontal?: number;
}

export interface AppModalProps extends ModalProps {
  children?: ReactNode;
  $onCloseModal?: () => void;
  $iconColor?: ColorSuggestion;
  $iconSize?: number;
  transparent?: boolean;
  $transparentColor?: string;
  $boxBackgroundColor?: ColorSuggestion;
  $boxHeight?: HeightWidthTypes;
  $boxWidth?: HeightWidthTypes;
  $circleCancel?: boolean;
  $showCancelIcon?: boolean;
  $presentationStyle?: ModalProps['presentationStyle'];
  $containerStyle?: ViewStyle;
  $boxStyles?: ViewStyle;
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
  $bor?: number;
}

export interface BoxSizeProps {
  $size?: number | string;
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
  BackgroundProps &
  SpacingProps &
  SizeProps & {
    children?: ReactNode;
    $gap?: ViewStyle['gap'];
    $rowGap?: ViewStyle['rowGap'];
    $colGap?: ViewStyle['columnGap'];
    $flexWrap?: ViewStyle['flexWrap'];
    $alignItems?: ViewStyle['alignItems'];
    $jc?: ViewStyle['justifyContent'];
    $fs?: boolean;
    $c?: boolean;
    $fe?: boolean;
    $sb?: boolean;
    $se?: boolean;
    $sa?: boolean;
  };
export type AbsoluteViewProps = TouchableOpacityProps &
  BorderProps &
  CenterProps &
  BackgroundProps &
  OverFlowTypes &
  SpacingProps & {
    children?: ReactNode;
    $zIndex?: number;
    $size?: number | string;
    $t?: number | string;
    $b?: number | string;
    $l?: number | string;
    $r?: number | string;
  };

export type AppButtonProps = TouchableOpacityProps &
  BorderProps &
  BackgroundProps &
  SpacingProps & {
    $title?: string;
    onPress?: () => void;
    $loaderColor?: ColorSuggestion;
    $loaderSize?: ActivityIndicatorProps['size'];
    $loading?: boolean;
    style?: StyleProp<TouchableOpacityProps>;
    $textStyle?: AppTextProps & {
      rest?: object;
    };
    $leftComponent?: React.ReactNode;
    $rightComponent?: React.ReactNode;
    $c?: ColorSuggestion;
    $px?: number | undefined;
    $py?: number | undefined;
    $mx?: number | undefined;
    $my?: number | undefined;
    $w?: HeightWidthTypes;
    $h?: HeightWidthTypes;
  };

export type CustomImageProps = CustomImageProp &
  ImagePropsBase & {
    style?: StyleProp<ImageStyle>; // style
  };

export type DividerProps = {
  $h?: HeightWidthTypes; // width
  $w?: HeightWidthTypes; // height
  $c?: ColorSuggestion;
  $bor?: number;
  $mx?: number | string;
  $my?: number | string;
};

export type CustomTextProps = TextProps & AppTextProps;
export type CustomTextInputProps = TextInputProps & AppTextInputProps;
export type CustomViewProps = TouchableOpacityProps & AppViewProps;
export type FlexViewProps = ViewProps & AppViewProps;
export type BoxProps = CustomBoxProps &
  AppViewProps &
  TouchableOpacityProps &
  BoxSizeProps;

export type TextBoxProps = TextBoxProp;
