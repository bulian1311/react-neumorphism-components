import React, { useEffect } from 'react';
import {
  isValidColor,
  colorLuminance,
  getContrast,
} from '../../utils/colors.utils';
import { ThemeContext } from './theme.context';

export interface ThemeColors {
  baseColor: string;
  blur: number;
  textColor: string;
  textColorOpposite: string;
  darkColor: string;
  firstGradientColor: string;
  lightColor: string;
  secondGradientColor: string;
  positionX: number;
  positionXOpposite: number;
  positionY: number;
  positionYOpposite: number;
  angle: number;
  size: number;
  radius: number;
}

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
  // gradient = false,
  // shape = 0,
  activeLightSource = 1,
}) => {
  const theme: ThemeColors = {
    baseColor: isValidColor(baseColor) ? baseColor : '#e0e0e0',
    textColor: '#001f3f',
    textColorOpposite: '#e0e0e0',
    firstGradientColor: '#e0e0e0',
    secondGradientColor: '#e0e0e0',
    lightColor: '#ffffff',
    darkColor: '#bebebe',
    blur: 60, //px
    positionX: 20, //px
    positionXOpposite: -20, //px
    positionY: 20, //px
    positionYOpposite: -20, //px
    angle: 145, //deg
    size: 300, //px
    radius: 30, //px
  };

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

    // const firstGradientColor =
    //   gradient && shape !== 1
    //     ? colorLuminance(baseColor, shape === 3 ? 0.07 : -0.1)
    //     : baseColor;
    // const secondGradientColor =
    //   gradient && shape !== 1
    //     ? colorLuminance(baseColor, shape === 2 ? 0.07 : -0.1)
    //     : baseColor;

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
