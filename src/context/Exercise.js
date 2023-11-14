import React, { useState } from 'react';
import { createContext } from 'react';

import * as exercise from './../services/exercise';

export const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {

    // Exercise Data
    const [nameExercise, setNameExercise] = useState("");
    const [exerciseGifUrl, setExerciseGifUrl] = useState("");
    const [exerciseGif, setExerciseGif] = useState([]);
    const [equipamentImageUrl, setEquipamentImageUrl] = useState("");
    const [equipmentGymImage, setEquipmentGymImage] = useState([]);
    const [muscleGroup, setMuscleGroup] = useState("");

    const context = {
        nameExercise, setNameExercise,
        exerciseGifUrl, setExerciseGifUrl,
        exerciseGif, setExerciseGif,
        equipamentImageUrl, setEquipamentImageUrl,
        equipmentGymImage, setEquipmentGymImage,
        muscleGroup, setMuscleGroup,
        //methods
        createExercise,
    };

    async function createExercise(parameters) {
        const response = await exercise.create(parameters);

        return (response.status === 201) ? response : false;
    }

    return (
        <ExerciseContext.Provider value={context}>
            {children}
        </ExerciseContext.Provider>
    );
}