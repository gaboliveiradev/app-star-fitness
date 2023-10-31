import React, { useState } from 'react';
import AddressContext from './AddressContext';

export const AddressProvider = ({ children }) => {

    // Address Data
    const [idAddress, setIdAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [street, setStreet] = useState("");
    const [district, setDistrict] = useState("");
    const [number, setNumber] = useState("");

    const [idCity, setIdCity] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const context = {
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