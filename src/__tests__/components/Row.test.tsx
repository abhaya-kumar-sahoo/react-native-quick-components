import { render } from '@testing-library/react-native';
import { Text, StyleSheet } from 'react-native';
import Row from '../../components/RowView';

describe('Row Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Row>
        <Text>Child</Text>
      </Row>
    );
    expect(getByText('Child')).toBeTruthy();
  });

  it('applies flexDirection: row by default', () => {
    const { getByTestId } = render(<Row testID="row" />);
    const style = StyleSheet.flatten(getByTestId('row').props.style);
    expect(style.flexDirection).toBe('row');
  });

  it('applies default styleMapper values', () => {
    const { getByTestId } = render(<Row testID="row" />);
    const style = StyleSheet.flatten(getByTestId('row').props.style);
    expect(style.justifyContent).toBe('space-between');
    expect(style.alignItems).toBe('center');
  });

  it('merges custom inline styles', () => {
    const { getByTestId } = render(
      <Row testID="row" style={{ padding: 20 }} />
    );
    const style = StyleSheet.flatten(getByTestId('row').props.style);
    expect(style.padding).toBe(20);
  });

  it('overrides styleMapper defaults with props', () => {
    const { getByTestId } = render(
      <Row testID="row" jc="flex-start" ai="flex-end" />
    );
    const style = StyleSheet.flatten(getByTestId('row').props.style);
    expect(style.justifyContent).toBe('flex-start');
    expect(style.alignItems).toBe('flex-end');
  });
});
