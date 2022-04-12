import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Context/AuthContext/useAuth';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Spinner animation="grow" />
    }
    return user?.email ? children : <Navigate to='/login' state={{ from: location }} />;

};

export default PrivateRoute;