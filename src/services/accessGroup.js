import api from './api';

export const createAccessGroupEmployeeAssoc = async (parameters) => {
    try {
        const response = await api.post(`/access-group/employee`, {
            id_access_group: parameters.id_access_group,
            id_employee: parameters.id_employee,
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const updateAccessGroupEmployeeAssoc = async (parameters) => {
    try {
        const response = await api.post(`/access-group/employee/update`, {
            id_access_group: parameters.id_access_group,
            id_employee: parameters.id_employee,
        })

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}


export const get = async () => {
    try {
        const response = await api.get(`/access-group`)

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}