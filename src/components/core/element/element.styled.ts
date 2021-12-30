import * as React from 'react';
import styled from 'styled-components';

export const StyledElement = styled(({ component, ...props }) =>
  React.cloneElement(component, props),
)`
  width: 300px;
  height: 300px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;
