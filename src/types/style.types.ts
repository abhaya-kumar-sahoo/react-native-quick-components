/**
 * FontStyleProps: Font and text-specific style props for Text components.
 */
export interface FontStyleProps extends CommonTextType, AccessibilityProps {
  /** Font size - can use predefined values like 'sm', 'md', 'lg' or numbers */
  size?: FontSizeType | number;
  /** Font weight - can use predefined values like 'normal', 'medium', 'bold' */
  weight?:
    | FontWeightType
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  /** Font family */
  font?: string;
  /** Text color */
  c?: string;
  /** Text alignment */
  ta?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  /** Line height */
  lh?: number;
  /** Letter spacing */
  lp?: number;
  /** Text decoration */
  td?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  /** Text transform */
  tt?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  as?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';

  /** Accessibility-specific text props */
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  maxFontSizeMultiplier?: number;
  minimumFontScale?: number;
}

export interface ImageStyleProps extends CommonType {
  /** Border radius - can use predefined values like 'sm', 'md', 'lg' or numbers */
  br?: RadiusType | number;
  /** Border width */
  bw?: number;
  /** Border color */
  bc?: string;
  /** alignItems */
  ai?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /** alignSelf */
  as?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /** Predefined shadow type */
  shadow?: ShadowType;
}
// src/types/style.types.ts
/**
 * StyleProp: Union type for all supported style objects (View, Text, Image).
 */
import type {
  ViewStyle,
  TextStyle,
  ImageStyle,
  DimensionValue,
} from 'react-native';
import type { AccessibilityProps } from '../accessibility/types';

export type StyleProp = ViewStyle | TextStyle | ImageStyle;
/**
 * ShadowType: Predefined shadow levels for cross-platform shadow support.
 * - none: No shadow
 * - subtle: Very light shadow
 * - light: Light shadow
 * - medium: Medium shadow
 * - strong: Strong shadow
 * - heavy: Very strong shadow
 */
export type ShadowType =
  | 'none'
  | 'subtle'
  | 'light'
  | 'medium'
  | 'strong'
  | 'heavy';

/**
 * SpacingType: Predefined spacing values
 */
export type SpacingType =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

/**
 * RadiusType: Predefined border radius values
 */
export type RadiusType =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'full';

/**
 * FontSizeType: Predefined font size values
 */
export type FontSizeType =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

/**
 * FontWeightType: Predefined font weight values
 */
export type FontWeightType =
  | 'thin'
  | 'extralight'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black';

/**
 * StyleProps: Shorthand and extended style props for universal layout and design in React Native components.
 *
 * bg: Background color (string, e.g. '#fff' or 'red')
 * p, px, py, pt, pb, pl, pr: Padding (all, horizontal, vertical, top, bottom, left, right)
 * m, mx, my, mt, mb, ml, mr: Margin (all, horizontal, vertical, top, bottom, left, right)
 * w, h: Width and height
 * br: Border radius
 * bw: Border width
 * bc: Border color
 * ai: alignItems
 * jc: justifyContent
 * fd: flexDirection
 * f: flex
 * fs: flexShrink
 * fw: flexWrap
 * shadow: Predefined shadow type (see ShadowType)
 * opacity: View opacity
 * style: Additional style(s) (ViewStyle, TextStyle, or ImageStyle)
 * center: Shortcut for centering both axes (alignItems & justifyContent)
 * centerX: Shortcut for horizontal centering (alignItems)
 * centerY: Shortcut for vertical centering (justifyContent)
 */
/**
 * StyleProps: Shorthand and extended style props for universal layout and design in React Native components.
 *
 * Does not include font/text-specific props. For text, use StyleProps & FontStyleProps.
 */
export interface StyleProps extends CenterType, CommonType, AccessibilityProps {
  /** Border radius - can use predefined values like 'sm', 'md', 'lg' or numbers */
  br?: RadiusType | number;
  /** Border width */
  bw?: number;
  /** Border color */
  bc?: string;
  /** alignItems */
  ai?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /** alignSelf */
  as?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /** justifyContent */
  jc?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  /** flexDirection */
  fd?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  /** flex */
  f?: number;
  /** flexShrink */
  fs?: number;
  /** flexGrow */
  fg?: number;
  /** flexWrap */
  fw?: 'wrap' | 'nowrap' | 'wrap-reverse';
  /** Predefined shadow type */
  shadow?: ShadowType;
  /** Gap between flex items */
  gap?: DimensionValue;
  /** Test ID for testing */
  testID?: string;
  /** Additional style(s) */
  style?: StyleProp | StyleProp[];
}

