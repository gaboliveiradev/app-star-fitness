import api from './api';

export const create = async (parameters) => {
    try {
        const response = await api.post(`/payment`, {
            id_billing: parameters.idBilling,
            payment_method: parameters.paymentMethod,
            amount: parameters.amount,
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}