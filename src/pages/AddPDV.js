import React, { useContext } from 'react';

import { AuthContext } from '../context/Auth';
import { GymMemberContext } from '../context/GymMember';
import { BillingContext } from '../context/Billing';
import { formatMoney } from '../utils/format';
import { PaymentContext } from '../context/Payment';
import Search from "../components/training/Search";

export default function AddPDV() {
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
            <article className="flex-auto h-full mx-auto rounded-md w-full">
                <div>
                    <div className="flex-auto pb-[14px]">
                        <h1 class="title">Ponto de Venda</h1>
                        <ul class="breadcrumbs">
                            <li>
                                <span>Principal</span>
                            </li>
                            <li class="divider">/</li>
                            <li>
                                <span class="active">PDV</span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="mt-[30px] flex-auto pb-[30px]">
                    <Search />

                </div>
                <div className="sm:col-span-6">
                    <label htmlFor="paymentMethod" className="block text-[16px] font-bold text-black-700">
                        Forma de Pagamento
                    </label>
                    <div className="mt-1">
                        <div class="flex flex-wrap -m-4 text-center">
                            <button disabled={idPlan === null || idPlan === '' || isUpdate} onClick={() => {
                                setPaymentMethod('CREDIT_CARD');
                                typeList.filter(type => type.id === idPlan).map(type => setAmount(parseFloat(type.price) + parseFloat(4)));
                            }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                                <div class={`${paymentMethod === 'CREDIT_CARD' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-400 border`}>
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">{typeList.filter(type => type.id === idPlan).map(type => formatMoney(parseFloat(type.price) + parseFloat(4)))}</h2>
                                    <p class="leading-relaxed text-black-100 font-bold">Crédito <span className="text-green-500">(+ R$ 4,00)</span></p>
                                </div>
                            </button>
                            <button disabled={idPlan === null || idPlan === '' || isUpdate} onClick={() => {
                                setPaymentMethod('DEBIT_CARD');
                                typeList.filter(type => type.id === idPlan).map(type => setAmount(parseFloat(type.price) + parseFloat(2.50)));
                            }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                                <div class={`${paymentMethod === 'DEBIT_CARD' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-400 border`}>
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">{typeList.filter(type => type.id === idPlan).map(type => formatMoney(parseFloat(type.price) + parseFloat(2.50)))}</h2>
                                    <p class="leading-relaxed text-black font-bold">Débito <span className="text-green-500">(+ R$ 2,50)</span></p>
                                </div>
                            </button>
                            <button disabled={idPlan === null || idPlan === '' || isUpdate} onClick={() => {
                                setPaymentMethod('PIX');
                                typeList.filter(type => type.id === idPlan).map(type => setAmount(type.price));
                            }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                                <div class={`${paymentMethod === 'PIX' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-400 border`}>
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">{typeList.filter(type => type.id === idPlan).map(type => formatMoney(type.price))}</h2>
                                    <p class="leading-relaxed text-black font-bold">PIX</p>
                                </div>
                            </button>
                            <button disabled={idPlan === null || idPlan === '' || isUpdate} onClick={() => {
                                setPaymentMethod('MONEY');
                                typeList.filter(type => type.id === idPlan).map(type => setAmount(type.price));
                            }} class="cursor-pointer p-4 sm:w-1/4 w-1/2">
                                <div class={`${paymentMethod === 'MONEY' ? 'bg-green-200' : 'bg-transparent'} rounded-lg p-2 xl:p-6 border-gray-400 border`}>
                                    <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">{typeList.filter(type => type.id === idPlan).map(type => formatMoney(type.price))}</h2>
                                    <p class="leading-relaxed text-black font-bold">Dinheiro</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}