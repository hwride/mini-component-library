import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (<Wrapper>
      {label}
      <SelectAndIconWrapper>
        <SelectWrapper value={value} onChange={onChange} displayedValue={displayedValue}>
          {children}
        </SelectWrapper>
        <PositionedIcon id='chevron-down' size={24} />
      </SelectAndIconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
`;

const SelectAndIconWrapper = styled.span`
  display: inline-block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  background: ${COLORS.transparentGray15};
  color: inherit;
  border: none;
  width: calc(${props => props.displayedValue.length}ch + 48px);
  margin-left: 12px;
  padding: 12px;
  padding-left: 16px;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const PositionedIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  right: 8px;
  pointer-events: none; /* Stop clicks being intercepted by the icon. */
`;

export default Select;
