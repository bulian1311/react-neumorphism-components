import React, { useEffect } from 'react';
import {
  isValidColor,
  colorLuminance,
  getContrast,
} from '../../../utils/colors.utils';

interface ThemeProps {
  baseColor?: string;
  blur?: number;
  colorDifference?: number;
  distance?: number;
  gradient?: boolean;
  shape?: number;
  activeLightSource?: 'left-top' | 'top-right' | 'right-bottom' | 'bottom-left';
  radius?: number;
}

export const Theme: React.FC<ThemeProps> = ({
  children,
  baseColor = '#e0e0e0',
  blur = 60,
  colorDifference = 0.15,
  distance = 20,
  activeLightSource = 1,
  shape = 0,
  radius = 15
}) => {
  useEffect(() => {
    if (!isValidColor(baseColor)) return;

    let angle: number;
    let positionX: number;
    let positionY: number;
    const darkColor = colorLuminance(baseColor, colorDifference * -1);
    const lightColor = colorLuminance(baseColor, colorDifference);

    switch (activeLightSource) {
      case 'left-top':
        positionX = distance;
        positionY = distance;
        angle = 145;
        break;
      case 'top-right':
        positionX = distance * -1;
        positionY = distance;
        angle = 225;
        break;
      case 'right-bottom':
        positionX = distance * -1;
        positionY = distance * -1;
        angle = 315;
        break;
      case 'bottom-left':
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

    const firstGradientColor = colorLuminance(baseColor, 0.07);
    const secondGradientColor = colorLuminance(baseColor, -0.1);

    document.documentElement.style.cssText = `
    --neumorphism-positionX: ${positionX}px;
    --neumorphism-positionXOpposite: ${positionX * -1}px;
    --neumorphism-positionY: ${positionY}px;
    --neumorphism-positionYOpposite: ${positionY * -1}px;
    --neumorphism-angle: ${angle}deg;
    --neumorphism-blur: ${blur}px;
    --neumorphism-textColor: ${getContrast(baseColor)};
    --neumorphism-textColorOpposite: ${baseColor};
    --neumorphism-baseColor: ${baseColor};
    --neumorphism-darkColor: ${darkColor};
    --neumorphism-lightColor: ${lightColor};
    --neumorphism-firstGradientColor: ${firstGradientColor};
    --neumorphism-secondGradientColor: ${secondGradientColor};
    --neumorphism-radius: ${radius}%;
  `;
  }, [
    baseColor,
    blur,
    distance,
    colorDifference,
    activeLightSource,
    shape,
    radius
  ]);

  return <React.Fragment>{children}</React.Fragment>;
};
