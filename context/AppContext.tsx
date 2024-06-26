import { ReactNode, createContext, useContext } from "react";

const AppContext = createContext({});

export function AppContextProvider({ children }: { children: ReactNode }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
