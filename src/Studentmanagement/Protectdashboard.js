import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from './Dashboard'
const Protectdashboard = ({ children }) => {
    const { isLogged, setIslogged }= useContext(UserContext);
    {
        console.log({isLogged})
        if(isLogged){
            return children
        }
        else{
            return(
            <Navigate to='/'/>
        )
        }    
  
    }
}

export default Protectdashboard
