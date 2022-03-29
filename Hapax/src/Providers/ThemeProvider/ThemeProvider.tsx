import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { createTheme, NextUIProvider, Theme, ThemeType } from '@nextui-org/react'

export type SetTheme = React.Dispatch<React.SetStateAction<ThemeType>>;

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
})

export type ThemeContextProps = {
  setTheme: SetTheme,
  theme: Theme,
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}
export const ThemeContext = createContext<ThemeContextProps>({ theme: darkTheme, setTheme: () => {}});

export type ThemeProviderProps = {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [ theme, setTheme ] = useState<ThemeType>('dark');
  const [windowDimension, setWindowDimension] = useState<number>(0);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowDimension(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  const isTablet = windowDimension > 640 && windowDimension <= 1280;
  const isDesktop = !isMobile && !isTablet;
  
  const themes = {
    'light': lightTheme,
    'dark': darkTheme
  }

  return (
    <ThemeContext.Provider value={{
      setTheme,
      theme: themes[theme],
      isMobile,
      isTablet,
      isDesktop
    }}>
      <NextUIProvider theme={themes[theme]}>
        { children }
      </NextUIProvider>
    </ThemeContext.Provider>
  )
}
