import React, { useContext } from 'react';
import MainContext from '../../../context/MainContext';
import { formatBirthday, formatCPF, formatCreatedAt, formatPhone, capitalizeFirstLetter } from './../../../utils/format';

export default function PersonDataModalPageGymMember() {
    const { gymMemberModal } = useContext(MainContext);

    console.log(gymMemberModal);

    return (
        <>
            <div className='flex justify-center pb-[10px]'>
                <div className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words bg-tertiary-blue border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border">
                    <div className="flex flex-wrap -mx-3">
                        <div className="flex-none w-auto max-w-full px-3">
                            <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
                                <img
                                    src={gymMemberModal.person.photo_url}
                                    alt="profile_image"
                                    className="w-full shadow-2xl rounded-xl"
                                />
                            </div>
                        </div>
                        <div className="flex-none w-auto max-w-full px-3 my-auto">
                            <div className="h-full">
                                <h5 className="mb-1 text-white font-medium">{gymMemberModal.person.name}</h5>
                                <p class="mb-0 font-semibold leading-normal text-white dark:opacity-60 text-sm">
                                    {(gymMemberModal.person.gender === "M") ? 'Matriculado' : 'Matriculada'} em {formatCreatedAt(gymMemberModal.created_at)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between flex-grow bg-gray-200 overflow-auto'>
                a
            </div>
        </>
    )
}