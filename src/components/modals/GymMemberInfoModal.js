import React, { useContext, useState } from 'react';
import { MainContext } from '../../context/Main';
import PersonDataGymMember from './modal_pages/PersonDataGymMember';
import AddressDataGymMember from './modal_pages/AddressDataGymMember';

import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline"
import EnrollDataGymMember from './modal_pages/EnrollDataGymMember';

export default function GymMemberInfoModal() {
    const { isOpenFullDataGymMemberModal, setIsOpenFullDataGymMemberModal, gymMemberModal } = useContext(MainContext);

    const [index, setIndex] = useState(0);

    const handleClickCloseModal = async (e) => {
        e.preventDefault();

        setIsOpenFullDataGymMemberModal(false);
    }

    return (
        <>
            <div class="z-999 modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
                <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                    <div class="grid grid-flow-col justify-stretch bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg cursor-pointer">
                        <div onClick={() => setIndex(0)} className='flex justify-center items-center p-6 border-r-2 border-slate-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                            </svg>
                        </div>
                        <div onClick={() => setIndex(1)} className='flex justify-center items-center p-6 border-r-2 border-slate-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                                <path d="M9 4v13"></path>
                                <path d="M15 7v5.5"></path>
                                <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>
                                <path d="M19 18v.01"></path>
                            </svg>
                        </div>
                        <div onClick={() => setIndex(2)} className='flex justify-center items-center p-6 border-r-2 border-slate-600'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-barbell" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M2 12h1"></path>
                                <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"></path>
                                <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                                <path d="M9 12h6"></path>
                                <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                                <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"></path>
                                <path d="M22 12h-1"></path>
                            </svg>
                        </div>
                        <div className='flex justify-center items-center p-6'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-receipt-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2"></path>
                                <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col px-6 py-5 bg-gray-50 h-[650px] overflow-auto scrollbar-hide">
                        {
                            (index === 0) ? (
                                <PersonDataGymMember />
                            ) : (index === 1) ? (
                                <AddressDataGymMember />
                            ) : (index === 2) ?(
                                <EnrollDataGymMember />
                            ) : (
                                ''
                            )
                        }
                    </div>
                    <div class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                        <button onClick={(e) => handleClickCloseModal(e)} class="px-4 py-2 text-white font-semibold bg-red-500 rounded">
                            Fechar
                        </button>
                        <div>
                            <button disabled={index === 0} onClick={() => setIndex(index - 1)} class="mr-[5px] px-4 py-2 text-white font-semibold bg-blue-500 rounded">
                                <ArrowLeftIcon className='w-5' />
                            </button>
                            <button onClick={() => setIndex(index + 1)} class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
                                <ArrowRightIcon className='w-5' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}