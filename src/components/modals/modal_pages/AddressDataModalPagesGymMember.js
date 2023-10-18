import React, { useContext } from 'react';
import MainContext from '../../../context/MainContext';
import { formatBirthday, formatCPF, formatCreatedAt, formatPhone } from './../../../utils/format';

export default function AddressDataModalPageGymMember() {
    const { gymMemberModal } = useContext(MainContext);

    return (
        <div className='flex justify-between flex-grow bg-gray-200 rounded-md shadow-md p-[20px] overflow-auto'>
            <div className='flex-grow'>
                {/* ======@ STREET AND NUMBER @====== */}
                <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-barrier-block" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path><path d="M7 16v4"></path><path d="M7.5 16l9 -9"></path><path d="M13.5 16l6.5 -6.5"></path><path d="M4 13.5l6.5 -6.5"></path><path d="M17 16v4"></path><path d="M5 20h4"></path><path d="M15 20h4"></path><path d="M17 7v-2"></path><path d="M7 7v-2"></path>
                    </svg>
                    <span className='pl-[5px]'>{`${gymMemberModal.person.address.street}, ${gymMemberModal.person.address.number}`}</span>
                </div>
                {/* ======@ NUMBER @====== */}
                <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-123" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 10l2 -2v8"></path><path d="M9 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"></path><path d="M17 8h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1 -1.5 1.5h-2.5"></path>
                    </svg>
                    <span className='pl-[5px]'>{`${gymMemberModal.person.address.number}`}</span>
                </div>
                {/* ======@ BAIRRO @====== */}
                <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-community" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path><path d="M13 7l0 .01"></path><path d="M17 7l0 .01"></path><path d="M17 11l0 .01"></path><path d="M17 15l0 .01"></path>
                    </svg>
                    <span className='pl-[5px]'>{`${gymMemberModal.person.address.district}`}</span>
                </div>
            </div>
        </div>
    )
}