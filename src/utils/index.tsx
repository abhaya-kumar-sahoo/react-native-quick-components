import React from 'react';
import { AppView } from '../components/View';

const VertSpace = ({ size = 10 }: { size?: number | string }) => {
  return <AppView _h={size} />;
};

const HorizSpace = ({ size = 10 }: { size?: number | string }) => {
  return <AppView _h={size} />;
};

export { VertSpace, HorizSpace };
