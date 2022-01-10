import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type ElementStateType = {
  distance: number;
  radius: number;
  blur: number;
  positionX: number;
  positionXOpposite: number;
  positionY: number;
  positionYOpposite: number;
  angle: number;
  firstGradientColor: string;
  secondGradientColor: string;
};

export type RenderAsType = 'div' | 'button' | 'input';

export type ElementProps = ComponentPropsWithoutRef<any> & {
  renderAs?: RenderAsType;
  shape?: 'flat' | 'pressed' | 'convex' | 'concave';
  size?: number;
  distance?: number;
  active?: boolean;
};

export type StyledElementProps = {
  theme: any;
  shape: any;
  state: ElementStateType;
  size?: number;
  active?: boolean;
};

export enum ElementActionsTypes {
  SET_DISTANCE = 'SET_DISTANCE',
  SET_RADIUS = 'SET_RADIUS',
  SET_BLUR = 'SET_BLUR',
  SET_POSITION_X = 'SET_POSITION_X',
  SET_POSITION_X_OPPOSITE = 'SET_POSITION_X_OPPOSITE',
  SET_POSITION_Y = 'SET_POSITION_Y',
  SET_POSITION_Y_OPPOSITE = 'SET_POSITION_Y_OPPOSITE',
  SET_ANGLE = 'SET_ANGLE',
  SET_FIRST_GRADIENT_COLOR = 'SET_FIRST_GRADIENT_COLOR',
  SET_SECOND_GRADIENT_COLOR = 'SET_SECOND_GRADIENT_COLOR',
}

export type ElementActionType =
  | {
      type: ElementActionsTypes.SET_BLUR;
      payload: number;
    }
  | {
      type: ElementActionsTypes.SET_DISTANCE;
      payload: number;
    }
  | {
      type: ElementActionsTypes.SET_RADIUS;
      payload: number;
    }
  | {
      type: ElementActionsTypes.SET_POSITION_X;
      payload: number;
    }
  | {
      type: ElementActionsTypes.SET_POSITION_X_OPPOSITE;
      payload: number;
    }
  | {
      type: ElementActionsTypes.SET_POSITION_Y;
      payload: number;
    }
  | {
      type: ElementActionsTypes.SET_POSITION_Y_OPPOSITE;
      payload: number;
    }
  | {
      type: ElementActionsTypes.SET_ANGLE;
      payload: number;
    }
  | {
      type: ElementActionsTypes.SET_FIRST_GRADIENT_COLOR;
      payload: string;
    }
  | {
      type: ElementActionsTypes.SET_SECOND_GRADIENT_COLOR;
      payload: string;
    };
