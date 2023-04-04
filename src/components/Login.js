import React, {useState, useContext} from 'react'
import { LoginContext, LoginDispatchContext } from '../context/LoginContext'
import { ThemeContext } from '../context/ThemeContext'

const Login = () => {
    
    //const theme = useContext(ThemeContext)

    const login = useContext(LoginContext)
    const dispatch = useContext(LoginDispatchContext)

    const [loginState, setLoginState] = useState({
        username: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        setLoginState({
            ...loginState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>Login
            {login.isAuth ? 
            <button onClick={() => dispatch({
                type: 'LOGOUT'
            })}>Logout</button>
            : 
            <>
            <p>Please Login: </p> 
            <label htmlFor='username'>Username: </label>
                <input 
                  type='text'
                  name='username'
                  value={loginState.username}
                  onChange={onChangeHandler}
                /><br/>
                <label htmlFor='password'>Password: </label>
                <input 
                  type='text'
                  name='password'
                  value={loginState.password}
                  onChange={onChangeHandler}
                /><br/>
                <button onClick={() => dispatch({
                    type: 'LOGIN',
                    data: loginState
                })}>Login Dispatch</button>
            </>
            }
        </div>
    )
    }

export default Login