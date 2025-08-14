import { Platform } from 'react-native';
import type {
  FontStyleProps,
  ImageStyleProps,
  StyleProps,
} from '../types/style.types';
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';

// ===================
// Shadow Definitions
// ===================
const shadowStyles: Record<string, ViewStyle | undefined> = {
  none: { shadowOpacity: 0, elevation: 0 },
  subtle: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 1 },
    },
    android: { elevation: 1 },
  }) as ViewStyle,
  light: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 2 },
    },
    android: { elevation: 2 },
  }) as ViewStyle,
  medium: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 6,
      shadowOffset: { width: 0, height: 2 },
    },
    android: { elevation: 4 },
  }) as ViewStyle,
  strong: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.3,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
    },
    android: { elevation: 8 },
  }) as ViewStyle,
  heavy: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.4,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 },
    },
    android: { elevation: 12 },
  }) as ViewStyle,
};

// ===================
// Default Values
// ===================
const defaultSpacing = {
  'xs': 4,
  'sm': 8,
  'md': 16,
  'lg': 24,
  'xl': 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 80,
  '5xl': 96,
  '6xl': 128,
};

const defaultRadius = {
  'none': 0,
  'xs': 2,
  'sm': 4,
  'md': 8,
  'lg': 12,
  'xl': 16,
  '2xl': 20,
  '3xl': 24,
  'full': 9999,
};

const defaultFontSizes = {
  'xs': 12,
  'sm': 14,
  'base': 16,
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

const defaultFontWeights = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
};

// ===================
// Resolution Functions
// ===================
const resolveSpacing = (spacing: any): any => {
  if (typeof spacing === 'string' && spacing in defaultSpacing) {
    return defaultSpacing[spacing as keyof typeof defaultSpacing];
  }
  return spacing;
};

const resolveRadius = (radius: any): any => {
  if (typeof radius === 'string' && radius in defaultRadius) {
    return defaultRadius[radius as keyof typeof defaultRadius];
  }
  return radius;
};

const resolveFontSize = (size: any): any => {
  if (typeof size === 'string' && size in defaultFontSizes) {
    return defaultFontSizes[size as keyof typeof defaultFontSizes];
  }
  return size;
};

const resolveFontWeight = (weight: any): any => {
  if (typeof weight === 'string' && weight in defaultFontWeights) {
    return defaultFontWeights[weight as keyof typeof defaultFontWeights];
  }
  return weight;
};

// ===================
// Shared Mappers
// ===================
const applySpacing = (props: any, style: any) => {
  if (props.p !== undefined) style.padding = resolveSpacing(props.p);
  if (props.px !== undefined)
    style.paddingHorizontal = resolveSpacing(props.px);
  if (props.py !== undefined) style.paddingVertical = resolveSpacing(props.py);
  if (props.pt !== undefined) style.paddingTop = resolveSpacing(props.pt);
  if (props.pb !== undefined) style.paddingBottom = resolveSpacing(props.pb);
  if (props.pl !== undefined) style.paddingLeft = resolveSpacing(props.pl);
  if (props.pr !== undefined) style.paddingRight = resolveSpacing(props.pr);

  if (props.m !== undefined) style.margin = resolveSpacing(props.m);
  if (props.mx !== undefined) style.marginHorizontal = resolveSpacing(props.mx);
  if (props.my !== undefined) style.marginVertical = resolveSpacing(props.my);
  if (props.mt !== undefined) style.marginTop = resolveSpacing(props.mt);
  if (props.mb !== undefined) style.marginBottom = resolveSpacing(props.mb);
  if (props.ml !== undefined) style.marginLeft = resolveSpacing(props.ml);
  if (props.mr !== undefined) style.marginRight = resolveSpacing(props.mr);
};

const applyDimensions = (props: any, style: any) => {
  if (props.size !== undefined) {
    style.width = props.size;
    style.height = props.size;
  } else {
    if (props.w !== undefined) style.width = props.w;
    if (props.h !== undefined) style.height = props.h;
  }

  if (props.maw !== undefined) style.maxWidth = props.maw;
  if (props.mah !== undefined) style.maxHeight = props.mah;
  if (props.miw !== undefined) style.minWidth = props.miw;
  if (props.mih !== undefined) style.minHeight = props.mih;
};

