/**
 * FontStyleProps: Font and text-specific style props for Text components.
 */
export interface FontStyleProps extends CommonType {
  /** Font size */
  size?: number;
  /** Font weight */
  weight?:
    | 'normal'
    | 'bold'
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
}

export interface ImageStyleProps extends CommonType {
  /** Border radius */
  br?: number;
  /** Border width */
  bw?: number;
  /** Border color */
  bc?: string;
  /** alignItems */
  ai?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  /** alignSelf */
  /** Predefined shadow type */
  shadow?: ShadowType;

  as?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
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
export interface StyleProps extends CenterType, CommonType {
  /** Border radius */
  br?: number;
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

  gap?: DimensionValue;

  testID?: string;
  /** Additional style(s) */
  style?: StyleProp | StyleProp[];
}

interface CommonType {
  /** Background color */
  bg?: string;
  /** Padding (all sides) */
  p?: DimensionValue;
  /** Padding horizontal */
  px?: DimensionValue;
  /** Padding vertical */
  py?: DimensionValue;
  /** Padding top */
  pt?: DimensionValue;
  /** Padding bottom */
  pb?: DimensionValue;
  /** Padding left */
  pl?: DimensionValue;
  /** Padding right */
  pr?: DimensionValue;
  /** Margin (all sides) */
  m?: DimensionValue;
  /** Margin horizontal */
  mx?: DimensionValue;
  /** Margin vertical */
  my?: DimensionValue;
  /** Margin top */
  mt?: DimensionValue;
  /** Margin bottom */
  mb?: DimensionValue;
  /** Margin left */
  ml?: DimensionValue;
  /** Margin right */
  mr?: DimensionValue;
  /** Width */
  w?: DimensionValue;
  /** Height */
  h?: DimensionValue;

  /** Max width  */
  maw?: DimensionValue;
  /** Max height  */
  mah?: DimensionValue;

  /** Min width  */
  miw?: DimensionValue;
  /** Min height  */
  mih?: DimensionValue;

  /** Both width and height will be set to the same value   */

  size?: DimensionValue;

  /** position */
  position?: 'absolute' | 'relative';
  /** top */
  t?: DimensionValue;
  /** Bottom */
  b?: DimensionValue;
  /** Left */
  l?: DimensionValue;
  /** Right */
  r?: DimensionValue;

  /** zIndex */
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
