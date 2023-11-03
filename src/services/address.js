import axios from 'axios';
import { api } from './api';

export const create = async (parameters, token) => {
    try {
        const response = await axios.post(`${api}/address`, {
            street: parameters.street,
            district: parameters.district,
            number: parameters.number,
            zip_code: parameters.zipCode,
            city: parameters.city,
            state: parameters.state
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