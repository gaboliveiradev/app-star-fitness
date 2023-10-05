import React, { useState } from 'react';
import MainContext from './MainContext';

export const MainProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingText, setIsLoadingText] = useState(false);


    const context = {
        isLoading, setIsLoading, isLoadingText, setIsLoadingText,
    };

    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    );
}