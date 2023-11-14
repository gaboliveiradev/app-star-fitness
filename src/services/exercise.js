import api from './api';

export const create = async (parameters) => {
    try {
        const response = await api.post(`/exercise`, {
            name: parameters.name,
            exercise_gif: parameters.exercise_gif,
            equipment_gym_photo: parameters.equipment_gym_photo,
            muscle_groups: parameters.muscle_groups
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}