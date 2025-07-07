import { useState, useEffect, useRef, useMemo } from 'react';

// React Native imports (handled gracefully if not available)
type RNType = {
  Dimensions?: any;
  Keyboard?: any;
  AppState?: any;
  AsyncStorage?: any;
  NetInfo?: any;
  DeviceInfo?: any;
};

let RN: RNType = {};
try {
  RN = {
    Dimensions: require('react-native').Dimensions,
    Keyboard: require('react-native').Keyboard,
    AppState: require('react-native').AppState,
    AsyncStorage: require('@react-native-async-storage/async-storage').default,
    NetInfo: require('@react-native-netinfo').default,
    DeviceInfo: require('react-native-device-info').default,
  };
} catch (e) {
  // Fallback for testing or web environments
}

// ============================================================================
// OPTIMIZED STATE MANAGEMENT HOOKS
// ============================================================================

// Optimized toggle with minimal re-renders
export const useToggle = (
  initial = false
): [
  boolean,
  {
    toggle: () => void;
    on: () => void;
    off: () => void;
  },
] => {
  const [state, setState] = useState(initial);

  const actions = useMemo(
    () => ({
      toggle: () => setState((s) => !s),
      on: () => setState(true),
      off: () => setState(false),
    }),
    []
  );

  return [state, actions];
};

// App state with optimized event handling
export const useAppState = () => {
  const [appState, setAppState] = useState(
    () => RN.AppState?.currentState || 'active'
  );

  useEffect(() => {
    if (!RN.AppState) return;

    const handler = (nextState: any) => {
      if (nextState !== appState) {
        setAppState(nextState);
      }
    };

    const sub = RN.AppState.addEventListener('change', handler);
    return () => sub?.remove();
  }, [appState]);

  return appState;
};

// Optimized debounce with cleanup
export const useDebounce = (value: unknown, delay: number) => {
  const [debounced, setDebounced] = useState(value);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(timeoutRef.current);
  }, [value, delay]);

  return debounced;
};

// Optimized throttle with immediate execution option
export const useThrottle = (
  value: unknown,
  limit: number,
  { leading = true } = {}
) => {
  const [throttled, setThrottled] = useState(value);
  const lastRun = useRef(Date.now());
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  useEffect(() => {
    const now = Date.now();
    const timeSinceLastRun = now - lastRun.current;

    if (leading && timeSinceLastRun >= limit) {
      setThrottled(value);
      lastRun.current = now;
    } else {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setThrottled(value);
        lastRun.current = Date.now();
      }, limit - timeSinceLastRun);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [value, limit, leading]);

  return throttled;
};

// Optimized network state
export const useNetInfo = () => {
  const [netInfo, setNetInfo] = useState({
    isConnected: true,
    type: 'unknown',
    isInternetReachable: true,
  });

  useEffect(() => {
    if (!RN.NetInfo) return;

    const unsubscribe = RN.NetInfo.addEventListener(setNetInfo);

    // Get initial state
    RN.NetInfo.fetch().then(setNetInfo);

    return unsubscribe;
  }, []);

  return netInfo;
};
