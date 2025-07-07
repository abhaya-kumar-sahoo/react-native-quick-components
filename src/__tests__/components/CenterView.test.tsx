// src/__tests__/components/CenterView.test.tsx
import { render } from '@testing-library/react-native';
import CenterView from '../../components/CenterView';

describe('CenterView', () => {
  it('applies center alignment styles by default', () => {
    const { getByTestId } = render(
      <CenterView testID="center-view" bg="white" w={100} h={100}>
        <></>
      </CenterView>
    );

    const view = getByTestId('center-view');
    const style = view.props.style;

    expect(style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          width: 100,
          height: 100,
        }),
      ])
    );
  });

  it('merges custom styles correctly', () => {
    const customStyle = { opacity: 0.9 };

    const { getByTestId } = render(
      <CenterView testID="center-view" bg="gray" style={customStyle} />
    );

    const view = getByTestId('center-view');
    const style = view.props.style;

    expect(style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'gray',
        }),
        customStyle,
      ])
    );
  });
});
