import axios from 'axios';
import { api } from './api';

export const create = async (parameters, token) => {
    try {
        const response = await axios.post(`${api}/city`, {
            name: parameters.name,
            state: parameters.state,
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

export const update = async (parameters, token, idCity) => {
    
}