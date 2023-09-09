import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export default function FormEnroll() {
    const { typeList } = useContext(AuthContext);

    return (
        <>
            <div className="sm:col-span-6">
                <label htmlFor="plan" className="block text-[16px] font-bold text-black-700">
                    Plano da Matrícula
                </label>
                <div className="mt-1">
                    <select name="plan" id="plan" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear">
                        <option value='' disabled selected>--- Selecione ---</option>
                        {
                            typeList.filter(type => type.active === 1).map(type => (
                                <option value={type.id}>{type.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="district" className="block text-[16px] font-bold text-black-700">
                    Data de Inicio
                </label>
                <div className="mt-1">
                    <input
                        type="date"
                        name="district"
                        id="district"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="number" className="block text-[16px] font-bold text-black-700">
                    Data de Vencimento
                </label>
                <div className="mt-1">
                    <input
                        type="date"
                        name="number"
                        id="number"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>
        </>
    )
}