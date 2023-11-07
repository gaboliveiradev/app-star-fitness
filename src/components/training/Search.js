import React, { useState, useEffect, useRef } from "react";

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

  return (
    <>
      <form ref={searchRef}>
        {/* ... Seu código de entrada de pesquisa existente ... */}
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Pesquise por nome do aluno ou cpf"
          required
          value={searchText}
          onChange={handleSearchChange}
        />

        {/* O dropdown que mostra os resultados da pesquisa */}
        {showDropdown && searchResults.length > 0 && (
          <div className="mt-2 border border-gray-300 rounded-lg bg-white dark:bg-gray-800">
            {searchResults.map((result) => (
              <div key={result.id} className="p-2 hover:bg-gray-100 dark:hover-bg-gray-700">
                {result.name} - {result.cpf}
              </div>
            ))}
          </div>
        )}
      </form>
    </>
  );
}