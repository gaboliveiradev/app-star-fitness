import React, { useContext } from "react";
import { MainContext } from "../../../context/Main";
import { IMaskInput } from 'react-imask';
import { formatDatePtBr, formatMoney, getCurrentDate } from "../../../utils/format";

export default function BillingDataGymMember() {
  const { gymMemberModal } = useContext(MainContext);

  console.log(getCurrentDate());

  return (
    <div className="relative flex flex-col min-w-0 break-words border-0 dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div>
        <div class="flex-auto">
          <div className="mt-[10px]">
            <p className="title">Histórico de Cobranças</p>
          </div>
          <div className="mt-[10px]">
            {
              gymMemberModal.billing.map(charge => {
                return (
                  <>
                    <div className="py-3">
                      <p>Data de Lançamento: {formatDatePtBr(charge.invoice_date)}</p>
                      <p>Data da Proxima Cobrança: {formatDatePtBr(charge.due_date)}</p>
                      <p>Status: {(charge.payment_date !== null)
                        ? <span className="text-green-600 font-bold">Paga</span>
                        : (charge.payment_date === null)
                          ? <span className="text-yellow-600 font-bold">Em Aberto</span>
                          : (getCurrentDate() > charge.due_date) && <span className="text-red-600 font-bold">Em Atraso</span>}</p>
                    </div>
                    <hr></hr>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
