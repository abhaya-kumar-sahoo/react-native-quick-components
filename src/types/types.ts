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

type ColorSuggestion =
  | keyof typeof DefaultColors
  | `${keyof typeof DefaultColors}:${keyof (typeof DefaultColors)['slate']}`
  | (string & {});

/**
 * Interface for defining text styling properties for a component.
 */
export interface TextStylingProps {
  /**
   * Specifies the text color.
   * Accepts any valid color value (e.g., `"#000"`, `"rgba(0,0,0,0.7)"`, or named colors).
   *
   * @example
   * // Set text color to black:
   * <Component _c="#000" />
   */
  _c?: ColorSuggestion;

  /**
   * Specifies the font family for the text.
   * Accepts a string value representing the font family (e.g., `"Roboto"`, `"Arial"`).
   *
   * @example
   * // Set font family to "Roboto":
   * <Component _fontFamily="Roboto" />
   */
  _fontFamily?: string;

  /**
   * Specifies the font size for the text.
   * Accepts a `number` value representing the size in pixels.
   *
   * @example
   * // Set font size to 16px:
   * <Component _fontSize={16} />
   */
  _fontSize?: number;

  /**
   * Specifies the line height for the text.
   * Accepts a `number` value representing the height in pixels.
   *
   * @example
   * // Set line height to 24px:
   * <Component _lineHeight={24} />
   */
  _lineHeight?: number;

  /**
   * Specifies the alignment of the text within its container.
   * Accepts values like `"auto"`, `"left"`, `"right"`, `"center"`, or `"justify"`.
   *
   * @example
   * // Align text to the center:
   * <Component _textAline="center" />
   */
  _textAline?: TextStyle['textAlign'];

  /**
   * Specifies whether the text is bold or its font weight.
   * Accepts `true` for bold or specific font weights like `"400"`, `"700"`, etc.
   *
   * @example
   * // Set text to bold:
   * <Component _bold={true} />
   *
   * @example
   * // Set font weight to 700:
   * <Component _bold="700" />
   */
  _bold?: boolean | TextStyle['fontWeight'];
}

/**
 * Interface for defining spacing-related properties for a component.
 * Includes shorthand and directional properties for padding and margin.
 */
export interface SpacingProps {
  /**
   * Specifies the overall padding for the component.
   * Accepts a `number` value (e.g., `8`, `16`).
   *
   * @example
   * // Set padding to 16px:
   * <Component _p={16} />
   */
  _p?: number;

  /**
   * Specifies the left padding for the component.
   *
   * @example
   * // Set left padding to 10px:
   * <Component _pl={10} />
   */
  _pl?: number;

  /**
   * Specifies the right padding for the component.
   *
   * @example
   * // Set right padding to 12px:
   * <Component _pr={12} />
   */
  _pr?: number;

  /**
   * Specifies the top padding for the component.
   *
   * @example
   * // Set top padding to 8px:
   * <Component _pt={8} />
   */
  _pt?: number;

  /**
   * Specifies the bottom padding for the component.
   *
   * @example
   * // Set bottom padding to 10px:
   * <Component _pb={10} />
   */
  _pb?: number;

  /**
   * Specifies horizontal padding (left and right) for the component.
   *
   * @example
   * // Set horizontal padding to 20px:
   * <Component _px={20} />
   */
  _px?: number;

  /**
   * Specifies vertical padding (top and bottom) for the component.
   *
   * @example
   * // Set vertical padding to 15px:
   * <Component _py={15} />
   */
  _py?: number;

  /**
   * Specifies the overall margin for the component.
   * Accepts a `number` value.
   *
   * @example
   * // Set margin to 12px:
   * <Component _m={12} />
   */
  _m?: number;

  /**
   * Specifies the left margin for the component.
   *
   * @example
   * // Set left margin to 8px:
   * <Component _ml={8} />
   */
  _ml?: number;

  /**
   * Specifies the bottom margin for the component.
   *
   * @example
   * // Set bottom margin to 16px:
   * <Component _mb={16} />
   */
  _mb?: number;

  /**
   * Specifies the top margin for the component.
   *
   * @example
   * // Set top margin to 10px:
   * <Component _mt={10} />
   */
  _mt?: number;

  /**
   * Specifies the right margin for the component.
   *
   * @example
   * // Set right margin to 5px:
   * <Component _mr={5} />
   */
  _mr?: number;

