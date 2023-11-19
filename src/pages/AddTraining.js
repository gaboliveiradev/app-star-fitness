import React, { useContext, useState } from "react";
import { IMaskInput } from 'react-imask';
import Swal from 'sweetalert2'
import { CardTraining } from "../components/training/Card";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { WorkoutRoutineContext } from "../context/WorkoutRoutine";
import ConfirmGymMemberModal from "../components/modals/ConfirmGymMemberModal";

export default function AddTraining() {
  const [currentPage, setCurrentPage] = useState(1);

  const { isOpenConfirmGymMemberModal, setIsOpenConfirmGymMemberModal } = useContext(WorkoutRoutineContext);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, 3));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const daysOfWeek = [
    "DOMINGO",
    "SEGUNDA-FEIRA",
    "TERÇA-FEIRA",
    "QUARTA-FEIRA",
    "QUINTA-FEIRA",
    "SEXTA-FEIRA",
    "SÁBADO",
  ];

  return (
    <>
      <article className="flex-auto h-full mx-auto rounded-md w-full p-4">
        {
          (isOpenConfirmGymMemberModal) && (
            <ConfirmGymMemberModal />
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
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                />
              </div>
              <button
                onClick={(e) => setIsOpenConfirmGymMemberModal(true)}
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
          <div className="mt-[30px] flex justify-end">
            <button
              onClick={handlePrevPage}
              className="mr-[5px] px-4 py-2 text-white font-semibold bg-blue-500 rounded"
              disabled={currentPage === 1}
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextPage}
              className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
              disabled={currentPage === 3}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="pb-[20px] scrollbarConfig flex flex-row flex-wrap justify-center items-center">
            {Array.from({ length: 7 }, (_, index) => (
              <div
                key={index}
                className={`mt-[30px] ${index + 1 > currentPage * 3 ||
                  index + 1 <= (currentPage - 1) * 3
                  ? "hidden"
                  : ""
                  }`}
              >
                <CardTraining title={daysOfWeek[index]} />
              </div>
            ))}
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
