import React, { useContext } from 'react';
import { MainContext } from '../../context/Main';
import { ExerciseContext } from '../../context/Exercise';

export default function ImageExerciseModal() {
    const { setIsOpenImageExerciseModal } = useContext(MainContext);

    const { selectedExercise } = useContext(ExerciseContext);
    return (
        <div class="z-999 modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
            <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded border border-gray-300 shadow-xl">
                <div class="grid grid-flow-col justify-stretch bg-white cursor-pointer">
                    <div className="flex flex-col px-6 py-5 h-[550px]">
                        <span className="title">Imagens Adicionadas <span className='text-[14px]'>(2/2)</span></span>
                        <div className="overflow-auto scrollbarConfig relative flex flex-col min-w-0 break-words border-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                            <div className="flex-auto">
                                <div className="flex flex-wrap">
                                    <div class="w-160 bg-white p-3">
                                        <p className='font-bold mb-[10px] text-blue-600'>Equipamento</p>
                                        <img class="h-104 w-full object-cover rounded-md" src={selectedExercise.equipment_gym_photo} />
                                    </div>
                                    <div class="w-160 bg-white p-3">
                                        <p className='font-bold mb-[10px] text-blue-600'>Execução Exercício</p>
                                        <img class="h-104 w-full object-cover" src={selectedExercise.exercise_gif} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end bg-white px-5">
                    <div className="my-[20px] flex flex-row hover:cursor-pointer">
                        <button onClick={() => setIsOpenImageExerciseModal(false)} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}