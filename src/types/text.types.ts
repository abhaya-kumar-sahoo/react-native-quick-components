import type { TextStyle } from 'react-native';
import type { ColorSuggestion } from './types';
export type FontSizeTypes =
  | number
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
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

export const fontSizeMapping: Record<Exclude<FontSizeTypes, number>, number> = {
  'xxs': 10,
  'xs': 12,
  'sm': 14,
  'md': 16,
  'lg': 18,
  'xl': 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 60,
  '7xl': 72,
  '8xl': 96,
  '9xl': 128,
};
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
  $fs?: FontSizeTypes;

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
