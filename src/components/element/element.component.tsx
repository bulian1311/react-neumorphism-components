import React, { useContext } from 'react';
import { colorLuminance } from '../../utils/colors.utils';
import { StyledElement } from './element.styled';
import { ThemeContext } from '../theme/theme.context';

export type RenderAsTypes =
  | React.FC<React.HTMLProps<HTMLElement>>
  | 'div'
  | 'button'
  | 'input';

export interface ElementProps {
  renderAs: RenderAsTypes;
  gradient?: boolean;
  shape?: number;
}

export const Element = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<ElementProps>
>(({ children, renderAs, gradient = false, shape = 0, ...props }, ref) => {
  const RenderAs = renderAs;
  const theme = useContext(ThemeContext);

  theme.firstGradientColor =
    gradient && shape !== 1
      ? colorLuminance(theme.baseColor, shape === 3 ? 0.07 : -0.1)
      : theme.baseColor;
  theme.secondGradientColor =
    gradient && shape !== 1
      ? colorLuminance(theme.baseColor, shape === 2 ? 0.07 : -0.1)
      : theme.baseColor;

  return (
    <StyledElement theme={theme} component={<RenderAs />} ref={ref} {...props}>
      {children}
    </StyledElement>
  );
});

Element.displayName = 'Element';
