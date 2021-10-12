import React from 'react';
import { StyledBackground } from './background.styled';

export interface BackgroundProps {
  backgroundColor?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  children,
  ...props
}) => {
  return <StyledBackground {...props}>{children}</StyledBackground>;
};
