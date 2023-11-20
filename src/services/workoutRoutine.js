import api from './api';

export const create = async (parameters) => {
    try {
        const response = await api.post(`/workout-routine`, {
            name: parameters.name,
            id_gym_member: parameters.id_gym_member
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export const createAssocWorkoutRoutineExercise = async (parameters) => {
    try {
        const response = await api.post(`/workout-routine/exercise/assoc`, {
            id_workout_routine: parameters.id_workout_routine,
            array_exercises: parameters.array_exercises
        })

        return (response.status === 201) ? response : false;
    } catch (error) {
        console.log(error);
        return false;
    }
}