  /**
   * Specifies horizontal margin (left and right) for the component.
   *
   * @example
   * // Set horizontal margin to 18px:
   * <Component _mx={18} />
   */
  _mx?: number;

  /**
   * Specifies vertical margin (top and bottom) for the component.
   *
   * @example
   * // Set vertical margin to 10px:
   * <Component _my={10} />
   */
  _my?: number;
}

/**
 * Interface for defining border-related styling properties.
 */
export interface BorderProps {
  /**
   * Specifies the overall border width for the component.
   * Accepts a `number` value (e.g., `1`, `2`, etc.).
   *
   * @example
   * // Set border width to 2px:
   * <Component _bor={2} />
   */
  _bor?: number;

  /**
   * Specifies the color of the border.
   * Accepts any valid color value (e.g., `"#000"`, `"rgba(0,0,0,0.5)"`, or named colors).
   *
   * @example
   * // Set border color to black:
   * <Component _boc="#000" />
   */
  _boc?: ColorSuggestion;

  /**
   * Specifies the border width.
   * Useful when `_bor` is not used to control the border width globally.
   *
   * @example
   * // Set border width to 3px:
   * <Component _bow={3} />
   */
  _bow?: number;

  /**
   * Specifies the border-radius for the top-left corner of the component.
   * Accepts a `number` value (e.g., `5`, `10`).
   *
   * @example
   * // Set top-left border radius to 10px:
   * <Component _btrl={10} />
   */
  _btrl?: number;

  /**
   * Specifies the border-radius for the top-right corner of the component.
   * Accepts a `number` value.
   *
   * @example
   * // Set top-right border radius to 8px:
   * <Component _btrr={8} />
   */
  _btrr?: number;

  /**
   * Specifies the border-radius for the bottom-left corner of the component.
   * Accepts a `number` value.
   *
   * @example
   * // Set bottom-left border radius to 12px:
   * <Component _btbl={12} />
   */
  _btbl?: number;

  /**
   * Specifies the border-radius for the bottom-right corner of the component.
   * Accepts a `number` value.
   *
   * @example
   * // Set bottom-right border radius to 15px:
   * <Component _btbr={15} />
   */
  _btbr?: number;
}

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
   * <Component _overflow="hidden" />
   */
  _overflow?: ViewStyle['overflow'];
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
   * <Component _bg="#f0f0f0" />
   */
  _bg?: ColorSuggestion;
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
   * <Component _alignSelf="center" />
   */
  _alignSelf?: ViewStyle['alignSelf'];

  /**
   * Centers the component both horizontally and vertically within its parent.
   * Equivalent to setting `_centerX` and `_centerY` to `true`.
   *
   * @example
   * // Center the component in both directions:
   * <Component _center={true} />
   */
  _center?: boolean;

  /**
   * Centers the component horizontally within its parent.
   *
   * @example
   * // Center the component horizontally:
   * <Component _centerX={true} />
   */
  _centerX?: boolean;

  /**
   * Centers the component vertically within its parent.
   *
   * @example
   * // Center the component vertically:
   * <Component _centerY={true} />
   */
  _centerY?: boolean;
}

/**
 * Interface for defining size-related properties for a component.
 * Extends `OverFlowTypes` to include overflow handling.
 */
export interface SizeProps extends OverFlowTypes {
  /**
   * Specifies the width of the component.
   * Accepts a `number` (e.g., `100`) or a `string` (e.g., `"50%"`).
   *
   * @example
   * // Set width to 100px:
   * <Component _w={100} />
   *
   * @example
   * // Set width to 50%:
   * <Component _w="50%" />
   */
  _w?: number | string;

  /**
   * Specifies the height of the component.
   * Accepts a `number` (e.g., `200`) or a `string` (e.g., `"75%"`).
   *
   * @example
   * // Set height to 200px:
   * <Component _h={200} />
   *
   * @example
   * // Set height to 75%:
   * <Component _h="75%" />
   */
  _h?: number | string;

  /**
   * Specifies the flex value of the component.
   * Determines how a component will grow, shrink, or occupy space in a flex container.
   *
   * @example
   * // Set flex value to 1 (occupy remaining space equally):
   * <Component _flex={1} />
   */
  _flex?: number;

