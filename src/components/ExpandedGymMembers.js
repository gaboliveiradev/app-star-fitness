import React, { useContext } from 'react';
import { formatCPF, formatPhone } from './../utils/format';
import MainContext from './../context/MainContext';

export default function ExpandedeGymMembers({ data }) {

    return (
        <section>
            {/* =======@ DESKTOP @======= */}
            <article className='bg-white max-w-[862px] py-[30px] rounded-xl px-[30px] hidden lg:block'>
                <h1 className='text-[18px] font-bold'>Dados Pessoais</h1>
                <div class="flex flex-row p-6 text-gray-600">
                    <div className='pr-6'>
                        <div class="flex flex-row text-sm">
                            <span class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-square" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1"></path>
                                    <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
                                </svg>
                            </span>
                            <p class="flex items-center  text-gray-500">
                                <span class="font-semibold mr-2 text-xs uppercase">Nome:</span>
                                <span>{data.person.name}</span>
                            </p>
                        </div>
                        <div class="flex flex-row text-sm">
                            <span class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cake" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 20h18v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8z"></path>
                                    <path d="M3 14.803c.312 .135 .654 .204 1 .197a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1c.35 .007 .692 -.062 1 -.197"></path>
                                    <path d="M12 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z"></path>
                                </svg>
                            </span>
                            <p class="flex items-center  text-gray-500">
                                <span class="font-semibold mr-2 text-xs uppercase">Data de Nascimento:</span>
                                <span>{data.person.birthday}</span>
                            </p>
                        </div>
                        <div class="flex flex-row text-sm">
                            <span class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                </svg>
                            </span>
                            <p class="flex items-center  text-gray-500">
                                <span class="font-semibold mr-2 text-xs uppercase">Telefone:</span>
                                <span>{formatPhone(data.person.phone)}</span>
                            </p>
                        </div>
                        <div class="flex flex-row text-sm">
                            <span class="mr-3">
                                {
                                    (data.person.gender === "M") ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-male" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M10 14m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
                                            <path d="M19 5l-5.4 5.4"></path>
                                            <path d="M19 5h-5"></path>
                                            <path d="M19 5v5"></path>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-gender-female" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
                                            <path d="M12 14v7"></path>
                                            <path d="M9 18h6"></path>
                                        </svg>
                                    )
                                }
                            </span>
                            <p class="flex items-center  text-gray-500">
                                <span class="font-semibold mr-2 text-xs uppercase">Gênero:</span>
                                <span>{(data.person.gender === "M") ? 'Masculino' : 'Feminino'}</span>
                            </p>
                        </div>
                    </div>

                    <div className='pr-6'>
                        <div class="flex flex-row text-sm">
                            <span class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id-badge-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M7 12h3v4h-3z"></path>
                                    <path d="M10 6h-6a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-12a1 1 0 0 0 -1 -1h-6"></path>
                                    <path d="M10 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                                    <path d="M14 16h2"></path>
                                    <path d="M14 12h4"></path>
                                </svg>
                            </span>
                            <p class="flex items-center  text-gray-500">
                                <span class="font-semibold mr-2 text-xs uppercase">Documento:</span>
                                <span>{formatCPF(data.person.document)}</span>
                            </p>
                        </div>
                        <div class="flex flex-row text-sm">
                            <span class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-at" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                                </svg>
                            </span>
                            <p class="flex items-center  text-gray-500">
                                <span class="font-semibold mr-2 text-xs uppercase">Email:</span>
                                <span>{data.person.email}</span>
                            </p>
                        </div>
                        <div class="flex flex-row text-sm">
                            <span class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-line-height" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 8l3 -3l3 3"></path>
                                    <path d="M3 16l3 3l3 -3"></path>
                                    <path d="M6 5l0 14"></path>
                                    <path d="M13 6l7 0"></path>
                                    <path d="M13 12l7 0"></path>
                                    <path d="M13 18l7 0"></path>
                                </svg>
                            </span>
                            <p class="flex items-center  text-gray-500">
                                <span class="font-semibold mr-2 text-xs uppercase">Altura:</span>
                                <span>{data.height_cm}</span>
                            </p>
                        </div>
                        <div class="flex flex-row text-sm">
                            <span class="mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-weight" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                    <path d="M6.835 9h10.33a1 1 0 0 1 .984 .821l1.637 9a1 1 0 0 1 -.984 1.179h-13.604a1 1 0 0 1 -.984 -1.179l1.637 -9a1 1 0 0 1 .984 -.821z"></path>
                                </svg>
                            </span>
                            <p class="flex items-center  text-gray-500">
                                <span class="font-semibold mr-2 text-xs uppercase">Peso:</span>
                                <span>{formatCPF(data.weight_kg)}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            {/* =======@ MOBILE @======= */}
            <article className='bg-white py-[30px] rounded-xlmb-[40px] px-[30px] mx-[16px] lg:hidden'>
                oi mobile
            </article>
        </section>
    )
}