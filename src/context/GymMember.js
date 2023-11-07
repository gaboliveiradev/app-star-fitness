import React, { useState, createContext } from 'react';
import * as gymMember from './../services/gymMember';

export const GymMemberContext = createContext();

export const GymMemberProvider = ({ children }) => {

    const [idGymMember, setIdGymMember] = useState("");
    const [idPlan, setIdPlan] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [observation, setObservation] = useState("");

    const [isUpdate, setIsUpdate] = useState(false);

    async function updateGymMember(parameters) {
        const response = await gymMember.update(parameters);

        return (response.status === 200) ? response : false;
    }

    const context = {
        idGymMember, setIdGymMember,
        height, setHeight,
        weight, setWeight,
        observation, setObservation,
        idPlan, setIdPlan,
        isUpdate, setIsUpdate,
        //methods
        updateGymMember
    };

    return (
        <GymMemberContext.Provider value={context}>
            {children}
        </GymMemberContext.Provider>
    );
}