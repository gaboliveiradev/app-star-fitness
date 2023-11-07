import React, { createContext, useState } from 'react';
import * as type from './../services/type';
import { Type } from 'lucide-react';

export const TypeContext = createContext();

export const TypeProvider = ({ children }) => {
    // Type Data
    const [idType, setIdType] = useState("");
    const [nameType, setNameType] = useState("");
    const [numberOfDays, setNumberOfDays] = useState("");
    const [price, setPrice] = useState("");

    const [isUpdateType, setIsUpdateType] = useState(false);

    const context = {
        idType, setIdType,
        nameType, setNameType,
        numberOfDays, setNumberOfDays,
        price, setPrice,
        isUpdateType, setIsUpdateType,
    };

    return (
        <TypeContext.Provider value={context}>
            {children}
        </TypeContext.Provider>
    );
}