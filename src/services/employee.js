import api from './api';

export const create = async (parameters) => {
    try {
        const response = await api.post(`/employee`, {
            name: parameters.name,
            email: parameters.email,
            password: parameters.password,
            document: parameters.document,
            phone: parameters.phone,
            birthday: parameters.birthday,
            gender: parameters.gender,
            cref: parameters.cref,
            observation: (parameters.observation === "") ? null : parameters.observation,
            id_address: parameters.id_address
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const update = async (parameters) => {
    try {
        const response = await api.put(`/employee/${parameters.idEmployee}`, {
            cref: parameters.cref,
            observation: (parameters.observation === "") ? null : parameters.observation,
        })

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const get = async () => {
    try {
        const response = await api.get(`/employee`)

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const del = async (idEmployee) => {
    try {
        const response = await api.delete(`/employee/${idEmployee}`)

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}