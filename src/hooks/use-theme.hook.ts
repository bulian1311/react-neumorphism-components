import { useContext } from 'react';

import { ThemeContext } from '../components/core/theme';

export const useTheme = () => useContext(ThemeContext);
