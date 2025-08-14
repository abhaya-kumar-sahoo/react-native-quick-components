import React from 'react';
import {
  AccessibilityProvider,
  BoxView,
  FlexView,
  RowView,
  CircleBox,
  TextView,
  CenterView,
  ButtonView,
} from 'react-native-quick-components';
import { ScrollView } from 'react-native';

const ComponentShowcase: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor: '#ffffff' }}
    >
      <FlexView bg="#ffffff" p={16} f={1}>
        {/* Header Section */}
        <BoxView
          bg="#f8f9fa"
          p={24}
          br={20}
          shadow="heavy"
          mb={20}
          bw={1}
          bc="#dee2e6"
        >
          <CenterView>
            <TextView size={'sm'} weight="bold" c="#212529" ta="center" mb={8}>
              🎨 Quick Components
            </TextView>
            <TextView size={16} c="#6c757d" ta="center" mb={16}>
              Beautiful, Accessible React Native Components
            </TextView>
          </CenterView>
        </BoxView>

        {/* Profile Card Section */}
        <BoxView bg="#f8f9fa" br={16} p={20} mb={20}>
          <RowView ai="center" mb={16}>
            <CircleBox size={70} bg="#007bff" mr={16} shadow="medium">
              <TextView weight="bold" size={24} c="white">
                QC
              </TextView>
            </CircleBox>

            <BoxView f={1}>
              <TextView weight="bold" size={20} c="#212529" mb={4}>
                Quick Components
              </TextView>
              <TextView c="#6c757d" size={20} mb={8}>
                Modern React Native UI Library
              </TextView>

              <BoxView size={100} bg="#f01677" br={'full'} />

              <RowView>
                <BoxView bg="#28a745" px={8} py={4} br={'full'} mr={8}>
                  <TextView c="white" size={12} weight="semibold">
                    ✅ Accessible
                  </TextView>
                </BoxView>
                <BoxView bg="#17a2b8" px={8} py={4} br={12}>
                  <TextView c="white" size={12} weight="semibold">
                    🎨 Styleable
                  </TextView>
                </BoxView>
              </RowView>
            </BoxView>
          </RowView>
        </BoxView>

        {/* Button Variants Section */}
        <BoxView bg="#f8f9fa" mb={20} br={16} p={20}>
          <TextView weight="bold" size={18} c="#212529" mb={16}>
            🔘 Button Variants
          </TextView>

          <RowView mb={12}>
            <ButtonView variant="primary" f={1} mr={4} br={12}>
              <TextView c="white" weight="semibold" size={14} ta="center">
                Primary
              </TextView>
            </ButtonView>

            <ButtonView variant="secondary" f={1} mx={4} br={12}>
              <TextView weight="semibold" size={14} ta="center">
                Secondary
              </TextView>
            </ButtonView>

            <ButtonView variant="outline" f={1} ml={4} br={12}>
              <TextView c="#007bff" weight="semibold" size={14} ta="center">
                Outline
              </TextView>
            </ButtonView>
          </RowView>

          <ButtonView variant="ghost" w="100%" br={12} py={14}>
            <TextView c="#007bff" weight="semibold" size={14}>
              👻 Ghost Button
            </TextView>
          </ButtonView>
        </BoxView>

        {/* Features Section */}
        <BoxView bg="#e9ecef" br={16} p={20} mb={20}>
          <TextView weight="bold" size={18} c="#212529" mb={16}>
            ✨ Features
          </TextView>

          {[
            {
              icon: '♿',
              title: 'Accessibility First',
              desc: 'Screen reader support & WCAG compliance',
            },
            {
              icon: '🎨',
              title: 'Customizable',
              desc: 'Easy to style and customize',
            },
            {
              icon: '📱',
              title: 'Responsive Design',
              desc: 'Adaptive layouts for all screen sizes',
            },
            {
              icon: '⚡',
              title: 'Performance',
              desc: 'Optimized components with minimal re-renders',
            },
          ].map((feature, index) => (
            <RowView key={index} ai="center" mb={12}>
              <BoxView
                size={40}
                bg="#007bff"
                br={20}
                center
                mr={12}
                shadow="light"
              >
                <TextView size={18}>{feature.icon}</TextView>
              </BoxView>
              <BoxView f={1}>
                <TextView weight="semibold" c="#212529" size={14} mb={2}>
                  {feature.title}
                </TextView>
                <TextView c="#6c757d" size={12}>
                  {feature.desc}
                </TextView>
              </BoxView>
            </RowView>
          ))}
        </BoxView>

        {/* Stats Section */}
        <RowView mb={20}>
          {[
            { label: 'Components', value: '12+', color: '#007bff' },
            { label: 'Props', value: '50+', color: '#28a745' },
            { label: 'Features', value: '10+', color: '#17a2b8' },
          ].map((stat, index) => (
            <BoxView
              key={index}
              f={1}
              bg="#f8f9fa"
              br={12}
              shadow="light"
              p={16}
              center
              mx={4}
            >
              <TextView size={24} weight="bold" c={stat.color} mb={4}>
                {stat.value}
              </TextView>
              <TextView size={12} c="#6c757d" ta="center">
                {stat.label}
              </TextView>
            </BoxView>
          ))}
        </RowView>

        {/* Call to Action */}
        <BoxView bg="#007bff" br={16} p={24} center mb={20}>
          <TextView size={20} weight="bold" c="white" ta="center" mb={8}>
            🚀 Ready to Build?
          </TextView>
          <TextView size={14} c="#cce7ff" ta="center" mb={16}>
            Start creating beautiful apps with Quick Components
          </TextView>
          <ButtonView bg="white" px={24} py={12} br={20}>
            <TextView c="#007bff" weight="bold" size={14}>
              Get Started Now
            </TextView>
          </ButtonView>
        </BoxView>

        {/* Footer */}
        <CenterView py={20}>
          <TextView c="#6c757d" size={12} ta="center">
            Made with ❤️ by Abhaya Kumar Sahoo
          </TextView>
          <TextView c="#adb5bd" size={10} ta="center" mt={4}>
            React Native Quick Components v0.2.0
          </TextView>
        </CenterView>
      </FlexView>
    </ScrollView>
  );
};

const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <ComponentShowcase />
    </AccessibilityProvider>
  );
};

export default App;
