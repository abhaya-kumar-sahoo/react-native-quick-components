import type { MobilePhone } from '../types/phones';

interface NewConfig {
  defaultTextColor?: string;
  defaultBackgroundColor?: string | null;
  defaultFontFamily?: string | null;
  defaultFontSize?: number;
  defaultAppSize?: MobilePhone;
  setCustomAppSize?: { width: number; height: number } | null;
  enableResponsive?: boolean;
}
export let config: NewConfig = {
  defaultTextColor: 'white',
  defaultBackgroundColor: null,
  defaultFontFamily: null,
  defaultFontSize: 20,
  defaultAppSize: 'iPhone X',
  setCustomAppSize: null,
  enableResponsive: true,
};

export const defaultConfig = (newConfig: NewConfig) => {
  if (newConfig.defaultTextColor) {
    config.defaultTextColor = newConfig.defaultTextColor;
  }
  if (newConfig.defaultBackgroundColor) {
    config.defaultBackgroundColor = newConfig.defaultBackgroundColor;
  }
  if (newConfig.defaultFontFamily) {
    config.defaultFontFamily = newConfig.defaultFontFamily;
  }
  if (newConfig.defaultFontSize) {
    config.defaultFontSize = newConfig.defaultFontSize;
  }

  if (newConfig?.defaultAppSize) {
    config.defaultAppSize = newConfig.defaultAppSize;
  }
  if (newConfig?.setCustomAppSize) {
    config.setCustomAppSize = newConfig.setCustomAppSize;
  }
};
