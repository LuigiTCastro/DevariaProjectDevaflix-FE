/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from "react";
import "../../assets/styles/telaprincipal.scss";
import "../../assets/styles/movieGrid.scss";
import { MovieCard } from "./MovieCard";
import { SearchServices } from "../../Services/SearchServices";

const searchServices = new SearchServices();

export const TelaPrincipal = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);
  const [moviesFetched, setMoviesFetched] = useState(false);

  const fetchMovies = async () => {

    const comedyMovies = await getMoviesByCategory("genre", "comedy");
    const actionMovies = await getMoviesByCategory("genre", "action");
    const dramaMovies = await getMoviesByCategory("genre", "drama");
    const romanceMovies = await getMoviesByCategory("genre", "romance");

    const allMovies = [   
      ...comedyMovies,
      ...actionMovies,
      ...dramaMovies,
      ...romanceMovies,
    ];

    setTopMovies(allMovies);
    setMoviesFetched(true);
  };

  const getMoviesByCategory = async (filter: string, value: string) => {
    const query = `${filter}=${value}`;
  
    const response = await searchServices.filter(query);
    return response.data;
  };

  useEffect(() => {
    if (!moviesFetched) {
      fetchMovies();
    }
  }, [moviesFetched]);

  const renderMoviesByCategory = (category: string) => {
    return topMovies
      .sort((a, b) => b.imdbRating - a.imdbRating)
      .filter((movie) => movie.genre.toLowerCase().includes(category))
      .slice(0, 10)
      .map((movie) => <MovieCard key={movie.imdbID} movie={movie} />);
  };

  return (
    <div className="container">     
      <h2 className="title">Filmes</h2>
      <p className="titleCategory">Comédia</p>
      <div className="movies-container">
        {renderMoviesByCategory("comedy")}
      </div>
      <p className="titleCategory">Ação</p>
      <div className="movies-container">
        {renderMoviesByCategory("action")}
      </div>
      <p className="titleCategory">Drama</p>
      <div className="movies-container">
        {renderMoviesByCategory("drama")}
      </div>
      <p className="titleCategory">Romance</p>
      <div className="movies-container">
        {renderMoviesByCategory("romance")}
      </div>
  </div>
);
};
