import React from 'react';
import { AppView } from '../components/View';
import type { HeightWidthTypes } from '../types/h_w_types';

// import { EyeIcon } from 'react-native-heroicons/solid';
const VertSpace = ({ size = 10 }: { size?: HeightWidthTypes }) => {
  return <AppView $h={size} />;
};

const HorizSpace = ({ size = 10 }: { size?: HeightWidthTypes }) => {
  return <AppView $h={size} />;
};

export { VertSpace, HorizSpace };
