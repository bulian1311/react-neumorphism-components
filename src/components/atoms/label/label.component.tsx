import React, { ComponentPropsWithoutRef, forwardRef, useContext } from 'react';
import { FieldContext } from '../field/field.context';

export const Label = forwardRef<
  HTMLLabelElement,
  ComponentPropsWithoutRef<'label'>
>((props, ref) => {
  const id = useContext(FieldContext);

  return <label ref={ref} htmlFor={id} {...props} />;
});

Label.displayName = 'Field.Label';
