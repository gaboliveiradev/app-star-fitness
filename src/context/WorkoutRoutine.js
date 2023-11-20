import React, { createContext, useState } from 'react';

export const WorkoutRoutineContext = createContext();

export const WorkoutRoutineProvider = ({ children }) => {

    const [isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal] = useState(false);
    const [selectedGymMemberWorkout, setSelectedGymMemberWorkout] = useState({});

    const [workoutRoutine, setWorkoutRoutine] = useState([]);

    const [documentWorkoutRoutine, setDocumentWorkoutRoutine] = useState('');
    const [nameWorkoutRoutine, setNameWorkoutRoutine] = useState('');

    const context = {
        workoutRoutine, setWorkoutRoutine,
        isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal,
        selectedGymMemberWorkout, setSelectedGymMemberWorkout,
        documentWorkoutRoutine, setDocumentWorkoutRoutine,
        nameWorkoutRoutine, setNameWorkoutRoutine,
    };

    return (
        <WorkoutRoutineContext.Provider value={context}>
            {children}
        </WorkoutRoutineContext.Provider>
    );
}