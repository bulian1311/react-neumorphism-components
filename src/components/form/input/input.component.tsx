import React, { ComponentPropsWithoutRef, forwardRef, useContext } from 'react';
import { FieldContext } from '../field';

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<'input'>
>((props, ref) => {
  const id = useContext(FieldContext);
  return <input ref={ref} id={id} {...props} />;
});

Input.displayName = 'Field.Input';