  /**
   * Specifies the minimum width of the component.
   * Accepts a `number` (e.g., `50`) or a `string` (e.g., `"25%"`).
   *
   * @example
   * // Set minimum width to 50px:
   * <Component _minW={50} />
   */
  _minW?: number | string;

  /**
   * Specifies the minimum height of the component.
   * Accepts a `number` (e.g., `80`) or a `string` (e.g., `"20%"`).
   *
   * @example
   * // Set minimum height to 80px:
   * <Component _minH={80} />
   */
  _minH?: number | string;

  /**
   * Specifies the maximum width of the component.
   * Accepts a `number` (e.g., `300`) or a `string` (e.g., `"100%"`).
   *
   * @example
   * // Set maximum width to 300px:
   * <Component _maxW={300} />
   */
  _maxW?: number | string;

  /**
   * Specifies the maximum height of the component.
   * Accepts a `number` (e.g., `400`) or a `string` (e.g., `"50%"`).
   *
   * @example
   * // Set maximum height to 400px:
   * <Component _maxH={400} />
   */
  _maxH?: number | string;
}

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
  _leftComponent?: React.ReactNode;
  _rightComponent?: React.ReactNode;
  _styleContainer?: AppViewProps & {
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
  _alertType?: AlertType;
  _iconColor?: string;
  _iconSize?: number;
  _hint?: string;
  _hintColor?: string;
  _hintStyles?: TextStyle;
  _inputStyle?: TextStyle;
  _rtl?: boolean;
  _containerStyles?: ViewStyle;
  _inputType?: InputType;
  _dividerColor?: string;
  _dividerWidth?: number;
  _dividerHeight?: number;
  _dividerMarginLeft?: number;
  _dividerMarginRight?: number;
  _dividerMarginHorizontal?: number;
}

export interface AppModalProps extends ModalProps {
  children?: ReactNode;
  _onCloseModal?: () => void;
  _iconColor?: ColorSuggestion;
  _iconSize?: number;
  transparent?: boolean;
  _transparentColor?: string;
  _boxBackgroundColor?: ColorSuggestion;
  _boxHeight?: number | string;
  _boxWidth?: number | string;
  _circleCancel?: boolean;
  _showCancelIcon?: boolean;
  _presentationStyle?: ModalProps['presentationStyle'];
  _containerStyle?: ViewStyle;
  _boxStyles?: ViewStyle;
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

/**
 * Interface for customizing layout, spacing, and shadow properties in a flexible component.
 * Designed to extend or replace native `ViewStyle` properties for advanced use cases.
 */
export interface CustomBoxProps {
  /**
   * Defines the initial main size of a flex item.
   * Accepts `number` or `string` values (e.g., `50` or `"50%"`).
   *
   * @example
   * // Set flex-basis to 50%:
   * <CustomComponent _flexBasis="50%" />
   */
  _flexBasis?: ViewStyle['flexBasis'];

  /**
   * Specifies how much a flex item will grow relative to the rest of the flex items.
   * Accepts a `number` value (default is `0`).
   *
   * @example
   * // Allow item to grow twice as much as others:
   * <CustomComponent _flexGrow={2} />
   */
  _flexGrow?: ViewStyle['flexGrow'];

  /**
   * Specifies how much a flex item will shrink relative to the rest of the flex items.
   * Accepts a `number` value (default is `1`).
   *
   * @example
   * // Prevent shrinking of this item:
   * <CustomComponent _flexShrink={0} />
   */
  _flexShrink?: ViewStyle['flexShrink'];

  /**
   * Defines whether flex container items should wrap or not.
   * Accepts `nowrap`, `wrap`, or `wrap-reverse`.
   *
   * @example
   * // Enable wrapping of items:
   * <CustomComponent _flexWrap="wrap" />
   */
  _flexWrap?: ViewStyle['flexWrap'];

  /**
   * Specifies the gap between flex container items.
   * Accepts `number` or `string` values (e.g., `10` or `"1rem"`).
   * Note: Supported only in React Native versions that support `gap`.
   *
   * @example
   * // Add a gap of 10px between items:
   * <CustomComponent _gap={10} />
   */
  _gap?: ViewStyle['gap'];

  /**
   * Defines the gap between rows in a grid or flex container.
   * Accepts `number` or `string` values (e.g., `15` or `"1em"`).
   *
   * @example
   * // Add a row gap of 15px:
   * <CustomComponent _rowGap={15} />
   */
  _rowGap?: ViewStyle['rowGap'];

