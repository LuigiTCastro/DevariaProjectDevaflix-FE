import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/movie.scss";
import { SearchServices } from "../Services/SearchServices";
import imgPosterNotFound from "../assets/imagens/PosterNotFound.jpg";

// Declaração da instância de SearchServices para realizar a busca
const searchServices = new SearchServices();

export const Movie: React.FC = () => {
  // Função para obter o ID do IMDb da rota
  const getImdbID = () => {
    const routeParams = useParams();
    return routeParams;
  };

  // Obtém o ID do IMDb da rota
  const imdbID = getImdbID().id;
  // Estado para armazenar os detalhes do filme
  interface MovieProps {
    _id: string;
    imdbID: string;
    title: string;
    translatedTitle: string;
    poster: string;
    imdbRating: number;
    duracao: string;
    director: string;
    actor: string;
    plot: string;
    videos: string[];
    genre: string;
  }

  const [movie, setMovie] = useState<MovieProps | null>(null);
  const trailers = movie?.videos;

  const handleLoginClick = () => {
    // Navegar para a página anterior
    window.history.back();
  };

  useEffect(() => {
    const getMovie = async (imdbID: string | undefined) => {
      const query = `imdbID=${imdbID}`;
      const details = await searchServices.details(query);
      setMovie(details.data);
      console.log("Trailers =>", movie?.videos);
    };
    getMovie(imdbID);
  }, [imdbID]);


  const renderTrailers = (trailers: string[]) => {
    console.log(trailers);
    if (trailers.length > 0) {
      return (
        <iframe
          width="420"
          height="315"
          src={trailers[0]}
          title="Trailer"
        ></iframe>
      );
    } else {
      return <p>Nenhum trailer disponível.</p>;
    }
  };

  return (
    <div className="containerMovie">
      <div className="movie-page">
        {movie && (
          <>
            <h1>{movie.translatedTitle}</h1>
            <p>Nome original:{movie.title}</p>
            <img
              src={movie.poster == "N/A" ? imgPosterNotFound : movie.poster}
              alt={movie?.title}
            />
            <p>
              <strong>Gênero:</strong> {movie.genre}
            </p>
            <p>
              <strong>Duração:</strong> {movie.duracao}
            </p>
            <p>
              <strong>Diretor:</strong> {movie.director}
            </p>
            <p>
              <strong>Atores:</strong> {movie.actor}
            </p>
            <p>
              <strong>Avaliação IMDb:</strong>{" "}
              {movie.imdbRating != 0 ? movie.imdbRating : "N/A"}
            </p>
            <p>
              <strong>Enredo:</strong> {movie.plot}
            </p>
            <div>
              {trailers && trailers.length > 0 && (
                <div>
                  {/* <p>Trailers</p> */}
                  <p>Trailer</p>
                  {/* <div className="Trailers">{renderTrailers(trailers)}</div> */}
                  <iframe
                    width="420"
                    height="315"
                    src={trailers[0]}
                    title={`Trailer `}
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
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
