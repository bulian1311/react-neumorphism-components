import { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  size?: 'small' | 'medium' | 'large';
  isFullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
};
