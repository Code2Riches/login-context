import Axios from "../lib/Axios";

// const baseURL = 'http://localhost:3001/api'

const errorHandler = async (error, dispatch, authDispatch) => {
    if (error.response) {
        authDispatch({
            type: 'AUTH_FAILURE'
        })
        dispatch({
             type: 'ERROR',
             data: {
                 message: error.response.data.message
             }
         });
     } else {
         dispatch({
             type: 'ERROR',
             data: {
                 message: 'No Response from Server'
             }
         });
     }
}

export const fetchLogin = async (dispatch, loginData, authDispatch) => {
    try{
        let response = await Axios.post('/users/login', loginData)
        // let success = await response.json()  //fetch problem + solution
        // console.log(response.status, response.data);
        console.log('!@-------response.data.userObj-------@!')
        console.log(response.data.userObj)

        localStorage.setItem('jwtToken', response.data.token)

        authDispatch({
            type: 'AUTH_SUCCESS'
        })

        dispatch({
                type: 'LOGIN',
                data: {
                    user: response.data.userObj,
                    token: response.data.token
                }
            })
        
    }
    catch (error) {
        errorHandler(error, dispatch, authDispatch)
    }
}

export const register = async (dispatch, newData, authDispatch) => {
    try{
        let response = await Axios.post('/users/register', newData)
        // let success = await response.json()  //fetch problem + solution
        // console.log(response.status, response.data);
        console.log('!@-------response.data.userObj-------@!')
        console.log(response.data.userObj)
        
        dispatch({
            type: 'REGISTER',
            data: response.data.userObj
        })
    }
    catch (error) {
        errorHandler(error, dispatch, authDispatch)
    }
}

export const deleteUser = async (dispatch, user, authDispatch) => {
    try {
            let response = await Axios.post('/users/delete-user', {username: user})
            localStorage.removeItem('jwtToken')
        
            authDispatch({
                type: "AUTH_FAILURE"
            })
        
            dispatch({
                type: 'DELETE',
                data: {
                    message: response.data.message
                }
            })
    } 
    catch (error) {
        errorHandler(error, dispatch, authDispatch)
    }
}

export const logout = async (dispatch, authDispatch) => {
    try {
        localStorage.removeItem('jwtToken')
        authDispatch({
            type: 'AUTH_FAILURE'
        })
        dispatch({
            type: 'LOGOUT'
        }) 
    } 
    catch (error) {
        errorHandler(error, dispatch, authDispatch)
    }
}