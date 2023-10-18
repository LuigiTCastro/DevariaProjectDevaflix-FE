import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/movie.scss";
import { SearchServices } from "../Services/SearchServices";

// Declaração da instância de SearchServices para realizar a busca
const searchServices = new SearchServices();

interface MovieProps {
    imdbID: string;
    title: string;
    translatedTitle: string;
    poster: string;
    imdbRating: number;
    director: string;
    actor: string;
    plot: string;
    videos: string;
    genre: string;
  
}

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
  const [movie, setMovie] = useState<MovieProps | null>(null);

  // Define isAuthenticated (replace this with your actual authentication logic)
  const isAuthenticated = true; // Replace with your authentication logic

  const handleLoginClick = () => {
    const redirectPath = isAuthenticated ? "/mypage" : "/home";
    window.location.href = redirectPath;
  };

  // Hook useEffect para buscar detalhes do filme assim que o componente é montado
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
        {/* Renderiza os detalhes do filme se estiverem disponíveis */}
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
