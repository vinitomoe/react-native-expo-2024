import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER",
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        autenticated: false,
        user: null,
        role: null,
    });

    const signIn = async ({ email, password }) => {
         const response = await authUser({email, password});

          if (!response){
            setUser({
                autenticated: false,
                user: null,
                role: null,
            });
            throw new Error("Usuário ou senha inválidos");
          }

        console.log(response);

          setUser({
            autenticated: true,
            user: response,
            role: response.role
        });

    };

    const signOut = async () => {
        setUser({
            autenticated: false,
            user: null,
            role: null,
        });
    };

    useEffect(() => {
        console.log('AuthProvider: ', user)
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider ")
    }
    return context;
}