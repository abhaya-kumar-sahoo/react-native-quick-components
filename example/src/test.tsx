// types.ts
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  type TouchableOpacityProps,
} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  /** Custom props (prefixed to appear first) */
  $size?: 'sm' | 'md' | 'lg';
  $variant?: 'primary' | 'secondary';
  $uppercase?: boolean;
  $customColor?: string;
}

// Button.tsx

export const Button = ({
  $size = 'md',
  $variant = 'primary',
  $uppercase = false,
  $customColor,
  children,
  style,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[$size],
        styles[$variant],
        $customColor ? { backgroundColor: $customColor } : {},
        style,
      ]}
      {...rest}
    >
      <Text style={[styles.text, $uppercase && styles.uppercase]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

<Button $customColor="#007AFF" $size="lg" $uppercase $variant="primary" />;
const styles = StyleSheet.create({
  base: {
    padding: 10,
    borderRadius: 8,
  },
  sm: { padding: 8 },
  md: { padding: 12 },
  lg: { padding: 16 },
  primary: { backgroundColor: '#007AFF' },
  secondary: { backgroundColor: '#34C759' },
  text: { color: 'white' },
  uppercase: { textTransform: 'uppercase' },
});
