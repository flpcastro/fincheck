import { useState } from "react";
import { useWindowWidth } from "../../../../../app/hooks/useWindowWidth";

export function useAccountsController() {
  const { width } = useWindowWidth();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  });

  return {
    sliderState,
    setSliderState,
    windowWidth: width,
  }
}
