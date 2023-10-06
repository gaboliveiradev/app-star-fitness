import React, { useContext } from 'react';
import MainContext from './../context/MainContext';

export default function ExpandedeGymMembers() {

    const {selectedRow} = useContext(MainContext);

    return (
        <p>Apenas um teste</p>
    )
}