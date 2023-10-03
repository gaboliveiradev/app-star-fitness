import React, { useState } from 'react';
import MainContext from './MainContext';
import { getCurrentDate, add30Days } from '../utils/format';

export const MainProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingText, setIsLoadingText] = useState(false);

    // Person Data
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ document, setDocument ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ birthday, setBirthday ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ height, setHeight ] = useState("");
    const [ weight, setWeight ] = useState("");
    const [ observation, setObservation ] = useState("");


    // Address Data
    const [ zipCode, setZipCode ] = useState("");
    const [ street, setStreet ] = useState("");
    const [ district, setDistrict ] = useState("");
    const [ number, setNumber ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");

    // Enroll Data
    const [ idPlan, setIdPlan ] = useState("");
    const [ invoiceDate, setInvoiceDate ] = useState(getCurrentDate());
    const [ dueDate, setDueDate ] = useState(add30Days(getCurrentDate()));

    const context = {
        name, setName, email, setEmail,
        document, setDocument, phone, setPhone,
        birthday, setBirthday, gender, setGender,
        height, setHeight, weight, setWeight,
        observation, setObservation, zipCode, setZipCode,
        street, setStreet, district, setDistrict,
        number, setNumber, city, setCity,
        state, setState, idPlan, setIdPlan,
        invoiceDate, setInvoiceDate, dueDate, setDueDate,
        isLoading, setIsLoading, isLoadingText, setIsLoadingText,
    };

    return (
        <MainContext.Provider value={context}>
            {children}
        </MainContext.Provider>
    );
}