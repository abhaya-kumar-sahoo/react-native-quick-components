
# react-native-quick-components

`react-native-quick-components` is a collection of customizable React Native UI components designed to simplify inline styling, making it quick and easy to develop React Native applications.

## Installation

You can install `react-native-quick-components` via npm or yarn:

```bash

# Using yarn
yarn add react-native-quick-components

# Using npm
npm install react-native-quick-components
```

## Usage

Import the components you need from `react-native-quick-components` and use them in your React Native application:

```javascript
import React from 'react';
import { View } from 'react-native';
import { AppText, AppView, AppImage, CircleView, RowView, ColumView, AbsoluteView } from 'react-native-quick-components';


const App = () => {
  return (
    <FlexView>
      <AppText C="amber:500">abhaya-dev</AppText>

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

      <CircleView BG="blue" SIZE={100}>
        {/* Your content here */}
      </CircleView>

      <RowView>
        {/* Your row content here */}
      </RowView>

      <ColumView>
        {/* Your column content here */}
      </ColumView>

      <AbsoluteView T={20} L={10}>
        {/* Your absolutely positioned content here */}
      </AbsoluteView>
      
       {/* Button Component */}

      <AppButton
        BG="blue"
        title="Press me!"
        PX={20}
        center
        C="teal:100"
        onPress={() => {}}
      />
       {/* TextInput Component */}

      <AppTextInput
        BOR={10}
        BOW={4}
        value={first}
        onChangeText={setfirst}
        BOC="rose:400"
        W={250}
        PX={10}
        H={40}
        BG="cyan:400"
      />
      <FlexSafeView>
        {/* Your flexible SafeAreaView content here */}
      </FlexSafeView>
    </FlexView>
  );
};

export default App;
```

## Configuration

The package allows for easy configuration of default text color, background color, font family, and font size. You can customize the default settings by calling the init function with a configuration object at root index file.

```js
import { init } from 'react-native-quick-components';

// Customize default settings
init({
  defaultTextColor: 'blue',
  defaultBackgroundColor: null,
  defaultFontFamily: null,
  defaultFontSize: 20,
});
```

## Available Components

- `AppText`: Customizable text component.
- `AppView`: Customizable view component.
- `AppImage`: Customizable image component.
- `CircleView`: Circular view component.
- `RowView`: Row layout component.
- `ColumView`: Column layout component.
- `AbsoluteView`: Absolutely positioned view component.
- `FlexView`: Flexible view component with flex: 1 style.
- `FlexSafeView`: Flexible SafeAreaView component with flex: 1 style.
- `AppButton`: Customized button component.
- `AppTextInput`: Customized TextInput component.

## Props

Each component accepts a variety of props to customize its appearance and behavior. Refer to the source code or documentation for detailed prop information.

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
