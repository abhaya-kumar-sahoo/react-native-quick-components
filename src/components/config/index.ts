interface NewConfig {
  defaultTextColor?: string;
  defaultBackgroundColor?: string | null;
  defaultFontFamily?: string | null;
  defaultFontSize?: string | number;
  colorTypes?: object;
}
export let config: NewConfig = {
  defaultTextColor: 'blue',
  defaultBackgroundColor: null,
  defaultFontFamily: null,
  defaultFontSize: 20,
  colorTypes: {},
};

export const init = (newConfig: NewConfig) => {
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
};