interface CommonType {
  /** Background color */
  bg?: string;
  /** Padding (all sides) - can use predefined spacing like 'sm', 'md', 'lg' */
  p?: SpacingType | DimensionValue;
  /** Padding horizontal */
  px?: SpacingType | DimensionValue;
  /** Padding vertical */
  py?: SpacingType | DimensionValue;
  /** Padding top */
  pt?: SpacingType | DimensionValue;
  /** Padding bottom */
  pb?: SpacingType | DimensionValue;
  /** Padding left */
  pl?: SpacingType | DimensionValue;
  /** Padding right */
  pr?: SpacingType | DimensionValue;
  /** Margin (all sides) - can use predefined spacing like 'sm', 'md', 'lg' */
  m?: SpacingType | DimensionValue;
  /** Margin horizontal */
  mx?: SpacingType | DimensionValue;
  /** Margin vertical */
  my?: SpacingType | DimensionValue;
  /** Margin top */
  mt?: SpacingType | DimensionValue;
  /** Margin bottom */
  mb?: SpacingType | DimensionValue;
  /** Margin left */
  ml?: SpacingType | DimensionValue;
  /** Margin right */
  mr?: SpacingType | DimensionValue;
  /** Width */
  w?: DimensionValue;
  /** Height */
  h?: DimensionValue;
  /** Max width */
  maw?: DimensionValue;
  /** Max height */
  mah?: DimensionValue;
  /** Min width */
  miw?: DimensionValue;
  /** Min height */
  mih?: DimensionValue;
  /** Both width and height will be set to the same value */
  size?: DimensionValue;
  /** Position */
  position?: 'absolute' | 'relative';
  /** Top */
  t?: DimensionValue;
  /** Bottom */
  b?: DimensionValue;
  /** Left */
  l?: DimensionValue;
  /** Right */
  r?: DimensionValue;
  /** Z-index */
  z?: number;
  /** View opacity */
  opacity?: number;
}

interface CommonTextType {
  /** Background color */
  bg?: string;
  /** Padding (all sides) - can use predefined spacing like 'sm', 'md', 'lg' */
  p?: SpacingType | DimensionValue;
  /** Padding horizontal */
  px?: SpacingType | DimensionValue;
  /** Padding vertical */
  py?: SpacingType | DimensionValue;
  /** Padding top */
  pt?: SpacingType | DimensionValue;
  /** Padding bottom */
  pb?: SpacingType | DimensionValue;
  /** Padding left */
  pl?: SpacingType | DimensionValue;
  /** Padding right */
  pr?: SpacingType | DimensionValue;
  /** Margin (all sides) - can use predefined spacing like 'sm', 'md', 'lg' */
  m?: SpacingType | DimensionValue;
  /** Margin horizontal */
  mx?: SpacingType | DimensionValue;
  /** Margin vertical */
  my?: SpacingType | DimensionValue;
  /** Margin top */
  mt?: SpacingType | DimensionValue;
  /** Margin bottom */
  mb?: SpacingType | DimensionValue;
  /** Margin left */
  ml?: SpacingType | DimensionValue;
  /** Margin right */
  mr?: SpacingType | DimensionValue;
  /** Width */
  w?: DimensionValue;
  /** Height */
  h?: DimensionValue;
  /** Max width */
  maw?: DimensionValue;
  /** Max height */
  mah?: DimensionValue;
  /** Min width */
  miw?: DimensionValue;
  /** Min height */
  mih?: DimensionValue;
  /** Position */
  position?: 'absolute' | 'relative';
  /** Top */
  t?: DimensionValue;
  /** Bottom */
  b?: DimensionValue;
  /** Left */
  l?: DimensionValue;
  /** Right */
  r?: DimensionValue;
  /** Z-index */
  z?: number;
  /** View opacity */
  opacity?: number;
}

interface CenterType {
  /** Center both axes (alignItems & justifyContent) */
  center?: boolean;
  /** Center horizontally (alignItems) */
  centerX?: boolean;
  /** Center vertically (justifyContent) */
  centerY?: boolean;
}
