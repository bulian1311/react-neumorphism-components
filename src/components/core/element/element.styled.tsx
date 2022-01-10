import * as React from 'react';
import styled, { css } from 'styled-components';
import { StyledElementProps, RenderAsType } from './element.types';

export const styledRenderAs = (tag: RenderAsType) => {
  return styled(tag)<StyledElementProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.4s;

    ${({ state, theme, size }) => css`
      height: ${size}px;
      color: ${theme.textColor};
      border-radius: ${state.radius}px;
      background: ${theme.baseColor};
      box-shadow: ${state.positionX}px ${state.positionY}px ${state.blur}px
          ${theme.darkColor},
        ${state.positionXOpposite}px ${state.positionYOpposite}px
          ${state.blur}px ${theme.lightColor};
    `}

    ${({ state, theme, shape, active }) =>
      shape === 'flat' &&
      active &&
      css`
        &:active {
          box-shadow: inset ${state.positionX}px ${state.positionY}px
              ${state.blur}px ${theme.darkColor},
            inset ${state.positionXOpposite}px ${state.positionYOpposite}px
              ${state.blur}px ${theme.lightColor};
        }
      `}

    ${({ state, shape, theme }) =>
      shape === 'pressed' &&
      css`
        box-shadow: inset ${state.positionX}px ${state.positionY}px
            ${state.blur}px ${theme.darkColor},
          inset ${state.positionXOpposite}px ${state.positionYOpposite}px
            ${state.blur}px ${theme.lightColor};
      `}

    ${({ state, shape, active }) =>
      shape === 'convex' &&
      css`
        background: linear-gradient(
          ${state.angle}deg,
          ${state.firstGradientColor},
          ${state.secondGradientColor}
        );

        ${active &&
        css`
          &:active {
            background: linear-gradient(
              ${state.angle}deg,
              ${state.secondGradientColor},
              ${state.firstGradientColor}
            );
          }
        `}
      `}

    ${({ state, shape }) =>
      shape === 'concave' &&
      css`
        background: linear-gradient(
          ${state.angle}deg,
          ${state.secondGradientColor},
          ${state.firstGradientColor}
        );
      `}
  `;
};
