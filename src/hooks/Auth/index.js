import { createContext, useContext, useEffect } from "react";


const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER",
}

export function AuthProvider({children}){
    const [user, setUser] = useState ({
        autenticated: null,
        user: null,
        role: null,
    });

    const signIn = async ({email , password}) => {
        if (email === "super@email.com" && password === "Super123") {
         return setUser({autenticated: true, user:{ id: 1,name: "Super Usuário ",email,  },role: Role.SUPER});
        }

        if (email === "adm@email.com" && password === "Adm123") {
            return setUser({autenticated: true, used:{ id: 1,name: "Administrador ",email,},role: Role.ADM});
           }

           if (email === "user@email.com" && password === "User123") {
            return setUser({autenticated: true, used:{ id: 1,name: "Usuario Comum",email,  },role: Role.USER});
           }
        
    };
    
    const signOut = async () => {
        setUser({
            autenticated:false,
            user:null,
            role:null,
        });
    };

    useEffect(()=>{
        console.log('AuthProvider: ',user)
    }, [user]);

    return(
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext (AuthContext);
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider ")
    }
    return context;
}