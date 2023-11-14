import React, { useContext } from "react";

import { AuthContext } from "../context/Auth";
import { GymMemberContext } from "../context/GymMember";
import { BillingContext } from "../context/Billing";
import { formatMoney } from "../utils/format";
import { PaymentContext } from "../context/Payment";
import Search from "../components/training/Search";

export default function AddPDC() {
  const { typeList } = useContext(AuthContext);

  const { idPlan, setIdPlan, isUpdate } = useContext(GymMemberContext);

  const { invoiceDate, setInvoiceDate, dueDate, setDueDate } =
    useContext(BillingContext);

  const { paymentMethod, setPaymentMethod, setAmount } =
    useContext(PaymentContext);
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
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[10px] sm:col-span-6 border-t-2 border-gray-300"></div>
        </div>
        <div className="">
          <p className="mt-[10px] title">Dados da Matricula</p>
        </div>
        <div className="">
          <p className="font-bold">Plano da Matrícula:</p>
          <p className="font-bold">Data de Inicio:</p>
          <p className="font-bold">Data de Vencimento:</p>
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
                disabled={idPlan === null || idPlan === "" || isUpdate}
                onClick={() => {
                  setPaymentMethod("MONEY");
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
                  <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                    {typeList
                      .filter((type) => type.id === idPlan)
                      .map((type) => formatMoney(type.price))}
                  </h2>
                  <p class="leading-relaxed text-black font-bold">Dinheiro</p>
                </div>
              </button>
            </div>
          </div>
          <div className="sm:col-span-6 flex justify-between">
            <div className="m-[20px] absolute right-[20px] bottom-[20px] hover:cursor-pointer">
              <button class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                <span relative="relative z-10">Realizar Pagamento</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
