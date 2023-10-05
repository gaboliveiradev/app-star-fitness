import React, { useContext } from 'react';
import { IMaskInput } from 'react-imask';
import PersonContext from './../context/PersonContext';



export default function RedefinePassword() {

    const {
        document, setDocument, password, setPassword
    } = useContext(PersonContext);

    return (
        <>
            <article className="flex-auto h-full mx-auto rounded-md w-ful">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-auto pb-[14px]">
                        <h1 className="title">Recuperar Acesso</h1>
                        <ul className="breadcrumbs">
                            <li><a href="#">Aluno</a></li>
                            <li class="divider">/</li>
                            <li><a href="#" class="active">Recuperar Acesso</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-6">
                        <label htmlFor="document" className="block font-bold text-[16px] text-black-700">
                            Documento *
                        </label>
                        <div className="mt-1">
                            <IMaskInput
                                mask='000.000.000-00'
                                placeholder='999.999.999-99'
                                lazy={true}
                                value={document}
                                //onChange={(e) => setDocument(e.target.value)}
                                type="text"
                                name="document"
                                id="document"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Segunda coluna */}
                    <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="document" className="block font-bold text-[16px] text-black-700">
                                Senha *
                            </label>
                            <div className="mt-1">
                                {/* O seu campo de senha aqui */}
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Primeira coluna */}
                    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mt-[20px]">
                        <input
                            id="bordered-radio-1"
                            type="radio"
                            value=""
                            name="bordered-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="bordered-radio-1"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Senha Aleatória
                        </label>
                    </div>

                    
                </div>



            </article>
        </>
    )
}