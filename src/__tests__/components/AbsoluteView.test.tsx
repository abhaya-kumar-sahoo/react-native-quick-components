// src/__tests__/components/AbsoluteView.test.tsx
import { render } from '@testing-library/react-native';
import AbsoluteView from '../../components/AbsoluteView';

describe('AbsoluteView', () => {
  it('renders correctly with default absolute positioning', () => {
    const { getByTestId } = render(
      <AbsoluteView testID="absolute-view" bg="blue" w={100} h={50}>
        <></>
      </AbsoluteView>
    );

    const view = getByTestId('absolute-view');
    const style = view.props.style;

    expect(style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 999,
          backgroundColor: 'blue',
          width: 100,
          height: 50,
        }),
      ])
    );
  });

  it('merges custom style prop correctly', () => {
    const customStyle = { opacity: 0.5 };

    const { getByTestId } = render(
      <AbsoluteView testID="absolute-view" bg="red" style={customStyle} />
    );

    const view = getByTestId('absolute-view');
    const style = view.props.style;

    expect(style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 999,
          backgroundColor: 'red',
        }),
        customStyle,
      ])
    );
  });
});
