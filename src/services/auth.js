import api from './api';

export async function login(email, password) {
    try {
        const response = await api.post('/login/employee', {
            email: email,
            password: password
        })

        return (response.status === 200) && response;
    } catch (error) {
        return error;
    }
}