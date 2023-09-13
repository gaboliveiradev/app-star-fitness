import axios from 'axios';
import { api } from './api';

export const create = async (token, street, district, number, zipCode) => {
    try {
        const response = await axios.post(`${api}/city`, {
            street: street,
            district: district,
            number: number,
            zipCode: zipCode,
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