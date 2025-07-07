import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import Divider from '../../components/Divider';
describe('Divider Component', () => {
  it('renders with default horizontal orientation', () => {
    const { getByTestId } = render(<Divider testID="divider" />);
    const style = StyleSheet.flatten(getByTestId('divider').props.style);

    expect(style.height).toBe(1); // default thickness
    expect(style.width).toBe('100%');
    expect(style.backgroundColor).toBe('#ccc'); // default color
  });

  it('renders with vertical orientation', () => {
    const { getByTestId } = render(
      <Divider testID="divider" orientation="vertical" />
    );
    const style = StyleSheet.flatten(getByTestId('divider').props.style);

    expect(style.width).toBe(1); // default thickness
    expect(style.height).toBe('100%');
  });

  it('applies custom thickness and color (horizontal)', () => {
    const { getByTestId } = render(
      <Divider testID="divider" thickness={4} color="red" />
    );
    const style = StyleSheet.flatten(getByTestId('divider').props.style);

    expect(style.height).toBe(4);
    expect(style.backgroundColor).toBe('red');
  });

  it('applies custom thickness and color (vertical)', () => {
    const { getByTestId } = render(
      <Divider
        testID="divider"
        orientation="vertical"
        thickness={2}
        color="blue"
      />
    );
    const style = StyleSheet.flatten(getByTestId('divider').props.style);

    expect(style.width).toBe(2);
    expect(style.backgroundColor).toBe('blue');
  });

  it('merges additional custom styles', () => {
    const { getByTestId } = render(
      <Divider testID="divider" style={{ marginVertical: 10 }} />
    );
    const style = StyleSheet.flatten(getByTestId('divider').props.style);

    expect(style.marginVertical).toBe(10);
  });
});
