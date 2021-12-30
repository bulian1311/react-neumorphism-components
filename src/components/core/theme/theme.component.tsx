import React, { useEffect } from 'react';
import {
  isValidColor,
  colorLuminance,
  getContrast,
} from '../../../utils/colors.utils';
import { useTheme } from '../../../hooks';

interface ThemeProps {
  baseColor?: string;
  colorDifference?: number;
  activeLightSource?: 'left-top' | 'top-right' | 'right-bottom' | 'bottom-left';
  distance?: number;
  blur?: number;
  radius?: number;
}

export const Theme: React.FC<ThemeProps> = ({
  children,
  baseColor = '#e0e0e0',
  colorDifference = 0.15,
  activeLightSource = 'left-top',
  distance = 20,
  blur = 60,
  radius = 50,
}) => {
  const theme = useTheme();

  useEffect(() => {
    if (!isValidColor(baseColor)) return;

    // let angle: number;
    // let positionX: number;
    // let positionY: number;
    const darkColor = colorLuminance(baseColor, colorDifference * -1);
    const lightColor = colorLuminance(baseColor, colorDifference);

    // switch (activeLightSource) {
    //   case 'left-top':
    //     positionX = distance;
    //     positionY = distance;
    //     angle = 145;
    //     break;
    //   case 'top-right':
    //     positionX = distance * -1;
    //     positionY = distance;
    //     angle = 225;
    //     break;
    //   case 'right-bottom':
    //     positionX = distance * -1;
    //     positionY = distance * -1;
    //     angle = 315;
    //     break;
    //   case 'bottom-left':
    //     positionX = distance;
    //     positionY = distance * -1;
    //     angle = 45;
    //     break;
    //   default:
    //     positionX = distance;
    //     positionY = distance;
    //     angle = 145;
    //     break;
    // }

    const firstGradientColor = colorLuminance(baseColor, 0.07);
    const secondGradientColor = colorLuminance(baseColor, -0.1);

    theme.dispatch({
      type: theme.types.SET_BASE_COLOR,
      payload: baseColor,
    });
    // theme.dispatch({
    //   type: theme.types.SET_POSITION_X,
    //   payload: positionX,
    // });
    // theme.dispatch({
    //   type: theme.types.SET_POSITION_X_OPPOSITE,
    //   payload: positionX * -1,
    // });
    // theme.dispatch({
    //   type: theme.types.SET_POSITION_Y,
    //   payload: positionY,
    // });
    // theme.dispatch({
    //   type: theme.types.SET_POSITION_Y_OPPOSITE,
    //   payload: positionY * -1,
    // });
    // theme.dispatch({
    //   type: theme.types.SET_ANGLE,
    //   payload: angle,
    // });
    theme.dispatch({
      type: theme.types.SET_BLUR,
      payload: blur,
    });
    theme.dispatch({
      type: theme.types.SET_TEXT_COLOR,
      payload: getContrast(baseColor),
    });
    theme.dispatch({
      type: theme.types.SET_TEXT_COLOR_OPPOSITE,
      payload: baseColor,
    });
    theme.dispatch({
      type: theme.types.SET_DARK_COLOR,
      payload: darkColor,
    });
    theme.dispatch({
      type: theme.types.SET_LIGHT_COLOR,
      payload: lightColor,
    });
    theme.dispatch({
      type: theme.types.SET_FIRST_GRADIENT_COLOR,
      payload: firstGradientColor,
    });
    theme.dispatch({
      type: theme.types.SET_SECOND_GRADIENT_COLOR,
      payload: secondGradientColor,
    });
    theme.dispatch({
      type: theme.types.SET_RADIUS,
      payload: radius,
    });
    theme.dispatch({
      type: theme.types.SET_ACTIVE_LIGHT_SOURCE,
      payload: activeLightSource,
    });
  }, [baseColor, blur, distance, colorDifference, activeLightSource, radius]);

  return <React.Fragment>{children}</React.Fragment>;
};
