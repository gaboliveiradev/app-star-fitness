import React, { useContext } from 'react';
import { WorkoutRoutineContext } from '../../context/WorkoutRoutine';
import { IMaskInput } from 'react-imask';
import { Toast } from './../../common/Toast';

export default function ConfirmGymMemberModal() {
    const {
        setIsOpenConfirmGymMemberModal, selectedGymMemberWorkout, setSelectedGymMemberWorkout,
    } = useContext(WorkoutRoutineContext);

    const handleClickClearFields = async (e) => {
        e.preventDefault();

        setIsOpenConfirmGymMemberModal(false);
        setSelectedGymMemberWorkout({});
    }

    return (
        <div class="z-999 modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
            <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded border border-gray-300 shadow-xl">
                <div class="grid grid-flow-col justify-stretch bg-white cursor-pointer">
                    <div className="flex flex-col px-6 py-5 h-[550px] overflow-auto scrollbar-hide">
                        <span className="title">Este é o Aluno?</span>
                        <div className="relative flex flex-col min-w-0 break-words border-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6 w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0 mt-[20px]">
                                        <div className="sm:col-span-6">
                                            <img class="w-32 h-32 rounded-full mx-auto" src={selectedGymMemberWorkout.person.photo_url} alt="Profile picture" />
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="name"
                                                className="block font-bold text-[16px] text-black-700"
                                            >
                                                Nome
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    value={selectedGymMemberWorkout.person.name}
                                                    disabled
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="document"
                                                className="block font-bold text-[16px] text-black-700"
                                            >
                                                CPF
                                            </label>
                                            <div className="mt-1">
                                                <IMaskInput
                                                    disabled
                                                    value={selectedGymMemberWorkout.person.document}
                                                    mask="000.000.000-00"
                                                    placeholder='999.999.999-99'
                                                    type="text"
                                                    name="document"
                                                    id="document"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-6">
                                            <label
                                                htmlFor="email"
                                                className="block font-bold text-[16px] text-black-700"
                                            >
                                                Email
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    disabled
                                                    value={selectedGymMemberWorkout.person.email}
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="phone"
                                                className="block font-bold text-[16px] text-black-700"
                                            >
                                                Telefone
                                            </label>
                                            <div className="mt-1">
                                                <IMaskInput
                                                    disabled
                                                    value={selectedGymMemberWorkout.person.phone}
                                                    mask="(00) 00000-0000"
                                                    placeholder='(99) 99999-9999'
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-3">
                                            <label
                                                htmlFor="birthday"
                                                className="block font-bold text-[16px] text-black-700"
                                            >
                                                Data de Nasc.
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    disabled
                                                    value={selectedGymMemberWorkout.person.birthday}
                                                    type="date"
                                                    name="birthday"
                                                    id="birthday"
                                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end bg-white px-5">
                    <div className="my-[20px] flex flex-row hover:cursor-pointer">
                        <button onClick={(e) => handleClickClearFields(e)} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Não, fechar
                        </button>
                        <button onClick={() => {
                            setIsOpenConfirmGymMemberModal(false);
                            Toast.fire({
                                icon: 'success',
                                title: 'Aluno confirmado.'
                            })
                        }} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Sim, confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}