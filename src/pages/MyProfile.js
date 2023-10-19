import React, {useContext, useEffect} from "react";
import AuthContext from './../context/AuthContext';
import { capitalizeFirstLetter } from "../utils/format";

export default function MyProfile() {

  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <body className="m-0 font-sans sidebar-hidden overflow-hidden antialiased font-normal dark:bg-slate-900 text-base leading-default bg-white text-slate-500">
      <div className="relative w-full mx-auto">
        <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words bg-tertiary-blue border-0 dark:bg-slate-850 dark:shadow-dark-xl shadow-3xl rounded-2xl bg-clip-border">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-none w-auto max-w-full px-3">
              <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
                <img
                  src={user.photo_url}
                  alt="profile_image"
                  className="w-full shadow-2xl rounded-xl"
                />
              </div>
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <div className="h-full">
                <h5 className="mb-1 text-white font-medium">{user.name}</h5>
                <p class="mb-0 font-semibold leading-normal text-white dark:opacity-60 text-sm">
                  {capitalizeFirstLetter(user.employee.occupation)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-6 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 shrink-0 md:w-8/15 md:flex-0">
            <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div class="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
               <div class="flex items-center">
                  <button type="button" class="inline-block px-8 py-2 mb-4 ml-auto font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer text-xs tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">Editar</button>
                </div>
              </div>
              <div className="flex-auto p-6">
                <p className="leading-normal uppercase dark:text-white text-sm">
                  Informações de Usuário
                </p>
                <div className="flex flex-wrap -mx-3 mt-[20px]">
                  <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
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
                        value={user.name}
                        disabled
                        class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div class="mb-4">
                      <label
                        for="email"
                        class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        disabled
                        class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div class="mb-4">
                      <label
                        for="first name"
                        class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                      >
                        Documento
                      </label>
                      <input
                        type="text"
                        name="first name"
                        value={user.document}
                        disabled
                        class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div class="mb-4">
                      <label
                        for="last name"
                        class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                      >
                        Data de Nascimento
                      </label>
                      <input
                        type="text"
                        name="last name"
                        value={user.birthday}
                        disabled
                        class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div class="mb-4">
                      <label
                        for="last name"
                        class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                      >
                        CREF
                      </label>
                      <input
                        type="text"
                        name="last name"
                        value={user.employee.cref}
                        disabled
                        class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div class="mb-4">
                      <label
                        for="last name"
                        class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                      >
                        Sexo
                      </label>
                      <input
                        type="text"
                        name="last name"
                        value={(user.gender === "M") ? 'Masculino' : 'Feminino'}
                        disabled
                        class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div class="mb-4">
                      <label
                        for="last name"
                        class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                      >
                        Telefone
                      </label>
                      <input
                        type="text"
                        name="last name"
                        value={user.phone}
                        disabled
                        class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div class="w-full max-w-full px-3 shrink-0 md:w-6/12 md:flex-0">
                    <div class="mb-4">
                      <label
                        for="last name"
                        class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                      >
                        Ocupação
                      </label>
                      <input
                        type="text"
                        name="last name"
                        value={user.employee.occupation}
                        disabled
                        class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-[30px] ml-[10px]  leading-normal  dark:text-white dark:opacity-60 text-sm">
                <p className="uppercase"> Endereço </p> 
                  <div className="flex flex-wrap -mx-3">
                    <div className="mt-[20px] w-full max-w-full px-3 shrink-0 md:w-full md:flex-0">
                      <div class="mb-4">
                        <label
                          for="address"
                          class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        >
                          Rua
                        </label>
                        <input
                          type="text"
                          name="address"
                          value="15 de Novembro"
                          disabled
                          class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
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
                          value="São Paulo"
                          disabled
                          class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                      <div class="mb-4">
                        <label
                          for="country"
                          class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        >
                          Nº 
                        </label>
                        <input
                          type="text"
                          name="country"
                          value="58"
                          disabled
                          class="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div class="w-full max-w-full px-3 shrink-0 md:w-4/12 md:flex-0">
                      <div class="mb-4">
                        <label
                          for="country"
                          class="inline-block mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
                        >
                          Cep
                        </label>
                        <input
                          type="text"
                          name="country"
                          value="17230-020"
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
    </body>
  );
}