const applyPosition = (props: any, style: any) => {
  if (props.position !== undefined) style.position = props.position;
  if (props.t !== undefined) style.top = props.t;
  if (props.b !== undefined) style.bottom = props.b;
  if (props.l !== undefined) style.left = props.l;
  if (props.r !== undefined) style.right = props.r;
  if (props.z !== undefined) style.zIndex = props.z;
};

// ===================
// Style Mapper
// ===================
export const styleMapper = (props: StyleProps): ViewStyle => {
  const style: ViewStyle = {};

  // Handle shadow
  if (props.shadow && shadowStyles[props.shadow]) {
    Object.assign(style, shadowStyles[props.shadow]);
  }

  // Handle colors (direct values only)
  if (props.bg !== undefined) {
    style.backgroundColor = props.bg;
  }

  // Handle border radius
  if (props.br !== undefined) {
    style.borderRadius = resolveRadius(props.br);
  }

  if (props.bw !== undefined) style.borderWidth = props.bw;

  // Handle border color
  if (props.bc !== undefined) {
    style.borderColor = props.bc;
  }

  if (props.ai !== undefined) style.alignItems = props.ai;
  if (props.jc !== undefined) style.justifyContent = props.jc;
  if (props.fd !== undefined) style.flexDirection = props.fd;
  if (props.f !== undefined) style.flex = props.f;
  if (props.fs !== undefined) style.flexShrink = props.fs;
  if (props.fw !== undefined) style.flexWrap = props.fw;
  if (props.as !== undefined) style.alignSelf = props.as;

  if (props.fg !== undefined) style.flexGrow = props.fg;
  if (props.opacity !== undefined) style.opacity = props.opacity;

  applySpacing(props, style);
  applyDimensions(props, style);
  applyPosition(props, style);

  // Center shorthand handling
  if (props.center && !(props.centerX || props.centerY)) {
    style.alignItems = 'center';
    style.justifyContent = 'center';
  } else {
    if (props.centerX) style.alignItems = 'center';
    if (props.centerY) style.justifyContent = 'center';
  }

  return style;
};

// ===================
// Text Style Mapper
// ===================
export const fontStyleMapper = (props: FontStyleProps): TextStyle => {
  const style: TextStyle = {};

  // Handle font properties
  if (props.size !== undefined && props.size !== null) {
    const resolvedSize = resolveFontSize(props.size);
    if (resolvedSize !== undefined && resolvedSize !== null) {
      style.fontSize = resolvedSize;
    }
  }

  if (props.weight !== undefined) {
    style.fontWeight = resolveFontWeight(props.weight);
  }

  if (props.font !== undefined) {
    style.fontFamily = props.font;
  }

  if (props.c !== undefined) {
    style.color = props.c;
  }

  if (props.ta !== undefined) style.textAlign = props.ta;
  if (props.lh !== undefined) style.lineHeight = props.lh;
  if (props.lp !== undefined) style.letterSpacing = props.lp;
  if (props.td !== undefined) style.textDecorationLine = props.td;
  if (props.tt !== undefined) style.textTransform = props.tt;
  if (props.as !== undefined) style.alignSelf = props.as;

  if (props.bg !== undefined) {
    style.backgroundColor = props.bg;
  }
  if (props.opacity !== undefined) style.opacity = props.opacity;

  if (props.w !== undefined) style.width = props.w;
  if (props.h !== undefined) style.height = props.h;
  applySpacing(props, style);

  return style;
};
export const imageStyleMapper = (props: ImageStyleProps): ImageStyle => {
  const style: ImageStyle = {};

  // Handle shadow
  if (props.shadow && shadowStyles[props.shadow]) {
    Object.assign(style, shadowStyles[props.shadow]);
  }

  if (props.bg !== undefined) {
    style.backgroundColor = props.bg;
  }
  if (props.opacity !== undefined) style.opacity = props.opacity;

  if (props.br !== undefined) {
    style.borderRadius = resolveRadius(props.br);
  }
  if (props.bw !== undefined) style.borderWidth = props.bw;
  if (props.bc !== undefined) {
    style.borderColor = props.bc;
  }
  if (props.as !== undefined) style.alignSelf = props.as;

  applySpacing(props, style);
  applyDimensions(props, style);

  return style;
};
