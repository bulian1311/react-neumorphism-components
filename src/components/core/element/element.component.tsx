import React, { useEffect } from 'react';
import { useTheme } from '../../../hooks';
import { StyledElement } from './element.styled';
import { ElementProps } from './element.types';

export const Element = React.forwardRef<any, ElementProps>(
  (
    { children, className, renderAs, shape = 'flat', size = 150, ...props },
    ref,
  ) => {
    const theme = useTheme();
    const RenderAs = renderAs;

    let distance;
    let blur;
    let positionX;
    let positionXOpposite;
    let positionY;
    let positionYOpposite;
    let angle;

    useEffect(() => {
      if (size) {
        distance = Math.round(size * 0.1);
        blur = Math.round(size * 0.2);
      }
    }, [size]);

    switch (theme.state.activeLightSource) {
      case 'left-top':
        positionX = theme.state.distance;
        positionY = theme.state.distance;
        positionXOpposite = positionX * -1;
        positionYOpposite = positionY * -1;
        angle = 145;
        break;
      case 'top-right':
        positionX = theme.state.distance * -1;
        positionY = theme.state.distance;
        positionXOpposite = positionX * -1;
        positionYOpposite = positionY * -1;
        angle = 225;
        break;
      case 'right-bottom':
        positionX = theme.state.distance * -1;
        positionY = theme.state.distance * -1;
        positionXOpposite = positionX * -1;
        positionYOpposite = positionY * -1;
        angle = 315;
        break;
      case 'bottom-left':
        positionX = theme.state.distance;
        positionY = theme.state.distance * -1;
        positionXOpposite = positionX * -1;
        positionYOpposite = positionY * -1;
        angle = 45;
        break;
      default:
        positionX = theme.state.distance;
        positionY = theme.state.distance;
        positionXOpposite = positionX * -1;
        positionYOpposite = positionY * -1;
        angle = 145;
        break;
    }

    return (
      <StyledElement component={<RenderAs />} ref={ref} {...props}>
        {children}
      </StyledElement>
    );
  },
);

Element.displayName = 'Element';
