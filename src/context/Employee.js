import React, { createContext, useState } from 'react';
import * as accessGroup from './../services/accessGroup';
import * as employee from './../services/employee';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {

    const [isUpdate, setIsUpdate] = useState(false);

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

    async function deleteEmployee(idEmployee) {
        const response = await employee.del(idEmployee);

        return (response.status === 200) ? response : false;
    }

    const context = {
        cref, setCref,
        idAccessGroup, setIdAccessGroup,
        observation, setObservation,
        isUpdate, setIsUpdate,
        // methods
        createAccessGroupEmployeeAssoc,
        createEmployee, deleteEmployee,
    };

    return (
        <EmployeeContext.Provider value={context}>
            {children}
        </EmployeeContext.Provider>
    );
}