import React, { useState, createContext } from 'react';

export const GymMemberContext = createContext();

export const GymMemberProvider = ({ children }) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [observation, setObservation] = useState("");
    const [idPlan, setIdPlan] = useState("");

    const [isUpdate, setIsUpdate] = useState(false);

    const context = {
        height, setHeight,
        weight, setWeight,
        observation, setObservation,
        idPlan, setIdPlan,
        isUpdate, setIsUpdate,
    };

    return (
        <GymMemberContext.Provider value={context}>
            {children}
        </GymMemberContext.Provider>
    );
}