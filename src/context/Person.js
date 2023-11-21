import React, { createContext, useState } from 'react';

import * as person from './../services/person';

export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {

    // Person Data
    const [idPerson, setIdPerson] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");

    // Person Data Employee
    const [idPersonEmployee, setIdPersonEmployee] = useState("");
    const [nameEmployee, setNameEmployee] = useState("");
    const [emailEmployee, setEmailEmployee] = useState("");
    const [documentEmployee, setDocumentEmployee] = useState("");
    const [phoneEmployee, setPhoneEmployee] = useState("");
    const [birthdayEmployee, setBirthdayEmployee] = useState("");
    const [genderEmployee, setGenderEmployee] = useState("");

    const [password, setPassword] = useState("");

    async function updatePerson(parameters) {
        const response = await person.update(parameters);

        return (response.status === 200) ? response : false;
    }

    const context = {
        idPerson, setIdPerson,
        name, setName,
        email, setEmail,
        document, setDocument,
        phone, setPhone,
        birthday, setBirthday,
        gender, setGender,
        password, setPassword,
        // Person Data Employee
        idPersonEmployee, setIdPersonEmployee,
        nameEmployee, setNameEmployee,
        emailEmployee, setEmailEmployee,
        documentEmployee, setDocumentEmployee,
        phoneEmployee, setPhoneEmployee,
        birthdayEmployee, setBirthdayEmployee,
        genderEmployee, setGenderEmployee,
        //methods
        updatePerson
    };

    return (
        <PersonContext.Provider value={context}>
            {children}
        </PersonContext.Provider>
    );
}