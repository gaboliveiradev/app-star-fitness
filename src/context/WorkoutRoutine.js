import React, { createContext, useState } from 'react';

export const WorkoutRoutineContext = createContext();

export const WorkoutRoutineProvider = ({ children }) => {

    const [isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal] = useState(false);
    const [selectedConfirmGymMember, setSelectedConfirmGymMember] = useState({});

    const context = {
        isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal,
        selectedConfirmGymMember, setSelectedConfirmGymMember,
    };

    return (
        <WorkoutRoutineContext.Provider value={context}>
            {children}
        </WorkoutRoutineContext.Provider>
    );
}