  /**
   * Defines the gap between columns in a grid or flex container.
   * Accepts `number` or `string` values (e.g., `20` or `"2em"`).
   *
   * @example
   * // Add a column gap of 20px:
   * <CustomComponent _colGap={20} />
   */
  _colGap?: ViewStyle['columnGap'];

  /**
   * Sets the elevation for shadow effects on Android.
   * Accepts a `number` value (higher numbers increase shadow depth).
   *
   * @example
   * // Add elevation for shadow effect:
   * <CustomComponent _elev={5} />
   */
  _elev?: number;

  /**
   * Specifies the color of the shadow.
   * Accepts any valid color value (e.g., `"#000"`, `"rgba(0,0,0,0.5)"`).
   *
   * @example
   * // Set shadow color to semi-transparent black:
   * <CustomComponent _shadowColor="rgba(0,0,0,0.5)" />
   */
  _shadowColor?: string;

  /**
   * Defines the offset of the shadow.
   * Accepts an object with `width` and `height` values.
   *
   * @example
   * // Set horizontal and vertical shadow offset:
   * <CustomComponent _shadowOffset={{ width: 2, height: 4 }} />
   */
  _shadowOffset?: ViewStyle['shadowOffset'];

  /**
   * Sets the blur radius of the shadow.
   * Accepts a `number` value (higher numbers increase blur size).
   *
   * @example
   * // Add a shadow blur radius of 10:
   * <CustomComponent _shadowRadius={10} />
   */
  _shadowRadius?: number;

  /**
   * Specifies the opacity of the shadow.
   * Accepts a `number` between `0` and `1`.
   *
   * @example
   * // Set shadow opacity to 50%:
   * <CustomComponent _shadowOpacity={0.5} />
   */
  _shadowOpacity?: number;
}

// Source Props
export interface SourceProps {
  source: ImageProps['source'];
}

// Image Styling Props
export interface ImageStylingProps {
  _bor?: number;
}

export interface BoxSizeProps {
  _size?: number | string;
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

    _gap?: ViewStyle['gap'];
    _rowGap?: ViewStyle['rowGap'];
    _colGap?: ViewStyle['columnGap'];
    _flexWrap?: ViewStyle['flexWrap'];
    _jc?: ViewStyle['justifyContent'];
    _alignItems?: ViewStyle['alignItems'];
  };
export type AbsoluteViewProps = TouchableOpacityProps &
  BorderProps &
  CenterProps &
  BackgroundProps &
  OverFlowTypes &
  SpacingProps & {
    children?: ReactNode;
    _zIndex?: number;
    _size?: number | string;
    _t?: number;
    _b?: number;
    _l?: number;
    _r?: number;
  };

export type AppButtonProps = TouchableOpacityProps &
  BorderProps &
  BackgroundProps &
  SpacingProps & {
    _title?: string;
    onPress?: () => void;
    _loaderColor?: ColorSuggestion;
    _loaderSize?: ActivityIndicatorProps['size'];
    _loading?: boolean;
    style?: StyleProp<TouchableOpacityProps>;
    _textStyle?: AppTextProps & {
      rest?: object;
    };
    _leftComponent?: React.ReactNode;
    _rightComponent?: React.ReactNode;
    _c?: ColorSuggestion;
    _px?: number | undefined;
    _py?: number | undefined;
    _mx?: number | undefined;
    _my?: number | undefined;
    _w?: number;
    _h?: number;
  };

export type CustomImageProps = CustomImageProp &
  ImagePropsBase & {
    style?: StyleProp<ImageStyle>; // style
  };

export type DividerProps = {
  _h?: number | string; // width
  _w?: number | string; // height
  _c?: ColorSuggestion;
  _bor?: number;
  _mx?: number | string;
  _my?: number | string;
};

export type CustomTextProps = TextProps & AppTextProps;
export type CustomTextInputProps = TextInputProps & AppTextInputProps;
export type CustomViewProps = TouchableOpacityProps & AppViewProps;
export type FlexViewProps = ViewProps & AppViewProps;
export type BoxProps = CustomBoxProps & AppViewProps & TouchableOpacityProps;

export type TextBoxProps = TextBoxProp;
