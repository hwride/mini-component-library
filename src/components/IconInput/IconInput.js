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
    <Input type='text' placeholder={placeholder} size={size} />
  </Wrapper>;
};

const Wrapper = styled.div`
  display: inline-block;
  padding-bottom: 4px;
  white-space: nowrap;
  font-size: ${props => props.size === 'small' ? '14' : '18'}px;
  width: ${props => props.width}px;
  border-bottom: ${props => props.size === 'small' ? '1' : '2'}px solid ${COLORS.black};
`;

const IconStyled = styled(Icon)`
  margin-right: ${props => props.sizeEnum === 'small' ? '6' : '11'}px;
  display: inline-block;
  vertical-align: middle;
`;

const Input = styled.input`
  display: inline-block;
  font-size: inherit;
  border: none;
  vertical-align: middle;
`;

export default IconInput;
