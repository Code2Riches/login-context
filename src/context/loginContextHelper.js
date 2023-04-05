import Axios from "../lib/Axios";

// const baseURL = 'http://localhost:3001/api'

export const fetchLogin = async () => {
    try{
        let response = await Axios.post('/users/login', {user: 'bob'})
        // let success = await response.json()
        console.log(response.status, response.data);
    }
    catch (error) {
        console.log(error);
    }
}