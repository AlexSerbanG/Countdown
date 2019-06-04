// Packages
import React from 'react';
// Utils
import { describeArc } from '../../utils/svgArc';

export const SvgCircle = ({ radius, ...rest }) => (
  <svg {...rest} >
    <path
      fill="none"
      stroke="#333"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);