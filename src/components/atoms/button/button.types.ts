import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import { ButtonGroup } from '../button-group';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export type CompoundedButton = ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
> & {
  Group: typeof ButtonGroup;
};
