# react-native-quick-components

> A modern, customizable, and production-ready set of React Native UI components for rapid development. Includes layout, utility, and typography helpers with intuitive shorthand props.

---

## ✨ Features

- **Ready-to-use UI components**: Box, Flex, Row, Center, Circle, Spacer, Divider, Container, Absolute, Image, Text, and more.
- **Shorthand props** for layout, spacing, flex, border, color, and typography.
- **Cross-platform shadow support**
- **TypeScript support**
- **Highly composable and customizable**

---

## 📦 Installation

```sh
npm install react-native-quick-components
# or
yarn add react-native-quick-components
```

---

## 🚀 Usage Example

```tsx
import React from 'react';
import {
  FlexView,
  RowView,
  CircleBox,
  BoxView,
  Spacer,
  Divider,
  TextView,
  Container,
  CenterView,
  AbsoluteView,
  ImageView,
} from 'react-native-quick-components';

const App = () => (
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
    <TextView weight="900" td="line-through" tt="uppercase" size={30} c="gray">
      Abhaya K. Sahoo
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
  </FlexView>
);

export default App;
```

---

## 🧩 Components

| Component      | Description                                                     |
| -------------- | --------------------------------------------------------------- |
| `BoxView`      | Basic view with all layout/spacing props                        |
| `FlexView`     | Flexbox container (flexDirection: column)                       |
| `RowView`      | Flexbox row (flexDirection: row)                                |
| `CenterView`   | Center content both vertically & horizontally                   |
| `CircleBox`    | Circular container                                              |
| `Container`    | General-purpose container                                       |
| `AbsoluteView` | Absolutely positioned view                                      |
| `ImageView`    | Image with border, radius, shadow, etc.                         |
| `Spacer`       | Adds vertical/horizontal space                                  |
| `Divider`      | Horizontal/vertical divider line                                |
| `TextView`     | Text with typography & layout props                             |
| `ButtonView`   | Customizable button with all layout, color, and pressable props |

---

## 🖲️ ButtonView

`ButtonView` is a customizable button component built on top of React Native's `Pressable`. It supports all layout, color, border, and flex shorthand props, as well as standard `PressableProps`.

**Default styles:**

- Centered content
- Heavy shadow
- 100% width
- Background: `#434365`
- Border radius: `10`
- Padding: `py=10`, `px=10`

**Props:**

| Prop              | Type     | Default | Description                                 |
| ----------------- | -------- | ------- | ------------------------------------------- |
| `activeOpacity`   | `number` | `0.9`   | Opacity when pressed                        |
| ...PressableProps | -        | -       | All standard Pressable props                |
| ...StyleProps     | -        | -       | All layout, color, border, flex, etc. props |

**Example:**

```tsx
import { ButtonView, TextView } from 'react-native-quick-components';

<ButtonView w={200} bg="blue" br={20} onPress={() => alert('Pressed!')}>
  <TextView c="white" weight="700">
    Click Me
  </TextView>
</ButtonView>;
```

---

## ⚡️ Shorthand Props Reference

All components accept a wide range of shorthand props for layout, spacing, flex, border, color, and more. Below are the most common props:

### Layout & Spacing

| Prop   | Description         | Example     |
| ------ | ------------------- | ----------- |
| `bg`   | Background color    | `bg="red"`  |
| `p`    | Padding (all)       | `p={10}`    |
| `px`   | Padding horizontal  | `px={8}`    |
| `py`   | Padding vertical    | `py={6}`    |
| `pt`   | Padding top         | `pt={3}`    |
| `pb`   | Padding bottom      | `pb={4}`    |
| `pl`   | Padding left        | `pl={10}`   |
| `pr`   | Padding right       | `pr={2}`    |
| `m`    | Margin (all)        | `m={5}`     |
| `mx`   | Margin horizontal   | `mx={3}`    |
| `my`   | Margin vertical     | `my={2}`    |
| `mt`   | Margin top          | `mt={3}`    |
| `mb`   | Margin bottom       | `mb={4}`    |
| `ml`   | Margin left         | `ml={3}`    |
| `mr`   | Margin right        | `mr={3}`    |
| `w`    | Width               | `w={100}`   |
| `h`    | Height              | `h={50}`    |
| `size` | Both width & height | `size={60}` |
| `maw`  | Max width           | `maw={150}` |
| `mah`  | Max height          | `mah={30}`  |
| `miw`  | Min width           | `miw={10}`  |
| `mih`  | Min height          | `mih={20}`  |

### Flexbox

| Prop | Description    | Example       |
| ---- | -------------- | ------------- |
| `f`  | flex           | `f={1}`       |
| `fg` | flexGrow       | `fg={1}`      |
| `fs` | flexShrink     | `fs={1}`      |
| `fw` | flexWrap       | `fw="wrap"`   |
| `fd` | flexDirection  | `fd="row"`    |
| `ai` | alignItems     | `ai="center"` |
| `jc` | justifyContent | `jc="center"` |
| `as` | alignSelf      | `as="center"` |

### Border & Shadow

| Prop     | Description             | Example           |
| -------- | ----------------------- | ----------------- |
| `br`     | borderRadius            | `br={12}`         |
| `bw`     | borderWidth             | `bw={2}`          |
| `bc`     | borderColor             | `bc="blue"`       |
| `shadow` | Predefined shadow level | `shadow="medium"` |

### Positioning

| Prop       | Description       | Example               |
| ---------- | ----------------- | --------------------- |
| `position` | absolute/relative | `position="absolute"` |
| `t`        | top               | `t={0}`               |
| `b`        | bottom            | `b={0}`               |
| `l`        | left              | `l={0}`               |
| `r`        | right             | `r={0}`               |
| `z`        | zIndex            | `z={10}`              |

### Typography (TextView)

| Prop     | Description        | Example          |
| -------- | ------------------ | ---------------- |
| `size`   | fontSize           | `size={16}`      |
| `weight` | fontWeight         | `weight="600"`   |
| `font`   | fontFamily         | `font="System"`  |
| `c`      | color              | `c="black"`      |
| `ta`     | textAlign          | `ta="center"`    |
| `lh`     | lineHeight         | `lh={24}`        |
| `lp`     | letterSpacing      | `lp={1.2}`       |
| `td`     | textDecorationLine | `td="underline"` |
| `tt`     | textTransform      | `tt="uppercase"` |

---

## 🛠️ Customization & Extensibility

- All components accept a `style` prop for custom styles.
- You can compose components for complex layouts.
- Supports all standard React Native View/Text/Image props in addition to shorthand props.

---

## 🧪 Testing

This package includes comprehensive unit tests for all utility functions and components. To run tests:

```sh
npm test
# or
yarn test
```

---

## 🤝 Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

---

## 📄 License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
