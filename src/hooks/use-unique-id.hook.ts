import { useState } from 'react';
import { customAlphabet } from 'nanoid/non-secure';

const nanoid = customAlphabet('123456789abcdefg', 8);

export const useQniqueId = (): string => {
  const [id] = useState(nanoid());

  return id;
};
