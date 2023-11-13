import React, { useState, useEffect, useRef } from "react";
import { SearchIcon, XIcon, CheckIcon } from "@heroicons/react/solid";

export default function Search() {
  const [searchText, setSearchText] = useState(""); // Estado para armazenar o texto da pesquisa
  const [searchResults, setSearchResults] = useState([]); // Estado para armazenar os resultados da pesquisa
  const [showDropdown, setShowDropdown] = useState(false); // Estado para controlar a exibição do dropdown

  const searchRef = useRef(null);

  useEffect(() => {
    // Adiciona um ouvinte de clique ao documento para fechar o dropdown quando clicar fora do componente de pesquisa
    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Remove o ouvinte de clique quando o componente é desmontado
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleSearchChange = (e) => {
    const text = e.target.value;
    setSearchText(text);

    // Atualiza os resultados da pesquisa com base no texto
    const results = simulateSearch(text);
    setSearchResults(results);

    // Mostra o dropdown se houver resultados
    setShowDropdown(results.length > 0);
  };

  const simulateSearch = (text) => {
    // Simule a pesquisa real aqui com base no texto digitado.
    // Esta é apenas uma simulação, você deve substituir por sua lógica de pesquisa real.
    const results = [
      { id: 1, name: "João Paulo Franchini", cpf: "55564880889" },
      { id: 2, name: "Gabriel Roberto", cpf: "98765432109" },
      // Adicione mais resultados aqui
    ];

    // Filtrar os resultados com base no texto digitado
    return results.filter((result) => {
      return (
        result.name.toLowerCase().includes(text.toLowerCase()) ||
        result.cpf.includes(text)
      );
    });
  };

  const handleDocumentClick = (e) => {
    // Fecha o dropdown se o clique não foi dentro do componente de pesquisa
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const clearSearch = () => {
    setSearchText("");
    setSearchResults([]);
  };

  return (
    <>
      <form ref={searchRef}>
        <label
          htmlFor="default-search"
          className="block font-bold text-[16px] text-black-700"
        >
          Nome do Aluno/CPF *
        </label>
        <div className="mt-1 relative">
          <input
            value={searchText}
            onChange={handleSearchChange}
            type="text"
            name=""
            id="default-search"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-gray focus:ring-dark-gray sm:text-[16px] dark:bg-sidebar dark:border-sidebar duration-300 ease-linear pr-10"
          />
          {searchText && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={clearSearch}
            >
              <XIcon className="h-5 w-5 text-red-500" />
            </button>
          )}
          {searchResults.length > 0 && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <CheckIcon className="h-5 w-5 text-green-500" />
            </div>
          )}
          
        </div>
      </form>
    </>
  );
}
