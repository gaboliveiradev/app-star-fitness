import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { IMaskInput } from 'react-imask';
import Swal from 'sweetalert2'

export default function AddNewAcademyPlans() {

    const { token, createType, getType } = useContext(AuthContext);
    const [isLoader, setIsLoader] = useState(false);

    const [plan, setPlan] = useState('');
    const [days, setDays] = useState('');
    const [price, setPrice] = useState('');

    const handleClickSave = async (e) => {
        e.preventDefault();
        setIsLoader(true);

        try {
            const response = await createType(token, plan, days, parseFloat(price.replace("R$", "").replace(",", ".")));

            if (response.status === 201) {
                await getType(token);

                /*Toast.fire({
                    icon: 'success',
                    title: 'Você registrou um novo plano da academia.'
                })*/

                Swal.fire({
                    icon: 'success',
                    title: 'Plano Criado',
                    html: 'Ihuul... Parabéns, você <b>criou</b> um novo plano da academia. Acesse \"<b>Planos da Academia/Meus Planos</b>\" para gerenciar seus planos'
                })

                clearUseState();

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
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível criar um novo plano.'
            })
        } finally {
            setIsLoader(false);
        }
    }

    const clearUseState = () => {
        setPlan('');
        setDays('');
        setPrice('');
    }

    return (
        <>
            {
                (isLoader) && (
                    <div class="z-10 absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                        <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
                    </div>
                )
            }
            <article className="flex-auto h-full mx-auto rounded-md w-full">
                <div>
                    <div className="flex-auto pb-[14px]">
                        <h1 class="title">Adicionar Plano</h1>
                        <ul class="breadcrumbs">
                            <li><a href="#">Principal</a></li>
                            <li class="divider">/</li>
                            <li><a href="#" class="active">Planos da Academia</a></li>
                            <li class="divider">/</li>
                            <li><a href="#" class="active">Adicionar Plano</a></li>
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
                                    value={plan}
                                    onChange={(e) => setPlan(e.target.value)}
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
                                    name="number_of_days"
                                    id="number_of_days"
                                    value={days}
                                    onChange={(e) => setDays(e.target.value)}
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

                    <div className="sm:col-span-6 flex justify-between">
                        <div className='m-[20px] absolute right-[20px] bottom-[20px] hover:cursor-pointer' onClick={(e) => handleClickSave(e)}>
                            <button class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                                <span relative="relative z-10">Salvar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}