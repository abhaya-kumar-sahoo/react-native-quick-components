import type { HeightWidthTypes } from './h_w_types';
import type { OverFlowTypes } from './types';

export interface SizeProps extends OverFlowTypes {
  /**
   * Specifies the width of the component.
   * Accepts a `number` (e.g., `100`) or a `string` (e.g., `"50%"`).
   *
   * @example
   * // Set width to 100px:
   * <Component $w={100} />
   *
   * @example
   * // Set width to 50%:
   * <Component $w="50%" />
   */
  $w?: HeightWidthTypes;

  /**
   * Specifies the height of the component.
   * Accepts a `number` (e.g., `200`) or a `string` (e.g., `"75%"`).
   *
   * @example
   * // Set height to 200px:
   * <Component $h={200} />
   *
   * @example
   * // Set height to 75%:
   * <Component $h="75%" />
   */
  $h?: HeightWidthTypes;

  /**
   * Specifies the flex value of the component.
   * Determines how a component will grow, shrink, or occupy space in a flex container.
   *
   * @example
   * // Set flex value to 1 (occupy remaining space equally):
   * <Component $flex={1} />
   */
  $flex?: number;

  /**
   * Specifies the minimum width of the component.
   * Accepts a `number` (e.g., `50`) or a `string` (e.g., `"25%"`).
   *
   * @example
   * // Set minimum width to 50px:
   * <Component $minW={50} />
   */
  $minW?: number | string;

  /**
   * Specifies the minimum height of the component.
   * Accepts a `number` (e.g., `80`) or a `string` (e.g., `"20%"`).
   *
   * @example
   * // Set minimum height to 80px:
   * <Component $minH={80} />
   */
  $minH?: number | string;

  /**
   * Specifies the maximum width of the component.
   * Accepts a `number` (e.g., `300`) or a `string` (e.g., `"100%"`).
   *
   * @example
   * // Set maximum width to 300px:
   * <Component $maxW={300} />
   */
  $maxW?: number | string;

  /**
   * Specifies the maximum height of the component.
   * Accepts a `number` (e.g., `400`) or a `string` (e.g., `"50%"`).
   *
   * @example
   * // Set maximum height to 400px:
   * <Component $maxH={400} />
   */
  $maxH?: number | string;
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
   * <Component $p={16} />
   */
  $p?: number;

  /**
   * Specifies the left padding for the component.
   *
   * @example
   * // Set left padding to 10px:
   * <Component $pl={10} />
   */
  $pl?: number;

  /**
   * Specifies the right padding for the component.
   *
   * @example
   * // Set right padding to 12px:
   * <Component $pr={12} />
   */
  $pr?: number;

  /**
   * Specifies the top padding for the component.
   *
   * @example
   * // Set top padding to 8px:
   * <Component $pt={8} />
   */
  $pt?: number;

  /**
   * Specifies the bottom padding for the component.
   *
   * @example
   * // Set bottom padding to 10px:
   * <Component $pb={10} />
   */
  $pb?: number;

  /**
   * Specifies horizontal padding (left and right) for the component.
   *
   * @example
   * // Set horizontal padding to 20px:
   * <Component $px={20} />
   */
  $px?: number;

  /**
   * Specifies vertical padding (top and bottom) for the component.
   *
   * @example
   * // Set vertical padding to 15px:
   * <Component $py={15} />
   */
  $py?: number;

  /**
   * Specifies the overall margin for the component.
   * Accepts a `number` value.
   *
   * @example
   * // Set margin to 12px:
   * <Component $m={12} />
   */
  $m?: number;

  /**
   * Specifies the left margin for the component.
   *
   * @example
   * // Set left margin to 8px:
   * <Component $ml={8} />
   */
  $ml?: number;

  /**
   * Specifies the bottom margin for the component.
   *
   * @example
   * // Set bottom margin to 16px:
   * <Component $mb={16} />
   */
  $mb?: number;

  /**
   * Specifies the top margin for the component.
   *
   * @example
   * // Set top margin to 10px:
   * <Component $mt={10} />
   */
  $mt?: number;

  /**
   * Specifies the right margin for the component.
   *
   * @example
   * // Set right margin to 5px:
   * <Component $mr={5} />
   */
  $mr?: number;

  /**
   * Specifies horizontal margin (left and right) for the component.
   *
   * @example
   * // Set horizontal margin to 18px:
   * <Component $mx={18} />
   */
  $mx?: number;

  /**
   * Specifies vertical margin (top and bottom) for the component.
   *
   * @example
   * // Set vertical margin to 10px:
   * <Component $my={10} />
   */
  $my?: number;
}
