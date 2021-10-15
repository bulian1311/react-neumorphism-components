import styled from 'styled-components';

import { BackgroundProps } from './background.component';

export const StyledBackground = styled.div<BackgroundProps>`
  width: 92vw;
  height: 92vh;
  background-color: ${(p) => p.backgroundcolor || '#e0e0e0'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
