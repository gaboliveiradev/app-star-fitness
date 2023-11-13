import React, { useContext } from "react";
import { AuthContext } from "./../context/Auth";
import { capitalizeFirstLetter } from "../utils/format";

import { IMaskInput } from 'react-imask';

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="rounded-xl flex flex-col flex-auto min-w-0 overflow-hidden break-words bg-tertiary-blue border-0 ">
        <div className="flex flex-wrap">
          <div className="flex-none w-auto max-w-full p-6">
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

      <div className="flex flex-row justify-end pt-6">
        <button class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Cancelar
        </button>
        <button class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Editar
        </button>
      </div>

      <div className="mt-6 text-[22px] font-bold text-tertiary-blue">
        Dados Pessoais
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="name" className="block font-bold text-[16px] text-black-700">
            Nome
          </label>
          <div className="mt-1">
            <input
              value={user.name}
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>


        <div className="sm:col-span-3">
          <label htmlFor="email" className="block font-bold text-[16px] text-black-700">
            Email
          </label>
          <div className="mt-1">
            <input
              value={user.email}
              type="text"
              name="email"
              id="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="document" className="block font-bold text-[16px] text-black-700">
            Documento/CPF
          </label>
          <div className="mt-1">
            <IMaskInput
              mask='000.000.000-00'
              placeholder='999.999.999-99'
              lazy={true}
              value={user.setDocument}
              type="text"
              name="document"
              id="document"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="cref" className="block font-bold text-[16px] text-black-700">
            CREF
          </label>
          <div className="mt-1">
            <IMaskInput
              lazy={true}
              value={user.employee.cref}
              type="text"
              name="cref"
              id="cref"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phone" className="block font-bold text-[16px] text-black-700">
            Telefone
          </label>
          <div className="mt-1">
            <IMaskInput
              mask='(00) 00000-0000'
              placeholder='(99) 99999-9999'
              lazy={true}
              value={user.phone}
              type="text"
              name="phone"
              id="phone"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="birthday" className="block font-bold text-[16px] text-black-700">
            Data de Nasc.
          </label>
          <div className="mt-1">
            <input
              value={user.birthday}
              type="date"
              name="birthday"
              id="birthday"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="gender" className="block font-bold text-[16px] text-black-700">
            Sexo
          </label>
          <div className="mt-1">
            <select
              value={user.gender}
              name="gender"
              id="gender"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            >
              <option value={""} selected disabled>Escolha</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="observation" className="block font-bold text-[16px] text-black-700">
            Observação
          </label>
          <div className="mt-1">
            <textarea
              value={user.employee.observation}
              type="text"
              rows={6}
              name="observation"
              id="observation"
              className="resize-none block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 text-[22px] font-bold text-tertiary-blue">
        Endereço Principal
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-6 text-left">
          <label className="block font-bold text-[16px] text-black-700">
            CEP
          </label>
          <div className="mt-1 flex rounded-md shadow-sm mb-[20px]">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <IMaskInput
                mask='00000-000'
                placeholder='99999-999'
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
              />
            </div>
            <button
              type="button"
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-primary-blue bg-primary-blue px-4 py-2 text-sm font-medium text-white hover:opacity-80"
            >
              OK
            </button>
          </div>
          <a target='_blank' href="https://buscacepinter.correios.com.br/app/endereco/index.php" rel="noreferrer" className='text-[16px] text-gray-400 underline '>Não sei meu CEP</a>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="street" className="block text-[16px] font-bold text-black-700">
            Logradouro
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="street"
              id="street"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-5">
          <label htmlFor="district" className="block text-[16px] font-bold text-black-700">
            Bairro
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="district"
              id="district"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="number" className="block text-[16px] font-bold text-black-700">
            Número
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="number"
              id="number"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="city" className="block font-bold text-[16px] text-black-700">
            Cidade
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="city"
              id="city"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="state" className="block font-bold text-[16px] text-black-700">
            Estado
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="state"
              id="state"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>
      </div>
    </>
  );
}
