import { createContext } from "react";
import { useState } from "react";

export const TourContext = createContext();

export default function TourContextData({ children }) {
  const [showSide, setShowSide] = useState(true);

  const value = {
    showSide,
    setShowSide,
  };

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
}
