import type { AnimatableNumericValue } from 'react-native';
import type { ColorSuggestion } from './types';

/**
 * BorderProps - Shorthand style props for border styling.
 * Each property maps to a standard border-related ViewStyle prop.
 */
export type BorderProps = {
  /**
   * $bc: Shortcut for "borderColor".
   * Sets the color for all borders.
   */
  $boc?: ColorSuggestion;

  /**
   * $bor: Shortcut for "borderRadius".
   * Sets a uniform border radius for all corners.
   */
  $bor?: AnimatableNumericValue;

  /**
   * $bw: Shortcut for "borderWidth".
   * Sets the width for all borders.
   */
  $bow?: number;

  /**
   * $bter: Shortcut for "borderTopEndRadius".
   * Specifies the end radius for the top border.
   */
  $bter?: AnimatableNumericValue;

  /**
   * $btler: Shortcut for "borderTopLeftRadius".
   * Specifies the radius for the top left corner.
   */
  $btlr?: AnimatableNumericValue;

  /**
   * $btrer: Shortcut for "borderTopRightRadius".
   * Specifies the radius for the top right corner.
   */
  $btrr?: AnimatableNumericValue;

  /**
   * $btstr: Shortcut for "borderTopStartRadius".
   * Specifies the start radius for the top border.
   */
  $btsr?: AnimatableNumericValue;
};
