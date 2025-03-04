import type { TextStyle } from 'react-native';
import type { ColorSuggestion } from './types';

/**
 * Interface for defining text styling properties for a component.
 */
export interface TextStylingProps {
  /**
   * $c: Shorthand for text color.
   * Accepts valid color values (e.g., "#000", "rgba(0,0,0,0.7)").
   */
  $c?: ColorSuggestion;

  /**
   * $ff: Shorthand for font family.
   * Accepts a string value (e.g., "Roboto", "Arial").
   */
  $ff?: string;

  /**
   * $fs: Shorthand for font size (in pixels).
   */
  $fs?: number;

  /**
   * $lh: Shorthand for line height (in pixels).
   */
  $lh?: number;

  /**
   * $ta: Shorthand for text alignment.
   * Accepts values like "auto", "left", "right", "center", or "justify".
   */
  $ta?: TextStyle['textAlign'];

  /**
   * $bold: Shorthand for font weight.
   * Use `true` for bold or a string/numeric font weight (e.g., "700").
   */
  $bold?: boolean | TextStyle['fontWeight'];
}
