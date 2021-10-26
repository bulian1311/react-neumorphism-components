import React from 'react';
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
  baseColor: string;
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  const theme: ThemeColors = {
    baseColor: '#dadada',
    blur: 60, //px
    textColor: '#001f3f',
    textColorOpposite: '#f6f5f7',
    darkColor: '#dadada',
    firstGradientColor: '#dadada',
    lightColor: '#adadad',
    secondGradientColor: '#adadad',
    positionX: 30, //px
    positionXOpposite: -30, //px
    positionY: 30, //px
    positionYOpposite: -30, //px
    angle: 145, //deg
    size: 150, //px
    radius: 30, //px
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
