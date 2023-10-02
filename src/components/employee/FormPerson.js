import React, { useContext } from 'react';
import { IMaskInput } from 'react-imask';
import MainContext from '../../context/MainContext';

export default function FormPerson() {

    const {
        name, setName, email, setEmail,
        document, setDocument, phone, setPhone, birthday, setBirthday,
        gender, setGender, cref, setCref, occupation, setOccupation,
        observation, setObservation
    } = useContext(MainContext);

    return (
        <>
            <div className="sm:col-span-3">
                <label htmlFor="name" className="block font-bold text-[16px] text-black-700">
                    Nome *
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
                    Email *
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
                    Documento *
                </label>
                <div className="mt-1">
                    <IMaskInput
                        mask='000.000.000-00'
                        placeholder='999.999.999-99'
                        lazy={true}
                        value={document}
                        onChange={(e) => setDocument(e.target.value)}
                        type="text"
                        name="document"
                        id="document"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>
        </>
    )
}