import React, { createContext, useState } from 'react';

export const WorkoutRoutineContext = createContext();

export const WorkoutRoutineProvider = ({ children }) => {

    const [isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal] = useState(false);
    const [selectedGymMemberWorkout, setSelectedGymMemberWorkout] = useState({});
    const [currentWeek, setCurrentWeek] = useState([]);

    const [workoutRoutine, setWorkoutRoutine] = useState([]);

    const [documentWorkoutRoutine, setDocumentWorkoutRoutine] = useState('');
    const [nameWorkoutRoutine, setNameWorkoutRoutine] = useState('');
    const [repsWorkoutRoutine, setRepsWorkoutRoutine] = useState('');
    const [setsWorkoutRoutine, setSetsWorkoutRoutine] = useState('');
    const [intervalWorkoutRoutine, setIntervalWorkoutRoutine] = useState('');
    const [observationWorkoutRoutine, setObservationWorkoutRoutine] = useState('');

    const context = {
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
    };

    return (
        <WorkoutRoutineContext.Provider value={context}>
            {children}
        </WorkoutRoutineContext.Provider>
    );
}