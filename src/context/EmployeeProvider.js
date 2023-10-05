import React, { useState } from 'react';
import EmployeeContext from './EmployeeContext';

export const EmployeeProvider = ({ children }) => {

    // Employee Data
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ document, setDocument ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ birthday, setBirthday ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ cref, setCref ] = useState("");
    const [ occupation, setOccupation ] = useState("");
    const [ observation, setObservation ] = useState("");


    // Address Data
    const [ zipCode, setZipCode ] = useState("");
    const [ street, setStreet ] = useState("");
    const [ district, setDistrict ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");

    const context = {
        name, setName, email, setEmail,
        document, setDocument, phone, setPhone,
        birthday, setBirthday, gender, setGender,
        cref, setCref, occupation, setOccupation,
        observation, setObservation, zipCode, setZipCode,
        street, setStreet, district, setDistrict,
        number, setNumber, city, setCity,
        state, setState
    };

    return (
        <EmployeeContext.Provider value={context}>
            {children}
        </EmployeeContext.Provider>
    );
}