import React, { useEffect, useContext } from 'react';
import {
  isValidColor,
  colorLuminance,
  getContrast,
} from '../../../utils/colors.utils';
import { ThemeContext } from './theme.context';

interface ThemeProps {
  baseColor?: string;
  colorDifference?: number;
  distance?: number;
  gradient?: boolean;
  shape?: number;
  activeLightSource: number;
}

export const Theme: React.FC<ThemeProps> = ({
  children,
  baseColor = '#e0e0e0',
  colorDifference = 0.15,
  distance = 20,
  activeLightSource = 1,
}) => {
  const theme = useContext(ThemeContext);

  theme.baseColor = isValidColor(baseColor) ? baseColor : '#e0e0e0';

  useEffect(() => {
    document.documentElement.style.cssText = `
      body {
        background-color: ${baseColor}
      };
    `;

    if (baseColor === '#e0e0e0') return;

    theme.darkColor = colorLuminance(baseColor, colorDifference * -1);
    theme.lightColor = colorLuminance(baseColor, colorDifference);

    theme.textColor = getContrast(baseColor);
    theme.textColorOpposite = baseColor;

    switch (activeLightSource) {
      case 1:
        theme.positionX = distance;
        theme.positionY = distance;
        theme.angle = 145;
        break;
      case 2:
        theme.positionX = distance * -1;
        theme.positionY = distance;
        theme.angle = 225;
        break;
      case 3:
        theme.positionX = distance * -1;
        theme.positionY = distance * -1;
        theme.angle = 315;
        break;
      case 4:
        theme.positionX = distance;
        theme.positionY = distance * -1;
        theme.angle = 45;
        break;
      default:
        theme.positionX = distance;
        theme.positionY = distance;
        theme.angle = 145;
        break;
    }

    theme.positionXOpposite = theme.positionX * -1;
    theme.positionYOpposite = theme.positionY * -1;
  });

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
