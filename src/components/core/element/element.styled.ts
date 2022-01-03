import * as React from 'react';
import styled, { css } from 'styled-components';
import { StyledElementProps } from './element.types';

export const StyledElement = styled.div<StyledElementProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${({state, theme, shape, width, height}) => css`
    width: ${width}px;
    height: ${height}px;
    border-radius: ${state.radius}px;
    background: ${theme.baseColor};
    box-shadow: ${state.positionX}px ${state.positionY}px ${state.blur}px
        ${theme.darkColor},
      ${state.positionXOpposite}px ${state.positionYOpposite}px ${state.blur}px
        ${theme.lightColor};
  `}

  ${({state, shape, theme}) =>
    shape === 'pressed' &&
    css`
      box-shadow: inset ${state.positionX}px ${state.positionY}px
          ${state.blur}px ${theme.darkColor},
        inset ${state.positionXOpposite}px ${state.positionYOpposite}px
          ${state.blur}px ${theme.lightColor};
    `}

  ${({state, shape}) =>
    shape === 'convex' &&
    css`
      background: linear-gradient(
        ${state.angle}deg,
        ${state.firstGradientColor},
        ${state.secondGradientColor}
      );
    `}

  ${({state, shape}) =>
    shape === 'convex' &&
    css`
      background: linear-gradient(
        ${state.angle}deg,
        ${state.secondGradientColor},
        ${state.firstGradientColor}
      );
    `}
`;
