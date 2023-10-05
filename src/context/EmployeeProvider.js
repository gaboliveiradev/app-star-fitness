import React, { useState } from 'react';
import EmployeeContext from './EmployeeContext';

export const EmployeeProvider = ({ children }) => {

    const [cref, setCref] = useState("");
    const [occupation, setOccupation] = useState("");
    const [observation, setObservation] = useState("");

    const context = {
        cref, setCref, occupation, setOccupation,
        observation, setObservation,
    };

    return (
        <EmployeeContext.Provider value={context}>
            {children}
        </EmployeeContext.Provider>
    );
}