import type { DimensionValue } from 'react-native';
import type { OverFlowTypes } from './types';

export interface SizeProps extends OverFlowTypes {
  /**
   * $w: Shortcut for "width".
   * Specifies the width of the component.
   */
  $w?: DimensionValue;

  /**
   * $h: Shortcut for "height".
   * Specifies the height of the component.
   */
  $h?: DimensionValue;

  /**
   * $f: Shortcut for "flex".
   * Sets the flex grow factor.
   */
  $f?: number;

  /**
   * $maxh: Shortcut for "maxHeight".
   * Defines the maximum height of the component.
   */
  $maxh?: DimensionValue;

  /**
   * $maxw: Shortcut for "maxWidth".
   * Defines the maximum width of the component.
   */
  $maxw?: DimensionValue;

  /**
   * $minh: Shortcut for "minHeight".
   * Specifies the minimum height of the component.
   */
  $minh?: DimensionValue;

  /**
   * $minw: Shortcut for "minWidth".
   * Specifies the minimum width of the component.
   */
  $minw?: DimensionValue;
}

/**
 * PaddingMarginProps - Shorthand style props for margin and padding.
 * Each property corresponds to a standard ViewStyle margin or padding prop.
 */
export type PaddingMarginProps = {
  /**
   * $m: Shortcut for "margin".
   * Sets the margin on all sides.
   */
  $m?: DimensionValue;

  /**
   * $mb: Shortcut for "marginBottom".
   * Specifies the margin at the bottom.
   */
  $mb?: DimensionValue;

  /**
   * $me: Shortcut for "marginEnd".
   * Specifies the margin at the end side.
   */
  // $me?: DimensionValue;

  /**
   * $mh: Shortcut for "marginHorizontal".
   * Sets the left and right margins.
   */
  $mx?: DimensionValue;

  /**
   * $ml: Shortcut for "marginLeft".
   * Specifies the margin on the left side.
   */
  $ml?: DimensionValue;

  /**
   * $mr: Shortcut for "marginRight".
   * Specifies the margin on the right side.
   */
  $mr?: DimensionValue;

  /**
   * $ms: Shortcut for "marginStart".
   * Specifies the margin at the start side.
   */
  // $ms?: DimensionValue;

  /**
   * $mt: Shortcut for "marginTop".
   * Specifies the margin at the top.
   */
  $mt?: DimensionValue;

  /**
   * $mv: Shortcut for "marginVertical".
   * Sets the top and bottom margins.
   */
  $my?: DimensionValue;

  /**
   * $p: Shortcut for "padding".
   * Sets the padding on all sides.
   */
  $p?: DimensionValue;

  /**
   * $pb: Shortcut for "paddingBottom".
   * Specifies the padding at the bottom.
   */
  $pb?: DimensionValue;

  /**
   * $pe: Shortcut for "paddingEnd".
   * Specifies the padding at the end side.
   */
  // $pe?: DimensionValue;

  /**
   * $ph: Shortcut for "paddingHorizontal".
   * Sets the left and right padding.
   */
  $px?: DimensionValue;

  /**
   * $pl: Shortcut for "paddingLeft".
   * Specifies the padding on the left side.
   */
  $pl?: DimensionValue;

  /**
   * $pr: Shortcut for "paddingRight".
   * Specifies the padding on the right side.
   */
  $pr?: DimensionValue;

  /**
   * $ps: Shortcut for "paddingStart".
   * Specifies the padding at the start side.
   */
  // $ps?: DimensionValue;

  /**
   * $pt: Shortcut for "paddingTop".
   * Specifies the padding at the top.
   */
  $pt?: DimensionValue;

  /**
   * $pv: Shortcut for "paddingVertical".
   * Sets the top and bottom padding.
   */
  $py?: DimensionValue;
};
