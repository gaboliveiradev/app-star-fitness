import React, { useState } from "react";

export default function Search() {
  const [searchText, setSearchText] = useState(""); // Estado para armazenar o texto da pesquisa
  const [searchResults, setSearchResults] = useState([]); // Estado para armazenar os resultados da pesquisa

  // Função para atualizar o estado do texto de pesquisa
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    // Aqui você pode adicionar lógica para filtrar os resultados com base no texto de pesquisa
    // e atualizar o estado `searchResults` de acordo com os resultados da pesquisa.
  };

  return (
    <>
      <form>
        {/* ... Seu código de entrada de pesquisa existente ... */}
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Pesquise por nome do aluno ou cpf"
          required
          value={searchText}
          onChange={handleSearchChange}
        />

        {/* O dropdown que mostra os resultados da pesquisa */}
        {searchResults.length > 0 && (
          <div class="mt-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800">
            {searchResults.map((result) => (
              <div key={result.id} class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                {result.name} - {result.cpf}
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
        >
          Pesquisar
        </button>
      </form>
    </>
  );
}
