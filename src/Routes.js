import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';

import Login from './pages/Login';
import Sidebar from './layouts/Sidebar';
import Dashboard from './pages/Dashboard';
import AddPlans from './pages/AddPlans'
import MyPlans from './pages/MyPlans';
import RedefinePasswordUser from './pages/RedefinePasswordUser';
import DashboardLayout from './layouts/DashboardLayout';
import EnrollGymMember from './pages/EnrollGymMember';
import RegisterEmployee from './pages/RegisterEmployee';
import MyGymMembers from './pages/MyGymMembers';
import MyEmployee from './pages/MyEmployee';
import AccountSettings from './pages/AccountSettings';
import MyProfile from './pages/MyProfile';
import AddExercises from './pages/AddExercises';

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
            <Route element={<DashboardLayout page={<RedefinePasswordUser />} />} path='/redefine/password/user/form' exact />
            {/* @==== Employee ====@ */}
            <Route element={<DashboardLayout page={<RegisterEmployee />} />} path="/employee/register/form" exact />
            <Route element={<DashboardLayout page={<MyEmployee />} />} path="/employee-management" />
            {/* @==== Account Settings ====@ */}
            <Route element={<DashboardLayout page={<AccountSettings />} />} path='/account-settings' />
            {/* @==== My Profile ====@ */}
            <Route element={<DashboardLayout page={<MyProfile />} />} path='/profile' />
            {/* @==== My Profile ====@ */}
            <Route element={<DashboardLayout page={<AddExercises />} />} path='/exercises/form' />
        </Routes>
    )
}

export default Routing;