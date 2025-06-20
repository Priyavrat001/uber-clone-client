import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import LayoutLoading from './LayoutLoading';

const UserProtecetedRoute = ({ user, loading, children }) => {
    if (loading) {
        return <LayoutLoading />
    }
    if (!user) {
        return <Navigate to={"/user-login"} />
    }

    return children
};

const CaptainProtectedRoute = ({ captain, captainLoading, children }) => {

    if (captainLoading) {
        return <LayoutLoading />
    };

    if (!captain) {
        <Navigate to={"/captain-login"} />
        return;
    }

    return children
}

export {
    UserProtecetedRoute,
    CaptainProtectedRoute
}