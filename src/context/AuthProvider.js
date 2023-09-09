import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import * as auth from './../services/auth';
import * as type from './../services/type';
import AuthContext from './AuthContext';

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const [typeList, setTypeList] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('app-star-fitness-token');
        const user = localStorage.getItem('app-mercado-unido-user');
        const isAuthenticated = localStorage.getItem('app-star-fitness-logged');

        const typeList = localStorage.getItem('app-star-fitness-type');

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

            await getType(response.token);

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async function createType(token, name, number_of_days, price) {
        const response = await type.create(token, name, number_of_days, price);

        return (response.status === 201) ? response : false;
    }

    async function getType(token) {
        const response = await type.get(token);

        if (response.status !== 200) return false;

        setTypeList(response.data.data);
        localStorage.setItem('app-star-fitness-type', JSON.stringify(response.data.data));

        return true;
    }

    async function deleteType(token, idType) {
        const response = await type.del(token, idType);

        if (response.status !== 200) return false;

        await getType(token);

        return response;
    }

    const context = {
        login,
        token, setToken,
        user, setUser,
        isAuthenticated, setIsAuthenticated,
        typeList, setTypeList,
        createType, getType, deleteType,
    };

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}