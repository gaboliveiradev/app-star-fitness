import React, { useContext } from 'react';

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
        paymentMethod, setPaymentMethod, setAmount
    } = useContext(PaymentContext);

    return (
        <>
            <div className="sm:col-span-6">
                <label htmlFor="plan" className="block text-[16px] font-bold text-black-700">
                    Plano da Matrícula
                </label>
                <div className="mt-1">
                    <select
                        name="plan" id="plan" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        value={idPlan}
                        onChange={(e) => setIdPlan(e.target.value)}
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
                    Data de Inicio
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
                    Data de Vencimento
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
                        <button disabled={idPlan === null || idPlan === ''} onClick={() => {
                            setPaymentMethod('CREDIT_CARD');
                            setAmount(typeList.filter(type => type.id === idPlan).map(type => parseFloat(type.price) + parseFloat(4)));
                        }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                            <div class={`${paymentMethod === 'CREDIT_CARD' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-400 border`}>
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">{typeList.filter(type => type.id === idPlan).map(type => formatMoney(parseFloat(type.price) + parseFloat(4)))}</h2>
                                <p class="leading-relaxed text-black-100 font-bold">Crédito <span className="text-green-500">(+ R$ 4,00)</span></p>
                            </div>
                        </button>
                        <button disabled={idPlan === null || idPlan === ''} onClick={() => {
                            setPaymentMethod('DEBIT_CARD');
                            setAmount(typeList.filter(type => type.id === idPlan).map(type => parseFloat(type.price) + parseFloat(2.50)));
                        }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                            <div class={`${paymentMethod === 'DEBIT_CARD' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-400 border`}>
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">{typeList.filter(type => type.id === idPlan).map(type => formatMoney(parseFloat(type.price) + parseFloat(2.50)))}</h2>
                                <p class="leading-relaxed text-black font-bold">Débito <span className="text-green-500">(+ R$ 2,50)</span></p>
                            </div>
                        </button>
                        <button disabled={idPlan === null || idPlan === ''} onClick={() => {
                            setPaymentMethod('PIX');
                            setAmount(typeList.filter(type => type.id === idPlan).map(type => type.price));
                        }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                            <div class={`${paymentMethod === 'PIX' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-400 border`}>
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">{typeList.filter(type => type.id === idPlan).map(type => formatMoney(type.price))}</h2>
                                <p class="leading-relaxed text-black font-bold">PIX</p>
                            </div>
                        </button>
                        <button disabled={idPlan === null || idPlan === ''} onClick={() => {
                            setPaymentMethod('MONEY');
                            setAmount(typeList.filter(type => type.id === idPlan).map(type => type.price));
                        }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                            <div class={`${paymentMethod === 'MONEY' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-400 border`}>
                                <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">{typeList.filter(type => type.id === idPlan).map(type => formatMoney(type.price))}</h2>
                                <p class="leading-relaxed text-black font-bold">Dinheiro</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className='sm:col-span-6 border-t-2 border-gray-300'></div>
        </>
    )
}