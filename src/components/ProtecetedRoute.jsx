import React, { useEffect } from 'react'
import { Navigate} from 'react-router-dom'
import LayoutLoading from './LayoutLoading';

const UserProtecetedRoute = ({ user, loading, children }) => {
    if(loading){
        <LayoutLoading/>
    }
    if(!user){
      <Navigate to={"/user-login"}/>
      return;
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