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
            login.isAuth = false;
            // (action.data.username === 'Violet') ? 
            // isAuth = true 
            // : 
            // isAuth = false

            // console.log(response.data.user)
            // return {
            //     username: action.data.username,
            //     password: action.data.password, 
            //     isAuth: true
            // }

            return {
                ...action.data, 
                isAuth: true
            }
        case 'REGISTER':
            login.isAuth = false
            return {
                ...action.data,
                isAuth: true
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