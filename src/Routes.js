import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';

import Login from './pages/Login';
import Sidebar from './layouts/Sidebar';
import Dashboard from './pages/Dashboard';
import AddPlans from './pages/AddPlans'
import MyPlans from './pages/MyPlans';
import DashboardLayout from './layouts/DashboardLayout';
import EnrollGymMember from './pages/EnrollGymMember';
import Employee from './pages/Employee';

export const Routing = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Routes>
            {
                !isAuthenticated && <Route path="/" element={<Navigate to="/login" />} />
            }
            <Route element={ <Login /> } path="/login" exact />
            <Route element={ <DashboardLayout page={ <Dashboard /> } /> } path="/" exact />
            <Route element={ <DashboardLayout page={ <AddPlans /> } /> } path="/academy-plans/form" exact />
            <Route element={ <DashboardLayout page={ <MyPlans /> } /> } path="/academy-plans" exact />
            <Route element={ <DashboardLayout page={ <EnrollGymMember /> } /> } path="/gym-member/enroll/form" exact />
            <Route element={ <DashboardLayout page={ <Employee /> } /> } path="/persons/enroll/form" exact /> 

        </Routes>
    )
}

export default Routing;