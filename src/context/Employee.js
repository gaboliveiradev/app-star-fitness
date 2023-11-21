import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {

    const [cref, setCref] = useState("");
    const [observation, setObservation] = useState("");

    const context = {
        cref, setCref,
        observation, setObservation,
    };

    return (
        <EmployeeContext.Provider value={context}>
            {children}
        </EmployeeContext.Provider>
    );
}