import Axios from "../lib/Axios";

// const baseURL = 'http://localhost:3001/api'

export const fetchLogin = async (dispatch, loginData) => {
    try{
        let response = await Axios.post('/users/login', loginData)
        // let success = await response.json()  //fetch problem + solution
        // console.log(response.status, response.data);
        console.log('!@-------response.data.userObj-------@!')
        console.log(response.data.userObj)

        dispatch({
                type: 'LOGIN',
                data: response.data.userObj,
                token: response.data.token
            })
        
    }
    catch (error) {
        if (error.response) {
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
}

export const register = async (dispatch, newData) => {
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
        if (error.response) {
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
}

export const deleteUser = async (dispatch, user) => {
    let response = await Axios.post('/users/delete-user', {username: user})
    dispatch({
        type: 'DELETE',
        data: {
            message: response.data.message
        }
    })
}