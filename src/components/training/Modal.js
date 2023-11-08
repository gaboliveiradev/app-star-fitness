import React from "react";
import { IMaskInput } from "react-imask";

export default function Modal({ isOpen }) {


  if (isOpen) {
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
                      <div className="sm:col-span-6 mt-[15px]">
                        <label
                          htmlFor="gender"
                          className="block font-bold text-[16px] text-black-700"
                        >
                          Exercicio *
                        </label>
                        <div className="mt-1">
                          <select
                            value
                            name="gender"
                            id="gender"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                          >
                            <option value={""} selected disabled>
                              Escolha
                            </option>
                            <option value="">Caminhada</option>
                          </select>
                        </div>
                      </div>
                      <div className="sm:col-span-3 mt-[15px]">
                        <label
                          htmlFor="gender"
                          className="block font-bold text-[16px] text-black-700"
                        >
                          Quantidade de Repetições *
                        </label>
                        <div className="mt-1">
                          <IMaskInput
                            mask={Number}
                            lazy={true}
                            max={7}
                            type="number"
                            name=""
                            id=""
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3 mt-[15px]">
                        <label
                          htmlFor="gender"
                          className="block font-bold text-[16px] text-black-700"
                        >
                          Tempo entre Repetições *
                        </label>
                        <div className="mt-1">
                          <IMaskInput
                            mask='MM:SS'
                            lazy={true}
                            max={7}
                            type="text"
                            name=""
                            id=""
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6 mt-[15px]">
                        <label
                          htmlFor="email"
                          className="block font-bold text-[16px] text-black-700"
                        >
                          Observação *
                        </label>
                        <div className="mt-1"></div>
                        <textarea class="resize-none rounded-md w-full h-full"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-row items-center justify-between pb-6 pl-6 pr-6 bg-white border-gray-200 rounded-bl-lg rounded-br-lg">
            <button class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-red-500 bg-red-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-red-500 hover:before:-translate-x-40">
              <span relative="relative z-10">Fechar</span>
            </button>
            <button class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
              <span relative="relative z-10">Salvar</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
