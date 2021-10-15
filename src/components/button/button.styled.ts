import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Element } from '../element';
import { ButtonProps } from './button.component';

const changingStyles = (p: ButtonProps): FlattenSimpleInterpolation => {
  let padding;
  let fontSize;

  switch (p.size) {
    case 'small':
      padding = '0.5rem';
      fontSize = '0.8rem';
      break;
    case 'medium':
      padding = '0.75rem';
      fontSize = '1rem';
      break;
    case 'large':
      padding = '1rem';
      fontSize = '1.2rem';
      break;
  }

  return css`
    padding: ${padding};
    font-size: ${fontSize};
  `;
};

export const StyledButton = styled(Element)<ButtonProps>`
  border: none;
  cursor: pointer;
  width: ${(p) => p.isFullWidth && '100%'};
  ${(p) => p.disabled && 'pointer-events: none;'}
  ${changingStyles};
`;
