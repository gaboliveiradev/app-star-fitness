import axios from "axios";

export async function login(email, password) {
    try {
        const response = await axios.post('http://localhost:8000/api/login/employee', {
            email: email,
            password: password
        })

        return (response.status === 200) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}