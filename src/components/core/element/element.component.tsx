import React, { useContext, ComponentPropsWithoutRef } from 'react';
import { colorLuminance } from '../../../utils/colors.utils';
import { ThemeContext } from '../theme/theme.context';

export type RenderAsTypes = 'div' | 'button' | 'input';

export interface ElementProps extends ComponentPropsWithoutRef<any> {
  renderAs: RenderAsTypes;
  gradient?: boolean;
  shape?: number;
}

export const Element = React.forwardRef<any, ElementProps>(
  ({ children, renderAs, gradient = false, shape = 0, ...props }, ref) => {
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
      <RenderAs ref={ref} {...props}>
        {children}
      </RenderAs>
    );
  },
);

Element.displayName = 'Element';
