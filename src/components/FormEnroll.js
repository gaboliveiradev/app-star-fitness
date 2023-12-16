import React, { useContext, useState } from 'react';
import { IMaskInput } from 'react-imask';

import { AuthContext } from '../context/Auth';
import { GymMemberContext } from '../context/GymMember';
import { BillingContext } from '../context/Billing';
import { formatMoney } from '../utils/format';
import { PaymentContext } from '../context/Payment';

export default function FormEnroll() {
    const { typeList } = useContext(AuthContext);

    const {
        idPlan, setIdPlan,
        isUpdate,
    } = useContext(GymMemberContext);

    const {
        invoiceDate, setInvoiceDate, dueDate, setDueDate,
    } = useContext(BillingContext);

    const {
        paymentMethod, setPaymentMethod, amount, setAmount,
        change, setChange, receivedAmount, setReceivedAmount,
    } = useContext(PaymentContext);

    return (
        <>
            <div className="sm:col-span-6">
                <label htmlFor="plan" className="block text-[16px] font-bold text-black-700">
                    Plano da Matrícula
                </label>
                <div className="mt-1">
                    <select
                        disabled={isUpdate}
                        name="plan" id="plan" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        value={idPlan}
                        onChange={(e) => {
                            setIdPlan(e.target.value);
                        }}
                    >
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
                <label htmlFor="invoiceDate" className="block text-[16px] font-bold text-black-700">
                    Data do Primeiro Pagamento
                </label>
                <div className="mt-1">
                    <input
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                        type="date"
                        disabled
                        name="invoiceDate"
                        id="invoiceDate"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="dueDate" className="block text-[16px] font-bold text-black-700">
                    Data da Proxíma Cobrança
                </label>
                <div className="mt-1">
                    <input
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        type="date"
                        disabled
                        name="dueDate"
                        id="dueDate"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-6">
                <label htmlFor="paymentMethod" className="block text-[16px] font-bold text-black-700">
                    Forma de Pagamento
                </label>
                <div className="mt-1">
                    <select
                        disabled={isUpdate}
                        name="plan" id="plan" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        value={paymentMethod}
                        onChange={(e) => {
                            setPaymentMethod(e.target.value);
                            (e.target.value === 'CREDIT_CARD') ? setAmount(parseFloat(typeList.filter(type => type.id == idPlan).map(type => type.price)) + parseFloat(4))
                            : (e.target.value === 'DEBIT_CARD') ? setAmount(parseFloat(typeList.filter(type => type.id == idPlan).map(type => type.price)) + parseFloat(2.5))
                            : (e.target.value === 'MONEY') ? setAmount(parseFloat(typeList.filter(type => type.id == idPlan).map(type => type.price))) 
                            : (e.target.value === 'PIX') && setAmount(parseFloat(typeList.filter(type => type.id == idPlan).map(type => type.price)))
                        }}
                    >
                        <option value='' disabled selected>--- Selecione ---</option>
                        <option value='CREDIT_CARD'>Cartão de Crédito</option>
                        <option value='DEBIT_CARD'>Cartão de Débito</option>
                        <option value='MONEY'>Dinheiro</option>
                        <option value='PIX'>PIX</option>
                    </select>
                </div>
            </div>

            <div className="sm:col-span-6">
                <div className="mt-1">
                    <div class="w-full flex mb-3 items-center">
                        <div class="flex-grow">
                            <span class="text-gray-600">Subtotal</span>
                        </div>
                        <div class="pl-3">
                            <span class="font-semibold">
                                {(idPlan === "") ? "R$ 00,00" : typeList.filter(type => type.id == idPlan).map(type => formatMoney(type.price))}
                            </span>
                        </div>
                    </div>
                    <div class="w-full flex items-center">
                        <div class="flex-grow">
                            <span class="text-gray-600">Taxas de Cartão</span>
                        </div>
                        <div class="pl-3">
                            <span class="font-semibold">
                                {
                                    (paymentMethod === "CREDIT_CARD") ? formatMoney(4)
                                    : (paymentMethod === "DEBIT_CARD") ? formatMoney(2.5)
                                    : (paymentMethod === "PIX" || paymentMethod === "MONEY") ? formatMoney(0) : "R$ 00,00"
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='sm:col-span-6 border-t-2 border-gray-300'></div>

            <div className="sm:col-span-6">
                <div class="border-b border-gray-200 md:border-none text-gray-800 text-xl">
                    <div class="w-full flex items-center">
                        <div class="flex-grow">
                            <span class="text-gray-600">Total</span>
                        </div>
                        <div class="pl-3">
                            <span class="font-semibold text-gray-400 text-sm">{(idPlan !== "" && paymentMethod !== "") && "BRL"}</span> <span class="font-semibold">{(idPlan === "" && paymentMethod === "") ? 'R$ 00,00' : formatMoney(amount)}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}