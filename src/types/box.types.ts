import type { ViewStyle } from 'react-native';

/**
 * CustomBoxPropsShort - Shorthand aliases for layout, spacing, and shadow properties.
 * These properties map to standard `ViewStyle` props.
 */
export interface CustomBoxProps {
  /**
   * $fb: Shorthand for "flexBasis".
   * Accepts `number` or `string` (e.g., `50` or `"50%"`).
   */
  $fb?: ViewStyle['flexBasis'];

  /**
   * $fg: Shorthand for "flexGrow".
   * Accepts a `number` (default is `0`).
   */
  $fg?: ViewStyle['flexGrow'];

  /**
   * $fs: Shorthand for "flexShrink".
   * Accepts a `number` (default is `1`).
   */
  $fs?: ViewStyle['flexShrink'];

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
   * $el: Shorthand for "elevation".
   * Accepts a `number` (higher numbers increase shadow depth).
   */
  $el?: number;

  /**
   * $sc: Shorthand for "shadowColor".
   * Accepts valid color values (e.g., `"#000"` or `"rgba(0,0,0,0.5)"`).
   */
  $sc?: string;

  /**
   * $so: Shorthand for "shadowOffset".
   * Accepts an object with `width` and `height` values.
   */
  $sof?: ViewStyle['shadowOffset'];

  /**
   * $sr: Shorthand for "shadowRadius".
   * Accepts a `number` (higher numbers increase blur).
   */
  $sr?: number;

  /**
   * $sop: Shorthand for "shadowOpacity".
   * Accepts a `number` between `0` and `1`.
   */
  $sop?: number;
}
