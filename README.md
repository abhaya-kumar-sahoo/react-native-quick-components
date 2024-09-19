
# react-native-quick-components

`react-native-quick-components` is a powerful and customizable library of React Native UI components, designed to accelerate and simplify the development process for mobile applications. It offers a rich set of pre-styled, flexible components, allowing developers to focus on building features without spending too much time on styling and layout.

## Key Features

- `Pre-styled Components`: Offers a variety of ready-to-use components, minimizing the need for custom styling.
- `Customizable`: Each component comes with a wide range of props to modify appearance and behavior, allowing for easy adaptation to any design system.
- `Consistent Styling`: The defaultConfig function allows developers to set consistent global styling options like background colors, font sizes, and text colors, ensuring uniformity across the app.
Inline Styling: Simplifies inline styling using intuitive, prop-driven configuration, making it easy to define component styles without external stylesheets.
- `Performance-Optimized`: Components are lightweight and optimized for performance, ensuring fast rendering even in large applications.
- `Cross-Platform Support`: All components are designed to work seamlessly on both iOS and Android platforms.

## Installation

You can install `react-native-quick-components` via npm or yarn:

```bash

# Using yarn
yarn add react-native-quick-components

# Using npm
npm install react-native-quick-components
```

## Configuration
The defaultConfig function allows you to define and apply default settings across your components, ensuring consistent styling and behavior throughout your application. You can customize settings like background color, text color, font size and font family.
```jsx
defaultConfig({
  defaultBackgroundColor: 'black', // Sets default background color for components
  defaultTextColor: 'black',       // Sets default text color for text-based components
  defaultFontSize: 16,             // Sets default font size for text components
  // defaultFontFamily: 'Arial',   // Uncomment and define the default font family if needed
});
```


## Usage

Import the components you need from `react-native-quick-components` and use them in your React Native application:

```jsx
import * as React from 'react';
import { Alert, ScrollView } from 'react-native';
import {
  AbsoluteBox,
  AppButton,
  AppImage,
  AppText,
  AppTextInput,
  AppView,
  BoxView,
  CircleView,
  ColView,
  FlexView,
  RowView,
  defaultConfig,
} from 'react-native-quick-components';

defaultConfig({
  defaultBackgroundColor: 'black',
  defaultTextColor: 'black',
  defaultFontSize: 16,
  // defaultFontFamily: 'Arial',
});

export default function App() {
  const [name, setName] = React.useState('abhaya');
  return (
    <FlexView>
      <ScrollView>
        <AbsoluteBox
          B={0}
          R={0}
          disabled={false}
          BG="gray"
          onPress={() => {}}
          BOR={50}
          BOW={10}
          BOC="yellow:800"
        >
          <AppButton
            BG="red"
            title="Press me"
            PX={19}
            BOC="white"
            textStyle={{ PX: 10, PY: 5, F_WEIGHT: '900' }}
            BOW={2}
            C="gray:900"
            leftComponent={<AppText>FF</AppText>}
            rightComponent={<AppText>FF</AppText>}
            onPress={() => {
              Alert.alert('Press me');
            }}
          />
        </AbsoluteBox>

        <CircleView BOC="cyan:500" BOW={4} SIZE={100} BG="teal" />
        <AppView W={300} H={80} BG="red" BOC="green" BOW={10} BOR={20}>
          <AppText
            F_SIZE={20}
            C="white"
            F_WEIGHT="bold"
            BOC="teal:200"
            BOW={4}
            PX={20}
            PY={10}
          >
            Hello, World!
          </AppText>
        </AppView>
        <AppText
          numberOfLines={1}
          F_SIZE={30}
          BG="amber:500"
          C="blue:600"
          F_WEIGHT="900"
          FONT="serif"
        >
          abhaya-dev
        </AppText>
        <AppImage
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13BKV8WV4_tnm5OWK4RV-G9O5tzpfzGezdw&usqp=CAU',
          }}
          SIZE={100}
          resizeMode="cover"
          BOR={60}
          BOW={2}
          BOC="blue:200"
        />
        <AppButton
          BG="red"
          title="Press me"
          PX={19}
          BOC="white"
          textStyle={{ PX: 10, PY: 5, F_WEIGHT: '900' }}
          BOW={2}
          C="gray:900"
          leftComponent={<AppText>FF</AppText>}
          rightComponent={<AppText>FF</AppText>}
          onPress={() => {
            Alert.alert('Press me');
          }}
        />
        <AppTextInput
          containerStyle={{
            BG: 'white',
            BOR: 30,
            BOW: 2,
            BOC: 'gray:100',
            W: 300,
          }}
          BOR={40}
          value={name}
          onChangeText={setName}
          BOC="white"
          W={250}
          // C="red"
          H={40}
          // style={{ flexShrink: 1 }}
          PX={10}
          BG="transparent"
        />
        <RowView BG="cyan:800" colGap={10}>
          <BoxView BG="red">
            <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
              Row 1
            </AppText>
          </BoxView>
          <BoxView>
            <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
              Row 2
            </AppText>
          </BoxView>
          <BoxView>
            <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
              Row 3
            </AppText>
          </BoxView>
        </RowView>
        <ColView rowGap={10}>
          <BoxView>
            <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
              Row 1
            </AppText>
          </BoxView>
          <BoxView>
            <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
              Row 2
            </AppText>
          </BoxView>
          <BoxView>
            <AppText F_SIZE={20} F_WEIGHT="600" FONT="sans-serif">
              Row 3
            </AppText>
          </BoxView>
        </ColView>
      </ScrollView>
    </FlexView>
  );
}

```
## Available Components

- `AppText`: Customizable text component.


- `AbsoluteBox`: An absolutely positioned view component. Use this for placing elements at specific coordinates relative to their closest positioned ancestor.

- `AppButton`: Customizable button component. It can be styled and configured to handle various button states
- `AppImage`: Customizable image component. Supports different image sources and configurations such as resizing, scaling, and styling.
- `AppText`: Customizable text component. Offers flexibility to change font size, color, weight, and other text properties.
- ` AppTextInput`: Customizable text input component. Used for capturing user input, supports various styles, placeholder, and input configurations.
- `AppView`: Customizable view component. Provides flexible layout and styling options, commonly used as a container for other elements.
- `BoxView`: A customizable box-style view component, often used for creating bordered or background-colored boxes.
- `CircleView`: A view component that creates a circular shape, typically used for avatars or circular buttons.
- `ColView`: Column layout component, aligns child elements vertically. Useful for stacking elements one below the other.
- `FlexView`: A flexible view component that has flex: 1 styling by default. This allows the view to expand and take available space.
- `RowView`: Row layout component, aligns child elements horizontally. Useful for placing elements side by side.
- `FlexSafeView`: A flexible SafeAreaView component with flex: 1 styling. Ensures content is displayed within safe areas of the screen on iOS devices.



## Props

Each component accepts a variety of props to customize its appearance and behavior. Refer to the source code or documentation for detailed prop information.

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
