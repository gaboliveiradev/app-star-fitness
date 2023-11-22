import React, { useContext, useState } from "react";
import { IMaskInput } from 'react-imask';
import Swal from 'sweetalert2'
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { WorkoutRoutineContext } from "../context/WorkoutRoutine";
import ConfirmGymMemberModal from "../components/modals/ConfirmGymMemberModal";
import { AuthContext } from "../context/Auth";
import { formatCPF } from "./../utils/format";
import { Toast } from './../common/Toast';
import CardTrainingWeek from "../components/CardTrainingWeek";
import { MainContext } from "../context/Main";
import AddExerciseModal from "../components/modals/AddExerciseModal";


export default function AddTraining() {
  const [currentPage, setCurrentPage] = useState(1);

  const { isOpenAddExerciseModal, setIsLoading, setIsLoadingText } = useContext(MainContext);

  const {
    workoutRoutine,
    selectedGymMemberWorkout,
    setSelectedGymMemberWorkout, setWorkoutRoutine,
    isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal,
    documentWorkoutRoutine, setDocumentWorkoutRoutine,
    nameWorkoutRoutine, setNameWorkoutRoutine, setLocalIdExercise,
    //methods
    createWorkoutRoutine,
    createAssocWorkoutRoutineExercise,
  } = useContext(WorkoutRoutineContext);
  const { gymMembersList } = useContext(AuthContext);

  const handleClickSearchGymMemberByDocument = async () => {
    let item = gymMembersList.filter(gymMember => gymMember.person.document == documentWorkoutRoutine);

    if (item.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: `<strong>Não foi possível</strong> encontrar um aluno <strong>pelo CPF ${formatCPF(documentWorkoutRoutine)}</strong>, por favor, verifique os dados e tente novamente.`
      })

      return;
    }

    setSelectedGymMemberWorkout(item[0]);
    setIsOpenConfirmGymMemberModal(true);
  }

  const handleClickClear = async (e) => {
    e.preventDefault();

    setLocalIdExercise(1);
    setWorkoutRoutine([]);
    setDocumentWorkoutRoutine('');
    setNameWorkoutRoutine('');
  }

  const handleClickSaveWorkoutRoutine = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      setIsLoadingText('Criando Ficha de Treino...');

      const workoutRoutineParameters = {
        name: nameWorkoutRoutine,
        id_gym_member: selectedGymMemberWorkout.id
      }

      const responseWorkoutRoutine = await createWorkoutRoutine(workoutRoutineParameters);

      if (responseWorkoutRoutine.status !== 201) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: 'Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível criar uma nova ficha de treino.'
        })

        return;
      }

      setIsLoadingText('Adicionando Exercícios a Ficha de Treino...')

      const workoutRoutineAssocParameters = {
        id_workout_routine: responseWorkoutRoutine.data.data.id,
        array_exercises: workoutRoutine,
      }

      const responseWorkoutRoutineAssoc = await createAssocWorkoutRoutineExercise(workoutRoutineAssocParameters);

      if (responseWorkoutRoutineAssoc.status !== 201) {
        Swal.fire({
          icon: 'error',
          title: 'Erro Inesperado',
          html: 'Oops... Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível vincular todos exercícios a ficha de treino criada.'
        })

        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Ficha de Treino Criada',
      })

      handleClickClear(e);

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro Inesperado',
        html: 'Oops... Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível criar uma ficha de treino.'
      })
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsLoadingText("");
    }
  }

  return (
    <>
      <article className="flex-auto h-full mx-auto rounded-md w-full p-4">
        {
          (isOpenConfirmGymMemberModal) && (
            <ConfirmGymMemberModal />
          )
        }
        {
          (isOpenAddExerciseModal) && (
            <AddExerciseModal />
          )
        }
        <div>
          <div className="flex-auto pb-[14px]">
            <h1 class="title">Planejar Treino</h1>
            <ul class="breadcrumbs">
              <li>
                <span>Principal</span>
              </li>
              <li class="divider">/</li>
              <li>
                <span class="active">Ficha de Treino</span>
              </li>
              <li class="divider">/</li>
              <li>
                <span class="active">Planejar Treino</span>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 text-left">
            <label className="block font-bold text-[16px] text-black-700">
              CPF do Aluno *
            </label>
            <div className="mt-1 flex rounded-md shadow-sm mb-[20px]">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <IMaskInput
                  mask='000.000.000-00'
                  placeholder='999.999.999-99'
                  value={documentWorkoutRoutine}
                  onChange={(e) => setDocumentWorkoutRoutine(e.target.value.replace(/[^0-9]/g, ''))}
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                />
              </div>
              <button
                onClick={(e) => {
                  if (documentWorkoutRoutine.length > 11 || documentWorkoutRoutine.length < 11) {
                    Toast.fire({
                      icon: 'error',
                      title: 'O CPF PRECISA TER 11 DIGITOS.'
                    })

                    return;
                  }
                  handleClickSearchGymMemberByDocument(e)
                }}
                type="button"
                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-primary-blue bg-primary-blue px-4 py-2 text-sm font-medium text-white hover:opacity-80"
              >
                OK
              </button>
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block font-bold text-[16px] text-black-700"
            >
              Nome da Ficha *
            </label>
            <div className="mt-1">
              <input
                value={nameWorkoutRoutine}
                onChange={(e) => setNameWorkoutRoutine(e.target.value)}
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
              />
            </div>
          </div>
          <div className="my-[30px] flex justify-end">
            <button
              onClick={() => (currentPage !== 1) && setCurrentPage(currentPage - 1)}
              className="mr-[5px] px-4 py-2 text-white font-semibold bg-blue-500 rounded"
              disabled={currentPage === 1}
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => (currentPage !== 3) && setCurrentPage(currentPage + 1)}
              className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
              disabled={currentPage === 3}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="pb-[20px] mt-[15px] scrollbarConfig flex flex-row flex-wrap justify-around">
            {
              (currentPage === 1) ? (
                <>
                  <CardTrainingWeek weekDay="DOM" />
                  <CardTrainingWeek weekDay={"SEG"} />
                  <CardTrainingWeek weekDay={"TER"} />
                </>
              ) : (currentPage === 2) ? (
                <>
                  <CardTrainingWeek weekDay={"QUA"} />
                  <CardTrainingWeek weekDay={"QUI"} />
                  <CardTrainingWeek weekDay={"SEX"} />
                </>
              ) : (currentPage === 3) && (
                <>
                  <CardTrainingWeek weekDay={"SÁB"} />

                </>
              )
            }
          </div>

          <div className="sm:col-span-6 flex justify-end">
            <div className="my-[20px] flex flex-row hover:cursor-pointer">
              <button onClick={(e) => {
                Swal.fire({
                  title: 'Você tem Certeza?',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  cancelButtonText: 'Cancelar',
                  confirmButtonText: 'Sim, Limpar!'
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    handleClickClear(e)
                  }
                })
              }} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancelar
              </button>
              <button onClick={(e) => {
                handleClickSaveWorkoutRoutine(e);
              }} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Salvar
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
