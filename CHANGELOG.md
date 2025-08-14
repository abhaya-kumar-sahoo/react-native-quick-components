# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **🎨 Multi-Theming System**: 20+ built-in theme variants including Material, iOS, Neon, Cyberpunk, Nature, Ocean, Sunset, Retro, Minimal, High Contrast, and more
- **♿ Comprehensive Accessibility Features**: Screen reader support, automatic touch target sizing, font scaling, reduced motion support, high contrast themes, and accessibility announcements
- **🎯 Theme-Aware Components**: All components now support theme color paths (e.g., `bg="primary.500"`, `c="text.primary"`)
- **📱 System Theme Integration**: Automatic dark/light mode switching based on system preferences
- **🔧 Theme Utilities**: `createTheme`, `mergeThemes`, `createThemeVariants` for custom theme creation
- **📚 Enhanced Documentation**: Complete theming guide, accessibility guide, and comprehensive examples
- **🎨 Theme Providers**: `ThemeProvider` and `AccessibilityProvider` for app-wide configuration
- **🎯 Accessibility Hooks**: `useAccessibility`, `useAccessibilityAnnouncement` for accessibility features
- **🌈 Theme Hooks**: `useTheme`, `useThemeColors`, `useResponsiveValue` for theme integration

### Enhanced
- **ButtonView**: Added `variant` prop (primary, secondary, outline, ghost) and `size` prop (sm, md, lg)
- **All Components**: Now support accessibility props and theme-aware styling
- **TextView**: Enhanced with font scaling support and accessibility features
- **BoxView**: Improved with automatic touch target sizing for pressable elements
- **Style System**: Extended to support theme values for colors, spacing, typography, and shadows

### Fixed
- Linting issues resolved
- TypeScript compatibility improved
- Zero value handling in fontSize (0 now properly applied)
- Component compatibility without providers (graceful fallbacks)

### Changed
- **Breaking**: Components now use theme-aware styling by default
- **Breaking**: Some prop types extended to support theme values (e.g., `size` can be string or number)
- README restructured with theming and accessibility sections
- Enhanced TypeScript definitions with accessibility and theme types
- Improved test coverage for new features

## [0.2.0] - 2024-12-10

### Added
- ButtonView component with default styling
- Custom hooks: useToggle, useDebounce, useThrottle, useNetInfo, useAppState
- Responsive utilities: rw, rh, rf, rbr, rbw
- Platform detection utilities
- Cross-platform shadow support
- TypeScript support with comprehensive types

### Components
- BoxView - Foundation component with all styling props
- FlexView - Flex container with default flex: 1
- RowView - Horizontal flex container
- CenterView - Centers content both axes
- Container - General-purpose container with flex wrap
- CircleBox - Perfect circles for avatars/icons
- AbsoluteView - Absolutely positioned container
- TextView - Enhanced text with typography props
- ImageView - Enhanced image with styling props
- Spacer - Consistent spacing utility
- Divider - Visual separator lines
- ButtonView - Customizable button component

### Features
- Shorthand props for rapid development
- Cross-platform shadow system
- Responsive design utilities
- Custom hooks for common patterns
- Platform detection helpers
- TypeScript first approach
- Zero dependencies
- Comprehensive test coverage (90%+)

## [0.1.0] - Initial Release

### Added
- Basic component structure
- Initial TypeScript setup
- Basic testing framework
- Package configuration