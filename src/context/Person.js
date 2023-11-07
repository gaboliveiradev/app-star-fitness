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

    const [password, setPassword] = useState("");

    async function update(parameters) {
        const response = person.update(parameters);

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
        //methods
        update
    };

    return (
        <PersonContext.Provider value={context}>
            {children}
        </PersonContext.Provider>
    );
}