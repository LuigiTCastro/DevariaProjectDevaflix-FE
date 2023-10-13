import  { useState, useEffect } from "react";
import "../../assets/styles/telaprincipal.scss";
import "../../assets/styles/movieGrid.scss";
import { MovieCard } from "./MovieCard";
import { SearchServices } from "../../Services/SearchServices";

const searchServices = new SearchServices();


export const TelaPrincipal = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);

  const getMoviesByCategory = async (filter:string, value:string) => {
    const query = `${filter}=${value}`;
    const response = await searchServices.filter(query);  
    console.log(response.data)  
    return response.data;
  };

  const getTopRatedMovies = async () => {
   const topRatedMovies = await getMoviesByCategory("top_rated","");
    setTopMovies(topRatedMovies);
  };

    const getMoviesForCategories = async () => {
    const comedyMovies = await getMoviesByCategory("genre","comedy");
    const actionMovies = await getMoviesByCategory("genre","action");
    const dramaMovies = await getMoviesByCategory("genre","drama");
    const romanceMovies = await getMoviesByCategory("genre","romance");

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

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <p className="titleCategory">Comédia</p>
      <div className="movies-container">      
      
        {
          topMovies
          .filter(movieGenre => movieGenre.genre.includes("Comedy"))
          .slice(0,10)
          .map((movie) => <MovieCard
          key= {movie.imdbID}         
          movie={movie} />)
        }        
     
      </div>
      <p className="titleCategory">Ação</p>
      <div className="movies-container">      
        
        {
          topMovies
          .filter(movieGenre => movieGenre.genre.includes("Action"))
          .slice(0,10)
          .map((movie) => <MovieCard
          key= {movie.imdbID}         
          movie={movie} />)
        }
        
      </div>
      <p className="titleCategory">Drama</p>
      <div className="movies-container">       
        
        {
          topMovies
          .filter(movieGenre => movieGenre.genre.includes("Drama"))
          .slice(0,10)
          .map((movie) => <MovieCard
          key= {movie.imdbID}         
          movie={movie} />)
        }
        
      </div>
      <p className="titleCategory">Romance</p>
      <div className="movies-container">       
        
        {
          topMovies
          .filter(movieGenre => movieGenre.genre.includes("romance"))
          .slice(0,10)
          .map((movie) => <MovieCard
          key= {movie.imdbID}         
          movie={movie} />)
        }
        
      </div>
    </div>
    
  );
};
