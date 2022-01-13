import React, { FC } from 'react';
import { StyledContent } from './content.styled';
import { ContentProps } from './content.types';

export const Content: FC<ContentProps> = ({ children, size }) => {
  return <StyledContent>{children}</StyledContent>;
};

Content.displayName = 'Content';

Content.defaultProps = {};

Content.propTypes = {};
