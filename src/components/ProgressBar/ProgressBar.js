/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    borderRadius: 8,
  }
};

const MIN = 0;
const MAX = 100;

const ProgressBar = ({ value, size }) => {
  return <Wrapper value={value} size={size}>
    <Bar value={value} size={size} />
  </Wrapper>;
};

const Wrapper = styled.div.attrs(props => ({
  role: 'progressbar',
  'aria-valuemin': MIN,
  'aria-valuenow': props.value,
  'aria-valuemax': MAX,
}))`
  background: ${COLORS.transparentGray15};
  border-radius: ${p => SIZES[p.size].borderRadius}px;
  padding: ${p => SIZES[p.size].padding}px;
`;

const Bar = styled.div`
  height: ${p => SIZES[p.size].height}px;
  width: ${props => getPercent(props.value, MAX)}%;
  background: ${COLORS.primary};
  border-radius: ${p => {
    const radiusBaseSize = SIZES[p.size].borderRadius;
    const remaining = MAX - p.value;
    const radiusSize = remaining >= 1 ? 0 :(1-remaining) * radiusBaseSize;
    return `${radiusBaseSize}px ${radiusSize}px ${radiusSize}px ${radiusBaseSize}px`;
  }};
`

function getPercent(a, b) {
  return ((a/b) * 100);
}

export default ProgressBar;
