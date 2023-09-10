import React, { useState } from 'react';
import MainContext from './MainContext';

export const MainProvider = ({ children }) => {

    // Person Data
    const [ name, setName ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ document, setDocument ] = useState(null);
    const [ phone, setPhone ] = useState(null);
    const [ birthday, setBirthday ] = useState(null);
    const [ gender, setGender ] = useState(null);
    const [ height, setHeight ] = useState(null);
    const [ weight, setWeight ] = useState(null);
    const [ observation, setObservation ] = useState(null);

    // Address Data
    const [ zipCode, setZipCode ] = useState(null);
    const [ street, setStreet ] = useState(null);
    const [ district, setDistrict ] = useState(null);
    const [ number, setNumber ] = useState(null);
    const [ city, setCity ] = useState(null);
    const [ state, setState ] = useState(null);

    // Enroll Data
    const [ idPlan, setIdPlan ] = useState(null);
    const [ invoiceDate, setInvoiceDate ] = useState(null);
    const [ dueDate, setDueDate ] = useState(null);

    const context = {
        name, setName, email, setEmail,
        document, setDocument, phone, setPhone,
        birthday, setBirthday, gender, setGender,
        height, setHeight, weight, setWeight,
        observation, setObservation, zipCode, setZipCode,
        street, setStreet, district, setDistrict,
        number, setNumber, city, setCity,
        state, setState, idPlan, setIdPlan,
        invoiceDate, setInvoiceDate, dueDate, setDueDate
    };

    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    );
}