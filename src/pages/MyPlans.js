import React, { useContext, useState, } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth';
import { formatMoney } from './../utils/format';
import { Toast } from '../common/Toast';
import Swal from 'sweetalert2'
import { MainContext } from '../context/Main';
import { TypeContext } from '../context/Type';

export default function MyPlans() {
    const navigate = useNavigate();

    const { typeList, deleteType, token } = useContext(AuthContext);
    const { setIsLoading, setIsLoadingText } = useContext(MainContext);

    const {
        setIdType,
        setNameType,
        setNumberOfDays,
        setPrice, setIsUpdateType
    } = useContext(TypeContext)

    const [records, setRecords] = useState(typeList);
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [filterSelect, setFilterSelect] = useState('');

    const handleClickAlterUpdate = async (e, row) => {
        e.preventDefault();

        console.log(row);

        setIdType(row.id);
        setNameType(row.name);
        setNumberOfDays(parseInt(row.number_of_days));
        setPrice(row.price);

        setIsUpdateType(true);

        navigate('/academy-plans/form');
    }

    const handleClickDelete = async (e, row) => {
        e.preventDefault();

        Swal.fire({
            title: 'Você tem Certeza?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim, deletar!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setIsLoading(true);
                setIsLoadingText('Excluindo Plano...');

                try {
                    const response = await deleteType(token, row.id);

                    if (response.status === 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Plano Deletado',
                            html: 'Ihuul... Parabéns, você <b>deletou</b> um plano da academia. Acesse \"<b>Planos da Academia/Meus Planos</b>\" para reativar seu plano.'
                        })

                        return;
                    }

                    if (response.status !== 200) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            html: 'Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível deletar este plano.'
                        })

                        return;
                    }
                } catch {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        html: 'Ocorreu um erro inesperado, e infelizmente <b>NÃO</b> foi possível deletar este plano.'
                    })
                } finally {
                    setIsLoading(false);
                    setIsLoadingText('');
                }
            }
        })
    }

    const handleFilterSearchText = async (event) => {
        const filterValue = event.target.value.toLowerCase();

        const newData = typeList.filter(row => {
            return row.name.toLowerCase().includes(filterValue);
        })

        setRecords(newData);
    }

    const handleFilterSelect = async (event) => {
        const filterValue = event.target.value.toLowerCase();

        const newData = typeList.filter(row => {
            return row.active.toString() === filterValue || (filterValue === 'true' && row.active === 1) || (filterValue === 'false' && row.active === 0);
        });

        setIsFilterActive(true);
        setRecords(newData);
    }

    const handleClickClearFilter = async (event) => {
        setIsFilterActive(false);
        setRecords(typeList);
        setFilterSelect('');
    }

    const columns = [
        {
            name: <span className='font-bold text-[14px]'>Nome</span>,
            selector: row => <span className='text-[14px]'>{row.name}</span>,
            sortable: true
        },
        {
            name: <span className='font-bold text-[14px]'>Preço</span>,
            selector: row => <span className='text-[14px]'>{formatMoney(row.price)}</span>,
            sortable: true
        },
        {
            name: <span className='font-bold text-[14px]'>Quantidade de Dias</span>,
            selector: row => <span className='text-[14px]'>{row.number_of_days}x na Semana</span>,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => (row.active) ? (
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span> Ativo
                </span>
            ) : (
                <span class="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
                    <span class="h-1.5 w-1.5 rounded-full bg-red-600"></span> Inativo
                </span>
            ),
            sortable: true
        },
        {
            name: 'Ações',
            cell: (row) => (
                <>
                    <button onClick={(e) => handleClickAlterUpdate(e, row)} className="bg-indigo-800 p-[5px] rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                    {
                        (row.active) ? (
                            <button onClick={(e) => handleClickDelete(e, row)} className="bg-red-900 p-[5px] rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        ) : (
                            <button className="bg-red-900 p-[5px] rounded-md"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                </svg>
                            </button>
                        )
                    }
                </>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            sortable: true
        }
    ];

    const options = {
        rowsPerPageText: 'Linhas por página:',
        rangeSeparatorText: 'de',
        noRowsPerPage: false,
        selectAllRowsItem: false,
        selectAllRowsItemText: 'Todos',
    };

    return (
        <article className="flex-auto h-full mx-auto rounded-md w-full">
            <div>
                <div className="flex-auto pb-[14px]">
                    <h1 class="title">{`Meus Planos (${records.length})`}
                    </h1>
                    <ul class="breadcrumbs">
                        <li><span>Principal</span></li>
                        <li class="divider">/</li>
                        <li><span class="active">Planos da Academia</span></li>
                        <li class="divider">/</li>
                        <li><span class="active">Meus Planos</span></li>
                    </ul>
                </div>
            </div>
            <div className='mb-[5px]'>
                <div className='grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6 '>
                    <div className="mt-1 sm:col-span-5">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            onChange={(e) => {
                                handleFilterSearchText(e);
                            }}
                            placeholder='Digite um nome de um plano para buscar-lo'
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:placeholder-white dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        />
                    </div>
                    <div className="mt-1 sm:col-span-1 flex justify-center items-center">
                        <select
                            type="text"
                            name="filter"
                            id="filter"
                            value={filterSelect}
                            onChange={(e) => {
                                handleFilterSelect(e);
                                setFilterSelect(e.target.value);
                            }}
                            placeholder='Digite um nome de um plano para buscar-lo'
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:placeholder-white dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                        >
                            <option value='' disabled selected>Selecione uma Opção</option>
                            <option value={1}>Ativo</option>
                            <option value={0}>Inativo</option>
                        </select>
                        {
                            (isFilterActive) && (
                                <button className='pl-[12px]' onClick={(e) => handleClickClearFilter(e)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="flex-auto pb-[30px]">
                <DataTable
                    columns={columns}
                    data={records}
                    pagination
                    selectableRows
                    paginationComponentOptions={options}
                />
            </div>
        </article>
    )
}