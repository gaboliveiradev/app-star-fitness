import React, { useContext } from 'react';
import MainContext from '../../context/MainContext';
import { formatCPF, formatCreatedAt, formatPhone } from './../../utils/format';

export default function FullDataGymMemberModal() {
    const { isOpenFullDataGymMemberModal, setIsOpenFullDataGymMemberModal, gymMemberModal } = useContext(MainContext);

    console.log(gymMemberModal);

    const handleClickCloseModal = async (e) => {
        e.preventDefault();

        setIsOpenFullDataGymMemberModal(false);
    }

    return (
        <div class="z-999 modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
            <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                <div class="grid grid-flow-col justify-stretch bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg cursor-pointer">
                    <div className='flex justify-center items-center p-6 border-r-2 border-slate-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                        </svg>
                    </div>
                    <div className='flex justify-center items-center p-6 border-r-2 border-slate-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                            <path d="M9 4v13"></path>
                            <path d="M15 7v5.5"></path>
                            <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z"></path>
                            <path d="M19 18v.01"></path>
                        </svg>
                    </div>
                    <div className='flex justify-center items-center p-6 border-r-2 border-slate-600'>
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
                <div class="flex flex-col px-6 py-5 bg-gray-50">
                    <div className="h-[500px] mt-[-6px] pb-8 flex flex-col">
                        {/* =====@ DADOS PESSOAIS @===== */}
                        <div className='flex flex-col h-[500px]'>
                            <div className='flex justify-center p-[10px]'>
                                <div>
                                    <img src={gymMemberModal.person.photo_url} className="rounded-full w-40 shadow-md" />
                                    <p className='text-center pt-[10px] font-bold text-[24px]'>{gymMemberModal.person.name}</p>
                                </div>
                            </div>
                            <div className='flex justify-between flex-grow bg-gray-200 rounded-md shadow-md p-[20px]'>
                                <div className="w-1/2 m-[10px] flex flex-col justify-around">
                                    {/* ======@ DOCUMENT @====== */}
                                    <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id-badge-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 12h3v4h-3z"></path><path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6"></path><path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path><path d="M14 16h2"></path><path d="M14 12h4"></path>
                                        </svg>
                                        <span className='pl-[5px]'>{formatCPF(gymMemberModal.person.document)}</span>
                                    </div>
                                    <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cake" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z"></path><path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197"></path><path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z"></path>
                                        </svg>
                                        <span className='pl-[5px]'>{gymMemberModal.person.birthday}</span>
                                    </div>
                                    <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path><path d="M15 6l2 2l4 -4"></path>
                                        </svg>
                                        <span className='pl-[5px]'>{formatPhone(gymMemberModal.person.phone)}</span>
                                    </div>
                                    <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                                        {
                                            (gymMemberModal.person.gender === "F") ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-female" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M12 14v7"></path><path d="M9 18h6"></path>
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-male" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path><path d="M19 5l-5.4 5.4"></path><path d="M19 5h-5"></path><path d="M19 5v5"></path>
                                                </svg>
                                            )
                                        }
                                        <span className='pl-[5px]'>{(gymMemberModal.person.gender === "M") ? 'Masculino' : 'Feminino'}</span>
                                    </div>
                                </div>
                                <div className="w-1/2 m-[10px] flex flex-col justify-around">
                                    <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path>
                                        </svg>
                                        <span className='pl-[5px]'>{gymMemberModal.person.email}</span>
                                    </div>
                                    <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scale-outline" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 3m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z"></path><path d="M12 7c1.956 0 3.724 .802 5 2.095l-2.956 2.904a3 3 0 0 0 -2.038 -.799a3 3 0 0 0 -2.038 .798l-2.956 -2.903a6.979 6.979 0 0 1 5 -2.095z"></path>
                                        </svg>
                                        <span className='pl-[5px]'>{`${gymMemberModal.weight_kg} kg`}</span>
                                    </div>
                                    <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-line-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 8l3 -3l3 3"></path><path d="M3 16l3 3l3 -3"></path><path d="M6 5l0 14"></path><path d="M13 6l7 0"></path><path d="M13 12l7 0"></path><path d="M13 18l7 0"></path>
                                        </svg>
                                        <span className='pl-[5px]'>{`${gymMemberModal.height_cm} cm`}</span>
                                    </div>
                                    <div className='flex justify-start bg-gray-300 p-[5px] rounded-md'>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-star" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11 21h-5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v3.5"></path><path d="M16 3v4"></path><path d="M8 3v4"></path><path d="M4 11h11"></path><path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"></path>
                                        </svg>
                                        <span className='pl-[5px]'>{formatCreatedAt(gymMemberModal.created_at)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row items-center justify-between pt-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                        <button onClick={(e) => handleClickCloseModal(e)} class="px-4 py-2 text-white font-semibold bg-tertiary-red rounded">
                            Fechar
                        </button>
                        <div>
                            <button class="px-4 py-2 text-white font-semibold bg-secondary-red rounded mx-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-to-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M10 12l10 0"></path>
                                    <path d="M10 12l4 4"></path>
                                    <path d="M10 12l4 -4"></path>
                                    <path d="M4 4l0 16"></path>
                                </svg>
                            </button>
                            <button class="px-4 py-2 text-white font-semibold bg-primary-blue rounded mx-[2px]">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-to-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M14 12l-10 0"></path>
                                    <path d="M14 12l-4 4"></path>
                                    <path d="M14 12l-4 -4"></path>
                                    <path d="M20 4l0 16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}