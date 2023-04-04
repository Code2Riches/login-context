import { createContext, useContext, useReducer } from "react"

export const LoginContext = createContext(null)
export const LoginDispatchContext = createContext(null)

const baseURL = 'http://localhost:3001/api'

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
            
            const fetchLogin = async () => {
                try{
                    let success = await fetch(baseURL + '/users/login/')
                    let data = await success.json()
                    console.log(data.message);
                }
                catch{

                }
            }
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