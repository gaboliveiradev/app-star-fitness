import React, { useState } from 'react';
import MainContext from './MainContext';
import { getCurrentDate, add30Days } from '../utils/format';

export const MainProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingText, setIsLoadingText] = useState(false);

    // Enroll Data
    const [ idPlan, setIdPlan ] = useState("");
    const [ invoiceDate, setInvoiceDate ] = useState(getCurrentDate());
    const [ dueDate, setDueDate ] = useState(add30Days(getCurrentDate()));

    const context = {
        idPlan, setIdPlan,
        invoiceDate, setInvoiceDate, dueDate, setDueDate,
        isLoading, setIsLoading, isLoadingText, setIsLoadingText,
    };

    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    );
}