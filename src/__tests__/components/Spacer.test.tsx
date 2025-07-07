import { render } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import Spacer from '../../components/Spacer';

describe('Spacer Component', () => {
  it('renders with default width and height', () => {
    const { getByTestId } = render(<Spacer testID="spacer" />);
    const style = StyleSheet.flatten(getByTestId('spacer').props.style);

    expect(style.width).toBe('100%');
    expect(style.height).toBe(10);
  });

  it('applies custom width and height', () => {
    const { getByTestId } = render(<Spacer testID="spacer" w={50} h={20} />);
    const style = StyleSheet.flatten(getByTestId('spacer').props.style);

    expect(style.width).toBe(50);
    expect(style.height).toBe(20);
  });

  it('merges additional custom styles', () => {
    const { getByTestId } = render(
      <Spacer testID="spacer" style={{ backgroundColor: 'red' }} />
    );
    const style = StyleSheet.flatten(getByTestId('spacer').props.style);

    expect(style.backgroundColor).toBe('red');
  });
});
