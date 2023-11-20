import React, { createContext, useState } from 'react';
import * as workout from './../services/workoutRoutine';

export const WorkoutRoutineContext = createContext();

export const WorkoutRoutineProvider = ({ children }) => {

    const [isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal] = useState(false);
    const [selectedGymMemberWorkout, setSelectedGymMemberWorkout] = useState({});
    const [currentWeek, setCurrentWeek] = useState([]);

    const [localIdExercise, setLocalIdExercise] = useState(1);
    const [workoutRoutine, setWorkoutRoutine] = useState([]);

    const [documentWorkoutRoutine, setDocumentWorkoutRoutine] = useState('');
    const [nameWorkoutRoutine, setNameWorkoutRoutine] = useState('');
    const [repsWorkoutRoutine, setRepsWorkoutRoutine] = useState('');
    const [setsWorkoutRoutine, setSetsWorkoutRoutine] = useState('');
    const [intervalWorkoutRoutine, setIntervalWorkoutRoutine] = useState('');
    const [observationWorkoutRoutine, setObservationWorkoutRoutine] = useState('');

    async function createWorkoutRoutine(parameters) {
        const response = await workout.create(parameters);

        return (response.status === 201) ? response : false;
    }

    async function createAssocWorkoutRoutineExercise(parameters) {
        const response = await workout.createAssocWorkoutRoutineExercise(parameters);

        return (response.status === 201) ? response : false;
    }

    const context = {
        localIdExercise, setLocalIdExercise,
        workoutRoutine, setWorkoutRoutine,
        isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal,
        selectedGymMemberWorkout, setSelectedGymMemberWorkout,
        documentWorkoutRoutine, setDocumentWorkoutRoutine,
        nameWorkoutRoutine, setNameWorkoutRoutine,
        repsWorkoutRoutine, setRepsWorkoutRoutine,
        setsWorkoutRoutine, setSetsWorkoutRoutine,
        intervalWorkoutRoutine, setIntervalWorkoutRoutine,
        observationWorkoutRoutine, setObservationWorkoutRoutine,
        currentWeek, setCurrentWeek,
        //methods
        createWorkoutRoutine,
        createAssocWorkoutRoutineExercise,
    };

    return (
        <WorkoutRoutineContext.Provider value={context}>
            {children}
        </WorkoutRoutineContext.Provider>
    );
}