import api from './api';

export const create = async (parameters) => {
    try {
        const response = await api.post(`/billing`, {
            invoice_date: parameters.invoice_date,
            payment_date: (parameters.payment_date == null || parameters.payment_date == '') ? undefined : parameters.payment_date,
            due_date: parameters.due_date,
            id_type_enrollment: parameters.id_type_enrollment,
            id_gym_member: parameters.id_gym_member,
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const update = async (parameters) => {
    try {
        const response = await api.put(`/billing/${parameters.idBilling}`, {
            payment_date: parameters.payment_date,
        })

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}