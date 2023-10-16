import React, { useContext } from 'react';
import MainContext from '../../../context/MainContext';
import { formatBirthday, formatCPF, formatCreatedAt, formatPhone } from './../../../utils/format';

export default function AddressDataModalPageGymMember() {
    const { gymMemberModal } = useContext(MainContext);

    return (
        <div className='flex justify-between flex-grow bg-gray-200 rounded-md shadow-md p-[20px] overflow-auto'>
            a
        </div>
    )
}