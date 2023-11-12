import React, { createContext, useState } from 'react';
import * as payment from './../services/payment';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    // Payment Data
    const [idBilling, setIdBilling] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [amount, setAmount] = useState("");

    async function createPayment(parameters) {
        const response = await payment.create(parameters);

        return (response.status === 201) ? response : false;
    }

    const context = {
        idBilling, setIdBilling,
        paymentMethod, setPaymentMethod,
        amount, setAmount,
        // methods
        createPayment,
    }

    return (
        <PaymentContext.Provider value={context}>
            {children}
        </PaymentContext.Provider>
    );
}
