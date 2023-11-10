import { ReactNode, createContext, useCallback, useState } from "react";

interface DashboardProviderProps {
  children: ReactNode
}

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: DashboardProviderProps)  {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState)
  }, [])

  return (
    <DashboardContext.Provider value={{
      areValuesVisible,
      toggleValuesVisibility
    }}>
      {children}
    </DashboardContext.Provider>
  )
}
