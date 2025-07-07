// __tests__/ButtonView.test.tsx
import { fireEvent, render } from '@testing-library/react-native';
import ButtonView from '../../components/ButtonView';
import { Text } from 'react-native';

describe('ButtonView', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <ButtonView testID="btn">
        <Text>Click Me</Text>
      </ButtonView>
    );
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('triggers onPress callback', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ButtonView testID="btn" onPress={onPressMock}>
        <Text>Click</Text>
      </ButtonView>
    );
    fireEvent.press(getByTestId('btn'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('accepts custom styles and props', () => {
    const { getByTestId } = render(
      <ButtonView testID="btn" bg="red" br={20}>
        <Text>Styled</Text>
      </ButtonView>
    );
    const button = getByTestId('btn');
    const flattenedStyles = Array.isArray(button.props.style)
      ? Object.assign({}, ...button.props.style)
      : button.props.style;

    expect(flattenedStyles.backgroundColor).toBe('red');
    expect(flattenedStyles.borderRadius).toBe(20);
  });
});
