import {
  StyleSheet,
  TouchableWithoutFeedback,
  type SwitchProps,
} from 'react-native';
import { useState, useEffect } from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';

type SwitchProp = {
  activeColor?: string;
  inActiveColor?: string;
  onValueChange?: (res: boolean) => void;
  value?: boolean;
  width?: number;
  height?: number;
  activeThumbColor?: string;
  inActiveThumbColor?: string;
} & SwitchProps;

export const AppSwitch = ({
  activeColor = '#eef3f0',
  inActiveColor = 'gray',
  activeThumbColor = '#eef3f0',
  inActiveThumbColor = '#eef3f0',
  onValueChange,
  value = false,
  width = 60,
  height = 30,
}: SwitchProp) => {
  // State for the switch
  const [active, setActive] = useState(value);
  const transitionWidth = width - height;

  useEffect(() => {
    setActive(value);
  }, [value]);

  // Shared value for animation progress
  const progress = useDerivedValue(() => {
    return withTiming(active ? 1 : 0);
  });

  // Circle animation using shared value
  const customSpringStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [activeThumbColor ?? inActiveColor, inActiveThumbColor ?? activeColor]
    );
    return {
      transform: [
        {
          translateX: withSpring(active ? transitionWidth : 4, {
            mass: 1,
            damping: 15,
            stiffness: 120,
          }),
        },
      ],
      backgroundColor,
    };
  });

  // Background color animation
  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [inActiveColor, activeColor]
    );
    return {
      backgroundColor,
      opacity: 0.96,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        const newValue = !active;
        setActive(newValue);
        onValueChange?.(newValue);
      }}
    >
      <Animated.View
        style={[
          styles.container,
          { width, height, borderRadius: height / 2 },
          backgroundColorStyle,
        ]}
      >
        <Animated.View
          style={[
            styles.circle,
            {
              width: height * 0.85,
              height: height * 0.85,
              borderRadius: (height * 0.85) / 2,
            },
            customSpringStyles,
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  circle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 6,
  },
});
