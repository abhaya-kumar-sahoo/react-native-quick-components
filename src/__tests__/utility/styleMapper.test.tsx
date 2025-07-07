import { Platform } from 'react-native';
import { styleMapper, fontStyleMapper } from '../../utility/styleMapper';

describe('styleMapper', () => {
  it('maps layout and spacing props correctly', () => {
    const style = styleMapper({
      bg: 'red',
      p: 10,
      px: 8,
      py: 6,
      pt: 3,
      pb: 4,
      pl: 10,
      pr: 2,
      m: 5,
      mx: 3,
      my: 2,
      mt: 3,
      mb: 4,
      ml: 3,
      mr: 3,
      br: 12,
      bw: 2,
      bc: 'blue',
      w: 100,
      h: 50,
      maw: 150,
      mah: 30,
      miw: 10,
      mih: 20,
      f: 1,
      fg: 1,
      fs: 1,
      fw: 'wrap',
      fd: 'row',
      ai: 'center',
      jc: 'center',
      opacity: 0.6,
    });

    expect(style.backgroundColor).toBe('red');
    expect(style.padding).toBe(10);
    expect(style.paddingHorizontal).toBe(8);
    expect(style.paddingVertical).toBe(6);
    expect(style.paddingTop).toBe(3);
    expect(style.paddingBottom).toBe(4);
    expect(style.paddingLeft).toBe(10);
    expect(style.paddingRight).toBe(2);

    expect(style.margin).toBe(5);
    expect(style.marginHorizontal).toBe(3);
    expect(style.marginVertical).toBe(2);
    expect(style.marginTop).toBe(3);
    expect(style.marginBottom).toBe(4);
    expect(style.marginLeft).toBe(3);
    expect(style.marginRight).toBe(3);

    expect(style.borderRadius).toBe(12);
    expect(style.borderWidth).toBe(2);
    expect(style.borderColor).toBe('blue');

    expect(style.width).toBe(100);
    expect(style.height).toBe(50);
    expect(style.maxWidth).toBe(150);
    expect(style.maxHeight).toBe(30);
    expect(style.minWidth).toBe(10);
    expect(style.minHeight).toBe(20);

    expect(style.flex).toBe(1);
    expect(style.flexGrow).toBe(1);
    expect(style.flexShrink).toBe(1);
    expect(style.flexWrap).toBe('wrap');
    expect(style.flexDirection).toBe('row');

    expect(style.alignItems).toBe('center');
    expect(style.justifyContent).toBe('center');

    expect(style.opacity).toBe(0.6);
  });

  it('applies flex and alignment props', () => {
    const style = styleMapper({
      f: 1,
      fs: 0,
      fg: 1,
      fw: 'wrap',
      jc: 'space-between',
      ai: 'flex-start',
      fd: 'row',
      position: 'absolute',
      r: 0,
      b: 0,
      t: 0,
      l: 0,
    });

    expect(style.flex).toBe(1);
    expect(style.flexShrink).toBe(0);
    expect(style.flexGrow).toBe(1);
    expect(style.flexWrap).toBe('wrap');
    expect(style.justifyContent).toBe('space-between');
    expect(style.alignItems).toBe('flex-start');
    expect(style.flexDirection).toBe('row');

    expect(style.position).toBe('absolute');
    expect(style.left).toBe(0);
    expect(style.right).toBe(0);
    expect(style.top).toBe(0);
    expect(style.bottom).toBe(0);
  });

  it('applies shadow style if specified', () => {
    const style = styleMapper({ shadow: 'medium' });

    if (Platform.OS === 'ios') {
      expect(style.shadowOpacity).toBe(0.2);
      expect(style.shadowRadius).toBe(6);
      expect(style.shadowOffset).toEqual({ width: 0, height: 2 });
    } else {
      expect(style.elevation).toBe(4);
    }
  });

  it('applies center alignment with `center` prop', () => {
    const style = styleMapper({ center: true });
    expect(style.alignItems).toBe('center');
    expect(style.justifyContent).toBe('center');
  });

  it('applies horizontal and vertical centering with `centerX` and `centerY`', () => {
    const style = styleMapper({ centerX: true, centerY: true });
    expect(style.alignItems).toBe('center');
    expect(style.justifyContent).toBe('center');
  });

  it('ignores unknown shadow values', () => {
    const style = styleMapper({ shadow: 'invalid' as any });
    expect(style.elevation).toBeUndefined();
    expect(style.shadowOpacity).toBeUndefined();
  });
});

describe('fontStyleMapper', () => {
  it('maps typography props correctly', () => {
    const style = fontStyleMapper({
      size: 16,
      weight: '600',
      font: 'System',
      c: 'black',
      ta: 'center',
      lh: 24,
      lp: 1.2,
      td: 'underline',
      tt: 'uppercase',
      as: 'center',
    });

    expect(style.fontSize).toBe(16);
    expect(style.fontWeight).toBe('600');
    expect(style.fontFamily).toBe('System');
    expect(style.color).toBe('black');
    expect(style.textAlign).toBe('center');
    expect(style.lineHeight).toBe(24);
    expect(style.letterSpacing).toBe(1.2);
    expect(style.textDecorationLine).toBe('underline');
    expect(style.textTransform).toBe('uppercase');
  });

  it('applies layout props to text as well', () => {
    const style = fontStyleMapper({
      p: 4,
      m: 2,
      px: 8,
      mx: 5,
      w: 120,
      h: 40,
      opacity: 0.9,
    });

    expect(style.padding).toBe(4);
    expect(style.margin).toBe(2);
    expect(style.paddingHorizontal).toBe(8);
    expect(style.marginHorizontal).toBe(5);
    expect(style.width).toBe(120);
    expect(style.height).toBe(40);
    expect(style.opacity).toBe(0.9);
  });
});
