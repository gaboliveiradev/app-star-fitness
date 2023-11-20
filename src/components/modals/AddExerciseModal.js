import React, { useContext } from "react";
import { Toast } from './../../common/Toast';
import Swal from 'sweetalert2'
import { MainContext } from "../../context/Main";
import { AuthContext } from '../../context/Auth';
import { ExerciseContext } from "../../context/Exercise";
import { WorkoutRoutineContext } from "../../context/WorkoutRoutine";

export default function AddExerciseModal() {
  const { setIsOpenAddExerciseModal } = useContext(MainContext);
  const { exerciseList } = useContext(AuthContext);

  const {
    idExercise, setIdExercise,
  } = useContext(ExerciseContext);

  const {
    currentWeek,
    localIdExercise, setLocalIdExercise,
    workoutRoutine, setWorkoutRoutine,
    repsWorkoutRoutine, setRepsWorkoutRoutine,
    setsWorkoutRoutine, setSetsWorkoutRoutine,
    intervalWorkoutRoutine, setIntervalWorkoutRoutine,
    observationWorkoutRoutine, setObservationWorkoutRoutine,
  } = useContext(WorkoutRoutineContext);

  const handleClickClear = async (e) => {
    e.preventDefault();

    setIdExercise('');
    setRepsWorkoutRoutine('');
    setSetsWorkoutRoutine('');
    setIntervalWorkoutRoutine('');
    setObservationWorkoutRoutine('');
  }

  const handleClickAddExercise = async (e) => {
    e.preventDefault();

    if (idExercise === "" || currentWeek === "" || setsWorkoutRoutine === "" || repsWorkoutRoutine === "" || intervalWorkoutRoutine === "") {
      Swal.fire({
        icon: 'error',
        title: 'Campos Vazio!',
        html: 'Oops... Parece que <b>alguns campos</b> estão <b>VAZIOS</b>. Por favor, verifique e tente novamente'
      })

      return;
    }

    setWorkoutRoutine((prevRoutine) => [
      ...prevRoutine,
      {
        localIdExercise: localIdExercise,
        idExercise: idExercise,
        weekDay: currentWeek,
        sets: setsWorkoutRoutine,
        repetitions: repsWorkoutRoutine,
        rest: intervalWorkoutRoutine,
        observation: observationWorkoutRoutine,
      },
    ]);

    setLocalIdExercise(localIdExercise + 1);

    Toast.fire({
      icon: 'success',
      title: 'Exercício adiconado.'
    })

    handleClickClear(e);
  }

  return (
    <div class="z-999 modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
      <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded border border-gray-300 shadow-xl">
        <div class="grid grid-flow-col justify-stretch bg-white cursor-pointer">
          <div className="flex flex-col px-6 py-5 h-[550px] overflow-auto scrollbar-hide">
            <span className="title">Adicionar Exercício</span>
            <div className="relative flex flex-col min-w-0 break-words border-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
              <div className="flex-auto">
                <div className="flex flex-wrap -mx-3">
                  <div className="grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6 w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0 mt-[20px]">
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="exercise"
                        className="block font-bold text-[16px] text-black-700"
                      >
                        Exercicio *
                      </label>
                      <div className="mt-1">
                        <select
                          value={idExercise}
                          name="exercise"
                          id="exercise"
                          onChange={(e) => setIdExercise(e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        >
                          <option value='' disabled selected>--- Selecione ---</option>
                          {
                            exerciseList.map(exercise => (
                              <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-6 mt-[15px]">
                      <label
                        htmlFor="sets"
                        className="block font-bold text-[16px] text-black-700"
                      >
                        Número de Séries *
                      </label>
                      <div className="mt-1">
                        <input
                          value={setsWorkoutRoutine}
                          onChange={(e) => setSetsWorkoutRoutine(e.target.value)}
                          type="number"
                          name="sets"
                          id="sets"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mt-[15px]">
                      <label
                        htmlFor="reps"
                        className="block font-bold text-[16px] text-black-700"
                      >
                        Quantidade de Repetições *
                      </label>
                      <div className="mt-1">
                        <input
                          value={repsWorkoutRoutine}
                          onChange={(e) => setRepsWorkoutRoutine(e.target.value)}
                          type="number"
                          name="reps"
                          id="reps"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3 mt-[15px]">
                      <label
                        htmlFor="rest"
                        className="block font-bold text-[16px] text-black-700"
                      >
                        Descanso *
                      </label>
                      <div className="mt-1">
                        <input
                          value={intervalWorkoutRoutine}
                          onChange={(e) => setIntervalWorkoutRoutine(e.target.value)}
                          type="time"
                          name="rest"
                          id="rest"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-6 mt-[15px]">
                      <label
                        htmlFor="observation"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                      >
                        Observação *
                      </label>
                      <div className="mt-1"></div>
                      <textarea
                        value={observationWorkoutRoutine}
                        onChange={(e) => setObservationWorkoutRoutine(e.target.value)}
                        class="resize-none rounded-md w-full h-full"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <div>
            <button onClick={() => setIsOpenAddExerciseModal(false)} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Fechar
            </button>
          </div>
          <div className="flex flex-row">
            <button onClick={(e) => handleClickClear(e)} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancelar
            </button>
            <button onClick={(e) => handleClickAddExercise(e)} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
