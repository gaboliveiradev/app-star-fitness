import React, { createContext, useState } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    // Payment Data
    const [idBilling, setIdBilling] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [amount, setAmount] = useState("");

    const context = {
        idBilling, setIdBilling,
        paymentMethod, setPaymentMethod,
        amount, setAmount,
    }

    return (
        <PaymentContext.Provider value={context}>
            {children}
        </PaymentContext.Provider>
    );
}
