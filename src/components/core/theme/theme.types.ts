export type ThemeType = {
  baseColor: string;
  blur: number;
  colorDifference: number;
  distance: number;
  activeLightSource: 'left-top' | 'top-right' | 'right-bottom' | 'bottom-left';
  radius: number;
  positionX: number;
  positionXOpposite: number;
  positionY: number;
  positionYOpposite: number;
  angle: number;
  textColor: string;
  textColorOpposite: string;
  darkColor: string;
  lightColor: string;
  firstGradientColor: string;
  secondGradientColor: string;
};

export enum ThemeActionsTypes {
  SET_BASE_COLOR = 'SET_BASE_COLOR',
  SET_BLUR = 'SET_BLUR',
  SET_COLOR_DIFFERENCE = 'SET_COLOR_DIFFERENCE',
  SET_DISTANCE = 'SET_DISTANCE',
  SET_ACTIVE_LIGHT_SOURCE = 'SET_ACTIVE_LIGHT_SOURCE',
  SET_RADIUS = 'SET_RADIUS',
  SET_POSITION_X = 'SET_POSITION_X',
  SET_POSITION_X_OPPOSITE = 'SET_POSITION_X_OPPOSITE',
  SET_POSITION_Y = 'SET_POSITION_Y',
  SET_POSITION_Y_OPPOSITE = 'SET_POSITION_Y_OPPOSITE',
  SET_ANGLE = 'SET_ANGLE',
  SET_TEXT_COLOR = 'SET_TEXT_COLOR',
  SET_TEXT_COLOR_OPPOSITE = 'SET_TEXT_COLOR_OPPOSITE',
  SET_DARK_COLOR = 'SET_DARK_COLOR',
  SET_LIGHT_COLOR = 'SET_LIGHT_COLOR',
  SET_FIRST_GRADIENT_COLOR = 'SET_FIRST_GRADIENT_COLOR',
  SET_SECOND_GRADIENT_COLOR = 'SET_SECOND_GRADIENT_COLOR',
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
      payload: 'left-top' | 'top-right' | 'right-bottom' | 'bottom-left';
    }
  | {
      type: ThemeActionsTypes.SET_RADIUS;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_POSITION_X;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_POSITION_X_OPPOSITE;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_POSITION_Y;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_POSITION_Y_OPPOSITE;
      payload: number;
    }
  | {
      type: ThemeActionsTypes.SET_ANGLE;
      payload: number;
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
    }
  | {
      type: ThemeActionsTypes.SET_FIRST_GRADIENT_COLOR;
      payload: string;
    }
  | {
      type: ThemeActionsTypes.SET_SECOND_GRADIENT_COLOR;
      payload: string;
    };

export type ThemeContextType = {
  state: ThemeType;
  dispatch: (action: ThemeActionType) => void;
  types: typeof ThemeActionsTypes;
};
