# react-native-quick-components

`react-native-quick-components` is a powerful and customizable library of React Native UI components, designed to accelerate and simplify the development process for mobile applications. It offers a rich set of pre-styled, flexible components, allowing developers to focus on building features without spending too much time on styling and layout.

## Key Features

- `Pre-styled components`: Offers a variety of ready-to-use components, minimizing the need for custom styling.
- `Customizable`: Each component comes with a wide range of props to modify appearance and behavior, allowing for easy adaptation to any design system.
- `Consistent styling`: The `defaultConfig` function allows developers to set consistent global styling options like background colors, font sizes, and text colors, ensuring uniformity across the app.
- `Inline styling`: Simplifies inline styling using intuitive, prop-driven configuration, making it easy to define component styles without external stylesheets.
- `Performance-optimized`: Components are lightweight and optimized for performance, ensuring fast rendering even in large applications.
- `Cross-platform support`: All components are designed to work seamlessly on both iOS and Android platforms.

## Installation

You can install `react-native-quick-components` via npm or yarn:

```bash
# Using yarn
yarn add react-native-quick-components

# Using npm
npm install react-native-quick-components
```

## Configuration
The `defaultConfig` function allows you to define and apply default settings across your components, ensuring consistent styling and behavior throughout your application. You can customize settings like background color, text color, font size, and font family.

```jsx
import { defaultConfig } from 'react-native-quick-components';

defaultConfig({
  defaultBackgroundColor: 'black', // Sets default background color for components
  defaultTextColor: 'white',       // Sets default text color for text-based components
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
  AppText,
  BoxView,
  ColView,
  Divider,
  FlexSafeView,
  TextInputBox,
  AbsoluteBox,
  AppButton,
  AppImage,
  AppTextInput,
  CircleView,
  RowView,
  FlexView,
  AppModal,
  AppView,
  HorizSpace,
  VertSpace,
  SCREEN_H,
  isAndroid,
  SCREEN_W,
  isIOS,
  isLandscape,
  isMacOs,
  isPortrait,
  isTv,
  isWeb,
  isWindows,
  moderateScale,
  moderateVerticalScale,
  verticalScale,
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
          _b={0}
          _r={0}
          disabled={false}
          _bg="gray"
          onPress={() => {}}
          _bor={50}
          _bow={10}
          _boc="yellow:800"
        >
          <AppButton
            _bg="red"
            _title="Press me"
            _px={19}
            _boc="white"
            _textStyle={{ px: 10, py: 5, bold: '900' }}
            _bow={2}
            _c="gray:900"
            _leftComponent={<appText>FF</appText>}
            _rightComponent={<appText>FF</appText>}
            onPress={() => {
              Alert.alert('Press me');
            }}
          />
        </AbsoluteBox>

        <CircleView _boc="cyan:500" _bow={4} _size={100} _bg="teal" />
       
      </ScrollView>
    </FlexView>
  );
}
```

## Available Components

- `AppText`: Customizable text component.
- `AbsoluteBox`: An absolutely positioned view component. Use this for placing elements at specific coordinates relative to their closest positioned ancestor.
- `AppButton`: Customizable button component. It can be styled and configured to handle various button states.
- `AppImage`: Customizable image component. Supports different image sources and configurations such as resizing, scaling, and styling.
- `AappTextInput`: Customizable text input component. Used for capturing user input, supports various styles, placeholder, and input configurations.
- `AppView`: Customizable view component. Provides flexible layout and styling options, commonly used as a container for other elements.
- `BoxView`: A customizable box-style view component, often used for creating bordered or background-colored boxes.
- `CircleView`: A view component that creates a circular shape, typically used for avatars or circular buttons.
- `ColView`: Column layout component, aligns child elements vertically. Useful for stacking elements one below the other.
- `FlexView`: A flexible view component that has `flex: 1` styling by default. This allows the view to expand and take available space.
- `RowView`: Row layout component, aligns child elements horizontally. Useful for placing elements side by side.
- `FlexSafeView`: A flexible SafeAreaView component with `flex: 1` styling. Ensures content is displayed within safe areas of the screen on iOS devices.

## Shorthand CSS Properties

### 1. **Color (Text and Border)**

- `_c`: Color suggestion for text or border.
- `_bg`: Background color.
- `_boc`: Border color.

### 2. **Font and Text Styling**

- `_fontFamily`: Font family.
- `_fontSize`: Font size.
- `_textAline`: Text alignment (align).
- `_lineHeight`: Line height.
- `_bold`: Font weight.

### 3. **Padding (Spacing)**

- `_p`: Padding.
- `_pl`: Padding left.
- `_pr`: Padding right.
- `_pt`: Padding top.
- `_pb`: Padding bottom.
- `_px`: Padding horizontal.
- `_py`: Padding vertical.

### 4. **Margin (Spacing)**

- `_m`: Margin.
- `_ml`: Margin left.
- `_mb`: Margin bottom.
- `_mt`: Margin top.
- `_mr`: Margin right.
- `_mx`: Margin horizontal.
- `_my`: Margin vertical.

### 5. **Border**

- `_bor`: Border radius.
- `_bow`: Border width.
- `_boC`: Border color.

### 6. **Size**

- `_w`: Width.
- `_h`: Height.
- `_size`: Box size (width and height combined).
- `_flex`: Flex value.


### 7. **Positioning (For Absolute or Relative Positioning)**

- `_t`: Top.
- `_b`: Bottom.
- `_l`: Left.
- `_r`: Right.

### 8. **Justify and Align**

- `_js`: Justify content.
- `_alignItem`: Align items.

### 9. **Centering**

- `_center`: Center both horizontally and vertically.
- `_centerX`: Center horizontally.
- `_centerY`: Center vertically.
- `_alignSelf`: Align self.

### 10. **Flexbox**

- `_flexBasis`: Defines the flex basis.
- `_flexGrow`: Defines the flex grow.
- `_flexShrink`: Defines the flex shrink.
- `_flexWrap`: Flex wrapping.
- `_gap`: Gap between items.
- `_rowGap`: Gap between rows.
- `_colGap`: Gap between columns.


## Props

Each component accepts a variety of props to customize its appearance and behavior. Refer to the source code or documentation for detailed prop information.

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
