import React from "react";

export default function Modal({ isOpen }) {
  if (isOpen) {
    return (
      <div class="z-999 modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50">
        <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded border border-gray-300 shadow-xl">
          <div class="grid grid-flow-col justify-stretch bg-white cursor-pointer">
            <div className="flex flex-col px-6 py-5 h-[650px] overflow-auto scrollbar-hide">
              <span className="title">Ficha de Treino</span>
              <div className="relative flex flex-col min-w-0 break-words border-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
                <div className="flex-auto">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
                      <div class="mb-4">
                        <label
                          for="username"
                          class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        >
                          Nome do aluno
                        </label>
                        <input
                          type="text"
                          name="username"
                          value="João Paulo Franchini de Freitas"
                          class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
                      <div class="mb-4">
                        <label
                          for="username"
                          class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        >
                          Nome da Ficha
                        </label>
                        <input
                          type="text"
                          name="username"
                          value="SEGUNDA-FEIRA"
                          disabled
                          class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
