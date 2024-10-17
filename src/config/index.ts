interface NewConfig {
  defaultTextColor?: string;
  defaultBackgroundColor?: string | null;
  defaultFontFamily?: string | null;
  defaultFontSize?: string | number;
  colorTypes?: object;
  setAppSize?: { width: number; height: number } | null;
}
export let config: NewConfig = {
  defaultTextColor: 'white',
  defaultBackgroundColor: null,
  defaultFontFamily: null,
  defaultFontSize: 20,
  colorTypes: {},
  setAppSize: null,
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
  if (newConfig.colorTypes) {
    config.colorTypes = newConfig.colorTypes;
  }
  if (
    newConfig?.setAppSize &&
    typeof newConfig?.setAppSize?.width === 'number' &&
    typeof newConfig?.setAppSize?.height === 'number'
  ) {
    config.setAppSize = newConfig.setAppSize;
  }
};
