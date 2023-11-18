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
                        disabled={isUpdate}
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
                        disabled={isUpdate}
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
                    <div class="flex flex-wrap -m-4 text-center">
                        <button disabled={idPlan === null || idPlan === '' || isUpdate} onClick={() => {
                            setPaymentMethod('CREDIT_CARD');
                            setChange("");
                            setReceivedAmount("");
                            typeList.filter(type => type.id === idPlan).map(type => setAmount(parseFloat(type.price) + parseFloat(4)));
                        }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                            <div class={`${paymentMethod === 'CREDIT_CARD' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-300 border`}>
                                <p class="leading-relaxed text-black-100 font-bold">Crédito</p>
                            </div>
                        </button>
                        <button disabled={idPlan === null || idPlan === '' || isUpdate} onClick={() => {
                            setPaymentMethod('DEBIT_CARD');
                            setChange("");
                            setReceivedAmount("");
                            typeList.filter(type => type.id === idPlan).map(type => setAmount(parseFloat(type.price) + parseFloat(2.50)));
                        }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                            <div class={`${paymentMethod === 'DEBIT_CARD' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-300 border`}>
                                <p class="leading-relaxed text-black font-bold">Débito</p>
                            </div>
                        </button>
                        <button disabled={idPlan === null || idPlan === '' || isUpdate} onClick={() => {
                            setPaymentMethod('PIX');
                            setChange("");
                            setReceivedAmount("");
                            typeList.filter(type => type.id === idPlan).map(type => setAmount(type.price));
                        }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                            <div class={`${paymentMethod === 'PIX' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-300 border`}>
                                <p class="leading-relaxed text-black font-bold">PIX</p>
                            </div>
                        </button>
                        <button disabled={idPlan === null || idPlan === '' || isUpdate} onClick={() => {
                            setPaymentMethod('MONEY');
                            setChange("");
                            setReceivedAmount("");
                            typeList.filter(type => type.id === idPlan).map(type => setAmount(type.price));
                        }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                            <div class={`${paymentMethod === 'MONEY' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-300 border`}>
                                <p class="leading-relaxed text-black font-bold">Dinheiro</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="receivedAmount" className="block text-[16px] font-bold text-black-700">
                    Valor Recebido
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
                        lazy={false}
                        type="text"
                        disabled={isUpdate || paymentMethod !== 'MONEY'}
                        value={receivedAmount}
                        onChange={(e) => {
                            if (parseFloat(e.target.value.replace("R$", "").replace(",", ".")) >= amount) {
                                setReceivedAmount(e.target.value.replace("R$", "").replace(",", "."));
                                setChange(formatMoney(parseFloat(e.target.value.replace("R$", "").replace(",", ".")) - parseFloat(amount)));

                                return
                            }
                        }}
                        name="receivedAmount"
                        id="receivedAmount"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="change" className="block text-[16px] font-bold text-black-700">
                    Troco
                </label>
                <div className="mt-1">
                    <input
                        type="text"
                        disabled
                        name="change"
                        id="change"
                        value={change}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                    />
                </div>
            </div>

            <div className="sm:col-span-6">
                <div className="mt-1">
                    <div class="w-full flex mb-3 items-center">
                        <div class="flex-grow">
                            <span class="text-gray-600">Item</span>
                        </div>
                        <div class="pl-3">
                            <span class="font-semibold">{(idPlan === "") ? "Não Informado" : typeList.filter(type => type.id === idPlan).map(type => (type.name))}</span>
                        </div>
                    </div>
                    <div class="w-full flex mb-3 items-center">
                        <div class="flex-grow">
                            <span class="text-gray-600">Qnt. Dias</span>
                        </div>
                        <div class="pl-3">
                            <span class="font-semibold">{(idPlan === "") ? "Não Informado" : typeList.filter(type => type.id === idPlan).map(type => (type.number_of_days + "x na Semana"))}</span>
                        </div>
                    </div>
                    <div class="w-full flex mb-3 items-center">
                        <div class="flex-grow">
                            <span class="text-gray-600">Subtotal</span>
                        </div>
                        <div class="pl-3">
                            <span class="font-semibold">
                                {(idPlan === "") ? "Não Informado" : typeList.filter(type => type.id === idPlan).map(type => formatMoney(type.price))}
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
                                    : (paymentMethod === "PIX" || paymentMethod === "MONEY") ? formatMoney(0) : "Não Informado"
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
                            <span class="font-semibold text-gray-400 text-sm">{(idPlan !== "" && paymentMethod !== "") && "BRL"}</span> <span class="font-semibold">{(idPlan === "" && paymentMethod === "") ? 'Não Informado' : formatMoney(amount)}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}