interface NewConfig {
  defaultTextColor?: string;
  defaultBackgroundColor?: string | null;
  defaultFontFamily?: string | null;
  defaultFontSize?: number;
  enableResponsive?: boolean;
  responsive?: {
    enabled?: boolean;
    type: 'responsive-h-w' | 'percentage';
    defaultScreenSize?: {
      width?: number;
      height?: number;
    };
  };
}
export let config: NewConfig = {
  defaultTextColor: 'white',
  defaultBackgroundColor: null,
  defaultFontFamily: null,
  defaultFontSize: 20,
  enableResponsive: true,
  responsive: {
    type: 'responsive-h-w',
    defaultScreenSize: {
      width: 375,
      height: 812,
    },
  },
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
  if (newConfig?.enableResponsive) {
    config.enableResponsive = newConfig.enableResponsive;
  }
  if (newConfig?.responsive) {
    config.responsive = newConfig.responsive;
  }
};
