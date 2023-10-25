import React, { useContext, useState } from "react";
import { IMaskInput } from "react-imask";
import PersonContext from "../context/PersonContext";

export default function RedefinePasswordUser() {
  const { document, setDocument, password, setPassword } =
    useContext(PersonContext);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    // Se o checkbox estiver marcado, limpe o campo de senha
    if (!isChecked) {
      const randomPassword = generateRandomPassword();
      setPassword(randomPassword);
    }
  };

  const generateRandomPassword = () => {
    const length = 12; // Defina o comprimento desejado da senha
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"; // Caracteres disponíveis para a senha
    let randomPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomPassword += charset[randomIndex];
    }

    return randomPassword;
  };


  return (
    <>
      <article className="flex-auto h-full mx-auto rounded-md w-ful">
        <div className="flex flex-col md:flex-row">
          <div className="flex-auto pb-[14px]">
            <h1 className="title">Recuperar Acesso</h1>
            <ul className="breadcrumbs">
              <li>
                <a href="#">Aluno</a>
              </li>
              <li class="divider">/</li>
              <li>
                <a href="#" class="active">
                  Recuperar Acesso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-6">
            <label
              htmlFor="document"
              className="block font-bold text-[16px] text-black-700"
            >
              Documento *
            </label>
            <div className="mt-1">
              <IMaskInput
                mask="000.000.000-00"
                placeholder="999.999.999-99"
                lazy={true}
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                type="text"
                name="document"
                id="document"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Segunda coluna */}
          <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="password"
                className="block font-bold text-[16px] text-black-700"
              >
                Senha *
              </label>
              <div className="mt-1">
                {/* O seu campo de senha aqui */}
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear ${
                    isChecked ? 'opacity-50' : '' // Adicione a classe de opacidade se isChecked for verdadeiro
                  }`} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isChecked}
                />
              </div>
            </div>
          </div>
          {/* Primeira coluna */}
          <div className="flex items-center mt-13">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="link-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Senha Aleatória{" "}
            </label>
          </div>
        </div>

        <div className="flex-auto pb-[30px]">
          <div className="sm:col-span-6 flex justify-between">
            <div className="m-[20px] absolute right-[20px] bottom-[20px] hover:cursor-pointer">
              <button
                class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40"
              >
                <span relative="relative z-10">Redefinir Senha</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
