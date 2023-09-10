import React, { useContext, useState } from 'react';
import MainContext from '../context/MainContext';

export default function FormPersonData() {

    const {
        name, setName, email, setEmail,
        document, setDocument, phone, setPhone,
        birthday, setBirthday, gender, setGender,
        height, setHeight, weight, setWeight,
        observation, setObservation
    } = useContext(MainContext);

    return (
        <>
            <div className="sm:col-span-3">
                <label htmlFor="name" className="block font-bold text-[16px] text-black-700">
                    Nome
                </label>
                <div className="mt-1">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="document" className="block font-bold text-[16px] text-black-700">
                    Documento
                </label>
                <div className="mt-1">
                    <input
                        value={document}
                        onChange={(e) => setDocument(e.target.value)}
                        type="text"
                        name="document"
                        id="document"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="phone" className="block font-bold text-[16px] text-black-700">
                    Telefone
                </label>
                <div className="mt-1">
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        name="phone"
                        id="phone"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="birthday" className="block font-bold text-[16px] text-black-700">
                    Data de Nascimento
                </label>
                <div className="mt-1">
                    <input
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        type="text"
                        name="birthday"
                        id="birthday"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="gender" className="block font-bold text-[16px] text-black-700">
                    Sexo
                </label>
                <div className="mt-1">
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        name="gender"
                        id="gender"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    >
                        <option value={null} selected disabled>Escolha</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="height" className="block font-bold text-[16px] text-black-700">
                    Altura
                </label>
                <div className="mt-1">
                    <input
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        type="text"
                        name="height"
                        id="height"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-1">
                <label htmlFor="weight" className="block font-bold text-[16px] text-black-700">
                    Peso
                </label>
                <div className="mt-1">
                    <input
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        type="text"
                        name="weight"
                        id="weight"
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