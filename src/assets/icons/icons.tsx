import Svg, { Path, Circle, Line } from 'react-native-svg';
import React from 'react';

type IconProps = {
  size?: number;
  color?: string;
  children?: React.ReactNode;
  strokeWidth?: number;
};

const IconBase: React.FC<IconProps> = ({
  size = 24,
  color = 'red',
  children,
  strokeWidth = 2,
}) => (
  <Svg
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    fill="none"
  >
    {children}
  </Svg>
);

export const EyeIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <Path
      d="M1 12C3.5 7 7.5 4 12 4C16.5 4 20.5 7 23 12C20.5 17 16.5 20 12 20C7.5 20 3.5 17 1 12Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx="12"
      cy="12"
      r="3"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
  </IconBase>
);

export const EyeClosedIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <Path
      d="M1 12C3.5 7 7.5 4 12 4C16.5 4 20.5 7 23 12C20.5 17 16.5 20 12 20C7.5 20 3.5 17 1 12Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      cx="12"
      cy="12"
      r="3"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
    />
    <Line
      x1="3"
      y1="3"
      x2="21"
      y2="21"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <Path
      d="M6 6L18 18M6 18L18 6"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);

export const EmailIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <Path
      d="M3 5H21V19H3V5Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3 5L12 13L21 5"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);

export const PhoneIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <Path
      d="M7 2H17C18.1 2 19 2.9 19 4V20C19 21.1 18.1 22 17 22H7C5.9 22 5 21.1 5 20V4C5 2.9 5.9 2 7 2Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="12" cy="18" r="1" fill={props.color} />
  </IconBase>
);

export const PasswordIcon: React.FC<IconProps> = (props) => (
  <IconBase {...props}>
    <Path
      d="M12 17V21M9 21H15M7 8V5A5 5 0 0 1 17 5V8M5 8H19A2 2 0 0 1 21 10V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V10A2 2 0 0 1 5 8Z"
      stroke={props.color}
      strokeWidth={props.strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </IconBase>
);
