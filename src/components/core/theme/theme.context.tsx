import React, { createContext, useReducer } from 'react';
import { themeReducer } from './theme.reducer';

import { ThemeContextType, ThemeActionsTypes } from './theme.types';

const initialState: ThemeContextType = {
  state: {
    baseColor: '#e0e0e0',
    colorDifference: 0.15,
    activeLightSource: 'left-top',
    textColor: '#001f3f',
    textColorOpposite: '#f6f5f7',
    darkColor: '#dadada',
    lightColor: '#adadad',
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
