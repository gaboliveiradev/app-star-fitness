import axios from 'axios';
import { api } from './api';

export const create = async (parameters, token) => {
    try {
        const response = await axios.post(`${api}/gym-member`, {
            name: parameters.name,
            email: parameters.email,
            password: parameters.password,
            document: parameters.document,
            phone: parameters.phone,
            birthday: parameters.birthday,
            gender: parameters.gender,
            height_cm: parameters.height_cm,
            weight_kg: parameters.weight_kg,
            observation: parameters.observation,
            id_address: parameters.id_address,
            id_type_enrollment: parameters.id_type_enrollment
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const deleteGymMember = async (idGymMember, token) => {
    try {
        const response = await axios.delete(`${api}/gym-member/${idGymMember}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const get = async (token) => {
    try {
        const response = await axios.get(`${api}/gym-member`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}