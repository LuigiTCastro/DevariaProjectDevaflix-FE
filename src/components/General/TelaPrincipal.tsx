
import  { useState, useEffect } from "react";
import "../../assets/styles/telaprincipal.scss";
import "../../assets/styles/movieGrid.scss";
import { MovieCard } from "./MovieCard";
import { SearchServices } from "../../Services/SearchServices";

const searchServices = new SearchServices();

//const moviesURL: string = import.meta.env.VITE_API;
//const apiKey: string = import.meta.env.VITE_API_KEY;
//const imagesURL = import.meta.env.VITE_IMG;

export const TelaPrincipal = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);

  const getMoviesByCategory = async (filter:string, value:string) => {
    const query = `${filter}=${value}`;
    const response = await searchServices.filter(query);  
    console.log(response.data)  
    return response.data;
  };

  const getTopRatedMovies = async () => {
   // const topRatedMovies = await getMoviesByCategory("top_rated");
    //setTopMovies(topRatedMovies);
  };

    const getMoviesForCategories = async () => {
    const comedyMovies = await getMoviesByCategory("genre","action");
    //const actionMovies = await getMoviesByCategory("action");
   // const dramaMovies = await getMoviesByCategory("drama");
   // const romanceMovies = await getMoviesByCategory("romance");

    const allMovies = [
      ...comedyMovies,
     // ...actionMovies,
     // ...dramaMovies,
     // ...romanceMovies,
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
        {topMovies?.length > 0 &&
          topMovies.map((movie) => <MovieCard
            key={movie.imdbID}
          
            movie={movie} />)}
      </div>
    </div>
  );
};
