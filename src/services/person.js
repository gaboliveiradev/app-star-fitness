import api from './api';

export const update = async (parameters) => {
    try {
        const response = await api.put(`/person/${parameters.idPerson}`, {
            name: parameters.name,
            email: parameters.email,
            document: parameters.document,
            phone: parameters.phone,
            birthday: parameters.birthday,
            gender: parameters.gender
        })

        console.log(response.status);

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}