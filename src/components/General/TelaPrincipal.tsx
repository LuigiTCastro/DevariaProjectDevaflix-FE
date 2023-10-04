
import  { useState, useEffect } from "react";
import "../../assets/styles/telaprincipal.scss";
import "../../assets/styles/movieGrid.scss";
import { MovieCard } from "./MovieCard";

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;
//const imagesURL = import.meta.env.VITE_IMG;

export const TelaPrincipal = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);

  const getMoviesByCategory = async (category: string) => {
    const categoryUrl = `${moviesURL}${category}?${apiKey}`;
    const response = await fetch(categoryUrl);
    const data = await response.json();
    return data.results;
  };

  const getTopRatedMovies = async () => {
    const topRatedMovies = await getMoviesByCategory("top_rated");
    setTopMovies(topRatedMovies);
  };

  const getMoviesForCategories = async () => {
    const comedyMovies = await getMoviesByCategory("comedy");
    const actionMovies = await getMoviesByCategory("action");
    const dramaMovies = await getMoviesByCategory("drama");
    const romanceMovies = await getMoviesByCategory("romance");

    const allMovies = [
      ...comedyMovies,
      ...actionMovies,
      ...dramaMovies,
      ...romanceMovies,
    ];

    setTopMovies(allMovies);
  };

  useEffect(() => {
    getTopRatedMovies();
    getMoviesForCategories();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

/************************ */
// ... a url top_rate ok

/*export const TelaPrincipal = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);
  const [dramaMovies, setDramaMovies] = useState<any[]>([]);
  const [comedyMovies, setComedyMovies] = useState<any[]>([]);
  const [romanceMovies, setRomanceMovies] = useState<any[]>([]);

  const getMoviesByCategory = async (category: string) => {
    const categoryUrl = `${moviesURL}${category}?${apiKey}`;
    const response = await fetch(categoryUrl);
    const data = await response.json();
    return data.results;
  };

  const getTopRatedMovies = async () => {
    const topRatedMovies = await getMoviesByCategory('top_rated');
    setTopMovies(topRatedMovies);
  };

  const getMoviesForCategories = async () => {
    const dramaMoviesData = await getMoviesByCategory('drama');
    setDramaMovies(dramaMoviesData);

    const comedyMoviesData = await getMoviesByCategory('comedy');
    setComedyMovies(comedyMoviesData);

    const romanceMoviesData = await getMoviesByCategory('romance');
    setRomanceMovies(romanceMoviesData);
  };

  useEffect(() => {
    getTopRatedMovies();
    getMoviesForCategories();
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      <h2 className="title">Drama:</h2>
      <div className="movies-container">
        {dramaMovies.length > 0 &&
          dramaMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      <h2 className="title">Comédia:</h2>
      <div className="movies-container">
        {comedyMovies.length > 0 &&
          comedyMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>

      <h2 className="title">Romance:</h2>
      <div className="movies-container">
        {romanceMovies.length > 0 &&
          romanceMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};*/
