import React, { createContext, useState } from 'react';
import * as accessGroup from './../services/accessGroup';
import * as employee from './../services/employee';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {

    const [isUpdate, setIsUpdate] = useState(false);

    const [idEmployee, setIdEmployee] = useState('');
    const [cref, setCref] = useState("");
    const [idAccessGroup, setIdAccessGroup] = useState('');
    const [observation, setObservation] = useState("");

    async function createAccessGroupEmployeeAssoc(parameters) {
        const response = await accessGroup.createAccessGroupEmployeeAssoc(parameters);

        return (response.status === 201) ? response : false;
    }

    async function updateAccessGroupEmployeeAssoc(parameters) {
        const response = await accessGroup.updateAccessGroupEmployeeAssoc(parameters);

        return (response.status === 200) ? response : false;
    }

    async function createEmployee(parameters) {
        const response = await employee.create(parameters);

        return (response.status === 201) ? response : false;
    }

    async function updateEmployee(parameters) {
        const response = await employee.update(parameters);

        return (response.status === 200) ? response : false;
    }

    async function deleteEmployee(idEmployee) {
        const response = await employee.del(idEmployee);

        return (response.status === 200) ? response : false;
    }

    const context = {
        idEmployee, setIdEmployee,
        cref, setCref,
        idAccessGroup, setIdAccessGroup,
        observation, setObservation,
        isUpdate, setIsUpdate,
        // methods
        createAccessGroupEmployeeAssoc,
        createEmployee, deleteEmployee,
        updateEmployee, updateAccessGroupEmployeeAssoc,
    };

    return (
        <EmployeeContext.Provider value={context}>
            {children}
        </EmployeeContext.Provider>
    );
}