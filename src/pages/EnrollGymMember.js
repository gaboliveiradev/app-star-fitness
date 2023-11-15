import React, { useContext, useState } from 'react';
import FormPersonDataGymMember from '../components/FormPersonDataGymMember';
import FormAddress from '../components/FormAddress';
import FormEnroll from '../components/FormEnroll';
import { MainContext } from '../context/Main';
import { getCurrentDate, add30Days } from './../utils/format';
import Swal from 'sweetalert2'

import { AuthContext } from '../context/Auth';
import { PersonContext } from './../context/Person';
import { GymMemberContext } from './../context/GymMember';
import { AddressContext } from './../context/Address';
import { BillingContext } from './../context/Billing';
import { PaymentContext } from '../context/Payment';

export default function EnrollGymMember() {

    const {
        setIsLoading, setIsLoadingText,
    } = useContext(MainContext);

    const {
        name, setName, email, setEmail,
        document, setDocument, phone, setPhone,
        birthday, setBirthday, gender, setGender,
        idPerson,
        //methods
        updatePerson
    } = useContext(PersonContext);

    const {
        height, setHeight, weight, setWeight,
        observation, setObservation, idPlan, setIdPlan,
        isUpdate, setIsUpdate, idGymMember,
        //methods
        updateGymMember
    } = useContext(GymMemberContext);

    const {
        zipCode, setZipCode,
        street, setStreet, district, setDistrict,
        number, setNumber, city, setCity,
        state, setState, idAddress,
        // methods
        updateAddress
    } = useContext(AddressContext);

    const {
        invoiceDate, setInvoiceDate, dueDate, setDueDate,
    } = useContext(BillingContext);

    const {
        paymentMethod, setPaymentMethod,
        amount, setAmount, setReceivedAmount, setChange,
        createPayment,
    } = useContext(PaymentContext);

    const { getGymMembers, createAddress, createGymMemberPerson, createBilling, token } = useContext(AuthContext);

    const [stepper, setStepper] = useState(1);

    const handleClickClearFields = async (e) => {
        e.preventDefault();

        setName('');
        setEmail('');
        setDocument('');
        setPhone('');
        setBirthday('');
        setGender('');
        setHeight('');
        setWeight('');
        setObservation('');
        setZipCode('');
        setStreet('');
        setDistrict('');
        setNumber('');
        setCity('');
        setState('');
        setIdPlan('');
        setInvoiceDate(getCurrentDate());
        setDueDate(add30Days(getCurrentDate()));
        setAmount('');
        setPaymentMethod('');
        setReceivedAmount('');
        setChange('');

        setIsUpdate(false);
    }

    const handleClickUpdate = async (e) => {
        e.preventDefault();

        try {
            if (name !== "" && email !== "" && document !== "" && phone !== "" && birthday !== "" && gender !== "" && zipCode !== "" && street !== ""
                && district !== "" && number !== "" && city !== "" && state !== "" && idPlan !== "" && invoiceDate !== "" && dueDate !== '') {
                setIsLoading(true);
                setIsLoadingText("Cadastrando/Atualizando Endereço...");

                const addressParameters = {
                    idAddress: idAddress,
                    street: street,
                    district: district,
                    number: number,
                    zipCode: zipCode.replace(/[^0-9]/g, ''),
                    city: city,
                    state: state
                }

                const responseAddress = await updateAddress(addressParameters);

                if (responseAddress.status !== 200) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>atualizar</b> um <b>endereço</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Cadastrando/Atualizando Aluno...");

                const personParameters = {
                    idPerson: idPerson,
                    name: name,
                    email: email,
                    document: document.replace(/[^0-9]/g, ''),
                    phone: phone.replace(/[^0-9]/g, ''),
                    birthday: birthday,
                    gender: gender,
                }

                const responsePerson = await updatePerson(personParameters);

                if (responsePerson.status !== 200) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>atualizar</b> uma <b>pessoa</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                const gymMemberParameters = {
                    idGymMember: idGymMember,
                    height_cm: height !== null ? height.replace(/[^0-9]/g, '') : null,
                    weight_kg: weight !== null ? weight.replace(/[^0-9]/g, '') : null,
                    observation: observation,
                    id_type_enrollment: idPlan,
                }

                const responseGymMember = await updateGymMember(gymMemberParameters);

                if (responseGymMember.status !== 200) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>atualizar</b> uma <b>aluno</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Atualizando Alunos...");
                await getGymMembers(token);

                Swal.fire({
                    icon: 'success',
                    title: 'Aluno Atualizado.',
                    html: 'Ihuul... Parabéns, você <b>atualizou</b> um aluno com sucesso. Acompanhe os alunos da sua academia acessando <b>Aluno/Matrículas e Alunos.</b>'
                })

                handleClickClearFields(e);

                return;
            }

            Swal.fire({
                icon: 'error',
                title: 'Campos Vazio!',
                html: 'Oops... Parece que <b>alguns campos</b> estão <b>VAZIOS</b>. Por favor, verifique e tente novamente'
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Ocorreu um erro inesperado, ao <b>tentar atualizar</b> um <b>ALUNO</b> tente novamente mais tarde.'
            })
            console.log(err)
        } finally {
            setIsLoading(false);
            setIsLoadingText("");
        }
    }

    const handleClickCreateEnroll = async (e) => {
        e.preventDefault();

        try {
            if (name !== "" && email !== "" && document !== "" && phone !== "" && birthday !== "" && gender !== "" && zipCode !== "" && street !== ""
                && district !== "" && number !== "" && city !== "" && state !== "" && idPlan !== "" && invoiceDate !== "" && dueDate !== '' && paymentMethod !== '' && amount !== '') {
                setIsLoading(true);
                setIsLoadingText("Cadastrando Endereço...");

                const addressParameters = {
                    street: street,
                    district: district,
                    number: number,
                    zipCode: zipCode.replace(/[^0-9]/g, ''),
                    city: city,
                    state: state
                }

                const responseAddress = await createAddress(addressParameters, token);

                if (responseAddress.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> um <b>novo endereço</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Cadastrando Aluno...");

                const personGymMemberParameters = {
                    name: name,
                    email: email,
                    document: document.replace(/[^0-9]/g, ''),
                    phone: phone.replace(/[^0-9]/g, ''),
                    birthday: birthday,
                    gender: gender,
                    height_cm: height.replace(/[^0-9]/g, ''),
                    weight_kg: weight.replace(/[^0-9]/g, ''),
                    observation: observation,
                    id_address: responseAddress.data.data.id,
                    id_type_enrollment: idPlan,
                }

                const responseGymMemberPerson = await createGymMemberPerson(personGymMemberParameters, token);

                if (responseGymMemberPerson.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> os dados de um <b>novo aluno</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Gerando Cobranças...");

                const billingParameters = {
                    invoice_date: invoiceDate,
                    due_date: dueDate,
                    payment_date: invoiceDate,
                    id_type_enrollment: idPlan,
                    id_gym_member: responseGymMemberPerson.data.data.id
                }

                const responseBilling = await createBilling(billingParameters);

                if (responseBilling.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> uma <b>cobrança a um aluno</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                const billingParameters1 = {
                    invoice_date: dueDate,
                    due_date: add30Days(dueDate),
                    id_type_enrollment: idPlan,
                    id_gym_member: responseGymMemberPerson.data.data.id
                }

                const responseBilling1 = await createBilling(billingParameters1);

                if (responseBilling1.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> uma <b>cobrança a um aluno</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Registrando Pagamento...");

                const paymentParamerters = {
                    idBilling: responseBilling.data.data.id,
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

                setIsLoadingText("Atualizando Alunos...");
                await getGymMembers(token);

                Swal.fire({
                    icon: 'success',
                    title: 'Aluno Matriculado.',
                    html: 'Ihuul... Parabéns, você <b>matriculou</b> um novo aluno na academia. Acompanhe os alunos da sua academia acessando <b>Aluno/Matrículas e Alunos.</b>'
                })

                handleClickClearFields(e);

                return;
            }

            Swal.fire({
                icon: 'error',
                title: 'Campos Vazio!',
                html: 'Oops... Parece que <b>alguns campos</b> estão <b>VAZIOS</b>. Por favor, verifique e tente novamente'
            })
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Ocorreu um erro inesperado, ao <b>tentar matrícula</b> um <b>NOVO ALUNO</b> tente novamente mais tarde.'
            })
        } finally {
            setIsLoading(false);
            setIsLoadingText("");
        }
    }

    return (
        <>
            <article className="flex-auto h-full mx-auto rounded-md w-full">
                <div className='flex flex-col md:flex-row'>
                    <div className="flex-auto pb-[14px]">
                        <h1 class="title">{isUpdate ? 'Atualizar Aluno' : 'Novo Aluno'}</h1>
                        <ul class="breadcrumbs">
                            <li><span>Links Rápidos</span></li>
                            <li class="divider">/</li>
                            <li><span class="active">Novo Aluno</span></li>
                        </ul>
                    </div>
                    <div className='accordion-body flex-auto'>
                        <div class="mx-4 p-4">
                            <div class="flex items-center">
                                <div onClick={() => setStepper(1)} class="flex items-center text-white relative cursor-pointer">
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
                                <div onClick={() => setStepper(2)} class={`${(stepper === 2 || stepper === 3) && 'text-white'} flex items-center relative cursor-pointer`}>
                                    <div class={`${(stepper === 2 || stepper === 3) ? 'border-stepper-active bg-stepper-active' : 'border-gray-300'} flex justify-center items-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                        </svg>
                                    </div>
                                    <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-teal-600">
                                        <span>Endereço</span>
                                    </div>
                                </div>
                                <div class={`${(stepper === 3) && 'border-stepper-active'} flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300`}></div>
                                <div onClick={() => setStepper(3)} class={`${(stepper === 3) && 'text-white'} flex items-center relative cursor-pointer`}>
                                    <div class={`${(stepper === 3) ? 'border-stepper-active bg-stepper-active' : 'border-gray-300'} flex justify-center items-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                                        </svg>
                                    </div>
                                    <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium text-teal-600">
                                        <span>Matrícula</span>
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
                                <FormPersonDataGymMember />
                            ) : (stepper === 2) ? (
                                <FormAddress />
                            ) : (stepper === 3) && (
                                <FormEnroll />
                            )
                        }
                        <div className="sm:col-span-6 my-[20px] flex flex-row justify-between hover:cursor-pointer">
                            <div>
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
                                            handleClickClearFields(e)
                                        }
                                    })
                                }} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Cancelar
                                </button>
                            </div>
                            <div className='flex flex-row'>
                                {
                                    (stepper !== 1) && (
                                        <button onClick={() => setStepper((stepper === 1) ? 1 : stepper - 1)} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                            </svg>
                                            Voltar
                                        </button>
                                    )
                                }
                                {
                                    (stepper === 3) ? (
                                        <button onClick={(e) => {
                                            if (name !== "" && email !== "" && document !== "" && phone !== "" && birthday !== "" && gender !== "" && zipCode !== "" && street !== ""
                                                && district !== "" && number !== "" && city !== "" && state !== "" && idPlan !== "" && invoiceDate !== "" && dueDate !== '') {
                                                Swal.fire({
                                                    title: 'Você tem Certeza?',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    cancelButtonText: 'Cancelar',
                                                    confirmButtonText: `${(isUpdate) ? 'Sim, Atualizar!' : 'Sim, Matricular!'}`
                                                }).then(async (result) => {
                                                    if (result.isConfirmed) {
                                                        (isUpdate) ? handleClickUpdate(e) : handleClickCreateEnroll(e)
                                                    }
                                                })

                                                return;
                                            }

                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Campos Vazio!',
                                                html: 'Oops... Parece que <b>alguns campos</b> estão <b>VAZIOS</b>. Por favor, verifique e tente novamente'
                                            })
                                        }} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                            Matricular
                                        </button>
                                    ) : (
                                        <button onClick={() => setStepper((stepper === 3) ? 3 : stepper + 1)} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                            Avançar
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                            </svg>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}