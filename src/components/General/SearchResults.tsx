import React from "react";

const SearchResult = ({ results }) => {
  return (
    <div className="SearchResultContainer">
      <h3>Resultados da Pesquisa:</h3>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <p>Título: {result.title}</p>
            <p>Ano: {result.year}</p>
            <p>Gênero: {result.genre}</p>
            {/* Adicione mais informações relevantes que deseja exibir */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;