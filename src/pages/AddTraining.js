import React, { useState } from 'react';
import Search from "../components/training/Search";
import { CardTraining } from "../components/training/Card";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline"


export default function AddTraining() {

  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => prevIndex + 4);
  };

  const visibleCards = Array.from({ length: 3 }, (_, index) => (
    <div key={index}>
      <CardTraining title={['DOMINGO', 'SEGUNDA-FEIRA', 'TERÇA-FEIRA'][index + startIndex]} />
    </div>
  ));

  const additionalCards = Array.from({ length: 4 }, (_, index) => (
    <div key={index + 3}>
      <CardTraining title={['QUARTA-FEIRA', 'QUINTA-FEIRA', 'SEXTA-FEIRA', 'SÁBADO'][index + startIndex]} />
    </div>
  ));

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
          <div className="sm:col-span-6 mt-[15px]">
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
          <div className="mt-[20px] flex items-center justify-between">
            <button id='Scroll' /**disabled={index === 0} onClick={() => setIndex(index - 1)}**/ class="mr-[5px] px-4 py-2 text-white font-semibold bg-blue-500 rounded">
              <ArrowLeftIcon className='w-5' />
            </button>
            <button id='Scroll' /**disabled={index === 3} onClick={() => setIndex(index + 1)}**/ class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
              <ArrowRightIcon className='w-5' />
            </button>
          </div>
          <div class="pb-[20px] scrollbarConfig flex flex-row mt-[30px] overflow-x-scroll">
            <div>
              <CardTraining
                title="DOMINGO" />
            </div>
            <div>
              <CardTraining
                title="SEGUNDA-FEIRA" />
            </div>
            <div>
              <CardTraining
                title='TERÇA-FEIRA' />
            </div>
            <div>
              <CardTraining
                title='QUARTA-FEIRA' />
            </div>
            <div>
              <CardTraining
                title='QUINTA-FEIRA' />
            </div>
            <div>
              <CardTraining
                title='SEXTA-FEIRA' />
            </div>
            <div>
              <CardTraining
                title='SÁBADO' />
            </div>
          </div>

        </div>
      </article>
    </>
  );
}
