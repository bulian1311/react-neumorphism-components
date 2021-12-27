export enum ThemeActionsTypes {
  SET_BASE_COLOR = 'SET_BASE_COLOR',
  SET_BLUR = 'SET_BLUR',
  SET_COLOR_DIFFERENCE = 'SET_COLOR_DIFFERENCE',
  SET_DISTANCE = 'SET_DISTANCE',
  SET_ACTIVE_LIGHT_SOURCE = 'SET_ACTIVE_LIGHT_SOURCE',
  SET_RADIUS = 'SET_RADIUS',
}

export type ThemeActionType =
  | {
      type: ThemeActionsTypes.SET_BASE_COLOR;
      payload: string;
    }
  | {
      type: ThemeActionsTypes.SET_BLUR;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_COLOR_DIFFERENCE;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_DISTANCE;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_ACTIVE_LIGHT_SOURCE;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_RADIUS;
      payload: number;
    };

export type ThemeType = {
  baseColor: string;
  blur: number;
  colorDifference: number;
  distance: number;
  activeLightSource: number;
  radius: number;
};

export type ThemeContextType = {
  state: ThemeType;
  dispatch: (action: ThemeActionType) => void;
};
