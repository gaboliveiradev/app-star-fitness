import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { GymMemberContext } from "../context/GymMember";
import { BillingContext } from "../context/Billing";
import { formatCPF, formatMoney } from "../utils/format";
import { PaymentContext } from "../context/Payment";
import { IMaskInput } from 'react-imask';
import { Toast } from './../common/Toast';
import Swal from 'sweetalert2'

export default function AddPDC() {

  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [changeAmount, setChangeAmount] = useState(0);

  const { typeList, gymMembersList } = useContext(AuthContext);
  const { idPlan, setIdPlan, isUpdate } = useContext(GymMemberContext);
  const { invoiceDate, setInvoiceDate, dueDate, setDueDate } = useContext(BillingContext);
  const { paymentMethod, setPaymentMethod } = useContext(PaymentContext);

  const [document, setDocument] = useState('');
  const [currentGymMember, setCurrentGymMember] = useState([]);

  const handleClickSearchGymMemberByDocument = async (e) => {
    e.preventDefault();

    let item = gymMembersList.filter(gymMember => gymMember.person.document == document);

    if (item.length <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: `<strong>Não foi possível</strong> encontrar um aluno <strong>pelo CPF ${formatCPF(document)}</strong>, por favor, verifique os dados e tente novamente.`
      })

      return;
    }

    Toast.fire({
      icon: 'success',
      title: 'Aluno encontrado.'
    })

    console.log(item[0]);

    setCurrentGymMember(item[0]);
  }

  const handleClickConfirmPayment = async (e) => {
    e.preventDefault();
  }

  const handleClickClear = async (e) => {
    e.preventDefault();
  }

  return (
    <>
      <article className="flex-auto h-full mx-auto rounded-md w-full">
        <div>
          <div className="flex-auto pb-[14px]">
            <h1 class="title">Ponto de Cobrança</h1>
            <ul class="breadcrumbs">
              <li>
                <span>Principal</span>
              </li>
              <li class="divider">/</li>
              <li>
                <span class="active">Ponto de Cobrança</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[30px] flex-auto pb-[30px]">
          <div className="sm:col-span-6 text-left">
            <label className="block font-bold text-[16px] text-black-700">
              CPF do Aluno *
            </label>
            <div className="mt-1 flex rounded-md shadow-sm mb-[20px]">
              <div className="relative flex flex-grow items-stretch focus-within:z-10">
                <IMaskInput
                  mask='000.000.000-00'
                  placeholder='999.999.999-99'
                  value={document}
                  onChange={(e) => setDocument(e.target.value.replace(/[^0-9]/g, ''))}
                  type="text"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                />
              </div>
              <button
                onClick={(e) => {
                  if (document.length > 11 || document.length < 11) {
                    Toast.fire({
                      icon: 'error',
                      title: 'O CPF precisa ter 11 digitos.'
                    })

                    return;
                  }
                  handleClickSearchGymMemberByDocument(e)
                }}
                type="button"
                className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-primary-blue bg-primary-blue px-4 py-2 text-sm font-medium text-white hover:opacity-80"
              >
                OK
              </button>
            </div>
          </div>
        </div>
        <div className="sm:col-span-6 border-t-2 border-gray-300"></div>
        <div className="mt-[10px]">
          <p className="title">Dados do Aluno</p>
        </div>
        <div>
          <div class="flex-auto">
            <div className="flex flex-wrap mt-[10px]">
              <div>
                <p><span className="font-bold">Aluno:</span> {currentGymMember !== null && currentGymMember.person.name}</p>
                <p><span className="font-bold">CPF:</span> {formatCPF(currentGymMember !== null && currentGymMember.person.document)}</p>
                <p><span className="font-bold">Plano:</span> {currentGymMember !== null && currentGymMember.type.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[10px] sm:col-span-6 border-t-2 border-gray-300"></div>
        <div className="mt-[30px] sm:col-span-6">
          <label
            htmlFor="paymentMethod"
            className="block text-[16px] font-bold text-black-700"
          >
            Forma de Pagamento
          </label>
          <div className="mt-1">
            <div class="flex flex-wrap -m-4 text-center">
              <button
                disabled={idPlan === null || idPlan === "" || isUpdate}
                onClick={() => {
                  setPaymentMethod("CREDIT_CARD");
                  typeList
                    .filter((type) => type.id === idPlan)
                    .map((type) =>
                      setAmount(parseFloat(type.price) + parseFloat(4))
                    );
                }}
                class="cursor-pointer p-4 sm:w-1/4 w-1/2"
              >
                <div
                  class={`${paymentMethod === "CREDIT_CARD"
                    ? "bg-green-200"
                    : "bg-transparent"
                    } rounded-lg p-2 xl:p-6 border-gray-400 border`}
                >
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                    {typeList
                      .filter((type) => type.id === idPlan)
                      .map((type) =>
                        formatMoney(parseFloat(type.price) + parseFloat(4))
                      )}
                  </h2>
                  <p class="leading-relaxed text-black-100 font-bold">
                    Crédito <span className="text-green-500">(+ R$ 4,00)</span>
                  </p>
                </div>
              </button>
              <button
                disabled={idPlan === null || idPlan === "" || isUpdate}
                onClick={() => {
                  setPaymentMethod("DEBIT_CARD");
                  typeList
                    .filter((type) => type.id === idPlan)
                    .map((type) =>
                      setAmount(parseFloat(type.price) + parseFloat(2.5))
                    );
                }}
                class="cursor-pointer p-4 sm:w-1/4 w-1/2"
              >
                <div
                  class={`${paymentMethod === "DEBIT_CARD"
                    ? "bg-green-200"
                    : "bg-transparent"
                    } rounded-lg p-2 xl:p-6 border-gray-400 border`}
                >
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                    {typeList
                      .filter((type) => type.id === idPlan)
                      .map((type) =>
                        formatMoney(parseFloat(type.price) + parseFloat(2.5))
                      )}
                  </h2>
                  <p class="leading-relaxed text-black font-bold">
                    Débito <span className="text-green-500">(+ R$ 2,50)</span>
                  </p>
                </div>
              </button>
              <button
                disabled={idPlan === null || idPlan === "" || isUpdate}
                onClick={() => {
                  setPaymentMethod("PIX");
                  typeList
                    .filter((type) => type.id === idPlan)
                    .map((type) => setAmount(type.price));
                }}
                class="cursor-pointer p-4 sm:w-1/4 w-1/2"
              >
                <div
                  class={`${paymentMethod === "PIX" ? "bg-green-200" : "bg-transparent"
                    } rounded-lg p-2 xl:p-6 border-gray-400 border`}
                >
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                    {typeList
                      .filter((type) => type.id === idPlan)
                      .map((type) => formatMoney(type.price))}
                  </h2>
                  <p class="leading-relaxed text-black font-bold">PIX</p>
                </div>
              </button>
              <button
                onClick={() => {
                  setPaymentMethod("MONEY");
                  typeList
                    .filter((type) => type.id === idPlan)
                    .map((type) => setAmount(type.price));
                }}
                class="cursor-pointer p-4 sm:w-1/4 w-1/2"
              >
                <div
                  class={`${paymentMethod === "MONEY"
                    ? "bg-green-200"
                    : "bg-transparent"
                    } rounded-lg p-2 xl:p-6 border-gray-400 border`}
                >
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-black"></h2>
                  <p class="leading-relaxed text-black font-bold">Dinheiro</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="sm:col-span-6 flex justify-end">
          <div className="my-[20px] flex flex-row hover:cursor-pointer">
            <button onClick={(e) => {
              Swal.fire({
                title: 'Você tem Certeza?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Sim, Limpar!'
              }).then(async (result) => {
                if (result.isConfirmed) {
                  handleClickClear(e)
                }
              })
            }} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Cancelar
            </button>
            <button onClick={(e) => {
              handleClickConfirmPayment(e);
            }} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Confirmar Pagamento
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
