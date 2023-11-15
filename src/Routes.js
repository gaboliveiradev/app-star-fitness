import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';
import ProtectedRoutes from './ProtectedRoutes';

import Login from './pages/Login';
import './layouts/Sidebar';
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
import AddTraining from './pages/AddTraining';
import AddPDC from './pages/AddPDC';
import IntroductoryTraining from './pages/IntroductoryTraining';
import MyExercises from './pages/MyExercises';

export const Routing = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <Routes>
            {
                !isAuthenticated && <Route path="/" element={<Navigate to="/login" />} />
            }
            <Route element={<Login />} path="/login" exact />
            {/* @==== Dashboard ====@ */}
            <Route path="/" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<Dashboard />} />
                </ProtectedRoutes>
            } />
            {/* @==== Plans ====@ */}
            <Route path="/academy-plans/form" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<AddPlans />} />
                </ProtectedRoutes>
            } />
            <Route path="/academy-plans" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<MyPlans />} />
                </ProtectedRoutes>
            } />
            {/* @==== Gym Member ====@ */}
            <Route path="/gym-member/enroll/form" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<EnrollGymMember />} />
                </ProtectedRoutes>
            } />
            <Route path="/gym-member" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<MyGymMembers />} />
                </ProtectedRoutes>
            } />
            <Route path="/redefine/password/user/form" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<RedefinePasswordUser />} />
                </ProtectedRoutes>
            } />
            {/* @==== Employee ====@ */}
            <Route path="/employee/register/form" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<RegisterEmployee />} />
                </ProtectedRoutes>
            } />
            <Route path="/employee-management" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<MyEmployee />} />
                </ProtectedRoutes>
            } />
            {/* @==== Account Settings ====@ */}
            <Route path="/account-settings" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<AccountSettings />} />
                </ProtectedRoutes>
            } />
            {/* @==== My Profile ====@ */}
            <Route path="/profile" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<MyProfile />} />
                </ProtectedRoutes>
            } />
            {/* @==== Exercises ====@ */}
            <Route path="/exercises/form" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<AddExercises />} />
                </ProtectedRoutes>
            } />
            <Route path="/exercises/manage" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<MyExercises />} />
                </ProtectedRoutes>
            } />
            {/* @==== Training  ====@ */}
            <Route path='/training/form' exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<AddTraining />} />
                </ProtectedRoutes>
            } />
            <Route path="/introductory-training" exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<IntroductoryTraining />} />
                </ProtectedRoutes>
            } />
            {/* @==== PDC ====@ */}
            <Route path='/pdc/form' exact element={
                <ProtectedRoutes>
                    <DashboardLayout page={<AddPDC />} />
                </ProtectedRoutes>
            } />
        </Routes>
    )
}

export default Routing;