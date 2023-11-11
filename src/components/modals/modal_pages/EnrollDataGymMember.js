import React, { useContext } from "react";
import { MainContext } from "../../../context/Main";
import { IMaskInput } from 'react-imask';
import { formatMoney } from "../../../utils/format";

export default function EnrollDataGymMember() {
  const { gymMemberModal } = useContext(MainContext);

  return (
    <div className="relative flex flex-col min-w-0 break-words border-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="mt-[10px]">
        <p className="title">Dados de Matrícula</p>
      </div>
      <div >
        <div class="flex-auto">
          <div className="flex flex-wrap -mx-3 mt-[10px]">
            <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="plan"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Plano
                </label>
                <input
                  type="text"
                  name="plan"
                  value={gymMemberModal.type.name}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="days"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Quantidade de Dias
                </label>
                <input
                  type="text"
                  name="days"
                  value={`${gymMemberModal.type.number_of_days} dias por semana`}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="price"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Preço
                </label>
                <input
                  type="text"
                  name="price"
                  value={`${formatMoney(gymMemberModal.type.price)} / mês`}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
