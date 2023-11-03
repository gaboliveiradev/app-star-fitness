import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../services/auth';
import * as type from '../services/type';
import * as address from '../services/address';
import * as gymMemberPerson from '../services/gymMemberPerson';
import * as billing from '../services/billing';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const [typeList, setTypeList] = useState(null);
    const [gymMembersList, setGymMembersList] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('app-star-fitness-token');
        const user = localStorage.getItem('app-mercado-unido-user');
        const isAuthenticated = localStorage.getItem('app-star-fitness-logged');

        const typeList = localStorage.getItem('app-star-fitness-type');
        const gymMembersList = localStorage.getItem('app-star-fitness-gym-members');

        if (token && user && isAuthenticated) {
            setUser(JSON.parse(user));
            setToken(token);
            setIsAuthenticated(true);

            return;
        }
        
        if(typeList) {
            setTypeList(JSON.parse(typeList));

            return;
        }

        if (gymMembersList) {
            setGymMembersList(JSON.parse(gymMembersList));

            return;
        }

        return navigate('/login');
    }, []);

    async function login(email_l, password_l) {
        try {
            const response = await auth.login(email_l, password_l);

            if (response.status !== 200) return false;

            const { token, user } = response.data;
            const { id, name, email, document, phone, birthday, gender, photo_url, id_address, employee } = user;

            setUser({ id: id, name: name, email: email, document: document, phone: phone, birthday: birthday, gender: gender, photo_url: photo_url, id_address: id_address, employee: employee });
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
                employee: employee
            }));

            console.log(response);

            await getType(response.data.token);
            await getGymMembers(response.data.token);

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function createType(parameters, token) {
        const response = await type.create(parameters, token);

        return (response.status === 201) ? response : false;
    }

    async function createAddress(parameters, token) {
        const response = await address.create(parameters, token);

        return (response.status === 201) ? response : false;
    }

    async function createGymMemberPerson(parameters, token) {
        const response = await gymMemberPerson.create(parameters, token);

        return (response.status === 201) ? response : false;
    }

    async function createBilling(parameters, token) {
        const response = await billing.create(parameters, token);

        return (response.status === 201) ? response : false;
    }

    async function getType(token) {
        const response = await type.get(token);

        if (response.status !== 200) return false;

        setTypeList(response.data.data);
        localStorage.setItem('app-star-fitness-type', JSON.stringify(response.data.data));

        return true;
    }

    async function getGymMembers(token) {
        const response = await gymMemberPerson.get(token);

        console.log(response);

        setGymMembersList(response.data.data);
        localStorage.setItem('app-star-fitness-gym-members', JSON.stringify(response.data.data));

        return (response.status === 200) ? response : false;
    }

    async function deleteType(token, idType) {
        const response = await type.del(token, idType);

        if (response.status !== 200) return false;

        await getType(token);

        return response;
    }

    async function deleteGymMember(idGymMember, token) {
        const response = await gymMemberPerson.deleteGymMember(idGymMember, token);

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
        createType, getType, deleteType,
        createAddress, createGymMemberPerson,
        createBilling, getGymMembers,
        gymMembersList, deleteGymMember,
    };

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}