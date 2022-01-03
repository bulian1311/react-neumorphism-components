export type ThemeProps = {
  baseColor?: string;
  colorDifference?: number;
  activeLightSource?: 'left-top' | 'top-right' | 'right-bottom' | 'bottom-left';
};

export type ThemeType = {
  baseColor: string;
  colorDifference: number;
  activeLightSource: 'left-top' | 'top-right' | 'right-bottom' | 'bottom-left';
  textColor: string;
  textColorOpposite: string;
  darkColor: string;
  lightColor: string;
};

export enum ThemeActionsTypes {
  SET_BASE_COLOR = 'SET_BASE_COLOR',
  SET_COLOR_DIFFERENCE = 'SET_COLOR_DIFFERENCE',
  SET_ACTIVE_LIGHT_SOURCE = 'SET_ACTIVE_LIGHT_SOURCE',
  SET_TEXT_COLOR = 'SET_TEXT_COLOR',
  SET_TEXT_COLOR_OPPOSITE = 'SET_TEXT_COLOR_OPPOSITE',
  SET_DARK_COLOR = 'SET_DARK_COLOR',
  SET_LIGHT_COLOR = 'SET_LIGHT_COLOR',
}

export type ThemeActionType =
  | {
      type: ThemeActionsTypes.SET_BASE_COLOR;
      payload: string;
    }
  | {
      type: ThemeActionsTypes.SET_COLOR_DIFFERENCE;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_ACTIVE_LIGHT_SOURCE;
      payload: 'left-top' | 'top-right' | 'right-bottom' | 'bottom-left';
    }
  | {
      type: ThemeActionsTypes.SET_TEXT_COLOR;
      payload: string;
    }
  | {
      type: ThemeActionsTypes.SET_TEXT_COLOR_OPPOSITE;
      payload: string;
    }
  | {
      type: ThemeActionsTypes.SET_DARK_COLOR;
      payload: string;
    }
  | {
      type: ThemeActionsTypes.SET_LIGHT_COLOR;
      payload: string;
    };

export type ThemeContextType = {
  state: ThemeType;
  dispatch: (action: ThemeActionType) => void;
  types: typeof ThemeActionsTypes;
};
