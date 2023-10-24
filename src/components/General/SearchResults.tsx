
import React from "react";
import { useLocation } from "react-router-dom";
import { MovieCard } from "./MovieCard";

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const searchResults = location.state?.results || [];

  return (
    <div className="SearchResultsPage">
      <h2>Resultados da Pesquisa:</h2>
      <div className="movies-container">
        {searchResults.map((movie:any) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
