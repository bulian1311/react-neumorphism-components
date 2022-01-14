import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { StyledImage, StyledFigure } from './image.styled';
import { ImageProps } from './image.types';

export const Image: FC<ImageProps> = ({ src }) => {
  return (
    <StyledFigure src={src}>
      <StyledImage src={src} />
    </StyledFigure>
  );
};

Image.displayName = 'Image';

Image.defaultProps = {
  isFullWidth: false,
  isRounded: false,
};

Image.propTypes = {
  size: PropTypes.number,
  isFullWidth: PropTypes.bool,
  isRounded: PropTypes.bool,
};
