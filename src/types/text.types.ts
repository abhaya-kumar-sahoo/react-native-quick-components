import type { TextStyle } from 'react-native';
import type { ColorSuggestion } from './types';

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
   * <Component $c="#000" />
   */
  $c?: ColorSuggestion;

  /**
   * Specifies the font family for the text.
   * Accepts a string value representing the font family (e.g., `"Roboto"`, `"Arial"`).
   *
   * @example
   * // Set font family to "Roboto":
   * <Component $fontFamily="Roboto" />
   */
  $ff?: string;

  /**
   * Specifies the font size for the text.
   * Accepts a `number` value representing the size in pixels.
   *
   * @example
   * // Set font size to 16px:
   * <Component $fontSize={16} />
   */
  $fs?: number;

  /**
   * Specifies the line height for the text.
   * Accepts a `number` value representing the height in pixels.
   *
   * @example
   * // Set line height to 24px:
   * <Component $lineHeight={24} />
   */
  $lh?: number;

  /**
   * Specifies the alignment of the text within its container.
   * Accepts values like `"auto"`, `"left"`, `"right"`, `"center"`, or `"justify"`.
   *
   * @example
   * // Align text to the center:
   * <Component $textAline="center" />
   */
  $ta?: TextStyle['textAlign'];

  /**
   * Specifies whether the text is bold or its font weight.
   * Accepts `true` for bold or specific font weights like `"400"`, `"700"`, etc.
   *
   * @example
   * // Set text to bold:
   * <Component $bold={true} />
   *
   * @example
   * // Set font weight to 700:
   * <Component $bold="700" />
   */
  $bold?: boolean | TextStyle['fontWeight'];
}
