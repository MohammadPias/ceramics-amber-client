import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Context/AuthContext/useAuth';

const AdminRoute = ({ children }) => {

    const { loading, user, admin } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Spinner animation="grow" />
    }
    if (admin) {
        return user?.email && admin ? children : <Navigate to='/login' state={{ from: location }} />;
    }
};

export default AdminRoute;