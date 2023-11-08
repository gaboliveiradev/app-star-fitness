import React, { useContext } from "react";
import { MainContext } from "../../../context/Main";
import {
  formatBirthday,
  formatCPF,
  formatCreatedAt,
  formatPhone,
} from "../../../utils/format";

export default function AddressDataModalPageGymMember() {
  const { gymMemberModal } = useContext(MainContext);

  return (
    <div className="p-6 relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="mt-[20px]">
        <p className="title">Endereço</p>
      </div>

      <div className="">
        <div class="flex-auto">
          <div className="flex flex-wrap -mx-3 mt-[20px]">
            <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Logradouro
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.address.street}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  N.º
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.address.number}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  CEP
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.address.zip_code}
                  disabled
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
                  Bairro
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.address.district}
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
