import { createContext } from "react";

export const AuthContext = createContext(false);

export default function AuthContextProvider({children}) {
    return(
        <AuthContext.Provider value={true}>
            {children}
        </AuthContext.Provider>
    )
}