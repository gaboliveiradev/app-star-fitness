import React, { useContext, useState } from 'react';
import FormAddress from '../components/FormAddress';
import MainContext from '../context/MainContext';
import Swal from 'sweetalert2'
import EmployeeContext from '../context/EmployeeContext';
import FormEmployee from '../components/employee/FormEmployee';
import PersonContext from '../context/PersonContext';
import AddressContext from '../context/AddressContext';


export default function RegisterEmployee() {

    const {
        setIsLoading, setIsLoadingText
    } = useContext(MainContext);

    const {  
        name, setName, email, setEmail, document, 
        setDocument, phone, setPhone, 
        birthday, setBirthday, gender, setGender
    } = useContext(PersonContext);

    const {
        cref, setCref,
        occupation, setOccupation,
        observation, setObservation
    } = useContext(EmployeeContext);

    const {
        zipCode, setZipCode,
        street, setStreet,district, setDistrict,
        number, setNumber,city, setCity,
        state, setState
    } = useContext(AddressContext);

    const { createCity, createAddress, createEmployee, token } = useContext(EmployeeContext);

    const [stepper, setStepper] = useState(1);

    const handleClickClearFields = async () => {
        setName('');
        setEmail('');
        setDocument('');
        setPhone('');
        setBirthday('');
        setGender('');
        setCref('');
        setOccupation('');
        setObservation('');
        setZipCode('');
        setStreet('');
        setDistrict('');
        setNumber('');
        setCity('');
        setState('');
    }

    const handleClickCreateEnroll = async (e) => {
        e.preventDefault();

        try {
            if(name !== "" && email !== "" && document !== "" && phone !== "" && birthday !== "" && gender !== "" && zipCode !== "" && street !== "" 
            && district !== "" && number !== "" && city !== "" && state !== "") {
                setIsLoading(true);
                setIsLoadingText("Criando Cidade...");

                const cityParameters = {
                    name: city,
                    state: state,
                }
                const responseCity = await createCity(cityParameters, token);

                if(responseCity.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> uma <b>nova cidade</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Criando Endereço...");

                const addressParameters = {
                    street: street,
                    district: district,
                    number: number,
                    zipCode: zipCode.replace(/[^0-9]/g, ''),
                    idCity: responseCity.data.data.id
                }
                const responseAddress = await createAddress(addressParameters, token);

                if(responseAddress.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> um <b>novo endereço</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Criando Funcionário...");

                const employeeParameters = {
                    name: name,
                    email: email,
                    document: document.replace(/[^0-9]/g, ''),
                    phone: phone.replace(/[^0-9]/g, ''),
                    birthday: birthday,
                    gender: gender,
                    cref: cref.replace(/[^0-9]/g, ''),
                    occupation: occupation,
                    observation:observation,
                    id_address: responseAddress.data.data.id,
                }

                
                const responseEmployee = await createEmployee(employeeParameters, token);

                if(responseEmployee.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> os dados de um <b>novo funcionário</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Funcionário Matriculado.',
                    html: 'Ihuul... Parabéns, você <b>cadastrou</b> um novo funcionário na academia. Acompanhe os funcionários da sua academia acessando <b>Funcionários/Gestão de Funcionários.</b>'
                })

                handleClickClearFields();

                return;
            }

            Swal.fire({
                icon: 'error',
                title: 'Campos Vazio!',
                html: 'Oops... Parece que <b>alguns campos</b> estão <b>VAZIOS</b>. Por favor, verifique e tente novamente'
            })
        } catch {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Ocorreu um erro inesperado, ao <b>tentar cadastrar</b> um <b>NOVO FUNCIONÁRIO</b> tente novamente mais tarde.'
            })
        } finally {
            setIsLoading(false);
            setIsLoadingText("");
        }

    }

    return (
        <>
            <article className='flex-auto h-full mx-auto rounded-md w-full'>
                <div className='flex flex-col md:flex-row'>
                    <div className="flex-auto pb-[14px]">
                        <h1 class="title">Novo Funcionário</h1>
                        <ul class="breadcrumbs">
                            <li><a href="#">Principal</a></li>
                            <li class="divider">/</li>
                            <li><a href="#">Funcionários</a></li>
                            <li class="divider">/</li>
                            <li><a href="#" class="active">Cadastrar Funcionários</a></li>
                        </ul>
                    </div>

                    <div className='accordion-body flex-auto'>
                        <div className="mx-4 p-4">
                            <div class="flex items-center">
                                <div class="flex items-center text-white relative">
                                    <div class="border-stepper-active bg-stepper-active flex justify-center items-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </div>
                                    <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-teal-600">
                                        <span>Dados Pessoais</span>
                                    </div>
                                </div>
                                <div class={`${(stepper === 2 || stepper === 3) && 'border-stepper-active'} flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300`}></div>
                                <div class={`${(stepper === 2 || stepper === 3) && 'text-white'} flex items-center relative`}>
                                    <div class={`${(stepper === 2 || stepper === 3) ? 'border-stepper-active bg-stepper-active' : 'border-gray-300'} flex justify-center items-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                        </svg>
                                    </div>
                                    <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-teal-600">
                                        <span>Endereço</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-auto pb-[30px]">
                    <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
                        {
                            (stepper === 1) ? (
                                <FormEmployee />
                            ) : (stepper === 2) && (
                                <FormAddress />
                            ) 
                        }
                    </div>
                </div>

                <div className="sm:col-span-6 flex justify-between">
                {
                            (stepper === 2) ? (
                                <div className='m-[20px] absolute right-[20px] bottom-[20px] hover:cursor-pointer'>
                                    <button onClick={(e) => handleClickCreateEnroll(e)} class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                                        <span relative="relative z-10">Cadastrar</span>
                                    </button>
                                </div>
                            ) : (
                                <div className='m-[20px] absolute right-[20px] bottom-[20px] hover:cursor-pointer'>
                                    <button onClick={() => setStepper((stepper === 2) ? 2 : stepper + 1)} class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                                        <span relative="relative z-10">Avançar</span>
                                    </button>
                                </div>
                            )
                        }
                    
                {
                    (stepper !== 1) && (
                        <div className='m-[20px] absolute left-[20px] bottom-[20px] hover:cursor-pointer'>
                            <button onClick={() => setStepper((stepper === 1) ? 1 : stepper - 1)} class="rounded-md after:ease relative h-12 w-70 overflow-hidden border border-tertiary-red bg-tertiary-red text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-tertiary-red hover:before:-translate-x-40">
                                <span relative="relative z-10">Voltar</span>
                            </button>
                        </div>
                    )
                }     
                </div>
            </article>
        </>
    )
}
