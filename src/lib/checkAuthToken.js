import { setHeaderToken } from "./setHeaderToken"

export const checkAuthToken = () => {
   
    let jwtToken = localStorage.getItem('jwtToken')

    if (jwtToken) {
        // set auth to true
        setHeaderToken(jwtToken)
        return true
    } else {
        //set auth to false
        return false
    }
    
}