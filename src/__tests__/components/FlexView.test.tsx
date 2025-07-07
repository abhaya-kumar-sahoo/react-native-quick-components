import { render } from '@testing-library/react-native';
import { Text, StyleSheet } from 'react-native';
import FlexView from '../../components/FlexView';

describe('FlexView Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <FlexView>
        <Text>Flex Content</Text>
      </FlexView>
    );
    expect(getByText('Flex Content')).toBeTruthy();
  });

  it('applies default style props (f=1, px=10)', () => {
    const { getByTestId } = render(<FlexView testID="flex" />);
    const style = StyleSheet.flatten(getByTestId('flex').props.style);

    expect(style.flex).toBe(1);
    expect(style.paddingHorizontal).toBe(10);
  });

  it('overrides default style props with custom values', () => {
    const { getByTestId } = render(<FlexView testID="flex" f={2} px={20} />);
    const style = StyleSheet.flatten(getByTestId('flex').props.style);

    expect(style.flex).toBe(2);
    expect(style.paddingHorizontal).toBe(20);
  });

  it('merges additional custom styles', () => {
    const { getByTestId } = render(
      <FlexView testID="flex" style={{ backgroundColor: 'lightblue' }} />
    );
    const style = StyleSheet.flatten(getByTestId('flex').props.style);

    expect(style.backgroundColor).toBe('lightblue');
  });
});
