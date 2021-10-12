import styled from 'styled-components';

import { RenderAsTypes } from './element.component'

export const styledElement = (element: RenderAsTypes) => {
  return styled(element)`
    padding: 50px;
    background-color: red;
  `;
}