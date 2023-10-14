import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/movie.scss";
import { SearchServices } from "../Services/SearchServices";

// Declaração da instância de SearchServices para realizar a busca
const searchServices = new SearchServices();

const handleLoginClick = () => {
  window.location.href = id ? "/me" : "/login";
};


// Declaração da interface MovieProps para definir o formato dos dados do filme
interface MovieProps {
  imdbID: string;
  title: string;
  translatedTitle: string;
  poster: string;
  genre: string;
  imdbRating: number;
  director: string;
  actor: string;
  plot: string;
  videos: string;
}

// Componente funcional Movie
export const Movie: React.FC = () => {

  // Função para obter o ID do IMDb da rota
  const getImdbID = () => {
    const routeParams = useParams();
    console.log("parâmetro de rota", routeParams);
    return routeParams;
  }

  // Obtém o ID do IMDb da rota
  const imdbID = getImdbID().id;
  console.log(imdbID, "imdbID");

  // Estado para armazenar os detalhes do filme
  const [movie, setMovie] = useState<MovieProps | null>(null);
  console.log("ID do IMDb do filme: ", imdbID);

  // Hook useEffect para buscar detalhes do filme assim que o componente é montado
  useEffect(() => {
    console.log(imdbID);
    const getMovie = async (imdbID: string | undefined) => {
      const query = `imdbID=${imdbID}`;
      const details = await searchServices.details(query);
      console.log(details);
      setMovie(details.data);
    };
    getMovie(imdbID);
    console.log(movie);
  }, [imdbID]);

  return (
    <div className="containerMovie">
      <div className="movie-page">
        {/* Renderiza os detalhes do filme se estiverem disponíveis */}
        {movie && (
          <>
            <h1>{movie.title}</h1>
            <img src={movie?.poster || ''} alt={movie?.title} />
            <p><strong>Gênero:</strong> {movie.genre}</p>
            <p><strong>Diretor:</strong> {movie.director}</p>
            <p><strong>Atores:</strong> {movie.actor}</p>
            <p><strong>Avaliação IMDb:</strong> {movie.imdbRating}</p>
            <p><strong>Enredo:</strong> {movie.plot}</p>
            {/* Adicione mais detalhes conforme necessário */}
            <button
            className="btnHeaderSair"
            type="button"
            onClick={handleLoginClick}
          >
            Sair!
          </button>
          </>
          
        )}
      </div>
    </div>
  );
};

/*import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/movie.scss";
import { SearchServices } from "../Services/SearchServices";
const searchServices = new SearchServices();

interface MovieProps {
  imdbID: string;
  title: string;
  translatedTitle: string;
  poster: string;
  genre: string;
  imdbRating: number;
  director: string;
  actor: string;
  plot: string;
  videos: string;
}

export const Movie: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    const getMovie = async (imdbID: string | undefined)=> {
      const query = `imdbID=${imdbID}`;
      const details = await searchServices.details(query);
      setMovie(details.data);
    };
    getMovie(imdbID);
  }, [imdbID]);

  return (
    <div className="containerMovie">
     <div className="containerGenre">
        <div className="movie-page">
          {/* You can render your movie details here }*/
         // {movie && (
           // <>
            //  <h1>{movie.genre}</h1>
            //  <h2>{movie.title}</h2> aqui!!!!
            //  <img src={movie?.poster || ''} alt={movie?.title} />
            
            //  {/* Add more details as needed */}
           // </>
         // )}
      //  </div>
     // </div>
   // </div>
  //);
//};
