import { createContext } from 'react';

import { ITheme } from './theme.interface';

const theme: ITheme = {
  baseColor: '#e0e0e0',
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

export const ThemeContext = createContext<ITheme>(theme);
