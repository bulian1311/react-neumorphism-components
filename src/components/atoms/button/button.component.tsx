import React, { ComponentPropsWithoutRef } from 'react';
import PropTypes from 'prop-types';
import { Element } from '../../core/element';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, ...props }, ref) => {
    return (
      <Element renderAs="button" ref={ref} {...props}>
        {isLoading ? 'Loading...' : children}
      </Element>
    );
  },
);

Button.displayName = 'Button';

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
