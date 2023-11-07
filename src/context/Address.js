import React, { useState } from 'react';
import { createContext } from 'react';

import * as address from './../services/address';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
    // Address Data
    const [idAddress, setIdAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [street, setStreet] = useState("");
    const [district, setDistrict] = useState("");
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    async function update(parameters) {
        const response = address.update(parameters);

        return (response.status === 200) ? response : false;
    }

    const context = {
        idAddress, setIdAddress,
        zipCode, setZipCode,
        street, setStreet,
        district, setDistrict,
        number, setNumber,
        city, setCity,
        state, setState,
        // methods
        update
    };

    return (
        <AddressContext.Provider value={context}>
            {children}
        </AddressContext.Provider>
    );
}