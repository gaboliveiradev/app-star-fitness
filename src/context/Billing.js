import React, { createContext, useState } from 'react';
import { getCurrentDate, add30Days } from '../utils/format';

export const BillingContext = createContext();

export const BillingProvider = ({ children }) => {

    const [invoiceDate, setInvoiceDate] = useState(getCurrentDate());
    const [dueDate, setDueDate] = useState(add30Days(getCurrentDate()));

    const context = {
        invoiceDate, setInvoiceDate,
        dueDate, setDueDate,
    };

    return (
        <BillingContext.Provider value={context}>
            {children}
        </BillingContext.Provider>
    );
}