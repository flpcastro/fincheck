import { ReactNode, createContext } from "react";

interface AuthContextProps {
  signedIn: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{
      signedIn: false
    }}>
      {children}
    </AuthContext.Provider>
  )
}
