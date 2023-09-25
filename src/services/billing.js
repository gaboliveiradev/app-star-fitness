import axios from 'axios';
import { api } from './api';

export const create = async (parameters, token) => {
    try {
        const response = await axios.post(`${api}/billing`, {
            invoice_date: parameters.invoice_date,
            due_date: parameters.due_date,
            id_gym_member: parameters.id_gym_member,
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