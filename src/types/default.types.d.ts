type CSSDeclarationList = Record<string, string>;
export type DefaultTheme = {
  borderRadius: Record<
    'none' | 'sm' | 'DEFAULT' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full',
    string
  >;
  borderWidth: Record<'0' | '2' | '4' | '8' | 'DEFAULT', string>;
  boxShadow: Record<
    'sm' | 'DEFAULT' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none',
    string
  >;
  columns: Record<
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'auto'
    | '3xs'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl',
    string
  >;
  flex: Record<'1', string>;
  flexGrow: Record<'0' | 'DEFAULT', string>;
  flexShrink: Record<'0' | 'DEFAULT', string>;
  fontFamily: Record<'sans' | 'serif' | 'mono', string[]>;
  fontSize: Record<
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl',
    [string, { lineHeight: string }]
  >;
  fontWeight: Record<
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black',
    string
  >;
  gradientColorStopPositions: Record<
    | '0%'
    | '5%'
    | '10%'
    | '15%'
    | '20%'
    | '25%'
    | '30%'
    | '35%'
    | '40%'
    | '45%'
    | '50%'
    | '55%'
    | '60%'
    | '65%'
    | '70%'
    | '75%'
    | '80%'
    | '85%'
    | '90%'
    | '95%'
    | '100%',
    string
  >;
  grayscale: Record<'0' | 'DEFAULT', string>;
  gridAutoColumns: Record<'auto' | 'min' | 'max' | 'fr', string>;
  gridAutoRows: Record<'auto' | 'min' | 'max' | 'fr', string>;
  gridColumn: Record<
    | 'auto'
    | 'span-1'
    | 'span-2'
    | 'span-3'
    | 'span-4'
    | 'span-5'
    | 'span-6'
    | 'span-7'
    | 'span-8'
    | 'span-9'
    | 'span-10'
    | 'span-11'
    | 'span-12'
    | 'span-full',
    string
  >;
  gridColumnEnd: Record<
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | 'auto',
    string
  >;
  gridColumnStart: Record<
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | 'auto',
    string
  >;
  gridRow: Record<
    | 'auto'
    | 'span-1'
    | 'span-2'
    | 'span-3'
    | 'span-4'
    | 'span-5'
    | 'span-6'
    | 'span-7'
    | 'span-8'
    | 'span-9'
    | 'span-10'
    | 'span-11'
    | 'span-12'
    | 'span-full',
    string
  >;
  gridRowEnd: Record<
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | 'auto',
    string
  >;
  gridRowStart: Record<
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | 'auto',
    string
  >;
  gridTemplateColumns: Record<
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'none'
    | 'subgrid',
    string
  >;
  gridTemplateRows: Record<
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'none'
    | 'subgrid',
    string
  >;
  hueRotate: Record<'0' | '15' | '30' | '60' | '90' | '180', string>;
  invert: Record<'0' | 'DEFAULT', string>;
  keyframes: Record<
    'spin' | 'ping' | 'pulse' | 'bounce',
    Record<string, CSSDeclarationList>
  >;
  letterSpacing: Record<
    'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest',
    string
  >;
  lineHeight: Record<
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'none'
    | 'tight'
    | 'snug'
    | 'normal'
    | 'relaxed'
    | 'loose',
    string
  >;
  listStyleType: Record<'none' | 'disc' | 'decimal', string>;
  listStyleImage: Record<'none', string>;
  lineClamp: Record<'1' | '2' | '3' | '4' | '5' | '6', string>;
  objectPosition: Record<
    | 'bottom'
    | 'center'
    | 'left'
    | 'left-bottom'
    | 'left-top'
    | 'right'
    | 'right-bottom'
    | 'right-top'
    | 'top',
    string
  >;
  opacity: Record<
    | '0'
    | '5'
    | '10'
    | '15'
    | '20'
    | '25'
    | '30'
    | '35'
    | '40'
    | '45'
    | '50'
    | '55'
    | '60'
    | '65'
    | '70'
    | '75'
    | '80'
    | '85'
    | '90'
    | '95'
    | '100',
    string
  >;
  order: Record<
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'first'
    | 'last'
    | 'none',
    string
  >;
  outlineOffset: Record<'0' | '1' | '2' | '4' | '8', string>;
  outlineWidth: Record<'0' | '1' | '2' | '4' | '8', string>;
  ringOffsetWidth: Record<'0' | '1' | '2' | '4' | '8', string>;
  ringWidth: Record<'0' | '1' | '2' | '4' | '8' | 'DEFAULT', string>;
  rotate: Record<
    '0' | '1' | '2' | '3' | '6' | '12' | '45' | '90' | '180',
    string
  >;
  saturate: Record<'0' | '50' | '100' | '150' | '200', string>;
  scale: Record<
    '0' | '50' | '75' | '90' | '95' | '100' | '105' | '110' | '125' | '150',
    string
  >;
  screens: Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', string>;
  sepia: Record<'0' | 'DEFAULT', string>;
  skew: Record<'0' | '1' | '2' | '3' | '6' | '12', string>;
  spacing: Record<
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '14'
    | '16'
    | '20'
    | '24'
    | '28'
    | '32'
    | '36'
    | '40'
    | '44'
    | '48'
    | '52'
    | '56'
    | '60'
    | '64'
    | '72'
    | '80'
    | '96'
    | 'px'
    | '0.5'
    | '1.5'
    | '2.5'
    | '3.5',
    string
  >;
  strokeWidth: Record<'0' | '1' | '2', string>;
  textDecorationThickness: Record<
    '0' | '1' | '2' | '4' | '8' | 'auto' | 'from-font',
    string
  >;
  textUnderlineOffset: Record<'0' | '1' | '2' | '4' | '8' | 'auto', string>;
  transformOrigin: Record<
    | 'center'
    | 'top'
    | 'top-right'
    | 'right'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left'
    | 'top-left',
    string
  >;
  transitionDelay: Record<
    '0' | '75' | '100' | '150' | '200' | '300' | '500' | '700' | '1000',
    string
  >;
  transitionDuration: Record<
    | '0'
    | '75'
    | '100'
    | '150'
    | '200'
    | '300'
    | '500'
    | '700'
    | '1000'
    | 'DEFAULT',
    string
  >;
  transitionProperty: Record<
    'none' | 'all' | 'DEFAULT' | 'colors' | 'opacity' | 'shadow' | 'transform',
    string
  >;
  transitionTimingFunction: Record<
    'DEFAULT' | 'linear' | 'in' | 'out' | 'in-out',
    string
  >;
  willChange: Record<'auto' | 'scroll' | 'contents' | 'transform', string>;
  zIndex: Record<'0' | '10' | '20' | '30' | '40' | '50' | 'auto', string>;
};
