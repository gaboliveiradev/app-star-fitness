import React, { useContext, useState } from 'react';
import { MainContext } from '../context/Main';
import Swal from 'sweetalert2'
import { EmployeeContext } from '../context/Employee';
import FormEmployee from '../components/employee/FormEmployee';
import { PersonContext } from '../context/Person';
import { AddressContext } from '../context/Address';
import { AuthContext } from '../context/Auth';
import FormAddressEmployee from '../components/FormAddressEmployee';

export default function RegisterEmployee() {

    const {
        setIsLoading, setIsLoadingText
    } = useContext(MainContext);

    const {
        idPersonEmployee,
        password, setPassword,
        nameEmployee, setNameEmployee,
        emailEmployee, setEmailEmployee,
        documentEmployee, setDocumentEmployee,
        phoneEmployee, setPhoneEmployee,
        birthdayEmployee, setBirthdayEmployee,
        genderEmployee, setGenderEmployee,
        //methods
        updatePerson
    } = useContext(PersonContext);

    const {
        cref, setCref, idAccessGroup, setIdAccessGroup,
        observation, setObservation, isUpdate, setIsUpdate,
        idEmployee, updateEmployee, updateAccessGroupEmployeeAssoc
    } = useContext(EmployeeContext);

    const {
        idAddressEmployee,
        zipCodeEmployee, setZipCodeEmployee,
        streetEmployee, setStreetEmployee,
        districtEmployee, setDistrictEmployee,
        numberEmployee, setNumberEmployee,
        cityEmployee, setCityEmployee,
        stateEmployee, setStateEmployee,
        //methods
        updateAddress,
    } = useContext(AddressContext);

    const { createEmployee, createAccessGroupEmployeeAssoc } = useContext(EmployeeContext);
    const { createAddress, getEmployee } = useContext(AuthContext);

    const [stepper, setStepper] = useState(1);

    const handleClickClearFields = async () => {
        setNameEmployee('');
        setIdAccessGroup('');
        setPassword("");
        setEmailEmployee('');
        setDocumentEmployee('');
        setPhoneEmployee('');
        setBirthdayEmployee('');
        setGenderEmployee('');
        setCref('');
        setObservation('');
        setZipCodeEmployee('');
        setStreetEmployee('');
        setDistrictEmployee('');
        setNumberEmployee('');
        setCityEmployee('');
        setStateEmployee('');

        setIsUpdate(false);
    }

    const handleClickUpdateEmployee = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            setIsLoadingText("Cadastrando/Atualizando Endereço...");

            const addressParameters = {
                idAddress: idAddressEmployee,
                street: streetEmployee,
                district: districtEmployee,
                number: numberEmployee,
                zipCode: zipCodeEmployee.replace(/[^0-9]/g, ''),
                city: cityEmployee,
                state: stateEmployee
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

            setIsLoadingText("Cadastrando/Atualizando Funcionário...");

            const personParameters = {
                idPerson: idPersonEmployee,
                name: nameEmployee,
                email: emailEmployee,
                document: documentEmployee.replace(/[^0-9]/g, ''),
                phone: phoneEmployee.replace(/[^0-9]/g, ''),
                birthday: birthdayEmployee,
                gender: genderEmployee,
            }

            const responsePerson = await updatePerson(personParameters);

            if (responsePerson.status !== 200) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro Inesperado',
                    html: 'Oops... Parece que ocorreu algum erro ao tentar <b>atualizar</b> um <b>funcionário</b>. Por favor, verifique e tente novamente.'
                })

                return;
            }

            const employeeParameters = {
                idEmployee: idEmployee,
                cref: cref,
                observation: observation,
            }
            const responseEmployee = await updateEmployee(employeeParameters);

            if (responseEmployee.status !== 200) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro Inesperado',
                    html: 'Oops... Parece que ocorreu algum erro ao tentar <b>atualizar</b> um <b>funcionário</b>. Por favor, verifique e tente novamente.'
                })

                return;
            }

            setIsLoadingText("Cadastrando/Atualizando Grupo de Acesso...");

            const accessGroupEmployeeParameters = {
                id_access_group: idAccessGroup,
                id_employee: idEmployee,
            }
            const responseAccessGroupEmployee = await updateAccessGroupEmployeeAssoc(accessGroupEmployeeParameters);

            if (responseAccessGroupEmployee.status !== 200) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro Inesperado',
                    html: 'Oops... Parece que ocorreu algum erro ao tentar <b>atualizar</b> um <b>grupo de acesso</b> a um funcionário. Por favor, verifique e tente novamente.'
                })

                return;
            }

            setIsLoadingText("Atualizando Funcionários...");
            await getEmployee();

            Swal.fire({
                icon: 'success',
                title: 'Funcionário Atualizado.',
            })

            handleClickClearFields(e);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Erro Inesperado',
                html: 'Oops... Ocorreu um erro inesperado, ao <b>tentar atualizar</b> um <b>ALUNO</b> tente novamente mais tarde.'
            })
            console.log(error)
        } finally {
            setIsLoading(false);
            setIsLoadingText("");
        }
    }

    const handleClickSaveEmployee = async (e) => {
        e.preventDefault();

        try {
            if (nameEmployee !== "" && emailEmployee !== "" && documentEmployee !== "" && phoneEmployee !== "" && birthdayEmployee !== "" && genderEmployee !== "" && zipCodeEmployee !== "" && streetEmployee !== ""
                && districtEmployee !== "" && numberEmployee !== "" && cityEmployee !== "" && stateEmployee !== "") {
                setIsLoading(true);
                setIsLoadingText("Criando Endereço...");

                const addressParameters = {
                    street: streetEmployee,
                    district: districtEmployee,
                    number: numberEmployee,
                    zipCode: zipCodeEmployee.replace(/[^0-9]/g, ''),
                    city: cityEmployee,
                    state: stateEmployee
                }
                const responseAddress = await createAddress(addressParameters);

                if (responseAddress.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> um <b>novo endereço</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Criando Funcionário...");

                const employeeParameters = {
                    name: nameEmployee,
                    email: emailEmployee,
                    password: password,
                    document: documentEmployee.replace(/[^0-9]/g, ''),
                    phone: phoneEmployee.replace(/[^0-9]/g, ''),
                    birthday: birthdayEmployee,
                    gender: genderEmployee,
                    cref: cref.replace(/[^0-9]/g, ''),
                    observation: observation,
                    id_address: responseAddress.data.data.id,
                }
                const responseEmployee = await createEmployee(employeeParameters);

                if (responseEmployee.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>cadastrar</b> os dados de um <b>novo funcionário</b>. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Vinculando Grupo de Acesso...");

                const accessGroupEmployeeAssocParameters = {
                    id_access_group: idAccessGroup,
                    id_employee: responseEmployee.data.data.id,
                }
                const responseAccessGroupEmployeeAssoc = await createAccessGroupEmployeeAssoc(accessGroupEmployeeAssocParameters);

                if (responseAccessGroupEmployeeAssoc.status !== 201) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro Inesperado',
                        html: 'Oops... Parece que ocorreu algum erro ao tentar <b>vincular</b> os dados de um <b>novo funcionário</b> a um grupo de acesso. Por favor, verifique e tente novamente.'
                    })

                    return;
                }

                setIsLoadingText("Atualizando Funcionários...");
                await getEmployee();

                Swal.fire({
                    icon: 'success',
                    title: 'Funcionário Cadastrado.',
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
                        <h1 class="title">{isUpdate ? 'Atualizar' : 'Novo'} Funcionário</h1>
                        <ul class="breadcrumbs">
                            <li><span>Principal</span></li>
                            <li class="divider">/</li>
                            <li><span>Funcionários</span></li>
                            <li class="divider">/</li>
                            <li><span class="active">{isUpdate ? 'Atualizar' : 'Cadastrar'} Funcionários</span></li>
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
                                <FormAddressEmployee />
                            )
                        }
                    </div>
                </div>

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
                            (stepper === 2) ? (
                                <button onClick={(e) => {
                                    if (nameEmployee !== "" && emailEmployee !== "" && documentEmployee !== "" && phoneEmployee !== "" && birthdayEmployee !== "" && genderEmployee !== "" && zipCodeEmployee !== "" && streetEmployee !== ""
                                        && districtEmployee !== "" && numberEmployee !== "" && cityEmployee !== "" && stateEmployee !== "" && cref !== "") {
                                        Swal.fire({
                                            title: 'Você tem Certeza?',
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            cancelButtonText: 'Cancelar',
                                            confirmButtonText: `Sim, ${isUpdate ? 'atualizar' : 'cadastrar'}`
                                        }).then(async (result) => {
                                            if (result.isConfirmed) {
                                                (isUpdate) ? handleClickUpdateEmployee(e) : handleClickSaveEmployee(e);
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
                                    {isUpdate ? "Atualizar" : 'Salvar'}
                                </button>
                            ) : (
                                <button onClick={() => setStepper((stepper === 2) ? 2 : stepper + 1)} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                    Avançar
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                    </svg>
                                </button>
                            )
                        }
                    </div>
                </div>
            </article>
        </>
    )
}
