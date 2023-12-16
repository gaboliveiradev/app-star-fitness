import api from './api';

export const enrollGymMember = async (parameters) => {
    try {
        const response = await api.post(`/enroll/gym-member`, {
            // address
            street: parameters.street,
            district: parameters.district,
            number: parameters.number,
            zip_code: parameters.zip_code,
            city: parameters.city,
            state: parameters.state,
            // person
            name: parameters.name,
            email: parameters.email,
            document: parameters.document,
            phone: parameters.phone,
            birthday: parameters.birthday,
            gender: parameters.gender,
            // gym member
            height_cm: parameters.height_cm,
            weight_kg: parameters.weight_kg,
            observation: parameters.observation,
            // billing & payment
            id_type_enrollment: parameters.id_type_enrollment,
            payment_method: parameters.payment_method,
            amount: parameters.amount,
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        return false;
    }
}