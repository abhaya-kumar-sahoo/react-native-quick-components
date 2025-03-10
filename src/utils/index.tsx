import React from 'react';
import { AppView } from '../components/View';
import type { HeightWidthTypes } from '../types/h_w_types';

const VertSpace = ({ size = 10 }: { size?: HeightWidthTypes }) => {
  return <AppView $h={size} />;
};

const HorizSpace = ({ size = 10 }: { size?: HeightWidthTypes }) => {
  return <AppView $h={size} />;
};

export { VertSpace, HorizSpace };
