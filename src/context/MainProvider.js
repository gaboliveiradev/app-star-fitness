import React, { useState } from 'react';
import MainContext from './MainContext';

export const MainProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingText, setIsLoadingText] = useState(false);

    /* =====@ MODAL DE FULL DATA GYM MEMBER @===== */
    const [isOpenFullDataGymMemberModal, setIsOpenFullDataGymMemberModal] = useState(false);
    const [gymMemberModal, setGymMemberModal] = useState(null);

    const context = {
        isLoading, setIsLoading, isLoadingText, setIsLoadingText,
        isOpenFullDataGymMemberModal, setIsOpenFullDataGymMemberModal,
        gymMemberModal, setGymMemberModal,
    };

    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    );
}