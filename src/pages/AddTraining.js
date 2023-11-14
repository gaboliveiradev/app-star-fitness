import React, { useState } from "react";
import Search from "../components/training/Search";
import { CardTraining } from "../components/training/Card";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

export default function AddTraining() {
  const [currentPage, setCurrentPage] = useState(1);

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

          <div className="pt-[20px]">
            <Search />
          </div>
          <div className="flex">
            <div class="flex items-center  dark:border-gray-700">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label
                for="bordered-radio-1"
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Treino Personalizado
              </label>
            </div>
            <div class="flex items-center ps-4 dark:border-gray-700">
              <input
                checked
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              ></input>
              <label
                for="bordered-radio-2"
                class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Treino de Introdução
              </label>
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
                value="Treino brabo"
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
              />
            </div>
          </div>
          <div className="pb-[20px] scrollbarConfig flex flex-row flex-wrap justify-center items-center overflow-x-scroll">
            {Array.from({ length: 7 }, (_, index) => (
              <div
                key={index}
                className={`mt-[30px] ${
                  index + 1 > currentPage * 3 ||
                  index + 1 <= (currentPage - 1) * 3
                    ? "hidden"
                    : ""
                }`}
              >
                <CardTraining title={daysOfWeek[index]} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-[-200px]">
            <button
              onClick={handlePrevPage}
              className="px-3 py-1 bg-blue-500 text-white rounded-md"
              disabled={currentPage === 1}
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={handleNextPage}
              className="px-3 py-1 bg-blue-500 text-white rounded-md"
              disabled={currentPage === 3}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
