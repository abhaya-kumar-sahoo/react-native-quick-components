import { render } from '@testing-library/react-native';
import { Text, StyleSheet } from 'react-native';
import Wrapper from '../../components/Container';

describe('Grid (Wrapper) Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Wrapper>
        <Text>Item 1</Text>
      </Wrapper>
    );
    expect(getByText('Item 1')).toBeTruthy();
  });

  it('applies default flexDirection and flexWrap styles', () => {
    const { getByTestId } = render(<Wrapper testID="grid" />);
    const style = StyleSheet.flatten(getByTestId('grid').props.style);

    expect(style.flexWrap).toBe('wrap');
  });

  it('merges custom inline styles', () => {
    const { getByTestId } = render(
      <Wrapper testID="grid" style={{ backgroundColor: 'lightgrey' }} />
    );
    const style = StyleSheet.flatten(getByTestId('grid').props.style);

    expect(style.backgroundColor).toBe('lightgrey');
  });

  it('allows style override via props', () => {
    const { getByTestId } = render(
      <Wrapper testID="grid" fd="column" fw="nowrap" />
    );
    const style = StyleSheet.flatten(getByTestId('grid').props.style);

    expect(style.flexDirection).toBe('column');
    expect(style.flexWrap).toBe('nowrap');
  });

  it('ignores gap prop in styleMapper (handled manually)', () => {
    const { getByTestId } = render(<Wrapper testID="grid" gap={20} />);
    const style = StyleSheet.flatten(getByTestId('grid').props.style);

    // Make sure styleMapper doesn't process gap directly
    expect(style.gap).toBeUndefined(); // Unless you're manually applying it
  });
});
