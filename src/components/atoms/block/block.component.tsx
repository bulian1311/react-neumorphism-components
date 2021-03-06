import React from 'react';
import { StyledBlock } from './block.styled';

export const Block: React.FC = ({ children }) => {
  return <StyledBlock>{children}</StyledBlock>;
};

Block.displayName = 'Block';

Block.propTypes = {};

Block.defaultProps = {};
