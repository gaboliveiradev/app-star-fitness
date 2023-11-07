import React, { createContext, useState } from 'react';
import * as type from './../services/type';

export const TypeContext = createContext();

export const TypeProvider = ({ children }) => {
    // Type Data
    const [idType, setIdType] = useState("");
    const [nameType, setNameType] = useState("");
    const [numberOfDays, setNumberOfDays] = useState("");
    const [price, setPrice] = useState("");

    const [isUpdateType, setIsUpdateType] = useState(false);

    async function updateType(parameters) {
        const response = await type.update(parameters);

        return (response.status === 200) ? response : false;
    }

    const context = {
        idType, setIdType,
        nameType, setNameType,
        numberOfDays, setNumberOfDays,
        price, setPrice,
        isUpdateType, setIsUpdateType,
        //methods
        updateType
    };

    return (
        <TypeContext.Provider value={context}>
            {children}
        </TypeContext.Provider>
    );
}