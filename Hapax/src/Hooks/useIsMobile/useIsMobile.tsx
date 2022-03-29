import { useContext, useEffect, useState  } from "react";
import { IsMobileContext } from "../../Providers/IsMobileContext";

export const useIsMobile = () => {
  const isMobileContext = useContext(IsMobileContext);
  if(!isMobileContext) {
    throw new Error('useIsMobile must be used within a child of the IsMobileProvider');
  }

  return isMobileContext;
}