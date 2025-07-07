import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import TextView from '../../components/TextView';

describe('TextView Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<TextView>Test Content</TextView>);
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('applies font style props correctly', () => {
    const { getByText } = render(
      <TextView
        size={18}
        weight="600"
        font="System"
        c="blue"
        ta="center"
        lh={22}
        lp={0.5}
        td="underline"
        tt="uppercase"
        testID="text"
      >
        Styled Text
      </TextView>
    );

    const style = StyleSheet.flatten(getByText('Styled Text').props.style);
    expect(style.fontSize).toBe(18);
    expect(style.fontWeight).toBe('600');
    expect(style.fontFamily).toBe('System');
    expect(style.color).toBe('blue');
    expect(style.textAlign).toBe('center');
    expect(style.lineHeight).toBe(22);
    expect(style.letterSpacing).toBe(0.5);
    expect(style.textDecorationLine).toBe('underline');
    expect(style.textTransform).toBe('uppercase');
  });

  it('applies spacing and layout props', () => {
    const { getByText } = render(
      <TextView
        p={10}
        px={15}
        py={5}
        m={8}
        mx={6}
        my={4}
        w={100}
        h={40}
        maw={200}
        mih={30}
        testID="text"
      >
        Layout Test
      </TextView>
    );

    const style = StyleSheet.flatten(getByText('Layout Test').props.style);
    expect(style.padding).toBe(10);
    expect(style.paddingHorizontal).toBe(15);
    expect(style.paddingVertical).toBe(5);
    expect(style.margin).toBe(8);
    expect(style.marginHorizontal).toBe(6);
    expect(style.marginVertical).toBe(4);
    expect(style.width).toBe(100);
    expect(style.height).toBe(40);
  });

  it('merges custom inline style', () => {
    const { getByText } = render(
      <TextView style={{ backgroundColor: 'yellow' }}>Custom Style</TextView>
    );
    const style = StyleSheet.flatten(getByText('Custom Style').props.style);
    expect(style.backgroundColor).toBe('yellow');
  });

  it('applies 0 values correctly', () => {
    const { getByText } = render(
      <TextView p={0} m={0} size={0}>
        Zero Styles
      </TextView>
    );
    const style = StyleSheet.flatten(getByText('Zero Styles').props.style);
    expect(style.padding).toBe(0);
    expect(style.margin).toBe(0);
    expect(style.fontSize).toBe(0);
  });
});
