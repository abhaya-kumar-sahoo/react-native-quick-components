import type {
  AnimatableNumericValue,
  Animated,
  ColorValue,
  DimensionValue,
  FlexAlignType,
  MatrixTransform,
  MaximumOneOf,
  PerpectiveTransform,
  RotateTransform,
  RotateXTransform,
  RotateYTransform,
  RotateZTransform,
  ScaleTransform,
  ScaleXTransform,
  ScaleYTransform,
  SkewXTransform,
  SkewYTransform,
  TranslateXTransform,
  TranslateYTransform,
  ViewStyle,
} from 'react-native';

/**
 * AbsoluteViewProps - Shorthand style props for view styling.
 * Each property maps to a standard ViewStyle prop with a concise alias.
 */
export type CustomViewProps = {
  // --- FlexStyle Props ---

  /**
   * $ac: Shortcut for "alignContent".
   * Defines the distribution of lines along the cross axis when there is extra space.
   */
  $ac?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';

  /**
   * $ai: Shortcut for "alignItems".
   * Aligns children along the cross axis.
   */
  $ai?: FlexAlignType;

  /**
   * $as: Shortcut for "alignSelf".
   * Overrides the parent's alignItems for this specific component.
   */
  $as?: 'auto' | FlexAlignType;

  /**
   * $ar: Shortcut for "aspectRatio".
   * Specifies the ratio between the component's width and height.
   */
  $ar?: number | string;

  /**
   * $bbw: Shortcut for "borderBottomWidth".
   * Specifies the width of the bottom border.
   */
  $bbw?: number;

  /**
   * $bew: Shortcut for "borderEndWidth".
   * Specifies the width of the end border (right side in LTR, left in RTL).
   */
  $bew?: number;

  /**
   * $blw: Shortcut for "borderLeftWidth".
   * Specifies the width of the left border.
   */
  $blw?: number;

  /**
   * $brw: Shortcut for "borderRightWidth".
   * Specifies the width of the right border.
   */
  $brw?: number;

  /**
   * $bsw: Shortcut for "borderStartWidth".
   * Specifies the width of the start border (left side in LTR, right in RTL).
   */
  $bsw?: number;

  /**
   * $btw: Shortcut for "borderTopWidth".
   * Specifies the width of the top border.
   */
  $btw?: number;

  /**
   * $bw: Shortcut for "borderWidth".
   * Sets the width for all borders.
   */
  $bw?: number;

  /**
   * $bot: Shortcut for "bottom".
   * Defines the distance from the bottom edge.
   */
  $bot?: DimensionValue;

  /**
   * $d: Shortcut for "display".
   * Determines the display mode, e.g. 'flex' or 'none'.
   */
  $d?: 'none' | 'flex';

  /**
   * $end: Shortcut for "end".
   * Defines the offset from the end edge.
   */
  $end?: DimensionValue;

  /**
   * $f: Shortcut for "flex".
   * Sets the flex grow factor.
   */
  $f?: number;

  /**
   * $fb: Shortcut for "flexBasis".
   * Specifies the initial size of the component before flexing.
   */
  $fb?: DimensionValue;

  /**
   * $fd: Shortcut for "flexDirection".
   * Determines the direction of the flex items.
   */
  $fd?: 'row' | 'column' | 'row-reverse' | 'column-reverse';

  /**
   * $rg: Shortcut for "rowGap".
   * Defines the spacing between rows in a flex container.
   */
  $rg?: number;

  /**
   * $g: Shortcut for "gap".
   * Sets the gap between flex items.
   */
  $g?: number;

  /**
   * $cg: Shortcut for "columnGap".
   * Defines the spacing between columns in a flex container.
   */
  $cg?: number;

  /**
   * $fg: Shortcut for "flexGrow".
   * Determines how much the component grows relative to its siblings.
   */
  $fg?: number;

  /**
   * $fs: Shortcut for "flexShrink".
   * Determines how much the component shrinks relative to its siblings.
   */
  $fs?: number;

  /**
   * $fw: Shortcut for "flexWrap".
   * Specifies whether the flex items should wrap onto multiple lines.
   */
  $fw?: 'wrap' | 'nowrap' | 'wrap-reverse';

  /**
   * $h: Shortcut for "height".
   * Specifies the height of the component.
   */
  $h?: DimensionValue;

  /**
   * $jc: Shortcut for "justifyContent".
   * Aligns children along the main axis.
   */
  $jc?: ViewStyle['justifyContent'];

  /**
   * $l: Shortcut for "left".
   * Defines the distance from the left edge.
   */
  $l?: DimensionValue;

  /**
   * $m: Shortcut for "margin".
   * Sets the margin on all sides.
   */
  $m?: DimensionValue;

  /**
   * $mb: Shortcut for "marginBottom".
   * Specifies the margin at the bottom.
   */
  $mb?: DimensionValue;

  /**
   * $me: Shortcut for "marginEnd".
   * Specifies the margin at the end side.
   */
  $me?: DimensionValue;

  /**
   * $mh: Shortcut for "marginHorizontal".
   * Sets the left and right margins.
   */
  $mh?: DimensionValue;

  /**
   * $ml: Shortcut for "marginLeft".
   * Specifies the margin on the left side.
   */
  $ml?: DimensionValue;

  /**
   * $mr: Shortcut for "marginRight".
   * Specifies the margin on the right side.
   */
  $mr?: DimensionValue;

  /**
   * $ms: Shortcut for "marginStart".
   * Specifies the margin at the start side.
   */
  $ms?: DimensionValue;

  /**
   * $mt: Shortcut for "marginTop".
   * Specifies the margin at the top.
   */
  $mt?: DimensionValue;

  /**
   * $mv: Shortcut for "marginVertical".
   * Sets the top and bottom margins.
   */
  $mv?: DimensionValue;

  /**
   * $maxh: Shortcut for "maxHeight".
   * Defines the maximum height of the component.
   */
  $maxh?: DimensionValue;

  /**
   * $maxw: Shortcut for "maxWidth".
   * Defines the maximum width of the component.
   */
  $maxw?: DimensionValue;

  /**
   * $minh: Shortcut for "minHeight".
   * Specifies the minimum height of the component.
   */
  $minh?: DimensionValue;

  /**
   * $minw: Shortcut for "minWidth".
   * Specifies the minimum width of the component.
   */
  $minw?: DimensionValue;

  /**
   * $ov: Shortcut for "overflow".
   * Determines how to handle content that overflows the component's boundaries.
   */
  $ov?: 'visible' | 'hidden' | 'scroll';

  /**
   * $p: Shortcut for "padding".
   * Sets the padding on all sides.
   */
  $p?: DimensionValue;

  /**
   * $pb: Shortcut for "paddingBottom".
   * Specifies the padding at the bottom.
   */
  $pb?: DimensionValue;

  /**
   * $pe: Shortcut for "paddingEnd".
   * Specifies the padding at the end side.
   */
  $pe?: DimensionValue;

  /**
   * $ph: Shortcut for "paddingHorizontal".
   * Sets the left and right padding.
   */
  $ph?: DimensionValue;

  /**
   * $pl: Shortcut for "paddingLeft".
   * Specifies the padding on the left side.
   */
  $pl?: DimensionValue;

  /**
   * $pr: Shortcut for "paddingRight".
   * Specifies the padding on the right side.
   */
  $pr?: DimensionValue;

  /**
   * $ps: Shortcut for "paddingStart".
   * Specifies the padding at the start side.
   */
  $ps?: DimensionValue;

  /**
   * $pt: Shortcut for "paddingTop".
   * Specifies the padding at the top.
   */
  $pt?: DimensionValue;

  /**
   * $pv: Shortcut for "paddingVertical".
   * Sets the top and bottom padding.
   */
  $pv?: DimensionValue;

  /**
   * $pos: Shortcut for "position".
   * Determines the positioning type ('absolute' or 'relative').
   */
  $pos?: 'absolute' | 'relative';

  /**
   * $r: Shortcut for "right".
   * Defines the distance from the right edge.
   */
  $r?: DimensionValue;

  /**
   * $st: Shortcut for "start".
   * Defines the distance from the start edge.
   */
  $st?: DimensionValue;

  /**
   * $t: Shortcut for "top".
   * Defines the distance from the top edge.
   */
  $t?: DimensionValue;

  /**
   * $w: Shortcut for "width".
   * Specifies the width of the component.
   */
  $w?: DimensionValue;

  /**
   * $zi: Shortcut for "zIndex".
   * Controls the stacking order of the component.
   */
  $zi?: number;

  /**
   * $dir: Shortcut for "direction".
   * Sets the layout direction (inherit, ltr, or rtl).
   */
  $dir?: 'inherit' | 'ltr' | 'rtl';

  // --- ShadowStyleIOS Props ---

  /**
   * $sc: Shortcut for "shadowColor".
   * Sets the color of the component's shadow.
   */
  $sc?: ColorValue;

  /**
   * $so: Shortcut for "shadowOffset".
   * Defines the offset of the shadow as an object with width and height.
   */
  $so?: { width: number; height: number };

  /**
   * $sop: Shortcut for "shadowOpacity".
   * Controls the opacity of the shadow.
   */
  $sop?: number | Animated.AnimatedNode;

  /**
   * $sr: Shortcut for "shadowRadius".
   * Defines the blur radius used to create the shadow.
   */
  $sr?: number;

  // --- TransformsStyle Props ---

  /**
   * $tr: Shortcut for "transform".
   * Applies a list of transformation objects or a string defining transformations.
   */
  $tr?:
    | Array<
        MaximumOneOf<
          PerpectiveTransform &
            RotateTransform &
            RotateXTransform &
            RotateYTransform &
            RotateZTransform &
            ScaleTransform &
            ScaleXTransform &
            ScaleYTransform &
            TranslateXTransform &
            TranslateYTransform &
            SkewXTransform &
            SkewYTransform &
            MatrixTransform
        >
      >
    | string;

  /**
   * $to: Shortcut for "transformOrigin".
   * Sets the origin point for transformations.
   */
  $to?: Array<string | number> | string;

  /**
   * $tm: Shortcut for "transformMatrix".
   * **Deprecated:** Use $tr with a matrix transform instead.
   * Defines a transformation matrix.
   */
  $tm?: number[];

  /**
   * $rot: Shortcut for "rotation".
   * **Deprecated:** Use $tr with a rotate transform instead.
   * Specifies the rotation angle.
   */
  $rot?: number | Animated.AnimatedNode;

  /**
   * $sx: Shortcut for "scaleX".
   * **Deprecated:** Use $tr with a scaleX transform instead.
   * Specifies the scaling factor along the x-axis.
   */
  $sx?: number | Animated.AnimatedNode;

  /**
   * $sy: Shortcut for "scaleY".
   * **Deprecated:** Use $tr with a scaleY transform instead.
   * Specifies the scaling factor along the y-axis.
   */
  $sy?: number | Animated.AnimatedNode;

  /**
   * $tx: Shortcut for "translateX".
   * **Deprecated:** Use $tr with a translateX transform instead.
   * Specifies the translation distance along the x-axis.
   */
  $tx?: number | Animated.AnimatedNode;

  /**
   * $ty: Shortcut for "translateY".
   * **Deprecated:** Use $tr with a translateY transform instead.
   * Specifies the translation distance along the y-axis.
   */
  $ty?: number | Animated.AnimatedNode;

  // --- Additional ViewStyle Props ---

  /**
   * $bfv: Shortcut for "backfaceVisibility".
   * Determines whether the back side of the component is visible.
   */
  $bfv?: 'visible' | 'hidden';

  /**
   * $bg: Shortcut for "backgroundColor".
   * Sets the background color of the component.
   */
  $bg?: ColorValue;

  // --- Border Colors & Radii ---

  /**
   * $bbk: Shortcut for "borderBlockColor".
   * Sets the color for the block-level borders (both start and end).
   */
  $bbk?: ColorValue;

  /**
   * $bbke: Shortcut for "borderBlockEndColor".
   * Specifies the color for the block end border.
   */
  $bbke?: ColorValue;

  /**
   * $bbks: Shortcut for "borderBlockStartColor".
   * Specifies the color for the block start border.
   */
  $bbks?: ColorValue;

  /**
   * $bbc: Shortcut for "borderBottomColor".
   * Sets the color of the bottom border.
   */
  $bbc?: ColorValue;

  /**
   * $bber: Shortcut for "borderBottomEndRadius".
   * Defines the end radius for the bottom border.
   */
  $bber?: AnimatableNumericValue;

  /**
   * $bbler: Shortcut for "borderBottomLeftRadius".
   * Specifies the radius for the bottom left corner.
   */
  $bbler?: AnimatableNumericValue;

  /**
   * $bbrer: Shortcut for "borderBottomRightRadius".
   * Specifies the radius for the bottom right corner.
   */
  $bbrer?: AnimatableNumericValue;

  /**
   * $bbstr: Shortcut for "borderBottomStartRadius".
   * Defines the start radius for the bottom border.
   */
  $bbstr?: AnimatableNumericValue;

  /**
   * $bc: Shortcut for "borderColor".
   * Sets the color for all borders.
   */
  $bc?: ColorValue;

  /**
   * $bcurv: Shortcut for "borderCurve".
   * Specifies the curvature style of the borders (iOS only).
   */
  $bcurv?: 'circular' | 'continuous';

  /**
   * $bec: Shortcut for "borderEndColor".
   * Sets the color for the end border.
   */
  $bec?: ColorValue;

  /**
   * $beer: Shortcut for "borderEndEndRadius".
   * Specifies the end radius for the end border.
   */
  $beer?: AnimatableNumericValue;

  /**
   * $best: Shortcut for "borderEndStartRadius".
   * Specifies the start radius for the end border.
   */
  $best?: AnimatableNumericValue;

  /**
   * $blc: Shortcut for "borderLeftColor".
   * Sets the color of the left border.
   */
  $blc?: ColorValue;

  /**
   * $br: Shortcut for "borderRadius".
   * Sets a uniform radius for all corners.
   */
  $br?: AnimatableNumericValue;

  /**
   * $brc: Shortcut for "borderRightColor".
   * Sets the color of the right border.
   */
  $brc?: ColorValue;

  /**
   * $bsc: Shortcut for "borderStartColor".
   * Sets the color for the start border.
   */
  $bsc?: ColorValue;

  /**
   * $bser: Shortcut for "borderStartEndRadius".
   * Specifies the end radius for the start border.
   */
  $bser?: AnimatableNumericValue;

  /**
   * $bsstr: Shortcut for "borderStartStartRadius".
   * Specifies the start radius for the start border.
   */
  $bsstr?: AnimatableNumericValue;

  /**
   * $bsty: Shortcut for "borderStyle".
   * Defines the style of the border (solid, dotted, or dashed).
   */
  $bsty?: 'solid' | 'dotted' | 'dashed';

  /**
   * $btc: Shortcut for "borderTopColor".
   * Sets the color of the top border.
   */
  $btc?: ColorValue;

  /**
   * $bter: Shortcut for "borderTopEndRadius".
   * Specifies the end radius for the top border.
   */
  $bter?: AnimatableNumericValue;

  /**
   * $btler: Shortcut for "borderTopLeftRadius".
   * Specifies the radius for the top left corner.
   */
  $btler?: AnimatableNumericValue;

  /**
   * $btrer: Shortcut for "borderTopRightRadius".
   * Specifies the radius for the top right corner.
   */
  $btrer?: AnimatableNumericValue;

  /**
   * $btstr: Shortcut for "borderTopStartRadius".
   * Specifies the start radius for the top border.
   */
  $btstr?: AnimatableNumericValue;

  // --- Other Props ---

  /**
   * $op: Shortcut for "opacity".
   * Controls the transparency level of the component.
   */
  $op?: number | Animated.AnimatedNode;

  /**
   * $el: Shortcut for "elevation".
   * Sets the elevation (shadow depth) of the component on Android.
   */
  $el?: number;

  /**
   * $pevt: Shortcut for "pointerEvents".
   * Determines whether the component can be the target of touch events.
   */
  $pevt?: 'box-none' | 'none' | 'box-only' | 'auto';
};
