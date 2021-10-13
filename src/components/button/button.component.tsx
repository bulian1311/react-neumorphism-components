import React from 'react';
import PropTypes from 'prop-types';
//import { Element } from '../element';
import { StyledButton } from './button.styled';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <StyledButton renderAs="button" {...props}>
      {isLoading ? 'Loading...' : children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  size: 'medium',
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  isFullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export { Button };
