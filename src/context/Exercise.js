import React, { useState } from 'react';
import { createContext } from 'react';

import * as exercise from './../services/exercise';

export const ExerciseContext = createContext();

export const ExerciseProvider = ({ children }) => {
    // Exercise Data
    const [nameExercise, setNameExercise] = useState("");
    const [exerciseGifUrl, setExerciseGifUrl] = useState("");
    const [exerciseGif, setExerciseGif] = useState(null);
    const [equipamentImageUrl, setEquipamentImageUrl] = useState("");
    const [equipamentImage, setEquipamentImage] = useState(null);
    const [muscleGroup, setMuscleGroup] = useState("");

    const [idExercise, setIdExercise] = useState('');

    async function createExercise(parameters) {
        const response = await exercise.create(parameters);

        return (response.status === 201) ? response : false;
    }

    const context = {
        nameExercise, setNameExercise,
        exerciseGifUrl, setExerciseGifUrl,
        exerciseGif, setExerciseGif,
        equipamentImageUrl, setEquipamentImageUrl,
        equipamentImage, setEquipamentImage,
        muscleGroup, setMuscleGroup,
        //others
        idExercise, setIdExercise,
        //methods
        createExercise,
    };

    return (
        <ExerciseContext.Provider value={context}>
            {children}
        </ExerciseContext.Provider>
    );
}