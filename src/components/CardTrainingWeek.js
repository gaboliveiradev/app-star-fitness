import React, { useContext } from 'react';
import { MainContext } from '../context/Main';

export default function CardTrainingWeek({ week }) {
    const { setIsOpenAddExerciseModal } = useContext(MainContext);

    return (
        <div className="shadow-md bg-gray-200 rounded-md w-100 ">
            <div className="font-bold shadow-md text-white p-4 text-center bg-tertiary-blue rounded-md">
                {week}
            </div>
            <div className="h-[330px] p-3">
                abc
            </div>
            <div className="p-4 flex flex-row justify-center">
                <button className='cursor-pointer' onClick={() => setIsOpenAddExerciseModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5670d3" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}