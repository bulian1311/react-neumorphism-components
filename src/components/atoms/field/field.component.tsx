import React from 'react';
import { useQniqueId } from '../../../hooks';
import { FieldContext } from './field.context';
import { Input } from '../input';
import { Label } from '../label';

export interface FieldComposition {
  Input: typeof Input;
  Label: typeof Label;
}

export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useQniqueId();
  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>;
};

Field.Label = Label;
Field.Input = Input;
