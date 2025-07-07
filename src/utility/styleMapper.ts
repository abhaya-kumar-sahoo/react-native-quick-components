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
// Shared Mappers
// ===================
const applySpacing = (props: any, style: any) => {
  if (props.p !== undefined) style.padding = props.p;
  if (props.px !== undefined) style.paddingHorizontal = props.px;
  if (props.py !== undefined) style.paddingVertical = props.py;
  if (props.pt !== undefined) style.paddingTop = props.pt;
  if (props.pb !== undefined) style.paddingBottom = props.pb;
  if (props.pl !== undefined) style.paddingLeft = props.pl;
  if (props.pr !== undefined) style.paddingRight = props.pr;

  if (props.m !== undefined) style.margin = props.m;
  if (props.mx !== undefined) style.marginHorizontal = props.mx;
  if (props.my !== undefined) style.marginVertical = props.my;
  if (props.mt !== undefined) style.marginTop = props.mt;
  if (props.mb !== undefined) style.marginBottom = props.mb;
  if (props.ml !== undefined) style.marginLeft = props.ml;
  if (props.mr !== undefined) style.marginRight = props.mr;
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
// View Style Mapper
// ===================
export const styleMapper = (props: StyleProps): ViewStyle => {
  const style: ViewStyle = {};

  if (props.shadow && shadowStyles[props.shadow]) {
    Object.assign(style, shadowStyles[props.shadow]);
  }

  if (props.bg !== undefined) style.backgroundColor = props.bg;
  if (props.br !== undefined) style.borderRadius = props.br;
  if (props.bw !== undefined) style.borderWidth = props.bw;
  if (props.bc !== undefined) style.borderColor = props.bc;

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
  if (props.size !== undefined) style.fontSize = props.size;
  if (props.weight !== undefined) style.fontWeight = props.weight;
  if (props.font !== undefined) style.fontFamily = props.font;
  if (props.c !== undefined) style.color = props.c;
  if (props.ta !== undefined) style.textAlign = props.ta;
  if (props.lh !== undefined) style.lineHeight = props.lh;
  if (props.lp !== undefined) style.letterSpacing = props.lp;
  if (props.td !== undefined) style.textDecorationLine = props.td;
  if (props.tt !== undefined) style.textTransform = props.tt;
  if (props.as !== undefined) style.alignSelf = props.as;

  if (props.bg !== undefined) style.backgroundColor = props.bg;
  if (props.opacity !== undefined) style.opacity = props.opacity;

  if (props.w !== undefined) style.width = props.w;
  if (props.h !== undefined) style.height = props.h;
  applySpacing(props, style);

  return style;
};
export const imageStyleMapper = (props: ImageStyleProps): ImageStyle => {
  const style: ImageStyle = {};
  if (props.shadow && shadowStyles[props.shadow]) {
    Object.assign(style, shadowStyles[props.shadow]);
  }
  if (props.bg !== undefined) style.backgroundColor = props.bg;
  if (props.opacity !== undefined) style.opacity = props.opacity;

  if (props.bg !== undefined) style.backgroundColor = props.bg;
  if (props.br !== undefined) style.borderRadius = props.br;
  if (props.bw !== undefined) style.borderWidth = props.bw;
  if (props.bc !== undefined) style.borderColor = props.bc;
  if (props.as !== undefined) style.alignSelf = props.as;

  applySpacing(props, style);
  applyDimensions(props, style);

  return style;
};
