import React from 'react'
import { Outlet } from 'react-router';
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/admin/"></Navigate>
    }
    return children ? children : <Outlet></Outlet>
}

export default AdminRoute
