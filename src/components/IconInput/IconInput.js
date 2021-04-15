import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <Wrapper size={size} width={width}>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconStyled id={icon} size={size === 'small' ? '16' : '24'} sizeEnum={size} />
    <InputWrapper size={size}>
      <Input type='text' placeholder={placeholder} size={size} />
    </InputWrapper>
  </Wrapper>;
};

const Wrapper = styled.div.attrs({tabIndex: 0})`
  position: relative;
  display: inline-block;
  padding-top: 4px;
  padding-bottom: 4px;
  white-space: nowrap;
  font-size: ${props => props.size === 'small' ? '14' : '18'}px;
  width: ${props => props.width}px;
  border-bottom: ${props => props.size === 'small' ? '1' : '2'}px solid ${COLORS.black};
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;

const IconStyled = styled(Icon)`
  margin-right: ${props => props.sizeEnum === 'small' ? '6' : '11'}px;
  display: inline-block;
  vertical-align: middle;
`;

const InputWrapper = styled.div`
  position: absolute;
  left: ${props => props.size === 'small' ? '20' : '30'}px;
  top: 4px;
  bottom: 4px;
  right: 2px;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: inherit;
  color: inherit;
  border: none;
  outline: none;
`;

export default IconInput;
