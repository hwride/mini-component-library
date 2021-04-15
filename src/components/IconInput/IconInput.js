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
    {label}
    <IconStyled id={icon} size={size === 'small' ? '16' : '24'} />
    <Input type='text' placeholder={placeholder} />
  </Wrapper>;
};

const Wrapper = styled.div`
  display: inline-block;
  white-space: nowrap;
  font-size: ${props => props.size === 'small' ? '14' : '18'}px;
  width: ${props => props.width}px;
`;

const IconStyled = styled(Icon)`
  margin-left: 16px;
  margin-right: 8px;
  display: inline-block;
`;

const Input = styled.input`
  display: inline-block;
  font-size: inherit;
`;

export default IconInput;
