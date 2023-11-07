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
        isUpdateType
    } = useContext(TypeContext)

    const handleClickUpdate = async (e) => {
        e.preventDefault();

        alert('Atualizar');
    }

    const handleClickSave = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setIsLoadingText('Cadastrando Plano...');

        try {
            if(nameType !== "" && numberOfDays !== "" && price !== "") {
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
                        html: 'Ihuul... Parabéns, você <b>criou</b> um novo plano da academia. Acesse \"<b>Planos da Academia/Meus Planos</b>\" para gerenciar seus planos'
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
                    </div>

                    <div className="mt-[16px] border-solid border-bottom border-2"></div>

                    <div className="sm:col-span-6 flex justify-between flex-wrap">
                        <div className='my-[16px] hover:cursor-pointer'>
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
                            }} class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-tertiary-red bg-tertiary-red text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-tertiary-red hover:before:-translate-x-40">
                                <span relative="relative z-10">Limpar</span>
                            </button>
                        </div>
                        <div className='my-[16px] hover:cursor-pointer' onClick={(e) => (isUpdateType) ? handleClickUpdate(e) : handleClickSave(e)}>
                            <button class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                                <span relative="relative z-10">{(isUpdateType) ? 'Atualizar' : 'Salvar'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}