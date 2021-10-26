import { createContext } from 'react';

import { ThemeColors } from './';

export const ThemeContext = createContext<ThemeColors | undefined>(undefined);
