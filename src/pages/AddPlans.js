import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { IMaskInput } from 'react-imask';
import Swal from 'sweetalert2'
import { MainContext } from "../context/Main";
import { TypeContext } from '../context/Type';

export default function AddNewAcademyPlans() {

    const { token, createType, getType } = useContext(AuthContext);
    const { setIsLoading, setIsLoadingText } = useContext(MainContext);

    const {
        idType,
        nameType, setNameType,
        numberOfDays, setNumberOfDays,
        price, setPrice, setIsUpdateType,
        isUpdateType,
        //methods
        updateType
    } = useContext(TypeContext);

    const handleClickUpdate = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsLoadingText('Cadastrando/Atualizando Plano...');

        try {
            if (nameType !== "" && numberOfDays !== "" && price !== "") {
                const parameters = {
                    idType: idType,
                    name: nameType,
                    number_of_days: numberOfDays,
                    price: parseFloat(price.replace("R$", "").replace(",", "."))
                }

                const response = await updateType(parameters);

                if (response.status === 200) {
                    await getType(token);

                    Swal.fire({
                        icon: 'success',
                        title: 'Plano Atualizado',
                    })

                    handleClickClearFields(e);

                    return;
                }

                if (response.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        html: 'Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível atualizar um plano.'
                    })

                    return;
                }
            }

            Swal.fire({
                icon: 'error',
                title: 'Campos Vazio!',
                html: 'Oops... Parece que <b>alguns campos</b> estão <b>VAZIOS</b>. Por favor, verifique e tente novamente'
            })
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível criar um novo plano.'
            })
        } finally {
            setIsLoading(false);
            setIsLoadingText("");
        }
    }

    const handleClickSave = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsLoadingText('Cadastrando Plano...');

        try {
            if (nameType !== "" && numberOfDays !== "" && price !== "") {
                const parameters = {
                    name: nameType,
                    number_of_days: numberOfDays,
                    price: parseFloat(price.replace("R$", "").replace(",", "."))
                }

                const response = await createType(parameters, token);

                if (response.status === 201) {
                    await getType(token);

                    Swal.fire({
                        icon: 'success',
                        title: 'Plano Criado',
                    })

                    handleClickClearFields(e);

                    return;
                }

                if (response.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        html: 'Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível criar um novo plano.'
                    })

                    return;
                }
            }

            Swal.fire({
                icon: 'error',
                title: 'Campos Vazio!',
                html: 'Oops... Parece que <b>alguns campos</b> estão <b>VAZIOS</b>. Por favor, verifique e tente novamente'
            })
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível criar um novo plano.'
            })
        } finally {
            setIsLoading(false);
            setIsLoadingText("");
        }
    }

    const handleClickClearFields = (e) => {
        e.preventDefault();

        setNameType('');
        setNumberOfDays('');
        setPrice('');

        setIsUpdateType(false);
    }

    return (
        <>
            <article className="flex-auto h-full mx-auto rounded-md w-full">
                <div>
                    <div className="flex-auto pb-[14px]">
                        <h1 class="title">{(isUpdateType) ? 'Atualizar' : 'Adicionar'} Plano</h1>
                        <ul class="breadcrumbs">
                            <li><span>Principal</span></li>
                            <li class="divider">/</li>
                            <li><span class="active">Planos da Academia</span></li>
                            <li class="divider">/</li>
                            <li><span class="active">{(isUpdateType) ? 'Atualizar' : 'Adicionar'} Plano</span></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-auto pb-[30px]">
                    <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-[16px] font-medium text-black-700">
                                Nome do Plano
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    value={nameType}
                                    onChange={(e) => setNameType(e.target.value)}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-[16px] font-medium text-black-700">
                                Quantidade de Dias P/Semana
                            </label>
                            <div className="mt-1">
                                <IMaskInput
                                    mask={Number}
                                    lazy={true}
                                    max={7}
                                    type="text"
                                    name="number_of_days"
                                    id="number_of_days"
                                    value={numberOfDays}
                                    onChange={(e) => setNumberOfDays(e.target.value)}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-[16px] font-medium text-black-700">
                                Valor Mensal
                            </label>
                            <div className="mt-1">
                                <IMaskInput
                                    mask="R$ num"
                                    blocks={{
                                        num: {
                                            mask: Number,
                                            scale: 2,
                                            thousandsSeparator: '.',
                                            radix: ',',
                                            max: 1000,
                                        },
                                    }}
                                    lazy={false} // True = Aplica a mascará após tirar o focus do input
                                    type="text"
                                    name="price"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6 flex justify-end">
                            <div className="my-[20px] flex flex-row hover:cursor-pointer">
                                <button onClick={(e) => {
                                    Swal.fire({
                                        title: 'Você tem Certeza?',
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        cancelButtonText: 'Cancelar',
                                        confirmButtonText: 'Sim, Limpar!'
                                    }).then(async (result) => {
                                        if (result.isConfirmed) {
                                            handleClickClearFields(e)
                                        }
                                    })
                                }} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Cancelar
                                </button>
                                <button onClick={(e) => (isUpdateType) ? handleClickUpdate(e) : handleClickSave(e)} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    {(isUpdateType) ? 'Atualizar' : 'Salvar'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}