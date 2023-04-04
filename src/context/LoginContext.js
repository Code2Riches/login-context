import { createContext, useContext, useReducer } from "react"

export const LoginContext = createContext(null)

export const LoginProvider = ({children}) => {
    
    return (
        <LoginContext.Provider value='Login!'>
            <div>Hello World
                {children}
            </div> 
       </LoginContext.Provider>
    )
}