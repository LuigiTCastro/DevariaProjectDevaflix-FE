import { useEffect, useState } from "react";
import { MovieCard } from "../General/MovieCard";
import "../../assets/styles/telaprincipal.scss";
import "../../assets/styles/movieGrid.scss";

//import "../../assets/styles/movie.scss";

const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;


  
export const TelaPrincipal = () => {
  //gerenciar os estados dos filmes
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url: RequestInfo | URL) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTopMovies(data.results);
  };
 
  useEffect(() => {
    //top_rade envia os melhores filmes avaliados da api
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

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
