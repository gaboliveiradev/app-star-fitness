import React, { useContext, useState } from "react";
import { AuthContext } from "./../context/Auth";
import { capitalizeFirstLetter } from "../utils/format";

import { IMaskInput } from 'react-imask';

export default function MyProfile() {
  const { user } = useContext(AuthContext);

  const [isEdit, setIsEdit] = useState(false);

  const [photoUrl, setPhotoUrl] = useState(user.photo_url);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [occupation, setOccupation] = useState(user.employee.occupation);
  const [document, setDocument] = useState(user.document);
  const [cref, setCref] = useState(user.employee.cref);
  const [phone, setPhone] = useState(user.phone);
  const [birthday, setBirthday] = useState(user.birthday);
  const [gender, setGender] = useState(user.gender);
  const [observation, setObservation] = useState(user.employee.observation);

  const [zipCode, setZipCode] = useState(user.address.zip_code);
  const [street, setStreet] = useState(user.address.street);
  const [district, setDistrict] = useState(user.address.district);
  const [number, setNumber] = useState(user.address.number);
  const [city, setCity] = useState(user.address.city);
  const [state, setState] = useState(user.address.state);

  const handleClickCancelEdit = async (e) => {
    e.preventDefault();
    setIsEdit(false);

    setPhotoUrl(user.photo_url);
    setName(user.name);
    setEmail(user.email);
    setOccupation(user.employee.occupation);
    setDocument(user.document);
    setCref(user.employee.cref);
    setPhone(user.phone);
    setBirthday(user.birthday);
    setGender(user.gender);
    setObservation(user.employee.observation);

    setZipCode(user.address.zip_code);
    setStreet(user.address.street);
    setDistrict(user.address.district);
    setNumber(user.address.number);
    setCity(user.address.city);
    setState(user.address.state);
  }

  return (
    <>
      <div className="rounded-xl flex flex-col flex-auto min-w-0 overflow-hidden break-words bg-tertiary-blue border-0 ">
        <div className="flex flex-wrap">
          <div className="flex-none w-auto max-w-full p-6">
            <div className="relative inline-flex items-center justify-center text-white transition-all duration-200 ease-in-out text-base h-19 w-19 rounded-xl">
              <img
                src={photoUrl}
                alt="profile_image"
                className="w-full shadow-2xl rounded-xl"
              />
            </div>
          </div>
          <div className="flex-none w-auto max-w-full px-3 my-auto">
            <div className="h-full">
              <h5 className="mb-1 text-white font-medium">{name}</h5>
              <p class="mb-0 font-semibold leading-normal text-white dark:opacity-60 text-sm">
                {capitalizeFirstLetter(occupation)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end pt-6">
        <button onClick={(e) => handleClickCancelEdit(e)} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Cancelar
        </button>
        <button onClick={() => setIsEdit(true)} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          {
            !isEdit ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            )
          }
          {!isEdit ? 'Editar' : 'Salvar'}
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
              value={name}
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
              disabled={!isEdit}
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
              value={email}
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEdit}
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
              value={document}
              type="text"
              onChange={(e) => setDocument(e.target.value)}
              name="document"
              disabled={!isEdit}
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
              disabled={!isEdit}
              value={cref}
              onChange={(e) => setCref(e.target.value)}
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
              disabled={!isEdit}
              mask='(00) 00000-0000'
              placeholder='(99) 99999-9999'
              lazy={true}
              value={phone}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
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
              disabled={!isEdit}
              value={birthday}
              type="date"
              onChange={(e) => setBirthday(e.target.value)}
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
              disabled={!isEdit}
              value={gender}
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
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
              disabled={!isEdit}
              value={observation}
              type="text"
              rows={6}
              onChange={(e) => setObservation(e.target.value)}
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
                disabled={!isEdit}
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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
              disabled={!isEdit}
              type="text"
              name="street"
              Value={street}
              onChange={(e) => setStreet(e.target.value)}
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
              disabled={!isEdit}
              type="text"
              name="district"
              Value={district}
              onChange={(e) => setDistrict(e.target.value)}
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
              disabled={!isEdit}
              type="text"
              name="number"
              id="number"
              Value={number}
              onChange={(e) => setNumber(e.target.value)}
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
              disabled={!isEdit}
              type="text"
              name="city"
              id="city"
              Value={city}
              onChange={(e) => setCity(e.target.value)}
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
              disabled={!isEdit}
              type="text"
              name="state"
              id="state"
              Value={state}
              onChange={(e) => setState(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
            />
          </div>
        </div>
      </div>
    </>
  );
}
