import React, { useContext, useState } from "react";

import { AuthContext } from "../context/Auth";
import { GymMemberContext } from "../context/GymMember";
import { BillingContext } from "../context/Billing";
import { formatMoney } from "../utils/format";
import { PaymentContext } from "../context/Payment";
import Search from "../components/training/Search";

export default function AddPDC() {
  const [amount, setAmount] = useState("");

  const formatCurrency = (value) => {
    // Remove caracteres não numéricos
    const numericValue = value.replace(/[^0-9]/g, "");

    // Formata para a máscara de dinheiro (R$ X,XX)
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(numericValue / 100);

    return formattedValue;
  };

  const handleChange = (e) => {
    setAmount(formatCurrency(e.target.value));
  };

  const [totalAmount, setTotalAmount] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [changeAmount, setChangeAmount] = useState(0);
  const [showMoneyInputs, setShowMoneyInputs] = useState(false);

  // Função para calcular o troco
  const calculateChange = () => {
    const change = receivedAmount - totalAmount;
    setChangeAmount(change >= 0 ? change : 0);
  };

  const { typeList } = useContext(AuthContext);

  const { idPlan, setIdPlan, isUpdate } = useContext(GymMemberContext);

  const { invoiceDate, setInvoiceDate, dueDate, setDueDate } =
    useContext(BillingContext);

  const { paymentMethod, setPaymentMethod } = useContext(PaymentContext);

  const toggleMoneyInputs = () => {
    setShowMoneyInputs((prevShowMoneyInputs) => !prevShowMoneyInputs);
  };

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
          <Search />
        </div>
        <div className="">
          <div className="sm:col-span-6 border-t-2 border-gray-300"></div>
          <div className="mt-[10px]">
            <p className="title">Dados do Aluno</p>
          </div>
          <div>
            <div class="flex-auto">
              <div className="flex flex-wrap mt-[10px]">
                <div>
                  <p className="font-bold">Aluno:</p>
                  <p className="font-bold">CPF:</p>
                  <p className="font-bold">Plano de Matrícula:</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[10px] sm:col-span-6 border-t-2 border-gray-300"></div>
        </div>
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
                  class={`${
                    paymentMethod === "CREDIT_CARD"
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
                  class={`${
                    paymentMethod === "DEBIT_CARD"
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
                  class={`${
                    paymentMethod === "PIX" ? "bg-green-200" : "bg-transparent"
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
                  toggleMoneyInputs(true);
                  typeList
                    .filter((type) => type.id === idPlan)
                    .map((type) => setAmount(type.price));
                }}
                class="cursor-pointer p-4 sm:w-1/4 w-1/2"
              >
                <div
                  class={`${
                    paymentMethod === "MONEY"
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
        {/* Renderize os inputs adicionais se a forma de pagamento for dinheiro */}
        {showMoneyInputs && paymentMethod === "MONEY" && (
          <div className="flex-auto mt-[20px]">
            <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-2 mb-4">
                <label
                  htmlFor="totalAmount"
                  className="block font-bold text-[16px] text-black-700"
                >
                  Valor Total:
                </label>
                <input
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                  type="text"
                  id="totalAmount"
                  value={amount}
                  onChange={handleChange}
                />
              </div>

              <div className="sm:col-span-2 mb-4">
                <label
                  htmlFor="receivedAmount"
                  className="block font-bold text-[16px] text-black-700"
                >
                  Valor Recebido:
                </label>
                <input
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                  type="text"
                  value={amount}
                  onChange={handleChange}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="sm:col-span-2 mb-4">
                <label
                  htmlFor="changeAmount"
                  className="block font-bold text-[16px] text-black-700"
                >
                  Troco:
                </label>
                <input
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                  type="number"
                  id="changeAmount"
                  value={changeAmount}
                  readOnly
                />
              </div>
            </div>
          </div>
        )}
        <div className="sm:col-span-6 flex justify-between">
          <div className="m-[20px] absolute right-[20px] bottom-[20px] hover:cursor-pointer">
            <button class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
              <span relative="relative z-10">Realizar Pagamento</span>
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
