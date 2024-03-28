
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
      <AppText>Cool Text Component</AppText>
      <AppView>
        <AppImage source={require('./path/to/image.png')} />
      </AppView>
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
```
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
## Props

Each component accepts a variety of props to customize its appearance and behavior. Refer to the source code or documentation for detailed prop information.

## Contributing

Contributions are welcome! Please feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
