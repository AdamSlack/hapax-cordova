import { useContext } from 'react';
import { ThemeContext } from '../../Providers/ThemeProvider';

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if(!themeContext) {
    throw new Error('useTheme must be used within a child of the ThemeProvider');
  }

  return themeContext;
}

export default useTheme;