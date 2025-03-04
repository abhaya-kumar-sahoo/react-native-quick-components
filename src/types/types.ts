import React, { type ReactNode } from 'react';
import type {
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
  FlexAlignType,
} from 'react-native';
import type { DefaultColors } from './colors';
import type { HeightWidthTypes } from './h_w_types';
import type { TextStylingProps } from './text.types';
import type { SizeProps, PaddingMarginProps } from './size.types';
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
   * $bg: Shortcut for "backgroundColor".
   * Sets the background color of the component.
   */
  $bg?: ColorSuggestion;
}

export interface CenterProps {
  /**
   * $as: Shortcut for "alignSelf".
   * Overrides the parent's alignItems for this specific component.
   */
  $as?: 'auto' | FlexAlignType;

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

// Combined Text Props
export interface AppTextProps
  extends TextStylingProps,
    PaddingMarginProps,
    BorderProps,
    BackgroundProps,
    SizeProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export interface AppTextInputProps
  extends TextStylingProps,
    PaddingMarginProps,
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
  extends PaddingMarginProps,
    BorderProps,
    BackgroundProps,
    CenterProps,
    SizeProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>; // style
}

export interface BoxSizeProps {
  $size?: number | string;
}

export interface CustomImageProp
  extends PaddingMarginProps,
    BorderProps,
    BackgroundProps,
    BoxSizeProps,
    SizeProps {
  style?: StyleProp<ImageStyle>; // style
}

export type CustomCircleProps = TouchableOpacityProps &
  PaddingMarginProps &
  BoxSizeProps &
  CenterProps &
  BackgroundProps &
  BorderProps & {
    style?: StyleProp<ImageStyle>;
    children?: ReactNode;
  };
export type RowViewProps = TouchableOpacityProps &
  BorderProps &
  CenterProps &
  BackgroundProps &
  PaddingMarginProps &
  SizeProps & {
    /**
     * $fw: Shorthand for "flexWrap".
     * Accepts `"nowrap"`, `"wrap"`, or `"wrap-reverse"`.
     */
    children?: ReactNode;
    /**
     * $fw: Shorthand for "flexWrap".
     * Accepts `"nowrap"`, `"wrap"`, or `"wrap-reverse"`.
     */
    $fw?: ViewStyle['flexWrap'];

    /**
     * $g: Shorthand for "gap".
     * Accepts `number` or `string` (e.g., `10` or `"1rem"`).
     */
    $g?: ViewStyle['gap'];

    /**
     * $rg: Shorthand for "rowGap".
     * Accepts `number` or `string` (e.g., `15` or `"1em"`).
     */
    $rg?: ViewStyle['rowGap'];

    /**
     * $cg: Shorthand for "columnGap".
     * Accepts `number` or `string` (e.g., `20` or `"2em"`).
     */
    $cg?: ViewStyle['columnGap'];

    /**
     * $ai: Shorthand for "alignItems".
     * Accepts `"flex-start"`, `"flex-end"`, `"center"`, `"stretch"`, or `"baseline"`.
     */
    $ai?: ViewStyle['alignItems'];
    /**
     * $jc: Shorthand for "justifyContent".
     * Accepts `"flex-start"`, `"flex-end"`, `"center"`, `"space-between"`, or `"space-around"`.
     */
    $jc?: ViewStyle['justifyContent'];
    /**
     * $fs: Shorthand for "flex-start" for justifyContent.
     * Accepts a `string` (default is `false`).
     */
    $fs?: boolean;
    /**
     * $c: Shorthand for "center" for justifyContent.
     * Accepts a `string` (default is `false`).
     */
    $center?: boolean;
    /**
     * $fe: Shorthand for "flex-end" for justifyContent.
     * Accepts a `string` (default is `false`).
     */
    $fe?: boolean;
    /**
     * $c: Shorthand for "space-between" for justifyContent.
     * Accepts a `string` (default is `false`).
     */
    $spb?: boolean;
    /**
     * $c: Shorthand for "space-evenly" for justifyContent.
     * Accepts a `string` (default is `false`).
     */

    $spe?: boolean;
    /**
     * $c: Shorthand for "space-around" for justifyContent.
     * Accepts a `string` (default is `false`).
     */
    $spa?: boolean;
  };
export type AbsoluteViewProps = TouchableOpacityProps &
  BorderProps &
  CenterProps &
  BackgroundProps &
  OverFlowTypes &
  PaddingMarginProps & {
    children?: ReactNode;
    /**
     * $z: Shorthand for "zIndex".
     */
    $z?: number;
    /**
     * $size: Shorthand for combined applied of "width" and "height" with same value .
     */
    $size?: number | string;
    /**
     * $t: Shorthand for "top".
     */
    $t?: number | string;
    /**
     * $b: Shorthand for "bottom".
     */
    $b?: number | string;
    /**
     * $l: Shorthand for "left".
     */
    $l?: number | string;
    /**
     * $r: Shorthand for "right".
     */
    $r?: number | string;
  };

export type AppButtonProps = TouchableOpacityProps &
  BorderProps &
  BackgroundProps &
  PaddingMarginProps & {
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
