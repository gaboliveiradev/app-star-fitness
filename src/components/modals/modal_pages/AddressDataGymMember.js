import React, { useContext } from "react";
import { MainContext } from "../../../context/Main";
import { IMaskInput } from 'react-imask';

export default function AddressDataModalPageGymMember() {
  const { gymMemberModal } = useContext(MainContext);

  console.log(gymMemberModal);

  return (
    <div className="relative flex flex-col min-w-0 break-words border-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="mt-[10px]">
        <p className="title">Dados de Endereço</p>
      </div>
      <div >
        <div class="flex-auto">
          <div className="flex flex-wrap -mx-3 mt-[10px]">
            <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="zipCode"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  CEP
                </label>
                <IMaskInput
                  type="text"
                  mask='00000-000'
                  name="zipCode"
                  value={gymMemberModal.person.address.zip_code}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="street"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Logradouro
                </label>
                <input
                  type="text"
                  name="street"
                  value={gymMemberModal.person.address.street}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-9/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="district"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Bairro
                </label>
                <input
                  type="text"
                  name="district"
                  value={gymMemberModal.person.address.district}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-3/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="number"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Numero
                </label>
                <input
                  type="text"
                  name="number"
                  value={gymMemberModal.person.address.number}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="city"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Cidade
                </label>
                <input
                  type="text"
                  name="city"
                  value={gymMemberModal.person.address.city}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-3/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="state"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Estado
                </label>
                <input
                  type="text"
                  name="state"
                  value={gymMemberModal.person.address.state}
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
