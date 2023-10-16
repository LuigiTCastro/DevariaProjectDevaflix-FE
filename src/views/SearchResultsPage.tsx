import React from "react";
import { useLocation } from "react-router-dom";
import { MovieCard } from "../components/General/MovieCard";


const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const searchResults = location.state?.results || [];

  const handleGoBack = () => {
    window.history.back(); // Volta para a página anterior
  };

  return (
    <div className="SearchResultsPage ">
      <h2>Resultados da Pesquisa</h2>
      <div className="movies-container">
        {searchResults.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <button onClick={handleGoBack}>Voltar</button>
    </div>
  );
};

export default SearchResultsPage;
