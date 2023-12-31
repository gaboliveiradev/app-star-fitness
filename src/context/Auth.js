import React, { createContext, useContext, useEffect, useState } from 'react';
import { Await, useNavigate } from 'react-router-dom';
import * as auth from '../services/auth';
import * as type from '../services/type';
import * as address from '../services/address';
import * as gymMemberPerson from '../services/gymMember';
import * as billing from '../services/billing';
import * as exercise from '../services/exercise';
import * as employee from '../services/employee';
import * as accessGroup from '../services/accessGroup';
import * as enroll from '../services/enroll';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const [typeList, setTypeList] = useState(null);
    const [gymMembersList, setGymMembersList] = useState(null);
    const [exerciseList, setExerciseList] = useState(null);
    const [employeeList, setEmployeeList] = useState(null);
    const [accessGroupList, setAccessGroupList] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('app-star-fitness-token');
        const user = localStorage.getItem('app-mercado-unido-user');
        const isAuthenticated = localStorage.getItem('app-star-fitness-logged');

        const typeList = localStorage.getItem('app-star-fitness-type');
        const gymMembersList = localStorage.getItem('app-star-fitness-gym-members');
        const exerciseList = localStorage.getItem('app-star-fitness-exercise');
        const employeeList = localStorage.getItem('app-star-fitness-employee');
        const accessGroupList = localStorage.getItem('app-star-fitness-access-group');

        if (token && user && isAuthenticated) {
            setUser(JSON.parse(user));
            setToken(token);
            setIsAuthenticated(true);

            return;
        }

        if (accessGroupList) {
            setAccessGroupList(JSON.parse(accessGroupList));

            return;
        }

        if (typeList) {
            setTypeList(JSON.parse(typeList));

            return;
        }

        if (exerciseList) {
            setExerciseList(JSON.parse(exerciseList));

            return;
        }

        if (gymMembersList) {
            setGymMembersList(JSON.parse(gymMembersList));

            return;
        }

        if (employeeList) {
            setEmployeeList(JSON.parse(employeeList));

            return;
        }

        return navigate('/login');
    }, []);

    const [errorMessageLogin, setErrorMessageLogin] = useState('');

    async function login(email_l, password_l) {
        try {
            const response = await auth.login(email_l, password_l);

            if (response.status !== 200) return response;

            const { token, user } = response.data;
            const { id, name, email, document, phone, birthday, gender, photo_url, id_address, employee, address, accessGroup } = user;

            setUser({ id: id, name: name, email: email, document: document, phone: phone, birthday: birthday, gender: gender, photo_url: photo_url, id_address: id_address, address: address, employee: employee, accessGroup: accessGroup });
            setToken(token);
            setIsAuthenticated(true);

            localStorage.setItem('app-star-fitness-logged', true);
            localStorage.setItem('app-star-fitness-token', token);
            localStorage.setItem('app-star-fitness-user', JSON.stringify({
                id: id,
                name: name,
                email: email,
                document: document,
                phone: phone,
                birthday: birthday,
                gender: gender,
                photo_url: photo_url,
                id_address: id_address,
                address: address,
                employee: employee,
                accessGroup: accessGroup,
            }));

            await getType();
            await getGymMembers();
            await getEmployee();
            await getExercise();
            await getAccessGroup();

            return response;
        } catch (error) {
            return false;
        }
    }

    async function enrollGymMember(parameters) {
        const response = await enroll.enrollGymMember(parameters);

        return (response.status === 201) ? response : false;
    }

    async function createType(parameters) {
        const response = await type.create(parameters);

        return (response.status === 201) ? response : false;
    }

    async function createAddress(parameters) {
        const response = await address.create(parameters);

        return (response.status === 201) ? response : false;
    }

    async function createGymMemberPerson(parameters) {
        const response = await gymMemberPerson.create(parameters);

        return (response.status === 201) ? response : false;
    }

    async function createBilling(parameters) {
        const response = await billing.create(parameters);

        return (response.status === 201) ? response : false;
    }

    async function getEmployee() {
        const response = await employee.get();

        if (response.status !== 200) return false;

        setEmployeeList(response.data.data);
        localStorage.setItem('app-star-fitness-employee', JSON.stringify(response.data.data));

        return true;
    }

    async function getAccessGroup() {
        const response = await accessGroup.get();

        if (response.status !== 200) return false;

        setAccessGroupList(response.data.data);
        localStorage.setItem('app-star-fitness-access-group', JSON.stringify(response.data.data));

        return true;
    }

    async function getExercise() {
        const response = await exercise.get();

        if (response.status !== 200) return false;

        setExerciseList(response.data.data);
        localStorage.setItem('app-star-fitness-exercise', JSON.stringify(response.data.data));

        return true;
    }

    async function getType() {
        const response = await type.get();

        if (response.status !== 200) return false;

        setTypeList(response.data.data);
        localStorage.setItem('app-star-fitness-type', JSON.stringify(response.data.data));

        return true;
    }

    async function getGymMembers() {
        const response = await gymMemberPerson.get();

        console.log(response);

        setGymMembersList(response.data.data);
        localStorage.setItem('app-star-fitness-gym-members', JSON.stringify(response.data.data));

        return (response.status === 200) ? response : false;
    }

    async function deleteType(idType) {
        const response = await type.del(idType);

        if (response.status !== 200) return false;

        await getType(token);

        return response;
    }

    async function deleteGymMember(idGymMember) {
        const response = await gymMemberPerson.deleteGymMember(idGymMember);

        if (response.status !== 200) return false;

        await getGymMembers(token);

        return response;
    }

    const context = {
        login,
        token, setToken,
        user, setUser,
        isAuthenticated, setIsAuthenticated,
        typeList, setTypeList,
        accessGroupList, setAccessGroupList,
        exerciseList, setExerciseList,
        employeeList, setEmployeeList,
        getExercise, getEmployee,
        createType, getType, deleteType,
        createAddress, createGymMemberPerson,
        createBilling, getGymMembers,
        gymMembersList, deleteGymMember,
        errorMessageLogin, setErrorMessageLogin,
        // enroll
        enrollGymMember,
    };

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}