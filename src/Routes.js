import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthContext from './context/AuthContext';

import Login from './pages/Login';
import Sidebar from './layouts/Sidebar';
import Dashboard from './pages/Dashboard';
import AddPlans from './pages/AddPlans'
import MyPlans from './pages/MyPlans';
import RedefinePassword from './pages/RedefinePassword';
import DashboardLayout from './layouts/DashboardLayout';
import EnrollGymMember from './pages/EnrollGymMember';
import RegisterEmployee from './pages/RegisterEmployee';
import MyGymMembers from './pages/MyGymMembers';
import EmployeeManagement from './pages/EmployeeManagement';

export const Routing = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Routes>
            {
                !isAuthenticated && <Route path="/" element={<Navigate to="/login" />} />
            }
            <Route element={<Login />} path="/login" exact />
            <Route element={<DashboardLayout page={<Dashboard />} />} path="/" exact />
            {/* @==== Plans ====@ */}
            <Route element={<DashboardLayout page={<AddPlans />} />} path="/academy-plans/form" exact />
            <Route element={<DashboardLayout page={<MyPlans />} />} path="/academy-plans" exact />
            {/* @==== Gym Member ====@ */}
            <Route element={<DashboardLayout page={<EnrollGymMember />} />} path="/gym-member/enroll/form" exact />
            <Route element={<DashboardLayout page={<MyGymMembers />} />} path="/gym-member" exact />
            <Route element={<DashboardLayout page={<RedefinePassword />} />} path='/redefine/password/form' exact />
            {/* @==== Employee ====@ */}
            <Route element={<DashboardLayout page={<RegisterEmployee />} />} path="/employee/register/form" exact />
            <Route element={<DashboardLayout page={<EmployeeManagement />} />} path="/employee-management" />
        </Routes>
    )
}

export default Routing;