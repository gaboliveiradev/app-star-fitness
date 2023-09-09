import React, { useEffect, useState } from 'react';
import MainContext from './MainContext';

export const MainProvider = ({ children }) => {
    const [isLoader, setIsLoader] = useState(false);

    const context = {
        isLoader, setIsLoader,
    };

    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    );
}