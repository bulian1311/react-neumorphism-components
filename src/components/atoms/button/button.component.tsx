import React, { forwardRef, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../hooks';
import { ButtonGroup } from '../button-group';
import { StyledButton } from './button.styled';
import { ButtonProps, CompoundedButton } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size, isLoading, ...props }, ref) => {
    const theme = useTheme();
    const [height, setHeight] = useState(80);
    const padding = useMemo(() => height / 2, [height]);

    useEffect(() => {
      switch (size) {
        case 'large':
          setHeight(70);
          break;
        case 'medium':
          setHeight(50);
          break;
        case 'small':
          setHeight(30);
          break;
      }
    }, [size]);

    return (
      <StyledButton
        theme={theme.state}
        size={height}
        active
        renderAs="button"
        ref={ref}
        padding={padding}
        isLoading={isLoading}
        {...props}
      >
        {isLoading ? '' : children}
      </StyledButton>
    );
  },
) as CompoundedButton;

Button.Group = ButtonGroup;

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
