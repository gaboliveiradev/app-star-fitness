import React, { createContext, useState } from 'react';
import * as payment from './../services/payment';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    // Payment Data
    const [idBilling, setIdBilling] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [amount, setAmount] = useState("");

    // Others
    const [receivedAmount, setReceivedAmount] = useState('');
    const [change, setChange] = useState('');

    async function createPayment(parameters) {
        const response = await payment.create(parameters);

        return (response.status === 201) ? response : false;
    }

    const context = {
        idBilling, setIdBilling,
        paymentMethod, setPaymentMethod,
        amount, setAmount,
        //others
        receivedAmount, setReceivedAmount,
        change, setChange,
        // methods
        createPayment,
    }

    return (
        <PaymentContext.Provider value={context}>
            {children}
        </PaymentContext.Provider>
    );
}
