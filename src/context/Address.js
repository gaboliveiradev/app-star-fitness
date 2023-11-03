import React, { useState } from 'react';
import { createContext } from 'react';

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

    const context = {
        idAddress, setIdAddress,
        zipCode, setZipCode,
        street, setStreet,
        district, setDistrict,
        number, setNumber,
        city, setCity,
        state, setState,
    };

    return (
        <AddressContext.Provider value={context}>
            {children}
        </AddressContext.Provider>
    );
}