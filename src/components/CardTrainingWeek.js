import React, { useContext } from 'react';
import { MainContext } from '../context/Main';
import { WorkoutRoutineContext } from '../context/WorkoutRoutine';
import { AuthContext } from '../context/Auth';

export default function CardTrainingWeek({ weekDay }) {
    const { setIsOpenAddExerciseModal } = useContext(MainContext);
    const { setCurrentWeek, workoutRoutine, setWorkoutRoutine } = useContext(WorkoutRoutineContext);
    const { exerciseList } = useContext(AuthContext);

    const handleClickOpenModalWithExercise = async (e) => {
        e.preventDefault();
    }

    console.log(workoutRoutine);

    const handleClickRemoveExerciseArray = async (e, id) => {
        e.preventDefault();
    }

    return (
        <div className="shadow-md bg-gray-200 rounded-md w-100 ">
            <div className="font-bold shadow-md text-white p-4 text-center bg-tertiary-blue rounded-md">
                {weekDay}
            </div>
            <div className="h-[300px] p-3">
                {
                    workoutRoutine.filter(exercises => exercises.weekDay === weekDay).map(exercise => (
                        <div onClick={(e) => handleClickOpenModalWithExercise(e)} className='flex flex-row bg-white justify-between rounded-md shadow-md p-3 mb-3 cursor-pointer'>
                            <div>
                                <p>
                                    <span className='font-bold'>{exercise.sets}x{exercise.repetitions}</span>
                                    {
                                        exerciseList.filter(exerc => exerc.id === exercise.idExercise).map(ex => (
                                            <span className='ml-2 font-bold text-tertiary-blue'>{ex.name}</span>
                                        ))
                                    }
                                </p>
                            </div>
                            <div onClick={(e) => handleClickRemoveExerciseArray(e, exercise.localIdExercise)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="p-4 flex flex-row justify-center">
                <button className='cursor-pointer' onClick={() => {
                    setIsOpenAddExerciseModal(true);
                    setCurrentWeek(weekDay);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#5670d3" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}