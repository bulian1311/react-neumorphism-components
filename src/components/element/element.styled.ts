import * as React from 'react';
import styled from 'styled-components';

export const StyledElement = styled(({ component, ...props }) =>
  React.cloneElement(component, props),
)`
  padding: 50px;
  background-color: red;
`;
