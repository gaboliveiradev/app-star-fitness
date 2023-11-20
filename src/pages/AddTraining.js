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

  const { isOpenAddExerciseModal } = useContext(MainContext);

  const {
    setSelectedGymMemberWorkout,
    isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal,
    documentWorkoutRoutine, setDocumentWorkoutRoutine,
  } = useContext(WorkoutRoutineContext);
  const { gymMembersList } = useContext(AuthContext);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

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
                  <CardTrainingWeek week="DOM" />
                  <CardTrainingWeek week={"SEG"} />
                  <CardTrainingWeek week={"TER"} />
                </>
              ) : (currentPage === 2) ? (
                <>
                  <CardTrainingWeek week={"QUA"} />
                  <CardTrainingWeek week={"QUI"} />
                  <CardTrainingWeek week={"SEX"} />
                </>
              ) : (currentPage === 3) && (
                <>
                  <CardTrainingWeek week={"SÁB"} />

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
                    //handleClickClearFields(e)
                  }
                })
              }} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancelar
              </button>
              <button class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
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
