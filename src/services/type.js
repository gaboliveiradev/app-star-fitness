import api from './api';

export const create = async (parameters) => {
    try {
        const response = await api.post(`/type`, {
            name: parameters.name,
            number_of_days: parameters.number_of_days,
            price: parameters.price
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const update = async (parameters) => {
    try {
        const response = await api.put(`/type/${parameters.idType}`, {
            name: parameters.name,
            number_of_days: parameters.number_of_days,
            price: parameters.price
        })

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const get = async () => {
    try {
        const response = await api.get(`/type`)

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const del = async (idType) => {
    try {
        const response = await api.delete(`/type/${idType}`)

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}
