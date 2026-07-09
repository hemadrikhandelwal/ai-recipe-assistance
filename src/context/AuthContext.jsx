import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({children}){

const [isAuthenticated, setIsAuthenticated] = useState(()=> !!localStorage.getItem('accessToken'))

const login = (user)=>{
     localStorage.setItem("accessToken", user.accessToken);
    setIsAuthenticated(true)

}

  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
  };


    return(
        <AuthContext.Provider value={{
            isAuthenticated,
            login,
            logout
        }}>
    {children}
</AuthContext.Provider>
    )

}


export {AuthProvider};
export default AuthContext;