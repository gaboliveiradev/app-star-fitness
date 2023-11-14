import React, { useContext } from "react";
import Swal from 'sweetalert2'
import { ExerciseContext } from "../context/Exercise";
import { MainContext } from "../context/Main";

export default function AddExercises() {
  const {
    nameExercise, setNameExercise,
    exerciseGifUrl, setExerciseGifUrl,
    exerciseGif, setExerciseGif,
    equipamentImageUrl, setEquipamentImageUrl,
    equipamentImage, setEquipamentImage,
    muscleGroup, setMuscleGroup,
    //methods
    createExercise,
  } = useContext(ExerciseContext);

  const { setIsLoading, setIsLoadingText } = useContext(MainContext);

  const handleOnChangeEquipamentImage = async (e) => {
    setEquipamentImageUrl(URL.createObjectURL(e.target.files[0]));
    setEquipamentImage(e.target.files[0])
  }

  const handleOnChangeExerciseGif = async (e) => {
    setExerciseGifUrl(URL.createObjectURL(e.target.files[0]));
    setExerciseGif(e.target.files[0])
  }

  const handleClickSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsLoadingText('Cadastrando Exercício...');

    try {
      const parameters = {
        name: nameExercise,
        exercise_gif: exerciseGif,
        equipment_gym_photo: equipamentImage,
        muscle_groups: muscleGroup
      }

      const response = await createExercise(parameters);

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Exercício Criado',
          html: 'Ihuul... Parabéns, você <b>criou</b> um exercício na academia. Acesse \"<b>Exercícios/Gerenciar Exercícios</b>\" para gerenciar seus planos'
        })

        handleClickCancel(e);

        return;
      }

      if (response.status !== 201) {
        Swal.fire({
          icon: 'error',
          title: 'Erro Inesperado',
          html: 'Oops... Ocorreu um erro ao tentar <b>cadastrar um novo exercício</b>, porfavor, tente novamente mais tarde.'
        })
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Erro Inesperado',
        html: 'Oops... Ocorreu um erro ao tentar <b>cadastrar um novo exercício</b>, porfavor, tente novamente mais tarde.'
      })
    } finally {
      setIsLoading(false);
      setIsLoadingText("");
    }
  }

  const handleClickCancel = async (e) => {
    e.preventDefault();

    setNameExercise('');
    setExerciseGif('');
    setExerciseGifUrl('');
    setEquipamentImageUrl('');
    setEquipamentImage('');
    setMuscleGroup('');
  }

  return (
    <>
      <article className="flex-auto h-full mx-auto rounded-md w-full">
        <div>
          <div className="flex-auto pb-[14px]">
            <h1 class="title">Adicionar Exercícios</h1>
            <ul class="breadcrumbs">
              <li>
                <span>Principal</span>
              </li>
              <li class="divider">/</li>
              <li>
                <span class="active">Exercícios</span>
              </li>
              <li class="divider">/</li>
              <li>
                <span class="active">
                  Adicionar Exercícios
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-auto pb-[30px]">
          <div className="mt-6 grid grid-cols-1 gap-y-[16px] gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-[16px] font-medium text-black-700"
              >
                Nome do Exercício *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  value={nameExercise}
                  onChange={(e) => setNameExercise(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="gender"
                className="block text-[16px] font-medium text-black-700"
              >
                Grupo Muscular *
              </label>
              <div className="mt-1">
                <select
                  value={muscleGroup}
                  onChange={(e) => setMuscleGroup(e.target.value)}
                  name="muscle_group"
                  id="muscle_group"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear"
                >
                  <option value={""} selected disabled>
                    Escolha
                  </option>
                  <option value="Tórax e Abdômen">Tórax e Abdômen</option>
                  <option value="Superiores">Superiores</option>
                  <option value="Inferiores">Inferiores</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="equipamentImage"
                className="block text-[16px] font-medium text-black-700"
              >
                Imagem do Equipamento
              </label>
              <div class="flex items-center justify-center w-full">
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="equipamentImage"
                  type="file"
                  onChange={(e) => handleOnChangeEquipamentImage(e)}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="exerciseGif"
                className="block text-[16px] font-medium text-black-700"
              >
                GIF do Exercício
              </label>
              <div class="flex items-center justify-center w-full">
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="exerciseGif"
                  type="file"
                  onChange={(e) => handleOnChangeExerciseGif(e)}
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="first-name"
                className="block text-[16px] font-medium text-black-700"
              >
                Arquivos Adicionados
              </label>
              <div className="mt-1 flex flex-row justify-between flex-wrap">
                <div
                  class="relative flex h-96 w-96 cursor-pointer flex-col overflow-hidden bg-white bg-clip-border text-gray-700 transition-opacity hover:opacity-90" data-dialog-target="image-dialog">
                  <img
                    alt="equipamento_academia"
                    class="h-full w-full object-cover object-center"
                    src={equipamentImageUrl}
                  />
                </div>
                <div
                  class="relative flex h-96 w-96 cursor-pointer flex-col overflow-hidden bg-white bg-clip-border text-gray-700 transition-opacity hover:opacity-90" data-dialog-target="image-dialog">
                  <img
                    alt="exercicio"
                    class="h-full w-full object-cover object-center"
                    src={exerciseGifUrl}
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-6 flex justify-end">
              <div className="my-[20px] flex flex-row hover:cursor-pointer">
                <button onClick={(e) => handleClickCancel(e)} class="flex flex-row justify-center items-center bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Cancelar
                </button>
                <button onClick={(e) => handleClickSave(e)} class="flex flex-row justify-center items-center bg-tertiary-blue text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
