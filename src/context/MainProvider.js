import React, { useState } from 'react';
import MainContext from './MainContext';

export const MainProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingText, setIsLoadingText] = useState(false);

    const [selectedRow, setSelectedRow] = useState({});

    const context = {
        isLoading, setIsLoading, isLoadingText, setIsLoadingText,
        selectedRow, setSelectedRow,
    };

    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    );
}