import styled, { css } from 'styled-components';
import { ImageProps } from './image.types';

export const StyledImage = styled.img<ImageProps>`
  border-radius: ${({ isRounded }) => (isRounded ? '9999' : '5')}px;
`;

export const StyledFigure = styled.figure<ImageProps>`
  display: block;
  position: relative;
  width: ${({ size }) => (size ? size : '50')}px;
  height: ${({ size }) => (size ? size : '50')}px;

  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')}

  img {
    display: block;
    height: auto;
    width: 100%;
  }
`;
