import styled, { css, keyframes } from 'styled-components';

import { Element } from '../../core/element';

const spinAround = keyframes`
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
`;

const isLoadingCss = css`
  position: absolute;
  left: calc(50% - (1em * 0.5));
  top: calc(50% - (1em * 0.5));
  animation: ${spinAround} 0.5s infinite linear;
  border: 2px solid ${({ theme }) => theme.textColor};
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: '';
  display: block;
  height: 1em;
  width: 1em;
  z-index: 100000;
`;

export const StyledButton = styled(Element)`
  position: relative;
  border: none;
  outline: none;
  ${({ isFullWidth }) => isFullWidth && 'width: 100%;'}
  padding: 0 ${({ padding }) => padding}px;

  ${({ isLoading }) =>
    isLoading &&
    css`
      &:after {
        ${isLoadingCss}
      }
    `}
`;
