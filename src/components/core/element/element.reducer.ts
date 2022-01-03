import {
  ElementStateType,
  ElementActionsTypes,
  ElementActionType,
} from './element.types';

export const elementReducer = (
  state: ElementStateType,
  action: ElementActionType,
) => {
  switch (action.type) {
    case ElementActionsTypes.SET_BLUR:
      return { ...state, blur: action.payload };
    case ElementActionsTypes.SET_DISTANCE:
      return { ...state, distance: action.payload };
    case ElementActionsTypes.SET_RADIUS:
      return { ...state, radius: action.payload };
    case ElementActionsTypes.SET_POSITION_X:
      return { ...state, positionX: action.payload };
    case ElementActionsTypes.SET_POSITION_X_OPPOSITE:
      return { ...state, positionXOpposite: action.payload };
    case ElementActionsTypes.SET_POSITION_Y:
      return { ...state, positionY: action.payload };
    case ElementActionsTypes.SET_POSITION_Y_OPPOSITE:
      return { ...state, positionYOpposite: action.payload };
    case ElementActionsTypes.SET_ANGLE:
      return { ...state, angle: action.payload };
    case ElementActionsTypes.SET_FIRST_GRADIENT_COLOR:
      return { ...state, firstGradientColor: action.payload };
    case ElementActionsTypes.SET_SECOND_GRADIENT_COLOR:
      return { ...state, secondGradientColor: action.payload };
    default:
      return state;
  }
};
