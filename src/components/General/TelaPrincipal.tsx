import  { useState, useEffect } from "react";
import "../../assets/styles/telaprincipal.scss";
import "../../assets/styles/movieGrid.scss";
import { MovieCard } from "./MovieCard";
import { SearchServices } from "../../Services/SearchServices";


const searchServices = new SearchServices();

export const TelaPrincipal = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getMoviesByFilter = async (filter: string, value: string) => {
    const query = `${filter}=${value}`; // Genre
    const response = await searchServices.filter(query);
    console.log("getMoviesByFilter",response.data)
    
    return response.data;
  };

  const getTopRatedMovies = async () => {
    const topRatedMovies = await getMoviesByFilter("genre","Fantasy");
    // topRatedMovies.;
    setTopMovies(topRatedMovies);
  };

  const getMoviesForCategories = async () => {
    const comedyMovies = await getMoviesByFilter("genre","Comedy");
    const actionMovies = await getMoviesByFilter("genre","action");
    // const dramaMovies = await getMoviesByGenre("drama");
    // const romanceMovies = await getMoviesByGenre("romance");

    const allMovies = [
      
      ...comedyMovies,
      ...actionMovies,
      // ...dramaMovies,
      // ...romanceMovies,
    ];
    // console.log("all movies",allMovies)

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
        {topMovies?.length > 0 &&
          topMovies.map((movie) => <MovieCard 
          key={movie.imdbID} 
          
          movie={movie} />)}
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
