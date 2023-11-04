import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {

    const [cref, setCref] = useState("");
    const [occupation, setOccupation] = useState("");
    const [observation, setObservation] = useState("");

    const [isUpdate, setIsUpdate] = useState(false);

    const context = {
        cref, setCref, occupation, setOccupation,
        observation, setObservation,
        isUpdate, setIsUpdate,

    };

    return (
        <EmployeeContext.Provider value={context}>
            {children}
        </EmployeeContext.Provider>
    );
}