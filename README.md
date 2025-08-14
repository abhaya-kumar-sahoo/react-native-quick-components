# react-native-quick-components

> A modern, lightweight, and production-ready set of React Native UI components designed for rapid development. Build beautiful UIs with intuitive shorthand props and zero configuration.

[![npm version](https://badge.fury.io/js/react-native-quick-components.svg)](https://badge.fury.io/js/react-native-quick-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

---

## ✨ Why Quick Components?

- **🚀 Rapid Development**: Write 50% less code with intuitive shorthand props
- **📱 Cross-Platform**: Perfect shadows, responsive sizing, and consistent behavior
- **🎯 TypeScript First**: Full type safety with intelligent autocomplete
- **🪶 Lightweight**: Zero dependencies, minimal bundle impact
- **🎨 Highly Customizable**: Compose and extend components easily
- **♿ Accessible**: Comprehensive accessibility features with screen reader support
- **🎨 Multi-Theming**: 20+ built-in themes with custom theme support

---

## 📦 Installation

```bash
# npm
npm install react-native-quick-components

# yarn
yarn add react-native-quick-components

# pnpm
pnpm add react-native-quick-components

# bun
bun add react-native-quick-components
```

**Requirements:**
- React Native >= 0.60
- React >= 16.8
- TypeScript >= 4.0 (optional but recommended)

---

## 🚀 Quick Start

### Basic Example

```tsx
import React from 'react';
import { 
  ThemeProvider, 
  AccessibilityProvider,
  BoxView, 
  TextView, 
  ButtonView 
} from 'react-native-quick-components';

const App = () => (
  <AccessibilityProvider>
    <ThemeProvider initialVariant="light" followSystemTheme={true}>
      <BoxView f={1} bg="background.primary" p="md">
        <TextView 
          size="xl" 
          weight="bold" 
          mb="lg"
          accessibilityRole="header"
        >
          Welcome to Quick Components!
        </TextView>
        
        <BoxView bg="surface.secondary" br="md" p="md" mb="lg">
          <TextView c="text.secondary">
            Build UIs faster with theming and accessibility built-in
          </TextView>
        </BoxView>
        
        <ButtonView 
          variant="primary"
          onPress={() => alert('Hello!')}
          accessibilityLabel="Get started button"
        >
          <TextView c="white" weight="semibold">
            Get Started
          </TextView>
        </ButtonView>
      </BoxView>
    </ThemeProvider>
  </AccessibilityProvider>
);
```

### Real-World Example: Profile Card

```tsx
import React from 'react';
import {
  BoxView,
  RowView,
  TextView,
  ImageView,
  ButtonView,
  Spacer,
} from 'react-native-quick-components';

const ProfileCard = ({ user }) => (
  <BoxView bg="white" br={16} shadow="medium" p={20} m={16}>
    <RowView ai="center" mb={16}>
      <ImageView
        source={{ uri: user.avatar }}
        size={60}
        br={30}
        mr={16}
      />
      <BoxView f={1}>
        <TextView size={18} weight="bold" mb={4}>
          {user.name}
        </TextView>
        <TextView c="gray.600" size={14}>
          {user.role}
        </TextView>
      </BoxView>
    </RowView>
    
    <TextView c="gray.700" lh={20} mb={16}>
      {user.bio}
    </TextView>
    
    <RowView jc="space-between">
      <ButtonView f={1} mr={8} bg="blue.500">
        <TextView c="white" weight="600">Follow</TextView>
      </ButtonView>
      <ButtonView f={1} ml={8} bg="gray.200">
        <TextView c="gray.800" weight="600">Message</TextView>
      </ButtonView>
    </RowView>
  </BoxView>
);
```

---

## 🎨 **Theming System**

Quick Components includes 20+ built-in themes with full customization support:

```tsx
import { ThemeProvider, useTheme } from 'react-native-quick-components';

// Built-in themes
<ThemeProvider initialVariant="material">     {/* Material Design */}
<ThemeProvider initialVariant="ios">          {/* iOS Style */}
<ThemeProvider initialVariant="neon">         {/* Cyberpunk Neon */}
<ThemeProvider initialVariant="nature">       {/* Nature/Organic */}
<ThemeProvider initialVariant="retro">        {/* Retro/Vintage */}
<ThemeProvider initialVariant="high-contrast"> {/* Accessibility */}

// Theme-aware components
const ThemedComponent = () => {
  const { colors, toggleMode } = useTheme();
  
  return (
    <BoxView bg="primary.500" p="lg" br="md" shadow="lg">
      <TextView c="white" size="xl">Themed Content</TextView>
      <ButtonView onPress={toggleMode}>
        <TextView c="white">Toggle Dark Mode</TextView>
      </ButtonView>
    </BoxView>
  );
};
```

**Theme Features:**
- 🌈 20+ built-in theme variants
- 🌙 Automatic dark/light mode switching
- 🎨 Custom theme creation
- 📱 System theme integration
- 🎯 Semantic color system

## ♿ **Accessibility Features**

Built-in accessibility support for inclusive apps:

```tsx
import { AccessibilityProvider, useAccessibility } from 'react-native-quick-components';

const AccessibleApp = () => {
  const { announce } = useAccessibilityAnnouncement();
  
  return (
    <BoxView>
      <TextView 
        accessibilityRole="header"
        accessibilityLevel={1}
      >
        Page Title
      </TextView>
      
      <ButtonView
        accessibilityLabel="Save document"
        accessibilityHint="Double tap to save your work"
        onPress={() => announce('Document saved', 'high')}
      >
        <TextView>Save</TextView>
      </ButtonView>
    </BoxView>
  );
};

// Wrap your app
<AccessibilityProvider>
  <AccessibleApp />
</AccessibilityProvider>
```

**Accessibility Features:**
- 🔊 Screen reader support
- 👆 Automatic touch target sizing
- 🎯 Focus management
- 📱 Font scaling support
- 🎨 High contrast themes
- 🎭 Reduced motion support
- 📢 Live announcements

---

## 🧩 Components Guide

### 📦 Layout Components

#### `BoxView`
The foundation component - a flexible container with all styling props.

```tsx
<BoxView bg="white" p={20} br={12} shadow="medium">
  <TextView>Content goes here</TextView>
</BoxView>
```

**Use cases:** Cards, containers, wrappers, any styled view

#### `FlexView`
A flex container with `flex: 1` by default.

```tsx
<FlexView bg="gray.50" px={16}>
  <TextView mb={16}>Header</TextView>
  <BoxView f={1}>Flexible content</BoxView>
  <TextView>Footer</TextView>
</FlexView>
```

**Default props:** `f={1}`, `px={10}`

#### `RowView`
Horizontal flex container with `flexDirection: 'row'`.

```tsx
<RowView ai="center" jc="space-between" p={16}>
  <TextView>Left content</TextView>
  <TextView>Right content</TextView>
</RowView>
```

**Use cases:** Navigation bars, horizontal layouts, inline elements

#### `CenterView`
Centers content both horizontally and vertically.

```tsx
<CenterView f={1} bg="blue.500">
  <TextView c="white" size={18}>Centered Text</TextView>
</CenterView>
```

**Default props:** `center={true}`

#### `Container`
General-purpose container with flex wrap enabled.

```tsx
<Container p={20} bg="white">
  <BoxView w="48%" bg="red" h={100} />
  <BoxView w="48%" bg="blue" h={100} />
</Container>
```

**Default props:** `fw="wrap"`

### 🎯 Specialized Components

#### `CircleBox`
Perfect circles for avatars, icons, or decorative elements.

```tsx
<CircleBox size={60} bg="purple.500" shadow="medium">
  <TextView c="white" weight="bold">AB</TextView>
</CircleBox>
```

#### `AbsoluteView`
Absolutely positioned container.

```tsx
<BoxView position="relative">
  <AbsoluteView t={10} r={10} z={10}>
    <BoxView bg="red" size={20} br={10} />
  </AbsoluteView>
</BoxView>
```

#### `ImageView`
Enhanced image component with styling props.

```tsx
<ImageView
  source={{ uri: 'https://example.com/image.jpg' }}
  w={200}
  h={150}
  br={12}
  shadow="light"
/>
```

### ✍️ Content Components

#### `TextView`
Enhanced text component with typography and layout props.

```tsx
<TextView
  size={18}
  weight="bold"
  c="gray.800"
  ta="center"
  mb={16}
>
  Beautiful Typography
</TextView>
```

#### `ButtonView`
Customizable button built on Pressable.

```tsx
<ButtonView
  onPress={() => console.log('Pressed!')}
  bg="blue.500"
  br={8}
  px={24}
  py={12}
>
  <TextView c="white" weight="600">Press Me</TextView>
</ButtonView>
```

**Default props:** `center={true}`, `shadow="heavy"`, `w="100%"`, `bg="#434365"`, `br={10}`, `py={10}`, `px={10}`

### 🔧 Utility Components

#### `Spacer`
Adds consistent spacing between elements.

```tsx
<BoxView>
  <TextView>First item</TextView>
  <Spacer h={20} />
  <TextView>Second item</TextView>
  <Spacer w={10} />
  <TextView>Third item</TextView>
</BoxView>
```

#### `Divider`
Visual separator line.

```tsx
<BoxView>
  <TextView>Section 1</TextView>
  <Divider thickness={1} color="gray.300" my={16} />
  <TextView>Section 2</TextView>
</BoxView>
```

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

## ⚡️ Complete Props Reference

### 📐 Layout & Spacing

| Prop   | Type | Description | Example | CSS Equivalent |
|--------|------|-------------|---------|----------------|
| `p` | `number \| string` | Padding (all sides) | `p={16}` | `padding: 16px` |
| `px` | `number \| string` | Padding horizontal | `px={20}` | `paddingHorizontal: 20` |
| `py` | `number \| string` | Padding vertical | `py={10}` | `paddingVertical: 10` |
| `pt` | `number \| string` | Padding top | `pt={8}` | `paddingTop: 8` |
| `pb` | `number \| string` | Padding bottom | `pb={8}` | `paddingBottom: 8` |
| `pl` | `number \| string` | Padding left | `pl={12}` | `paddingLeft: 12` |
| `pr` | `number \| string` | Padding right | `pr={12}` | `paddingRight: 12` |
| `m` | `number \| string` | Margin (all sides) | `m={16}` | `margin: 16px` |
| `mx` | `number \| string` | Margin horizontal | `mx={20}` | `marginHorizontal: 20` |
| `my` | `number \| string` | Margin vertical | `my={10}` | `marginVertical: 10` |
| `mt` | `number \| string` | Margin top | `mt={8}` | `marginTop: 8` |
| `mb` | `number \| string` | Margin bottom | `mb={8}` | `marginBottom: 8` |
| `ml` | `number \| string` | Margin left | `ml={12}` | `marginLeft: 12` |
| `mr` | `number \| string` | Margin right | `mr={12}` | `marginRight: 12` |

### 📏 Dimensions

| Prop | Type | Description | Example | CSS Equivalent |
|------|------|-------------|---------|----------------|
| `w` | `number \| string` | Width | `w={100}` | `width: 100` |
| `h` | `number \| string` | Height | `h={50}` | `height: 50` |
| `size` | `number \| string` | Width & height | `size={60}` | `width: 60; height: 60` |
| `maw` | `number \| string` | Max width | `maw={300}` | `maxWidth: 300` |
| `mah` | `number \| string` | Max height | `mah={200}` | `maxHeight: 200` |
| `miw` | `number \| string` | Min width | `miw={100}` | `minWidth: 100` |
| `mih` | `number \| string` | Min height | `mih={50}` | `minHeight: 50` |

### 🔄 Flexbox

| Prop | Type | Description | Example | CSS Equivalent |
|------|------|-------------|---------|----------------|
| `f` | `number` | Flex | `f={1}` | `flex: 1` |
| `fg` | `number` | Flex grow | `fg={1}` | `flexGrow: 1` |
| `fs` | `number` | Flex shrink | `fs={0}` | `flexShrink: 0` |
| `fw` | `'wrap' \| 'nowrap' \| 'wrap-reverse'` | Flex wrap | `fw="wrap"` | `flexWrap: wrap` |
| `fd` | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | Flex direction | `fd="row"` | `flexDirection: row` |
| `ai` | `'flex-start' \| 'flex-end' \| 'center' \| 'stretch' \| 'baseline'` | Align items | `ai="center"` | `alignItems: center` |
| `jc` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | Justify content | `jc="center"` | `justifyContent: center` |
| `as` | `'flex-start' \| 'flex-end' \| 'center' \| 'stretch' \| 'baseline'` | Align self | `as="center"` | `alignSelf: center` |

### 🎨 Colors & Background

| Prop | Type | Description | Example | CSS Equivalent |
|------|------|-------------|---------|----------------|
| `bg` | `string` | Background color | `bg="blue"` | `backgroundColor: blue` |
| `c` | `string` | Text color (TextView only) | `c="white"` | `color: white` |
| `opacity` | `number` | Opacity | `opacity={0.8}` | `opacity: 0.8` |

### 🔲 Border & Radius

| Prop | Type | Description | Example | CSS Equivalent |
|------|------|-------------|---------|----------------|
| `br` | `number` | Border radius | `br={8}` | `borderRadius: 8` |
| `bw` | `number` | Border width | `bw={1}` | `borderWidth: 1` |
| `bc` | `string` | Border color | `bc="gray"` | `borderColor: gray` |

### 🌟 Shadow

| Prop | Type | Description | Example | Result |
|------|------|-------------|---------|--------|
| `shadow` | `'none' \| 'subtle' \| 'light' \| 'medium' \| 'strong' \| 'heavy'` | Predefined shadow | `shadow="medium"` | Cross-platform shadow |

**Shadow Examples:**
```tsx
<BoxView shadow="none">No shadow</BoxView>
<BoxView shadow="subtle">Very light shadow</BoxView>
<BoxView shadow="light">Light shadow</BoxView>
<BoxView shadow="medium">Medium shadow</BoxView>
<BoxView shadow="strong">Strong shadow</BoxView>
<BoxView shadow="heavy">Heavy shadow</BoxView>
```

### 📍 Positioning

| Prop | Type | Description | Example | CSS Equivalent |
|------|------|-------------|---------|----------------|
| `position` | `'absolute' \| 'relative'` | Position type | `position="absolute"` | `position: absolute` |
| `t` | `number \| string` | Top | `t={10}` | `top: 10` |
| `b` | `number \| string` | Bottom | `b={10}` | `bottom: 10` |
| `l` | `number \| string` | Left | `l={10}` | `left: 10` |
| `r` | `number \| string` | Right | `r={10}` | `right: 10` |
| `z` | `number` | Z-index | `z={10}` | `zIndex: 10` |

### ✍️ Typography (TextView only)

| Prop | Type | Description | Example | CSS Equivalent |
|------|------|-------------|---------|----------------|
| `size` | `number` | Font size | `size={16}` | `fontSize: 16` |
| `weight` | `'normal' \| 'bold' \| '100' \| '200' \| ... \| '900'` | Font weight | `weight="600"` | `fontWeight: 600` |
| `font` | `string` | Font family | `font="Arial"` | `fontFamily: Arial` |
| `ta` | `'auto' \| 'left' \| 'right' \| 'center' \| 'justify'` | Text align | `ta="center"` | `textAlign: center` |
| `lh` | `number` | Line height | `lh={24}` | `lineHeight: 24` |
| `lp` | `number` | Letter spacing | `lp={1.2}` | `letterSpacing: 1.2` |
| `td` | `'none' \| 'underline' \| 'line-through' \| 'underline line-through'` | Text decoration | `td="underline"` | `textDecorationLine: underline` |
| `tt` | `'none' \| 'capitalize' \| 'uppercase' \| 'lowercase'` | Text transform | `tt="uppercase"` | `textTransform: uppercase` |

### 🎯 Convenience Props

| Prop | Type | Description | Example | Equivalent |
|------|------|-------------|---------|------------|
| `center` | `boolean` | Center both axes | `center` | `ai="center" jc="center"` |
| `centerX` | `boolean` | Center horizontally | `centerX` | `ai="center"` |
| `centerY` | `boolean` | Center vertically | `centerY` | `jc="center"` |

---

## � Usageo Patterns & Best Practices

### 🎨 Common Patterns

#### Card Layout
```tsx
<BoxView bg="white" br={12} shadow="medium" p={16} mb={16}>
  <RowView ai="center" mb={12}>
    <ImageView source={{uri: avatar}} size={40} br={20} mr={12} />
    <BoxView f={1}>
      <TextView weight="bold" size={16}>John Doe</TextView>
      <TextView c="gray.600" size={14}>2 hours ago</TextView>
    </BoxView>
  </RowView>
  <TextView lh={20} mb={12}>
    This is a sample post content that demonstrates the card layout pattern.
  </TextView>
  <RowView jc="space-between">
    <ButtonView bg="transparent" px={0}>
      <TextView c="blue.500">Like</TextView>
    </ButtonView>
    <ButtonView bg="transparent" px={0}>
      <TextView c="blue.500">Comment</TextView>
    </ButtonView>
    <ButtonView bg="transparent" px={0}>
      <TextView c="blue.500">Share</TextView>
    </ButtonView>
  </RowView>
</BoxView>
```

#### Form Layout
```tsx
<FlexView p={20} bg="white">
  <TextView size={24} weight="bold" mb={20}>Sign Up</TextView>
  
  <BoxView mb={16}>
    <TextView weight="600" mb={8}>Email</TextView>
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 8,
        padding: 12,
      }}
      placeholder="Enter your email"
    />
  </BoxView>
  
  <BoxView mb={20}>
    <TextView weight="600" mb={8}>Password</TextView>
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: '#e2e8f0',
        borderRadius: 8,
        padding: 12,
      }}
      placeholder="Enter your password"
      secureTextEntry
    />
  </BoxView>
  
  <ButtonView onPress={handleSignUp}>
    <TextView c="white" weight="600">Create Account</TextView>
  </ButtonView>
</FlexView>
```

#### Grid Layout
```tsx
<Container p={16}>
  {items.map((item, index) => (
    <BoxView
      key={index}
      w="48%"
      bg="white"
      br={8}
      shadow="light"
      p={12}
      mb={16}
    >
      <ImageView
        source={{uri: item.image}}
        w="100%"
        h={120}
        br={6}
        mb={8}
      />
      <TextView weight="bold" mb={4}>{item.title}</TextView>
      <TextView c="gray.600" size={12}>{item.description}</TextView>
    </BoxView>
  ))}
</Container>
```

### 🎯 Performance Tips

1. **Use specific props instead of style objects when possible**
   ```tsx
   // ✅ Better
   <BoxView p={16} bg="white" br={8} />
   
   // ❌ Avoid when shorthand exists
   <BoxView style={{padding: 16, backgroundColor: 'white', borderRadius: 8}} />
   ```

2. **Leverage default props for consistency**
   ```tsx
   // ButtonView comes with sensible defaults
   <ButtonView onPress={handlePress}>
     <TextView c="white">Click Me</TextView>
   </ButtonView>
   ```

3. **Compose components for reusability**
   ```tsx
   const Card = ({children, ...props}) => (
     <BoxView bg="white" br={12} shadow="medium" p={16} {...props}>
       {children}
     </BoxView>
   );
   ```

### 🛠️ Customization & Extensibility

- **Style prop override**: All components accept a `style` prop for custom styles
- **Prop spreading**: Pass any React Native props alongside shorthand props
- **Component composition**: Build complex layouts by combining simple components
- **TypeScript support**: Full type safety with intelligent autocomplete

```tsx
// Custom styled component
const CustomCard = (props) => (
  <BoxView
    bg="white"
    br={16}
    shadow="heavy"
    p={20}
    style={{
      borderLeftWidth: 4,
      borderLeftColor: '#3b82f6',
    }}
    {...props}
  />
);
```

---

## 📱 Responsive Design

Quick Components includes responsive utilities for building adaptive UIs.

### Responsive Functions

```tsx
import { rw, rh, rf, rbr, rbw } from 'react-native-quick-components';

// Responsive width (percentage of screen width)
<BoxView w={rw(90)} /> // 90% of screen width

// Responsive height (percentage of screen height)  
<BoxView h={rh(50)} /> // 50% of screen height

// Responsive font size (scales with screen size)
<TextView size={rf(16)} /> // Scales 16px font appropriately

// Responsive border radius
<BoxView br={rbr(12)} /> // Scales border radius

// Responsive border width (always crisp)
<BoxView bw={rbw(1)} /> // Optimized border width
```

### Platform Detection

```tsx
import {
  isIOS,
  isAndroid,
  isWeb,
  SCREEN_W,
  SCREEN_H,
} from 'react-native-quick-components';

// Conditional styling
<BoxView 
  pt={isIOS ? 44 : 24} // Account for status bar
  bg={isAndroid ? 'blue' : 'green'}
/>

// Screen dimensions
<BoxView w={SCREEN_W * 0.8} h={SCREEN_H * 0.6} />
```

### Custom Hooks

```tsx
import {
  useToggle,
  useDebounce,
  useThrottle,
  useNetInfo,
  useAppState,
} from 'react-native-quick-components';

const MyComponent = () => {
  const [isVisible, { toggle, on, off }] = useToggle(false);
  const debouncedValue = useDebounce(searchTerm, 300);
  const throttledValue = useThrottle(scrollY, 100);
  const netInfo = useNetInfo();
  const appState = useAppState();

  return (
    <BoxView>
      <ButtonView onPress={toggle}>
        <TextView>Toggle Visibility</TextView>
      </ButtonView>
      
      {isVisible && (
        <BoxView bg={netInfo.isConnected ? 'green' : 'red'} p={16}>
          <TextView c="white">
            App State: {appState}
          </TextView>
        </BoxView>
      )}
    </BoxView>
  );
};
```

## 🧪 Testing

This package includes comprehensive unit tests for all utility functions and components.

```bash
# Run tests
npm test

# Run tests with coverage
npm run test -- --coverage

# Run tests in watch mode
npm run test -- --watch
```

**Test Coverage:**
- ✅ 90%+ statement coverage
- ✅ All components tested
- ✅ Utility functions tested
- ✅ TypeScript type checking
- ✅ Cross-platform compatibility

---

## ❓ FAQ & Troubleshooting

### Common Issues

**Q: Shadows not appearing on Android?**
A: Make sure you're using the `shadow` prop instead of iOS-specific shadow styles. Our shadow system handles cross-platform compatibility automatically.

```tsx
// ✅ Works on both platforms
<BoxView shadow="medium" />

// ❌ iOS only
<BoxView style={{shadowColor: '#000', shadowOffset: {width: 0, height: 2}}} />
```

**Q: TypeScript errors with props?**
A: Ensure you're using the correct prop names. All shorthand props are fully typed.

```tsx
// ✅ Correct
<BoxView p={16} bg="white" />

// ❌ Wrong prop name
<BoxView padding={16} backgroundColor="white" />
```

**Q: Components not rendering?**
A: Check that you're importing from the correct package:

```tsx
// ✅ Correct import
import { BoxView, TextView } from 'react-native-quick-components';

// ❌ Wrong import
import { View, Text } from 'react-native';
```

**Q: How to override default styles?**
A: Use the `style` prop or more specific shorthand props:

```tsx
// Method 1: Using style prop
<ButtonView style={{backgroundColor: 'red'}} />

// Method 2: Using shorthand props (recommended)
<ButtonView bg="red" />
```

### Performance Considerations

- Shorthand props are optimized and don't create new objects on each render
- Use specific props instead of style objects when possible
- The library has zero dependencies and minimal bundle impact

### Migration Guide

**From React Native Views:**
```tsx
// Before
<View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
  <Text style={{fontSize: 18, fontWeight: 'bold'}}>Hello</Text>
</View>

// After
<BoxView f={1} p={20} bg="white">
  <TextView size={18} weight="bold">Hello</TextView>
</BoxView>
```

**From other UI libraries:**
- NativeBase users: Replace `Box` with `BoxView`, `Text` with `TextView`
- React Native Elements users: Most components have direct equivalents
- Styled Components users: Replace styled components with shorthand props

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Setup

```bash
# Clone the repository
git clone https://github.com/abhaya-kumar-sahoo/react-native-quick-components.git

# Install dependencies
npm install

# Run tests
npm test

# Run example app
npm run example ios
# or
npm run example android
```

### Contribution Guidelines

1. **Fork the repository** and create your feature branch
2. **Write tests** for new features or bug fixes
3. **Update documentation** for any API changes
4. **Follow the existing code style** (ESLint + Prettier)
5. **Submit a pull request** with a clear description

### Areas We Need Help

- 🎨 More component examples and patterns
- 📱 Accessibility improvements
- 🌐 Web platform optimizations
- 📚 Documentation improvements
- 🧪 Additional test coverage

See the [contributing guide](CONTRIBUTING.md) for detailed information.

---

## 📚 Documentation

- **[Complete Examples](docs/EXAMPLES.md)** - Comprehensive component examples and patterns
- **[API Reference](docs/API.md)** - Detailed API documentation for all components
- **[Theming Guide](docs/THEMING.md)** - Complete theming system documentation
- **[Accessibility Guide](docs/ACCESSIBILITY.md)** - Accessibility features and best practices
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute to the project

## 🔗 Links

- **[npm Package](https://www.npmjs.com/package/react-native-quick-components)**
- **[GitHub Repository](https://github.com/abhaya-kumar-sahoo/react-native-quick-components)**
- **[Issue Tracker](https://github.com/abhaya-kumar-sahoo/react-native-quick-components/issues)**
- **[Changelog](https://github.com/abhaya-kumar-sahoo/react-native-quick-components/releases)**

## 📄 License

MIT © [Abhaya Kumar Sahoo](https://github.com/abhaya-kumar-sahoo)

---

**Made with ❤️ for the React Native community**

*Built with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)*
