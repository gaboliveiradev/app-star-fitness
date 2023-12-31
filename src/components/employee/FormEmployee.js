import React, { useContext } from 'react';
import { IMaskInput } from 'react-imask';

import { EmployeeContext } from '../../context/Employee';
import { PersonContext } from '../../context/Person';
import { AuthContext } from '../../context/Auth';

export default function FormEmployee() {

    const {
        cref, setCref, idAccessGroup, setIdAccessGroup,
        observation, setObservation, isUpdate
    } = useContext(EmployeeContext);

    const {
        nameEmployee, setNameEmployee,
        emailEmployee, setEmailEmployee,
        documentEmployee, setDocumentEmployee,
        phoneEmployee, setPhoneEmployee,
        birthdayEmployee, setBirthdayEmployee,
        genderEmployee, setGenderEmployee,
        password, setPassword,
    } = useContext(PersonContext);

    const { accessGroupList } = useContext(AuthContext);

    return (
        <>
            <div className="sm:col-span-3">
                <label htmlFor="name" className="block font-bold text-[16px] text-black-700">
                    Nome *
                </label>
                <div className="mt-1">
                    <input
                        value={nameEmployee}
                        onChange={(e) => setNameEmployee(e.target.value)}
                        type="text"
                        name="name"
                        id="name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>


            <div className="sm:col-span-3">
                <label htmlFor="email" className="block font-bold text-[16px] text-black-700">
                    Email *
                </label>
                <div className="mt-1">
                    <input
                        value={emailEmployee}
                        onChange={(e) => setEmailEmployee(e.target.value)}
                        type="text"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="document" className="block font-bold text-[16px] text-black-700">
                    Documento/CPF *
                </label>
                <div className="mt-1">
                    <IMaskInput
                        mask='000.000.000-00'
                        placeholder='999.999.999-99'
                        lazy={true}
                        value={documentEmployee}
                        onChange={(e) => setDocumentEmployee(e.target.value)}
                        type="text"
                        name="document"
                        id="document"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="phone" className="block font-bold text-[16px] text-black-700">
                    Telefone *
                </label>
                <div className="mt-1">
                    <IMaskInput
                        mask='(00) 00000-0000'
                        placeholder='(99) 99999-9999'
                        lazy={true}
                        value={phoneEmployee}
                        onChange={(e) => setPhoneEmployee(e.target.value)}
                        type="text"
                        name="phone"
                        id="phone"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="birthday" className="block font-bold text-[16px] text-black-700">
                    Data de Nasc. *
                </label>
                <div className="mt-1">
                    <input
                        value={birthdayEmployee}
                        onChange={(e) => setBirthdayEmployee(e.target.value)}
                        type="date"
                        name="birthday"
                        id="birthday"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="gender" className="block font-bold text-[16px] text-black-700">
                    Sexo *
                </label>
                <div className="mt-1">
                    <select
                        value={genderEmployee}
                        onChange={(e) => setGenderEmployee(e.target.value)}
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

            <div className="sm:col-span-1">
                <label htmlFor="cref" className="block font-bold text-[16px] text-black-700">
                    CREF *
                </label>
                <div className="mt-1">
                    <input
                        value={cref}
                        onChange={(e) => setCref(e.target.value)}
                        type="text"
                        name="cref"
                        id="cref"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="gender" className="block font-bold text-[16px] text-black-700">
                    Grupo de Acesso *
                </label>
                <div className="mt-1">
                    <select
                        value={idAccessGroup}
                        onChange={(e) => setIdAccessGroup(e.target.value)}
                        name="occupation"
                        id="occupation"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    >
                        <option value={""} selected disabled>--- Escolha ---</option>
                        {
                            accessGroupList.map(accessGroup => (
                                <option value={accessGroup.id}>{accessGroup.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="sm:col-span-6">
                <label htmlFor="password" className="block font-bold text-[16px] text-black-700">
                    Senha de Acesso *
                </label>
                <div className="mt-1">
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        disabled={isUpdate}
                        id="password"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-6">
                <label htmlFor="observation" className="block font-bold text-[16px] text-black-700">
                    Observação
                </label>
                <div className="mt-1">
                    <textarea
                        value={observation}
                        onChange={(e) => setObservation(e.target.value)}
                        type="text"
                        rows={6}
                        name="observation"
                        id="observation"
                        className="resize-none block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>
        </>
    )
}