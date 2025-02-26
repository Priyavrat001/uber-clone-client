import React, { useEffect } from 'react'
import { Navigate} from 'react-router-dom'

const UserProtecetedRoute = ({ user, children }) => {
    if(!user){
        return <Navigate to={"/user-login"}/>
    }
     
    return children
};

const CaptainProtectedRoute = ({ captain, children })=>{

    if(!captain) return <Navigate to={"/captain-login"}/>

    return children
}

export {
    UserProtecetedRoute,
    CaptainProtectedRoute
}