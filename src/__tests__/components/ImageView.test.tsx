// __tests__/components/ImageView.test.tsx
import { render } from '@testing-library/react-native';
import ImageView from '../../components/ImageView';

const ImgUrl =
  'https://static.vecteezy.com/system/resources/previews/053/887/600/non_2x/colorful-lizard-with-a-blue-face-and-orange-eyes-the-lizard-is-looking-at-the-camera-the-image-has-a-bright-and-lively-mood-free-photo.jpg';

describe('ImageView', () => {
  it('renders correctly with default and custom props', () => {
    const { getByTestId } = render(
      <ImageView
        testID="image-view"
        source={{ uri: ImgUrl }}
        w={100}
        h={80}
        br={10}
        bg="blue"
      />
    );

    const image = getByTestId('image-view');

    expect(image).toBeTruthy();

    // // Verify style props applied by imageStyleMapper
    // const style = image.props.style;

    // expect(style).toEqual(
    //   expect.arrayContaining([
    //     expect.objectContaining({
    //       width: 100,
    //       height: 80,
    //       borderRadius: 10,
    //       backgroundColor: 'blue',
    //       alignItems: 'center', // default applied
    //     }),
    //   ])
    // );
  });

  it('merges passed style with computed style', () => {
    const { getByTestId } = render(
      <ImageView
        testID="image-view-style"
        source={{ uri: ImgUrl }}
        style={{ opacity: 0.5 }}
        w={120}
        h={90}
      />
    );

    const image = getByTestId('image-view-style');

    const style = image.props.style;

    expect(style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          width: 120,
          height: 90,
        }),
        expect.objectContaining({
          opacity: 0.5,
        }),
      ])
    );
  });
});
