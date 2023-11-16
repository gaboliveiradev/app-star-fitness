import React, { createContext, useState } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingText, setIsLoadingText] = useState(false);

    /* =====@ MODAL DE FULL DATA GYM MEMBER @===== */
    const [isOpenFullDataGymMemberModal, setIsOpenFullDataGymMemberModal] = useState(false);
    const [gymMemberModal, setGymMemberModal] = useState(null);

    const [isOpenAddExerciseModal, setIsOpenAddExerciseModal] = useState(false);
    const [isOpenImageExerciseModal, setIsOpenImageExerciseModal] = useState(false);

    const context = {
        isLoading, setIsLoading, isLoadingText, setIsLoadingText,
        isOpenFullDataGymMemberModal, setIsOpenFullDataGymMemberModal,
        gymMemberModal, setGymMemberModal,
        isOpenAddExerciseModal, setIsOpenAddExerciseModal,
        isOpenImageExerciseModal, setIsOpenImageExerciseModal
    };

    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    );
}