import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Auth";
import { GymMemberContext } from "../context/GymMember";
import { BillingContext } from "../context/Billing";
import { add30Days, formatCPF, formatDatePtBr, formatMoney, getCurrentDate } from "../utils/format";
import { PaymentContext } from "../context/Payment";
import { IMaskInput } from 'react-imask';
import { Toast } from './../common/Toast';
import Swal from 'sweetalert2'
import { MainContext } from "../context/Main";

export default function AddPDC() {

  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [changeAmount, setChangeAmount] = useState(0);

  const { typeList, gymMembersList, createBilling } = useContext(AuthContext);
  const { setIsLoading, setIsLoadingText } = useContext(MainContext);
  const { paymentMethod, setPaymentMethod, createPayment, } = useContext(PaymentContext);
  const {updateBilling} = useContext(BillingContext);

  const [document, setDocument] = useState('');
  const [currentGymMember, setCurrentGymMember] = useState(null);
  const [currentBilling, setCurrentBilling] = useState(null);

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
    setCurrentBilling(item[0].billing.filter(billing => billing.payment_date === null));
  }

  const handleClickConfirmPayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      setIsLoadingText('Registrando Pagamento...');

      const paymentParamerters = {
        idBilling: currentBilling[0].id,
        paymentMethod: paymentMethod,
        amount: amount,
      }

      const responsePayment = await createPayment(paymentParamerters);

      if (responsePayment.status !== 201) {
        Swal.fire({
          icon: 'error',
          title: 'Erro Inesperado',
          html: 'Oops... Parece que ocorreu algum erro ao tentar <b>registrar</b> um <b>pagamento a um aluno</b>. Por favor, verifique e tente novamente.'
        })

        return;
      }

      setIsLoadingText('Atualizando Cobrança Atual...');

      const billingUpdateParaments = {
        idBilling: currentBilling[0].id,
        payment_date: getCurrentDate()
      }
      const responseUpdateBillingCurrent = await updateBilling(billingUpdateParaments)

      if (responseUpdateBillingCurrent.status !== 200) {
        Swal.fire({
          icon: 'error',
          title: 'Erro Inesperado',
          html: 'Oops... Parece que ocorreu algum erro ao tentar <b>atualizar</b> uma <b>cobrança a um aluno</b>. Por favor, verifique e tente novamente.'
        })

        return;
      }

      setIsLoadingText('Gerando Nova Cobrança...');

      const billingParameters = {
        invoice_date: currentBilling[0].due_date,
        due_date: add30Days(currentBilling[0].due_date),
        id_type_enrollment: currentGymMember.type.id,
        id_gym_member: currentGymMember.id
      }

      console.log(billingParameters);

      const responseBilling = await createBilling(billingParameters);

      if (responseBilling.status !== 201) {
        Swal.fire({
          icon: 'error',
          title: 'Erro Inesperado',
          html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> uma <b>cobrança a um aluno</b>. Por favor, verifique e tente novamente.'
        })

        return;
      }

      Swal.fire({
        icon: 'success',
        title: 'Pagamento Registrado.',
      })

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro Inesperado',
        html: 'Oops... Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível criar uma ficha de treino.'
      })
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsLoadingText('');
    }
  }

  const handleClickClear = async (e) => {
    e.preventDefault();

    setDocument('');
    setCurrentGymMember(null);
    setPaymentMethod('');
  }

  console.log(getCurrentDate());

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
                <p><span className="font-bold">Aluno:</span> {currentGymMember === null ? 'Selecione um aluno' : currentGymMember.person.name}</p>
                <p><span className="font-bold">CPF:</span> {currentGymMember === null ? 'Selecione um aluno' : formatCPF(currentGymMember.person.document)}</p>
                <p><span className="font-bold">Plano:</span> {currentGymMember === null ? 'Selecione um aluno' : currentGymMember.type.name}</p>
                <p>
                  <span className="font-bold">Data de Vencimento:</span>
                  {
                    currentGymMember === null
                      ? <span className="pl-1">Selecione um aluno</span>
                      : currentGymMember.billing.filter(billing => billing.payment_date === null).map(charge => (
                        <span className="pl-1">{formatDatePtBr(charge.invoice_date)}</span>
                      ))
                  }
                </p>
                <p>
                  <span className="font-bold">Status:</span>
                  {
                    currentGymMember === null
                      ? <span className='pl-1'>Selecione um aluno</span>
                      : currentGymMember.billing.filter(billing => billing.payment_date === null).length > 0
                        ? <span className="pl-1 font-bold text-red-500">Não Pago</span>
                        : <span className="pl-1 font-bold text-green-500">Pago</span>
                  }
                </p>
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
                disabled={currentGymMember === null || currentGymMember === ""}
                onClick={() => {
                  setPaymentMethod("CREDIT_CARD");
                  typeList
                    .filter((type) => type.id === currentGymMember.type.id)
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
                  <p class="leading-relaxed text-black-100 font-bold">
                    Crédito <span className="text-green-500">(+ R$ 4,00)</span>
                  </p>
                </div>
              </button>
              <button
                disabled={currentGymMember === null || currentGymMember === ""}
                onClick={() => {
                  setPaymentMethod("DEBIT_CARD");
                  typeList
                    .filter((type) => type.id === currentGymMember.type.id)
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
                  <p class="leading-relaxed text-black font-bold">
                    Débito <span className="text-green-500">(+ R$ 2,50)</span>
                  </p>
                </div>
              </button>
              <button
                disabled={currentGymMember === null || currentGymMember === ""}
                onClick={() => {
                  setPaymentMethod("PIX");
                  typeList
                    .filter((type) => type.id === currentGymMember.type.id)
                    .map((type) => setAmount(type.price));
                }}
                class="cursor-pointer p-4 sm:w-1/4 w-1/2"
              >
                <div
                  class={`${paymentMethod === "PIX" ? "bg-green-200" : "bg-transparent"
                    } rounded-lg p-2 xl:p-6 border-gray-400 border`}
                >
                  <p class="leading-relaxed text-black font-bold">PIX</p>
                </div>
              </button>
              <button
                disabled={currentGymMember === null || currentGymMember === ""}
                onClick={() => {
                  setPaymentMethod("MONEY");
                  typeList
                    .filter((type) => type.id === currentGymMember.type.id)
                    .map((type) => setAmount(type.price));
                }}
                class="cursor-pointer p-4 sm:w-1/4 w-1/2"
              >
                <div
                  class={`${paymentMethod === "MONEY" ? "bg-green-200" : "bg-transparent"
                    } rounded-lg p-2 xl:p-6 border-gray-400 border`}
                >
                  <p class="leading-relaxed text-black font-bold">Dinheiro</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="sm:col-span-6 mt-[30px]">
          <div className="mt-1">
            <div class="w-full flex mb-3 items-center">
              <div class="flex-grow">
                <span class="text-gray-600">Subtotal</span>
              </div>
              <div class="pl-3">
                <span class="font-semibold">
                  {(currentGymMember === null) ? "R$00,00" : typeList.filter(type => type.id === currentGymMember.type.id).map(type => formatMoney(type.price))}
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
                        : (paymentMethod === "PIX" || paymentMethod === "MONEY") ? formatMoney(0) : "R$00,00"
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='my-[10px] sm:col-span-6 border-t-2 border-gray-300'></div>

        <div className="sm:col-span-6">
          <div class="border-b border-gray-200 md:border-none text-gray-800 text-xl">
            <div class="w-full flex items-center">
              <div class="flex-grow">
                <span class="text-gray-600">Total</span>
              </div>
              <div class="pl-3">
                <span class="font-semibold text-gray-400 text-sm">{(currentGymMember !== null && paymentMethod !== "") && "BRL"}</span> <span class="font-semibold">{(currentGymMember === null && paymentMethod === "") ? 'R$00,00' : formatMoney(amount)}</span>
              </div>
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
