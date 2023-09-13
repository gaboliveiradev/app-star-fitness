import axios from 'axios';
import { api } from './api';

export const create = async (token, name, state) => {
    try {
        const response = await axios.post(`${api}/city`, {
            name: name,
            state: state,
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