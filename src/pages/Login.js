import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import logo from './../assets/logo.png';

export default function Login() {
    const { login } = useContext(AuthContext);

    // States dos Inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States para controlar ações do componente.
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const handdleClickLogin = async (e) => {
        e.preventDefault();
        setLoader(true);

        try {
            const response = await login(email, password);

            if (response) {
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }

    return (
        <div class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://img.freepik.com/fotos-gratis/homem-forte-treinando-na-academia_1303-23478.jpg)' }}>
                    <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 class="text-4xl font-bold text-white">Gestão de Academia</h2>

                            <p class="max-w-xl mt-3 text-gray-300">Gerencie sua academia de forma eficiente e prática com nosso sistema web de gestão, facilitando o controle de alunos, agendamentos e finanças.</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="flex justify-center">
                            <img src={logo} className='w-40' />
                        </div>

                        <div class="mt-8">
                            <form>
                                <div>
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
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
                                        <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Senha</label>
                                        <a class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Esqueceu sua senha?</a>
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
                                        class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        {
                                            (loader) && (
                                                <svg aria-hidden="true" role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                                                </svg>
                                            )
                                        }
                                        Entrar
                                    </button>
                                </div>

                            </form>

                            {/*<p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>*/}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}