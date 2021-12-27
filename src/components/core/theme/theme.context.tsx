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
    activeLightSource: 1,
    radius: 50,
  },
  dispatch: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState.state);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
