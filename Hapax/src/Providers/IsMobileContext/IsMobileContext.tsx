import { createContext, useEffect, useState } from "react";
import { useIsMobile } from "../../Hooks/useIsMobile";

export type IsMobileProviderProps = {
  children: React.ReactNode;
}

export type IsMobileContextProps = {
  isMobile?: boolean,
  isTablet?: boolean
  isDesktop?: boolean,
}

export const IsMobileContext = createContext<IsMobileContextProps>({})

export const IsMobileProvider = ({children}: IsMobileProviderProps) => {
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

  return <IsMobileContext.Provider value={{isMobile, isDesktop, isTablet }}>
    { children }
  </IsMobileContext.Provider>
}