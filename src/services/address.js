import api from './api';

export const create = async (parameters) => {
    try {
        const response = await api.post(`/address`, {
            street: parameters.street,
            district: parameters.district,
            number: parameters.number,
            zip_code: parameters.zipCode,
            city: parameters.city,
            state: parameters.state
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const update = async (parameters) => {
    try {
        const response = await api.put(`/address/${parameters.idAddress}`, {
            street: parameters.street,
            district: parameters.district,
            number: parameters.number,
            zip_code: parameters.zipCode,
            city: parameters.city,
            state: parameters.state
        })

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}