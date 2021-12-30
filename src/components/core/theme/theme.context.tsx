import React, { createContext, useReducer } from 'react';

import {
  ThemeType,
  ThemeContextType,
  ThemeActionType,
  ThemeActionsTypes,
} from './theme.types';

const themeReducer = (state: ThemeType, action: ThemeActionType) => {
  switch (action.type) {
    case ThemeActionsTypes.SET_BASE_COLOR:
      return { ...state, baseColor: action.payload };
    case ThemeActionsTypes.SET_BLUR:
      return { ...state, blur: action.payload };
    case ThemeActionsTypes.SET_ACTIVE_LIGHT_SOURCE:
      return { ...state, activeLightSource: action.payload };
    case ThemeActionsTypes.SET_COLOR_DIFFERENCE:
      return { ...state, colorDifference: action.payload };
    case ThemeActionsTypes.SET_DISTANCE:
      return { ...state, distance: action.payload };
    case ThemeActionsTypes.SET_RADIUS:
      return { ...state, radius: action.payload };
    case ThemeActionsTypes.SET_POSITION_X:
      return { ...state, positionX: action.payload };
    case ThemeActionsTypes.SET_POSITION_X_OPPOSITE:
      return { ...state, positionXOpposite: action.payload };
    case ThemeActionsTypes.SET_POSITION_Y:
      return { ...state, positionY: action.payload };
    case ThemeActionsTypes.SET_POSITION_Y_OPPOSITE:
      return { ...state, positionYOpposite: action.payload };
    case ThemeActionsTypes.SET_ANGLE:
      return { ...state, angle: action.payload };
    case ThemeActionsTypes.SET_TEXT_COLOR:
      return { ...state, textColor: action.payload };
    case ThemeActionsTypes.SET_TEXT_COLOR_OPPOSITE:
      return { ...state, textColorOpposite: action.payload };
    case ThemeActionsTypes.SET_DARK_COLOR:
      return { ...state, darkColor: action.payload };
    case ThemeActionsTypes.SET_LIGHT_COLOR:
      return { ...state, lightColor: action.payload };
    case ThemeActionsTypes.SET_FIRST_GRADIENT_COLOR:
      return { ...state, firstGradientColor: action.payload };
    case ThemeActionsTypes.SET_SECOND_GRADIENT_COLOR:
      return { ...state, secondGradientColor: action.payload };
    default:
      return state;
  }
};

const initialState: ThemeContextType = {
  state: {
    baseColor: '#e0e0e0',
    blur: 60,
    colorDifference: 0.15,
    distance: 20,
    activeLightSource: 'left-top',
    radius: 50,
    textColor: '#001f3f',
    textColorOpposite: '#f6f5f7',
    darkColor: '#dadada',
    firstGradientColor: '#dadada',
    lightColor: '#adadad',
    secondGradientColor: '#adadad',
    positionX: 30,
    positionXOpposite: -30,
    positionY: 30,
    positionYOpposite: -30,
    angle: 145,
  },
  dispatch: () => {},
  types: ThemeActionsTypes,
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState.state);

  return (
    <ThemeContext.Provider
      value={{ state, dispatch, types: initialState.types }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
