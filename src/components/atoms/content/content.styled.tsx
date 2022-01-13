import styled, { css } from 'styled-components';
import { ContentProps } from './content.types';

const dinamicStyles = (props: ContentProps) => {
  let fontSize: number;
  switch (props.size) {
    case 'small':
      fontSize = 0.8;
      break;
    case 'medium':
      fontSize = 1;
      break;
    case 'large':
      fontSize = 1.2;
      break;
    default:
      fontSize = 1;
  }

  return css`
    font-size: ${fontSize}rem;
  `;
};

export const StyledContent = styled.div<ContentProps>`
  ${dinamicStyles}
`;
