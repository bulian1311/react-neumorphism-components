import React, { useEffect } from 'react';
import {
  isValidColor,
  colorLuminance,
  getContrast,
} from '../../../utils/colors.utils';
import { useTheme } from '../../../hooks';
import { ThemeProvider } from './theme.context';
import { ThemeProps } from './theme.types';

export const Theme: React.FC<ThemeProps> = ({
  children,
  baseColor = '#e0e0e0',
  colorDifference = 0.15,
  activeLightSource = 'left-top',
}) => {
  const theme = useTheme();

  useEffect(() => {
    if (!isValidColor(baseColor)) return;

    const darkColor = colorLuminance(baseColor, colorDifference * -1);
    const lightColor = colorLuminance(baseColor, colorDifference);

    theme.dispatch({
      type: theme.types.SET_BASE_COLOR,
      payload: baseColor,
    });
    theme.dispatch({
      type: theme.types.SET_TEXT_COLOR,
      payload: getContrast(baseColor),
    });
    theme.dispatch({
      type: theme.types.SET_TEXT_COLOR_OPPOSITE,
      payload: baseColor,
    });
    theme.dispatch({
      type: theme.types.SET_DARK_COLOR,
      payload: darkColor,
    });
    theme.dispatch({
      type: theme.types.SET_LIGHT_COLOR,
      payload: lightColor,
    });
    theme.dispatch({
      type: theme.types.SET_ACTIVE_LIGHT_SOURCE,
      payload: activeLightSource,
    });
  }, [baseColor, colorDifference, activeLightSource]);

  return <ThemeProvider>{children}</ThemeProvider>;
};
