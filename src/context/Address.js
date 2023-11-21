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
    // Address Data Employee
    const [idAddressEmployee, setIdAddressEmployee] = useState("");
    const [zipCodeEmployee, setZipCodeEmployee] = useState("");
    const [streetEmployee, setStreetEmployee] = useState("");
    const [districtEmployee, setDistrictEmployee] = useState("");
    const [numberEmployee, setNumberEmployee] = useState("");
    const [cityEmployee, setCityEmployee] = useState("");
    const [stateEmployee, setStateEmployee] = useState("");

    async function updateAddress(parameters) {
        const response = await address.update(parameters);

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
        // Address Data Employee
        idAddressEmployee, setIdAddressEmployee,
        zipCodeEmployee, setZipCodeEmployee,
        streetEmployee, setStreetEmployee,
        districtEmployee, setDistrictEmployee,
        numberEmployee, setNumberEmployee,
        cityEmployee, setCityEmployee,
        stateEmployee, setStateEmployee,
        // methods
        updateAddress
    };

    return (
        <AddressContext.Provider value={context}>
            {children}
        </AddressContext.Provider>
    );
}