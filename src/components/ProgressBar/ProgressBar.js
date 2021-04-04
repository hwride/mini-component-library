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
    <BarWrapper size={size}>
      <Bar value={value} size={size}>
          <VisuallyHidden>{value}</VisuallyHidden>
      </Bar>
    </BarWrapper>
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
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px 4px 4px 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: ${p => SIZES[p.size].height}px;
  width: ${props => getPercent(props.value, MAX)}%;
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`

function getPercent(a, b) {
  return ((a/b) * 100);
}

export default ProgressBar;
