import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import { PaperClipIcon } from "@heroicons/react/solid";

export default function MyProfile() {
  return (
    <article>
      <div class="flex">
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar src="/broken-image.jpg" sx={{ width: 85, height: 85 }} />
          </Stack>
        </div>

        <div class="flex-auto pb-[14px] mt-[10px] ml-[20px]">
          <h1 className="title font-Gabarito text-blueProfile">
            Jonatan Oliveira
          </h1>
          <h3 className="mt-[-15px] font-Gabarito text-black text-opacity-70">
            Proprietário
          </h3>
        </div>
      </div>

      <div className="mt-[50px]">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Informações Pessoais
          </h3>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="grid grid-cols-2 divide-y divide-gray-100">
            <div className="px-4 py-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Nome Completo
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700">
                Jonatan Oliveira
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700">
                jonatan@teste.com
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Documento
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700">
                999.999.999-99
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Telefone
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700">
                (99) 99999-9999
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Data de Nascimento
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700">
                20/09/1980
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Sexo
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700">
                Masculino
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Cref
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700">
                123456-C/SP
              </dd>
            </div>
            <div className="px-4 py-6">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Ocupação
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700">
                PROPRIETÁRIO
              </dd>
            </div>
          </dl>
        </div>{" "}
      </div>
    </article>
  );
}
