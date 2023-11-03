import React, { useContext, useRef } from 'react';
import axios from 'axios'; // Importe o módulo axios
import { IMaskInput } from 'react-imask';
import { AddressContext } from '../context/Address';
import Swal from 'sweetalert2'
import { Toast } from './../common/Toast';

export default function FormAddress() {

      // Create a ref for the number input field
      const numberInputRef = useRef(null);

    const {
        zipCode, setZipCode,
        street, setStreet, district, setDistrict,
        number, setNumber, city, setCity,
        state, setState,
    } = useContext(AddressContext);

    const handleClickZipcode = async (e) => {
        e.preventDefault();

        if (zipCode === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Porfavor, informe <b>um CEP válido</b> para continuar. Caso não saiba o seu, clique em <b>\"Não sei meu CEP\"</b>.'
            })

            return;
        }

        if (zipCode !== "") {
            try {
                axios.get(`http://viacep.com.br/ws/${zipCode.replace(/[.-]/g, "")}/json/`)
                    .then((res) => {
                        setDistrict(res.data.bairro);
                        setCity(res.data.localidade);
                        setStreet(res.data.logradouro);
                        setState(res.data.uf);

                        if (res.data.hasOwnProperty('erro')) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                html: 'Ocorreu um erro inesperado ao tentar <b>buscar os dados do seu CEP</b>, por favor <b>verifique</b> o número informado.'
                            })
                        } else {
                            Toast.fire({
                                icon: 'success',
                                title: 'CEP ENCONTRADO!'
                            })

                            numberInputRef.current.focus();
                        }
                    })
            } catch {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: 'Ocorreu um erro inesperado ao tentar <b>buscar os dados do seu CEP</b>, por favor <b>tente novamente</b> mais tarde.'
                })
            }

            return;
        }
    }

    return (
        <>
            <div className="sm:col-span-6 text-left">
                <label className="block font-bold text-[16px] text-black-700">
                    CEP *
                </label>
                <div className="mt-1 flex rounded-md shadow-sm mb-[20px]">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                        <IMaskInput
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            mask='00.000-000'
                            placeholder='99.999-999'
                            type="text"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        />
                    </div>
                    <button
                        onClick={(e) => handleClickZipcode(e)}
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
                    Logradouro *
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
                    Bairro *
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
                    Número *
                </label>
                <div className="mt-1">
                    <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="text"
                        name="number"
                        id="number"
                        ref={numberInputRef} 
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="city" className="block font-bold text-[16px] text-black-700">
                    Cidade *
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
                    Estado *
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