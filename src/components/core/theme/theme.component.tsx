import React, { useEffect } from 'react';
import {
  isValidColor,
  colorLuminance,
  getContrast,
} from '../../../utils/colors.utils';

interface ThemeProps {
  baseColor?: string;
  blur?: number;
  size?: number;
  radius?: number;
  colorDifference?: number;
  distance?: number;
  gradient?: boolean;
  shape?: number;
  activeLightSource?: number;
}

export const Theme: React.FC<ThemeProps> = ({
  children,
  baseColor = '#e0e0e0',
  blur = 60,
  size = 300,
  radius = 50,
  colorDifference = 0.15,
  distance = 20,
  activeLightSource = 1,
  shape = 0,
  gradient = false,
}) => {
  useEffect(() => {
    if (!isValidColor(baseColor)) return;

    let angle: number;
    let positionX: number;
    let positionY: number;
    const darkColor = colorLuminance(baseColor, colorDifference * -1);
    const lightColor = colorLuminance(baseColor, colorDifference);

    switch (activeLightSource) {
      case 1:
        positionX = distance;
        positionY = distance;
        angle = 145;
        break;
      case 2:
        positionX = distance * -1;
        positionY = distance;
        angle = 225;
        break;
      case 3:
        positionX = distance * -1;
        positionY = distance * -1;
        angle = 315;
        break;
      case 4:
        positionX = distance;
        positionY = distance * -1;
        angle = 45;
        break;
      default:
        positionX = distance;
        positionY = distance;
        angle = 145;
        break;
    }

    const firstGradientColor =
      gradient && shape !== 1
        ? colorLuminance(baseColor, shape === 3 ? 0.07 : -0.1)
        : baseColor;
    const secondGradientColor =
      gradient && shape !== 1
        ? colorLuminance(baseColor, shape === 2 ? 0.07 : -0.1)
        : baseColor;

    document.documentElement.style.cssText = `
    --positionX: ${positionX}px;
    --positionXOpposite: ${positionX * -1}px;
    --positionY: ${positionY}px;
    --positionYOpposite: ${positionY * -1}px;
    --angle: ${angle}deg;
    --blur: ${blur}px;
    --textColor: ${getContrast(baseColor)};
    --textColorOpposite: ${baseColor};
    --baseColor: ${baseColor};
    --darkColor: ${darkColor};
    --lightColor: ${lightColor};
    --firstGradientColor: ${firstGradientColor};
    --secondGradientColor: ${secondGradientColor};
    --size: ${size}px;
    --radius: ${radius}px;
  `;
  }, [
    baseColor,
    blur,
    size,
    radius,
    distance,
    colorDifference,
    activeLightSource,
    shape,
    gradient,
  ]);

  return <React.Fragment>{children}</React.Fragment>;
};
