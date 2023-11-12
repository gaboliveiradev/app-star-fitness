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
            occupation: parameters.occupation,
            observation: parameters.observation,
            id_address: parameters.id_address

        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }

}