import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../hooks';
import { colorLuminance } from '../../../utils/colors.utils';
import { StyledElement } from './element.styled';
import { ElementProps, ElementActionsTypes as ATypes } from './element.types';
import { elementReducer } from './element.reducer';

export const Element = React.forwardRef<any, ElementProps>(
  (
    {
      children,
      className,
      renderAs,
      shape = 'flat',
      height = 150,
      width = 150,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const RenderAs = renderAs;

    const [state, dispatch] = useReducer(elementReducer, {
      distance: 0,
      radius: 0,
      blur: 0,
      positionX: 0,
      positionXOpposite: 0,
      positionY: 0,
      positionYOpposite: 0,
      angle: 0,
      firstGradientColor: '',
      secondGradientColor: '',
    });

    useEffect(() => {
      dispatch({
        type: ATypes.SET_DISTANCE,
        payload: Math.round(height * 0.1),
      });
      dispatch({
        type: ATypes.SET_BLUR,
        payload: Math.round(height * 0.2),
      });
      dispatch({
        type: ATypes.SET_RADIUS,
        payload: height - (height / 100) * 85,
      });
    }, [height]);

    useEffect(() => {
      dispatch({
        type: ATypes.SET_FIRST_GRADIENT_COLOR,
        payload: colorLuminance(theme.state.baseColor, 0.07),
      });
      dispatch({
        type: ATypes.SET_SECOND_GRADIENT_COLOR,
        payload: colorLuminance(theme.state.baseColor, -0.1),
      });
    }, [theme.state.baseColor]);

    useEffect(() => {
      switch (theme.state.activeLightSource) {
        case 'left-top':
          dispatch({
            type: ATypes.SET_POSITION_X,
            payload: state.distance,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y,
            payload: state.distance,
          });
          dispatch({
            type: ATypes.SET_POSITION_X_OPPOSITE,
            payload: state.positionX * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y_OPPOSITE,
            payload: state.positionY * -1,
          });
          dispatch({
            type: ATypes.SET_ANGLE,
            payload: 145,
          });
          break;
        case 'top-right':
          dispatch({
            type: ATypes.SET_POSITION_X,
            payload: state.distance * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y,
            payload: state.distance,
          });
          dispatch({
            type: ATypes.SET_POSITION_X_OPPOSITE,
            payload: state.positionX * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y_OPPOSITE,
            payload: state.positionY * -1,
          });
          dispatch({
            type: ATypes.SET_ANGLE,
            payload: 225,
          });
          break;
        case 'right-bottom':
          dispatch({
            type: ATypes.SET_POSITION_X,
            payload: state.distance * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y,
            payload: state.distance * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_X_OPPOSITE,
            payload: state.positionX * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y_OPPOSITE,
            payload: state.positionY * -1,
          });
          dispatch({
            type: ATypes.SET_ANGLE,
            payload: 315,
          });
          break;
        case 'bottom-left':
          dispatch({
            type: ATypes.SET_POSITION_X,
            payload: state.distance,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y,
            payload: state.distance * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_X_OPPOSITE,
            payload: state.positionX * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y_OPPOSITE,
            payload: state.positionY * -1,
          });
          dispatch({
            type: ATypes.SET_ANGLE,
            payload: 45,
          });
          break;
        default:
          dispatch({
            type: ATypes.SET_POSITION_X,
            payload: state.distance,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y,
            payload: state.distance,
          });
          dispatch({
            type: ATypes.SET_POSITION_X_OPPOSITE,
            payload: state.positionX * -1,
          });
          dispatch({
            type: ATypes.SET_POSITION_Y_OPPOSITE,
            payload: state.positionY * -1,
          });
          dispatch({
            type: ATypes.SET_ANGLE,
            payload: 145,
          });
          break;
      }
    }, [theme.state.activeLightSource, state.distance]);

    return (
      <StyledElement
        component={<RenderAs />}
        ref={ref}
        theme={theme.state}
        state={state}
        shape={shape}
        width={width}
        height={height}
        {...props}
      >
        {children}
      </StyledElement>
    );
  },
);

Element.displayName = 'Element';

Element.defaultProps = {
  shape: 'flat',
  height: 150,
  width: 150,
};

Element.propTypes = {
  shape: PropTypes.oneOf(['flat', 'pressed', 'convex', 'concave']),
  height: PropTypes.number,
  width: PropTypes.number,
};
