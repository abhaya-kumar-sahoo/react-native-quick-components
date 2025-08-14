// src/accessibility/types.ts
import type {
  AccessibilityRole,
  AccessibilityState,
  AccessibilityValue,
} from 'react-native';

export interface AccessibilityProps {
  // Basic accessibility props
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  accessibilityValue?: AccessibilityValue;

  // Advanced accessibility props
  accessibilityLabelledBy?: string;
  accessibilityDescribedBy?: string;
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive';
  accessibilityElementsHidden?: boolean;
  accessibilityViewIsModal?: boolean;

  // Custom accessibility props for better UX
  accessibilityIgnoresInvertColors?: boolean;
  accessibilityLanguage?: string;

  // Screen reader specific
  importantForAccessibility?: 'auto' | 'yes' | 'no' | 'no-hide-descendants';

  // Focus management
  accessibilityAutoFocus?: boolean;

  // Semantic props for better context
  semanticRole?:
    | 'button'
    | 'link'
    | 'header'
    | 'text'
    | 'image'
    | 'list'
    | 'listitem'
    | 'none';

  // High contrast support
  highContrastAdjustment?: 'auto' | 'none';

  // Reduced motion support
  respectsReducedMotion?: boolean;
}

export interface AccessibilityConfig {
  // Global accessibility settings
  enableHighContrast?: boolean;
  enableReducedMotion?: boolean;
  enableLargeText?: boolean;
  enableVoiceOver?: boolean;

  // Minimum touch target sizes
  minTouchTargetSize?: {
    width: number;
    height: number;
  };

  // Focus management
  focusRingColor?: string;
  focusRingWidth?: number;

  // Screen reader settings
  announcePageChanges?: boolean;
  announceFormErrors?: boolean;
}

export type AccessibilityAnnouncement = {
  message: string;
  priority?: 'low' | 'medium' | 'high';
  delay?: number;
};
