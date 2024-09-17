import { config } from '../components/config';
import { DefaultColors } from '../types/colors';

export const applyCommonStyles = ({
  FullColumnCenter,
  FullRowCenter,
  RowSpacBtw,
  ColumnSpacBtw,
  ColumnCenterStart,
  RowCenterStart,
  P,
  PL,
  PR,
  PT,
  PB,
  PX,
  PY,
  M,
  ML,
  MB,
  MT,
  MR,
  MY,
  MX,
  BOR,
  BOW,
  BOC,
  SIZE,
  W,
  H,
  BG,
  center_me,
  style,
}: {
  P?: number | string;
  PL?: number | string;
  PR?: number | string;
  PT?: number | string;
  PB?: number | string;
  PX?: number | string;
  PY?: number | string;
  M?: number | string;
  ML?: number | string;
  MB?: number | string;
  MT?: number | string;
  MR?: number | string;
  MY?: number | string;
  MX?: number | string;
  BOR?: number | string;
  BOW?: number | string;
  BOC?: any;
  center_me?: string;
  BG?: any;
  SIZE?: number;
  W?: number | string | undefined;
  H?: number | string | undefined;
  style?: any;
  FullColumnCenter?: boolean;
  FullRowCenter?: boolean;
  RowSpacBtw?: boolean;
  ColumnSpacBtw?: boolean;
  ColumnCenterStart?: boolean;
  RowCenterStart?: boolean;
}) => {
  const colorType = BG?.split(':')[0] ?? 'red';
  const colorName = BG?.split(':')[1] ?? '100';

  // const color = (DefaultColors as any)[colorType][colorName];

  return {
    // padding
    ...(P ? { padding: P } : {}),
    ...(PL ? { paddingLeft: PL } : {}),
    ...(PR ? { paddingRight: PR } : {}),
    ...(PT ? { paddingTop: PT } : {}),
    ...(PB ? { paddingBottom: PB } : {}),
    ...(PX ? { paddingHorizontal: PX } : {}),
    ...(PY ? { paddingVertical: PY } : {}),
    // margin
    ...(M ? { margin: M } : {}),
    ...(ML ? { marginLeft: ML } : {}),
    ...(MR ? { marginRight: MR } : {}),
    ...(MT ? { marginTop: MT } : {}),
    ...(MB ? { marginBottom: MB } : {}),
    ...(MX ? { marginHorizontal: MX } : {}),
    ...(MY ? { marginVertical: MY } : {}),
    // border
    ...(BOR ? { borderRadius: BOR } : {}),
    ...(BOW
      ? {
          borderWidth: BOW,
          borderColor: BOC.includes(':')
            ? (DefaultColors as any)[colorType][colorName]
            : BOC,
        }
      : {}),
    //sizes
    ...(SIZE ? { width: SIZE, height: SIZE } : {}),
    ...(W ? { width: W } : {}),
    ...(H ? { height: H } : {}),
    //colors
    ...(BG
      ? {
          backgroundColor: BG.includes(':')
            ? (DefaultColors as any)[colorType][colorName]
            : BG,
        }
      : { backgroundColor: config.defaultBackgroundColor }),

    //center

    ...(FullColumnCenter
      ? { justifyContent: 'center', alignItems: 'center' }
      : {}),
    ...(RowCenterStart
      ? {
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'row',
        }
      : {}),
    ...(FullRowCenter
      ? { justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }
      : {}),
    ...(RowSpacBtw
      ? {
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }
      : {}),
    ...(ColumnSpacBtw
      ? { justifyContent: 'space-between', alignItems: 'center' }
      : {}),
    ...(ColumnCenterStart
      ? { justifyContent: 'center', alignItems: 'flex-start' }
      : {}),

    ...(center_me ? { alignSelf: center_me } : {}),

    //custom styles
    ...(typeof style === 'object' ? style : {}),
  };
};

export const applyTextStyles = ({
  P,
  PL,
  PR,
  PT,
  PB,
  PX,
  PY,
  M,
  ML,
  MB,
  MT,
  MR,
  MY,
  MX,
  BOR,
  BOW,
  BOC,
  W,
  H,
  BG,
  center_me,
  style,
}: {
  P?: number | string;
  PL?: number | string;
  PR?: number | string;
  PT?: number | string;
  PB?: number | string;
  PX?: number | string;
  PY?: number | string;
  M?: number | string;
  ML?: number | string;
  MB?: number | string;
  MT?: number | string;
  MR?: number | string;
  MY?: number | string;
  MX?: number | string;
  BOR?: number | string;
  BOW?: number | string;
  BOC?: string;
  center_me?: string;
  BG?: string;
  SIZE?: number;
  W?: number | string | undefined;
  H?: number | string | undefined;
  style?: any;
}) => {
  const colorType = BG?.split(':')[0] ?? 'red';
  const colorName = BG?.split(':')[1] ?? '100';

  const color = (DefaultColors as any)[colorType][colorName];

  return {
    // padding
    ...(P ? { padding: P } : {}),
    ...(PL ? { paddingLeft: PL } : {}),
    ...(PR ? { paddingRight: PR } : {}),
    ...(PT ? { paddingTop: PT } : {}),
    ...(PB ? { paddingBottom: PB } : {}),
    ...(PX ? { paddingHorizontal: PX } : {}),
    ...(PY ? { paddingVertical: PY } : {}),
    // margin
    ...(M ? { margin: M } : {}),
    ...(ML ? { marginLeft: ML } : {}),
    ...(MR ? { marginRight: MR } : {}),
    ...(MT ? { marginTop: MT } : {}),
    ...(MB ? { marginBottom: MB } : {}),
    ...(MX ? { marginHorizontal: MX } : {}),
    ...(MY ? { marginVertical: MY } : {}),
    // border
    ...(BOR ? { borderRadius: BOR } : {}),
    ...(BOW ? { borderWidth: BOW, borderColor: BOC } : {}),
    //sizes
    ...(W ? { width: W } : {}),
    ...(H ? { height: H } : {}),
    //colors
    ...(BG ? { backgroundColor: BG.includes(':') ? color : BG } : {}),

    //center

    ...(center_me ? { alignSelf: center_me } : {}),

    //custom styles
    ...(typeof style === 'object' ? style : {}),
  };
};
