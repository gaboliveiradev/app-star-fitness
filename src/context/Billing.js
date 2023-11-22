import React, { createContext, useState } from 'react';
import { getCurrentDate, add30Days } from '../utils/format';
import * as billing from './../services/billing';

export const BillingContext = createContext();

export const BillingProvider = ({ children }) => {

    const [invoiceDate, setInvoiceDate] = useState(getCurrentDate());
    const [dueDate, setDueDate] = useState(add30Days(getCurrentDate()));

    async function updateBilling(parameters) {
        const response = await billing.update(parameters);

        return (response.status === 200) ? response : false;
    }

    const context = {
        invoiceDate, setInvoiceDate,
        dueDate, setDueDate, updateBilling
    };

    return (
        <BillingContext.Provider value={context}>
            {children}
        </BillingContext.Provider>
    );
}