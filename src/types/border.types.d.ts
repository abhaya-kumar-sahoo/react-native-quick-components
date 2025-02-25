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
   * <Component $bor={2} />
   */
  $bor?: number;

  /**
   * Specifies the color of the border.
   * Accepts any valid color value (e.g., `"#000"`, `"rgba(0,0,0,0.5)"`, or named colors).
   *
   * @example
   * // Set border color to black:
   * <Component $boc="#000" />
   */
  $boc?: ColorSuggestion;

  /**
   * Specifies the border width.
   * Useful when `$bor` is not used to control the border width globally.
   *
   * @example
   * // Set border width to 3px:
   * <Component $bow={3} />
   */
  $bow?: number;

  /**
   * Specifies the border-radius for the top-left corner of the component.
   * Accepts a `number` value (e.g., `5`, `10`).
   *
   * @example
   * // Set top-left border radius to 10px:
   * <Component $btrl={10} />
   */
  $btrl?: number;

  /**
   * Specifies the border-radius for the top-right corner of the component.
   * Accepts a `number` value.
   *
   * @example
   * // Set top-right border radius to 8px:
   * <Component $btrr={8} />
   */
  $btrr?: number;

  /**
   * Specifies the border-radius for the bottom-left corner of the component.
   * Accepts a `number` value.
   *
   * @example
   * // Set bottom-left border radius to 12px:
   * <Component $btbl={12} />
   */
  $btbl?: number;

  /**
   * Specifies the border-radius for the bottom-right corner of the component.
   * Accepts a `number` value.
   *
   * @example
   * // Set bottom-right border radius to 15px:
   * <Component $btbr={15} />
   */
  $btbr?: number;
}
