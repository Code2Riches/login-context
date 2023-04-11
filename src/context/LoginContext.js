import { createContext, useContext, useReducer } from "react"
import { fetchLogin } from "./loginContextHelper"

export const LoginContext = createContext(null)
export const LoginDispatchContext = createContext(null)

const initialState = {
        username: '',
        password: '',
        isAuth: false,
        message: 'Please Log In!'
    }

export const LoginProvider = ({children}) => {
    const [login, dispatch] = useReducer(loginReducer, initialState)
    
    return (
        <LoginContext.Provider value={login}>
            <LoginDispatchContext.Provider value={dispatch}>
                    {children}
            </LoginDispatchContext.Provider>
       </LoginContext.Provider>
    )
}

const loginReducer = (login, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...action.data, 
                isAuth: true,
                message: `Thank you logging in ${action.data.username}`
            }
        case 'REGISTER':
            login.isAuth = false
            console.log('!@-------Register-------@!')
            console.log(action.data)
            
            return {
                ...action.data,
                isAuth: true,
                message: `Thank you registering ${action.data.username}`
            }
        case 'LOGOUT':
            return {
                username: '',
                password: '',
                isAuth: false
            }
        case 'DELETE':
            return {
                ...login,
                isAuth: false,
                message: action.data.message
            }
        case 'ERROR':
            return {
                username: '',
                password: '',
                isAuth: false,
                message: action.data.message
            }  
        default:
            alert("Default")
            break;
    }
} 