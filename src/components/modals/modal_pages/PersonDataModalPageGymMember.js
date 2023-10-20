import React, { useContext } from "react";
import MainContext from "../../../context/MainContext";
import {
  formatBirthday,
  formatCPF,
  formatCreatedAt,
  formatPhone,
  capitalizeFirstLetter,
} from "./../../../utils/format";

export default function PersonDataModalPageGymMember() {
  const { gymMemberModal } = useContext(MainContext);

  console.log(gymMemberModal);

  return (
    <>
      <div className="flex justify-center pb-[10px]">
        <div className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words bg-tertiary-blue border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-auto max-w-full px-3">
              <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
                <img
                  src={gymMemberModal.person.photo_url}
                  alt="profile_image"
                  className="w-full shadow-2xl rounded-xl"
                />
              </div>
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <div className="h-full">
                <h5 className="mb-1 text-white font-medium">
                  {gymMemberModal.person.name}
                </h5>
                <p class="mb-0 font-semibold leading-normal text-white dark:opacity-60 text-sm">
                  {gymMemberModal.person.gender === "M"
                    ? "Matriculado"
                    : "Matriculada"}{" "}
                  em {formatCreatedAt(gymMemberModal.created_at)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="flex-auto">
          <div className="flex flex-wrap -mx-3 mt-[20px]">
            <div className="w-full max-w-full px-3 shrink-0 md:w-12/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.name}
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
                  Email
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.email}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Documento
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.document}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Telefone
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.phone}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Data de Nascimento
                </label>
                <input
                  type="text"
                  name="username"
                  value={gymMemberModal.person.birthday}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Sexo
                </label>
                <input
                  type="text"
                  name="gender"
                  value={gymMemberModal.person.gender === "M" ? "Masculino" : "Feminino"}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Altura
                </label>
                <input
                  type="text"
                  name="username"
                  value=""
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
              <div class="mb-4">
                <label
                  for="username"
                  class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                >
                  Peso
                </label>
                <input
                  type="text"
                  name="username"
                  value=""
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
                  Observação
                </label>
                <input
                  type="text"
                  name="gender"
                  value={gymMemberModal.person.observation}
                  disabled
                  class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
