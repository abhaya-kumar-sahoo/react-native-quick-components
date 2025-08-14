// src/accessibility/AccessibilityProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import { AccessibilityInfo } from 'react-native';
import type { AccessibilityConfig, AccessibilityAnnouncement } from './types';

interface AccessibilityContextType extends AccessibilityConfig {
  // State
  isScreenReaderEnabled: boolean;
  isReduceMotionEnabled: boolean;
  isHighContrastEnabled: boolean;
  isLargeTextEnabled: boolean;
  screenScale: number;

  // Methods
  announceForAccessibility: (announcement: AccessibilityAnnouncement) => void;
  setHighContrast: (enabled: boolean) => void;
  setReducedMotion: (enabled: boolean) => void;
  setLargeText: (enabled: boolean) => void;

  // Utilities
  getAccessibleTouchTarget: (size: number) => { width: number; height: number };
  shouldRespectReducedMotion: () => boolean;
  getScaledSize: (size: number) => number;
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
  config?: AccessibilityConfig;
}

const defaultConfig: AccessibilityConfig = {
  enableHighContrast: false,
  enableReducedMotion: false,
  enableLargeText: false,
  enableVoiceOver: false,
  minTouchTargetSize: {
    width: 44,
    height: 44,
  },
  focusRingColor: '#007AFF',
  focusRingWidth: 2,
  announcePageChanges: true,
  announceFormErrors: true,
};

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
  config = {},
}) => {
  const mergedConfig = { ...defaultConfig, ...config };

  // State
  const [isScreenReaderEnabled, setIsScreenReaderEnabled] = useState(false);
  const [isReduceMotionEnabled, setIsReduceMotionEnabled] = useState(
    mergedConfig.enableReducedMotion || false
  );
  const [isHighContrastEnabled, setIsHighContrastEnabled] = useState(
    mergedConfig.enableHighContrast || false
  );
  const [isLargeTextEnabled, setIsLargeTextEnabled] = useState(
    mergedConfig.enableLargeText || false
  );
  const [screenScale, setScreenScale] = useState(1);

  // Initialize accessibility state
  useEffect(() => {
    // Check screen reader status
    AccessibilityInfo.isScreenReaderEnabled().then(setIsScreenReaderEnabled);

    // Check reduce motion preference
    AccessibilityInfo.isReduceMotionEnabled?.().then((enabled) => {
      if (enabled !== undefined) {
        setIsReduceMotionEnabled(enabled);
      }
    });

    // Get font scale
    const updateFontScale = () => {
      AccessibilityInfo.getRecommendedTimeoutMillis?.(1000).then((timeout) => {
        // Use timeout as an indicator of accessibility needs
        const scale = timeout > 1000 ? 1.2 : 1;
        setScreenScale(scale);
      });
    };

    updateFontScale();

    // Listen for accessibility changes
    const screenReaderSubscription = AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      setIsScreenReaderEnabled
    );

    const reduceMotionSubscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      setIsReduceMotionEnabled
    );

    return () => {
      screenReaderSubscription?.remove();
      reduceMotionSubscription?.remove();
    };
  }, []);

  // Methods
  const announceForAccessibility = (
    announcement: AccessibilityAnnouncement
  ) => {
    if (!isScreenReaderEnabled) return;

    const delay = announcement.delay || 0;

    setTimeout(() => {
      AccessibilityInfo.announceForAccessibility(announcement.message);
    }, delay);
  };

  const setHighContrast = (enabled: boolean) => {
    setIsHighContrastEnabled(enabled);
  };

  const setReducedMotion = (enabled: boolean) => {
    setIsReduceMotionEnabled(enabled);
  };

  const setLargeText = (enabled: boolean) => {
    setIsLargeTextEnabled(enabled);
    setScreenScale(enabled ? 1.3 : 1);
  };

  const getAccessibleTouchTarget = (size: number) => {
    const minSize = mergedConfig.minTouchTargetSize!;
    return {
      width: Math.max(size, minSize.width),
      height: Math.max(size, minSize.height),
    };
  };

  const shouldRespectReducedMotion = () => {
    return isReduceMotionEnabled;
  };

  const getScaledSize = (size: number) => {
    return Math.round(size * screenScale);
  };

  const contextValue: AccessibilityContextType = {
    ...mergedConfig,
    isScreenReaderEnabled,
    isReduceMotionEnabled,
    isHighContrastEnabled,
    isLargeTextEnabled,
    screenScale,
    announceForAccessibility,
    setHighContrast,
    setReducedMotion,
    setLargeText,
    getAccessibleTouchTarget,
    shouldRespectReducedMotion,
    getScaledSize,
  };

  return (
    <AccessibilityContext.Provider value={contextValue}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    // Return default accessibility context when no provider is available
    return {
      ...defaultConfig,
      isScreenReaderEnabled: false,
      isReduceMotionEnabled: false,
      isHighContrastEnabled: false,
      isLargeTextEnabled: false,
      screenScale: 1,
      announceForAccessibility: () => {},
      setHighContrast: () => {},
      setReducedMotion: () => {},
      setLargeText: () => {},
      getAccessibleTouchTarget: (size: number) => ({
        width: Math.max(size, 44),
        height: Math.max(size, 44),
      }),
      shouldRespectReducedMotion: () => false,
      getScaledSize: (size: number) => size,
    };
  }
  return context;
};

// Hook for accessible announcements
export const useAccessibilityAnnouncement = () => {
  const { announceForAccessibility, isScreenReaderEnabled } =
    useAccessibility();

  const announce = (
    message: string,
    priority: 'low' | 'medium' | 'high' = 'medium'
  ) => {
    if (!isScreenReaderEnabled) return;

    const delay = priority === 'high' ? 0 : priority === 'medium' ? 100 : 500;
    announceForAccessibility({ message, priority, delay });
  };

  return { announce, isScreenReaderEnabled };
};
