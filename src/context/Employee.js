import React, { createContext, useState } from 'react';
import * as accessGroup from './../services/accessGroup';
import * as employee from './../services/employee';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {

    const [cref, setCref] = useState("");
    const [idAccessGroup, setIdAccessGroup] = useState('');
    const [observation, setObservation] = useState("");

    async function createAccessGroupEmployeeAssoc(parameters) {
        const response = await accessGroup.createAccessGroupEmployeeAssoc(parameters);

        return (response.status === 201) ? response : false;
    }

    async function createEmployee(parameters) {
        const response = await employee.create(parameters);

        return (response.status === 201) ? response : false;
    }

    const context = {
        cref, setCref,
        idAccessGroup, setIdAccessGroup,
        observation, setObservation,
        // methods
        createAccessGroupEmployeeAssoc,
        createEmployee
    };

    return (
        <EmployeeContext.Provider value={context}>
            {children}
        </EmployeeContext.Provider>
    );
}