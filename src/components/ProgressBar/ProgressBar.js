/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

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
  border-radius: ${({size}) => {
    if(size === 'large') {
      return '8px';
    } else {
      return '4px';
    }
  }};
  ${({size}) => size === 'large' && 'padding: 4px;'}
`;

const Bar = styled.div`
  height: ${props => {
    const {size} = props;
    if(size === 'small') {
      return '8px';
    } else if(size === 'large') {
      return '16px';
    } else {
      return '12px';
    }
  }};
  width: ${props => getPercent(props.value, MAX)}%;
  background: ${COLORS.primary};
  border-radius: ${props => {
    const radiusBaseSize = {
      small: '4',
      medium: '4',
      large: '8',
    }[props.size];
    const remaining = MAX - props.value;
    const radiusSize = remaining >= 1 ? 0 :(1-remaining) * radiusBaseSize;
    return `${radiusSize}px ${radiusSize}px ${radiusSize}px ${radiusSize}px`;
  }};
`

function getPercent(a, b) {
  return ((a/b) * 100);
}

export default ProgressBar;
