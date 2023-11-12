import React, { useContext } from "react";
import { MainContext } from "../../../context/Main";
import { IMaskInput } from 'react-imask';
import { formatDatePtBr, formatMoney, getCurrentDate } from "../../../utils/format";

export default function BillingDataGymMember() {
  const { gymMemberModal } = useContext(MainContext);

  console.log(getCurrentDate());

  return (
    <div className="relative flex flex-col min-w-0 break-words border-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="mt-[10px]">
        <p className="title">Cobrança Atual</p>
      </div>
      <div >
        <div class="flex-auto">
          <div className="flex flex-wrap mt-[10px]">
            {
              gymMemberModal.billing.filter(billing => getCurrentDate() >= billing.invoice_date && getCurrentDate() <= billing.due_date).map(charge => {
                return (
                  <div>
                    <p>Data de Lançamento: {formatDatePtBr(charge.invoice_date)}</p>
                    <p>Data de Vencimento: {formatDatePtBr(charge.due_date)}</p>
                    <p>Status: {(charge.payment_date !== null)
                      ? <span className="text-green-600 font-bold">Paga</span>
                      : (charge.payment_date === null)
                        ? <span className="text-yellow-600 font-bold">Em Aberto</span>
                        : (getCurrentDate() > charge.due_date) && <span className="text-red-600 font-bold">Em Atraso</span>}</p>
                  </div>
                )
              })
            }
          </div>
          <hr className="mt-[10px]"></hr>
          <div className="mt-[10px]">
            <p className="title">Outras Cobranças</p>
          </div>
          <div className="flex flex-wrap mt-[10px]">
            {
              gymMemberModal.billing.map(charge => {
                return (
                  <div>
                    <p>Data de Lançamento: {formatDatePtBr(charge.invoice_date)}</p>
                    <p>Data de Vencimento: {formatDatePtBr(charge.due_date)}</p>
                    <p>Status: {(charge.payment_date !== null)
                      ? <span className="text-green-600 font-bold">Paga</span>
                      : (charge.payment_date === null)
                        ? <span className="text-yellow-600 font-bold">Em Aberto</span>
                        : (getCurrentDate() > charge.due_date) && <span className="text-red-600 font-bold">Em Atraso</span>}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
