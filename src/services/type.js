import axios from 'axios';
import { api } from './api';

export const create = async (token, name, number_of_days, price) => {
    try {
        const response = await axios.post(`${api}/type`, {
            name: name,
            number_of_days: number_of_days,
            price: price
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

export const get = async (token) => {
    try {
        const response = await axios.get(`${api}/type`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const del = async (token, idType) => {
    try {
        const response = await axios.delete(`${api}/type/${idType}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}
