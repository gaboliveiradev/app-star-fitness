import React, { useContext } from 'react';
import { IMaskInput } from 'react-imask';
import MainContext from '../context/MainContext';

export default function FormAddress() {

    const {
        zipCode, setZipCode,
        street, setStreet, district, setDistrict,
        number, setNumber, city, setCity,
        state, setState
    } = useContext(MainContext);

    return (
        <>
            <div className="sm:col-span-6 text-left">
                <label className="block font-bold text-[16px] text-black-700">
                    CEP
                </label>
                <div className="mt-1 flex rounded-md shadow-sm mb-[20px]">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <IMaskInput
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            mask='00.000-000'
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
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
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
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
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
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
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
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
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
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        type="text"
                        name="state"
                        id="state"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>
        </>
    )
}