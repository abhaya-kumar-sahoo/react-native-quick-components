import { Dimensions, Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const isWeb = Platform.OS === 'web';

export const isMacOs = Platform.OS === 'macos';
export const isWindows = Platform.OS === 'windows';
export const isTv = Platform.isTV;
export const { height: SCREEN_H, width: SCREEN_W } = Dimensions.get('window');

/**
 * Determines if the device is in landscape orientation.
 * @type {boolean}
 */
export const isLandscape: boolean = SCREEN_W > SCREEN_H;

/**
 * Determines if the device is in portrait orientation.
 * @type {boolean}
 */
export const isPortrait: boolean = SCREEN_W < SCREEN_H;
