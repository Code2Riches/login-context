import React, {useState, useContext} from 'react'
import { LoginContext, LoginDispatchContext } from '../context/LoginContext'
import { ThemeContext } from '../context/ThemeContext'
import { deleteUser, fetchLogin, logout, register } from '../context/loginContextHelper'
import { checkAuthToken } from '../lib/checkAuthToken'

const Login = () => {
    
    checkAuthToken()
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
            <h3>Message: {login.message}</h3>
            {login.isAuth ? 
            <>
                <h3>Username: {login.username}</h3>
                <h3>Password: {login.password}</h3>
                <button 
                    onClick={() => logout(dispatch)}>Logout</button>
                <button
                    onClick={() => deleteUser(dispatch, login.username)}
                >Delete Me!</button>
            </>
            : 
            <>
            {/* <p>Please Login: </p>  */}
            <label htmlFor='username'>Username: </label>
                <input 
                  type='text'
                  name='username'
                  value={loginState.username}
                  onChange={onChangeHandler}
                /><br/>
                <label htmlFor='password'>Password: </label>
                <input 
                  type='password'
                  name='password'
                  value={loginState.password}
                  onChange={onChangeHandler}
                /><br/>
                <button onClick={() => fetchLogin(dispatch, loginState)}>Login</button>
                <button onClick={() => register(dispatch, loginState)}>Register</button>
            </>
            }
        </div>
    )
    }

export default Login