import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "./../assets/logo.png";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [stepper, setStepper] = useState(1);

  const handleForgotPasswordClick = () => {
    // Alterna para o próximo passo (formulário de recuperação de senha)
    setStepper(2);
  };

  const handleBackToLoginClick = () => {
    // Volta para o formulário de login
    setStepper(1);
  };

  // States dos Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States para controlar ações do componente.
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handdleClickLogin = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const response = await login(email, password);

      if (response) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const [verificationCodes, setVerificationCodes] = useState(["", "", "", ""]);
  const codeInputRefs = [];

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Verifica se o valor é um número e não vazio
    if (!isNaN(value) && value !== "") {
      // Atualiza o valor no estado
      const newVerificationCodes = [...verificationCodes];
      newVerificationCodes[index] = value;
      setVerificationCodes(newVerificationCodes);

      // Move o foco para o próximo campo se disponível
      if (index < verificationCodes.length - 1) {
        codeInputRefs[index + 1].focus();
      }
    }
    else {
      // Se o valor não for um número, redefina o campo atual
      const newVerificationCodes = [...verificationCodes];
      newVerificationCodes[index] = "";
      setVerificationCodes(newVerificationCodes);
    }
  };

  return (
    <div class="bg-white dark:bg-gray-900">
      <div class="flex justify-center h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/fotos-gratis/homem-forte-treinando-na-academia_1303-23478.jpg)",
          }}
        >
          <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-4xl font-bold text-white">Gestão de Academia</h2>

              <p class="max-w-xl mt-3 text-gray-300">
                Gerencie sua academia de forma eficiente e prática com nosso
                sistema web de gestão, facilitando o controle de alunos,
                agendamentos e finanças.
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="flex justify-center">
              <img src={logo} className="w-40" />
            </div>

            <div class="mt-8">
              {stepper === 1 ? (
                <form>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email
                    </label>
                    <input
                      className="dark:placeholder-white block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="seuemail@academiastafitness.com.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label
                        for="password"
                        class="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Senha
                      </label>
                      <a
                        onClick={() =>
                          setStepper(stepper === 2 ? 2 : stepper + 1)
                        } // Alterna para o formulário de recuperação de senha
                        class="cursor-pointer text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Esqueceu sua senha?
                      </a>
                    </div>

                    <input
                      class="dark:placeholder-white block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="suasenha123"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div class="mt-6">
                    <button
                      onClick={(e) => handdleClickLogin(e)}
                      class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      {loader && (
                        <svg
                          aria-hidden="true"
                          role="status"
                          class="inline mr-3 w-4 h-4 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          ></path>
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      )}
                      Entrar
                    </button>
                  </div>
                </form>
              ) : stepper === 2 ? (
                // Exibe o formulário de recuperação de senha
                <form>
                  {/* ... conteúdo do formulário de recuperação de senha ... */}
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Email
                    </label>
                    <input
                      className="dark:placeholder-white block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="seuemail@academiastafitness.com.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      onClick={() =>
                        setStepper(stepper === 3 ? 3 : stepper + 1)
                      }
                      class="w-full mt-[30px] px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      {loader && (
                        <svg
                          aria-hidden="true"
                          role="status"
                          class="inline mr-3 w-4 h-4 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          ></path>
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      )}
                      Redefinir senha
                    </button>
                  </div>
                </form>
              ) : (
                <div className="">
                  <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50">
                    <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                      <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                          <div className="font-semibold text-3xl">
                            <p>Verificação de e-mail</p>
                          </div>
                          <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>
                              Enviamos um código para seu e-mail
                              jona**@teste.com
                            </p>
                          </div>
                        </div>

                        <div>
                          
                            <div className="flex flex-col space-y-16">
                              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                {verificationCodes.map((code, index) => (
                                  <div className="w-16 h-16 " key={index}>
                                    <input 
                                      maxLength={1}
                                      className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                      type="text"
                                      name={`code-${index}`}
                                      value={code}
                                      onChange={(e) => handleChange(e, index)}
                                      ref={(input) =>
                                        (codeInputRefs[index] = input)
                                      }
                                    />
                                  </div>
                                ))}
                              </div>

                              <div className="flex flex-col space-y-5">
                                <div>
                                  <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                    Verificar conta
                                  </button>
                                </div>

                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                  <p>Não recebeu o código?</p>
                                  <a
                                    className="flex flex-row items-center text-blue-600"
                                    href="http://"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Reenviar
                                  </a>
                                </div>
                              </div>
                            </div>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
