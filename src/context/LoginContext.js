import { createContext, useContext, useReducer } from "react"
import { fetchLogin } from "./loginContextHelper"

export const LoginContext = createContext(null)
export const LoginDispatchContext = createContext(null)

const initialState = {
        username: '',
        password: '',
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
            // (action.data.username === 'Violet') ? 
            // isAuth = true 
            // : 
            // isAuth = false
            

            fetchLogin()



            return {
                ...action.data, 
                isAuth: isAuth 
            }
        case 'LOGOUT':
            return {
                username: '',
                password: '',
                isAuth: false
            }
               
        default:
            alert("Default")
            break;
    }
} 