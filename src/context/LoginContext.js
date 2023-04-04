import { createContext, useContext, useReducer } from "react"

export const LoginContext = createContext(null)
export const LoginDispatchContext = createContext(null)

const initialState = {
        username: 'Hello',
        password: 'World',
        isAuth: false
    }

export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initialState)
    
    return (
        <LoginContext.Provider value={login}>
            <LoginDispatchContext.Provider value={dispatch}>
                <div>Hello World
                    {children}
                </div> 
            </LoginDispatchContext.Provider>
       </LoginContext.Provider>
    )
}

const loginReducer = (login, action) => {
    switch (action.type) {
        case 'LOGIN':
            let isAuth = false;
            (action.data.username === 'Violet') ? 
            isAuth = true 
            : 
            isAuth = false

            return {
                ...action.data, 
                isAuth: isAuth 
            }
               
        default:
            alert("Default")
            break;
    }
} 