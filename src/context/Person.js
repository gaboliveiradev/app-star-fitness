import React, { createContext, useState } from 'react';

export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {

    // Person Data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [document, setDocument] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");

    const [password, setPassword] = useState("");

    const context = {
        name, setName,
        email, setEmail,
        document, setDocument,
        phone, setPhone,
        birthday, setBirthday,
        gender, setGender,
        password, setPassword
    };

    return (
        <PersonContext.Provider value={context}>
            {children}
        </PersonContext.Provider>
    );
}