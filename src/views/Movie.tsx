import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/movie.scss";
import { SearchServices } from "../Services/SearchServices";

// Declaração da instância de SearchServices para realizar a busca
const searchServices = new SearchServices();

export const Movie: React.FC = () => {
  // Função para obter o ID do IMDb da rota
  const getImdbID = () => {
    const routeParams = useParams();
    console.log("parâmetro de rota", routeParams);
    return routeParams;
  };

  // Obtém o ID do IMDb da rota
  const imdbID = getImdbID().id;
  console.log(imdbID, "imdbID");

  // Estado para armazenar os detalhes do filme
  interface MovieProps {
    title: string;
    poster: string;
    genre: string;
    director: string;
    actor: string;
    imdbRating: string;
    plot: string;
  }

const [movie, setMovie] = useState<MovieProps | null>(null); 

 const handleLoginClick = () => {
   // Navegar para a página anterior
   window.history.back();
 };
   
  useEffect(() => {
    const getMovie = async (imdbID: string | undefined) => {
      const query = `imdbID=${imdbID}`;
      const details = await searchServices.details(query);
      console.log(details);
      setMovie(details.data);
    };
    getMovie(imdbID);
  }, [imdbID]);

  return (
    <div className="containerMovie">
      <div className="movie-page">
        {movie && (
          <>
            <h1>{movie.title}</h1>
            <img src={movie?.poster || ""} alt={movie?.title} />
            <p>
              <strong>Gênero:</strong> {movie.genre}
            </p>
            <p>
              <strong>Diretor:</strong> {movie.director}
            </p>
            <p>
              <strong>Atores:</strong> {movie.actor}
            </p>
            <p>
              <strong>Avaliação IMDb:</strong> {movie.imdbRating}
            </p>
            <p>
              <strong>Enredo:</strong> {movie.plot}
            </p>

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
  title: string;
  poster: string;
  genre: string;
  director: string;
  actor: string;
  imdbRating: string;
  plot: string;
}

export const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const imdbID = id;

  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [renderedMovieIDs, setRenderedMovieIDs] = useState<string[]>([]);

  useEffect(() => {
    const getMovie = async (imdbID: string | undefined) => {
      if (imdbID && !renderedMovieIDs.includes(imdbID)) {
        const query = `imdbID=${imdbID}`;
        const details = await searchServices.details(query);
        setMovie(details.data);

        setRenderedMovieIDs([...renderedMovieIDs, imdbID]);
      }
    };
    getMovie(imdbID);
  }, [imdbID, renderedMovieIDs]);

  const handleLoginClick = () => {
    window.history.back();
  };

  return (
    <div className="containerMovie">
      <div className="movie-page">
        {movie && (
          <>
            <h1>{movie.title}</h1>
            <img src={movie.poster} alt={movie.title} />
            <p>
              <strong>Gênero:</strong> {movie.genre}
            </p>
            <p>
              <strong>Diretor:</strong> {movie.director}
            </p>
            <p>
              <strong>Atores:</strong> {movie.actor}
            </p>
            <p>
              <strong>Avaliação IMDb:</strong> {movie.imdbRating}
            </p>
            <p>
              <strong>Enredo:</strong> {movie.plot}
            </p>

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
*/