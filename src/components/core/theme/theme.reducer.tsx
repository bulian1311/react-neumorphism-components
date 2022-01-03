import { ThemeType, ThemeActionType, ThemeActionsTypes } from './theme.types';

export const themeReducer = (state: ThemeType, action: ThemeActionType) => {
  switch (action.type) {
    case ThemeActionsTypes.SET_BASE_COLOR:
      return { ...state, baseColor: action.payload };
    case ThemeActionsTypes.SET_ACTIVE_LIGHT_SOURCE:
      return { ...state, activeLightSource: action.payload };
    case ThemeActionsTypes.SET_COLOR_DIFFERENCE:
      return { ...state, colorDifference: action.payload };
    case ThemeActionsTypes.SET_TEXT_COLOR:
      return { ...state, textColor: action.payload };
    case ThemeActionsTypes.SET_TEXT_COLOR_OPPOSITE:
      return { ...state, textColorOpposite: action.payload };
    case ThemeActionsTypes.SET_DARK_COLOR:
      return { ...state, darkColor: action.payload };
    case ThemeActionsTypes.SET_LIGHT_COLOR:
      return { ...state, lightColor: action.payload };
    default:
      return state;
  }
};
