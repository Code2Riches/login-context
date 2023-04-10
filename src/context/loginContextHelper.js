import Axios from "../lib/Axios";

// const baseURL = 'http://localhost:3001/api'

export const fetchLogin = async (dispatch, loginData) => {
    try{
        let response = await Axios.post('/users/login', loginData)
        // let success = await response.json()  //fetch problem + solution
        console.log(response.status, response.data);
        console.log('!@-------response.data.userObj-------@!')
        console.log(response.data.userObj)
        
        if (response.status  === 200  || response.status === 304) {
            // return response.data
            dispatch({
                type: 'LOGIN',
                data: response.data.userObj
            })
        }
        else {
            throw new Error(response.status)
        }
    }
    catch (error) {
        console.log(error);
    }
}


export const register = async (dispatch, newData) => {
    try{
        let response = await Axios.post('/users/register', newData)
        // let success = await response.json()  //fetch problem + solution
        console.log(response.status, response.data);
        console.log('!@-------response.data.userObj-------@!')
        console.log(response.data.userObj)
        
        if (response.status  === 200  || response.status === 304) {
            // return response.data
            dispatch({
                type: 'REGISTER',
                data: response.data.userObj
            })
        }
        else {
            throw new Error(response.status)
        }
    }
    catch (error) {
        console.log(error);
    }
}