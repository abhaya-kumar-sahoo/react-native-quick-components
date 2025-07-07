import React from 'react';
import {
  BoxView,
  FlexView,
  RowView,
  CircleBox,
  Spacer,
  Divider,
  TextView,
  Container,
  CenterView,
  AbsoluteView,
  ImageView,
  ButtonView,
} from 'react-native-quick-components';

const App: React.FC = () => {
  return (
    <FlexView pt={60} bg="white">
      <RowView px={30}>
        <CircleBox shadow="heavy" size={60} bg="white">
          <TextView weight="900" size={30} c="gray">
            C
          </TextView>
        </CircleBox>
        <BoxView shadow="heavy" bg="white" w={100} h={40} />
      </RowView>
      <Spacer h={20} />
      <Divider thickness={10} color="gray" />
      <TextView
        weight="900"
        td="line-through"
        tt="uppercase"
        size={30}
        c="gray"
      >
        Abhaya K. Sahoo{' '}
      </TextView>
      <Container h={300} bg="cyan">
        <CenterView shadow="heavy" size={60} bg="white">
          <TextView weight="900" size={30} c="gray">
            C
          </TextView>
        </CenterView>
        <CenterView fg={1} shadow="heavy" size={60} bg="white">
          <TextView weight="900" size={30} c="gray">
            C
          </TextView>
        </CenterView>
        <CenterView shadow="heavy" size={60} bg="white">
          <TextView weight="900" size={30} c="gray">
            C
          </TextView>
        </CenterView>
      </Container>
      <CenterView size={100} bg="cyan">
        <TextView weight="900" size={60} ta="center" w={90} bg="red" c="gray">
          C
        </TextView>
      </CenterView>

      <AbsoluteView t={60} z={10}>
        <BoxView size={50} br={10} bg="purple" />
      </AbsoluteView>

      <ImageView
        source={{
          uri: 'https://static.vecteezy.com/system/resources/previews/053/887/600/non_2x/colorful-lizard-with-a-blue-face-and-orange-eyes-the-lizard-is-looking-at-the-camera-the-image-has-a-bright-and-lively-mood-free-photo.jpg',
        }}
        size={100}
        br={10}
        mt={60}
        as="center"
        shadow="heavy"
      />
      <ButtonView my={50}>
        <TextView weight="900" size={20} c="white">
          Submit
        </TextView>
      </ButtonView>
    </FlexView>
  );
};

export default App;
