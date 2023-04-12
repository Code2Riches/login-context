export const checkAuthToken = () => {
   
    let jwtToken = localStorage.getItem('jwtToken')

    if (jwtToken) {
        // set auth to false
        alert("True")
    } else {
        //set auth to false
        alert("False")
    }
    
}