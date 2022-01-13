import React, { FC } from 'react';
import { StyledGroup } from './button-group.styled';

export const ButtonGroup: FC = ({ children }) => {
  return <StyledGroup>{children}</StyledGroup>;
};

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {};

ButtonGroup.defaultProps = {};
