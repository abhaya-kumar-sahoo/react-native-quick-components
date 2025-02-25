import type { ViewStyle } from 'react-native';

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
   * <CustomComponent $flexBasis="50%" />
   */
  $flexBasis?: ViewStyle['flexBasis'];

  /**
   * Specifies how much a flex item will grow relative to the rest of the flex items.
   * Accepts a `number` value (default is `0`).
   *
   * @example
   * // Allow item to grow twice as much as others:
   * <CustomComponent $flexGrow={2} />
   */
  $flexGrow?: ViewStyle['flexGrow'];

  /**
   * Specifies how much a flex item will shrink relative to the rest of the flex items.
   * Accepts a `number` value (default is `1`).
   *
   * @example
   * // Prevent shrinking of this item:
   * <CustomComponent $flexShrink={0} />
   */
  $flexShrink?: ViewStyle['flexShrink'];

  /**
   * Defines whether flex container items should wrap or not.
   * Accepts `nowrap`, `wrap`, or `wrap-reverse`.
   *
   * @example
   * // Enable wrapping of items:
   * <CustomComponent $flexWrap="wrap" />
   */
  $flexWrap?: ViewStyle['flexWrap'];

  /**
   * Specifies the gap between flex container items.
   * Accepts `number` or `string` values (e.g., `10` or `"1rem"`).
   * Note: Supported only in React Native versions that support `gap`.
   *
   * @example
   * // Add a gap of 10px between items:
   * <CustomComponent $gap={10} />
   */
  $gap?: ViewStyle['gap'];

  /**
   * Defines the gap between rows in a grid or flex container.
   * Accepts `number` or `string` values (e.g., `15` or `"1em"`).
   *
   * @example
   * // Add a row gap of 15px:
   * <CustomComponent $rowGap={15} />
   */
  $rowGap?: ViewStyle['rowGap'];

  /**
   * Defines the gap between columns in a grid or flex container.
   * Accepts `number` or `string` values (e.g., `20` or `"2em"`).
   *
   * @example
   * // Add a column gap of 20px:
   * <CustomComponent $colGap={20} />
   */
  $colGap?: ViewStyle['columnGap'];

  /**
   * Sets the elevation for shadow effects on Android.
   * Accepts a `number` value (higher numbers increase shadow depth).
   *
   * @example
   * // Add elevation for shadow effect:
   * <CustomComponent $elev={5} />
   */
  $elev?: number;

  /**
   * Specifies the color of the shadow.
   * Accepts any valid color value (e.g., `"#000"`, `"rgba(0,0,0,0.5)"`).
   *
   * @example
   * // Set shadow color to semi-transparent black:
   * <CustomComponent $shadowColor="rgba(0,0,0,0.5)" />
   */
  $shadowColor?: string;

  /**
   * Defines the offset of the shadow.
   * Accepts an object with `width` and `height` values.
   *
   * @example
   * // Set horizontal and vertical shadow offset:
   * <CustomComponent $shadowOffset={{ width: 2, height: 4 }} />
   */
  $shadowOffset?: ViewStyle['shadowOffset'];

  /**
   * Sets the blur radius of the shadow.
   * Accepts a `number` value (higher numbers increase blur size).
   *
   * @example
   * // Add a shadow blur radius of 10:
   * <CustomComponent $shadowRadius={10} />
   */
  $shadowRadius?: number;

  /**
   * Specifies the opacity of the shadow.
   * Accepts a `number` between `0` and `1`.
   *
   * @example
   * // Set shadow opacity to 50%:
   * <CustomComponent $shadowOpacity={0.5} />
   */
  $shadowOpacity?: number;
}
