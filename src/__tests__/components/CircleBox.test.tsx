import { render } from '@testing-library/react-native';
import { StyleSheet, Text } from 'react-native';
import CircleBox from '../../components/CircleBox';

describe('CircleBox Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <CircleBox>
        <Text>Inside</Text>
      </CircleBox>
    );
    expect(getByText('Inside')).toBeTruthy();
  });

  it('applies default size correctly (50)', () => {
    const { getByTestId } = render(<CircleBox testID="circle" />);
    const style = StyleSheet.flatten(getByTestId('circle').props.style);

    expect(style.width).toBe(50);
    expect(style.height).toBe(50);
    expect(style.borderRadius).toBe(25);
    expect(style.alignItems).toBe('center');
    expect(style.justifyContent).toBe('center');
  });

  it('applies custom size', () => {
    const { getByTestId } = render(<CircleBox testID="circle" size={80} />);
    const style = StyleSheet.flatten(getByTestId('circle').props.style);

    expect(style.width).toBe(80);
    expect(style.height).toBe(80);
    expect(style.borderRadius).toBe(40);
  });

  it('merges additional styles', () => {
    const { getByTestId } = render(
      <CircleBox testID="circle" style={{ backgroundColor: 'green' }} />
    );
    const style = StyleSheet.flatten(getByTestId('circle').props.style);

    expect(style.backgroundColor).toBe('green');
  });

  it('applies styleMapper props (e.g., bg)', () => {
    const { getByTestId } = render(<CircleBox testID="circle" bg="red" />);
    const style = StyleSheet.flatten(getByTestId('circle').props.style);

    expect(style.backgroundColor).toBe('red');
  });
});
