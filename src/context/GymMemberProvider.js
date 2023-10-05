import React, { useState } from 'react';
import GymMemberContext from './GymMemberContext';

export const GymMemberProvider = ({ children }) => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [observation, setObservation] = useState("");
    const [idPlan, setIdPlan] = useState("");

    const context = {
        height, setHeight,
        weight, setWeight,
        observation, setObservation,
        idPlan, setIdPlan,
    };

    return (
        <GymMemberContext.Provider value={context}>
            {children}
        </GymMemberContext.Provider>
    );
}