import React from "react";
import Search from "../components/training/Search";
import { CardTraining } from "../components/training/Card";

export default function AddTraining() {
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
          <div class="flex flex-row mt-[30px] overflow-x-scroll">
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
              title='QUARTA-FEIRA'/>
            </div>
            <div>
              <CardTraining 
              title='QUINTA-FEIRA'/>
            </div>
            <div>
              <CardTraining 
              title='SEXTA-FEIRA'/>
            </div>
            <div>
              <CardTraining 
              title='SÁBADO'/>
            </div>
          </div>
          
        </div>
      </article>
    </>
  );
}
