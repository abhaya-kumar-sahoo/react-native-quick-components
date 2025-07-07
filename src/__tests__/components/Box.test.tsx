import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Box from '../../components/BoxView';

describe('Box Component', () => {
  it('renders child components', () => {
    const { getByText } = render(
      <Box>
        <Text>Hello World</Text>
      </Box>
    );
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('applies additional View styles', () => {
    const { getByTestId } = render(
      <Box testID="box" style={{ backgroundColor: 'red' }}>
        <Text>Test</Text>
      </Box>
    );
    expect(getByTestId('box')).toHaveStyle({ backgroundColor: 'red' });
  });

  it('applies styles from styleMapper props', () => {
    const { getByTestId } = render(<Box testID="box" p={10} m={5} bg="blue" />);

    // This assumes styleMapper converts 'p', 'm', 'bg' properly.
    const box = getByTestId('box');

    // These values depend on your implementation of styleMapper
    expect(box.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          padding: 10,
          margin: 5,
          backgroundColor: 'blue',
        }),
      ])
    );
  });

  it('does not break if no children are passed', () => {
    const { getByTestId } = render(<Box testID="box" />);
    expect(getByTestId('box')).toBeTruthy();
  });
});
