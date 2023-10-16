import { MovieCard } from "./MovieCard";

interface Movie {
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

export default function Resultados(props: { tipo: string; value: Movie[] }) {
    const { tipo, value } = props;

    if (tipo === "search"){
        console.log(tipo)
        console.log(value)
    }
    if (tipo === "filter"){
        console.log(tipo)
        console.log(value)
    }
    if (tipo === "query"){
        console.log(tipo)
        console.log(value)
    }else{
        console.log(tipo)
        console.log(value)
    }
  
    return (
        <div className="container">
          {value && value.length > 0 ? (
            <div>
              <p>Resultado da {tipo}</p>
              {
                value
                  .sort((a, b) => b.imdbRating - a.imdbRating)
                  .filter((movie) => movie.genre.includes("Comedy"))
                  .slice(0, 10)
                  .map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                  ))
              }
    
              {/* Aqui você pode mapear os resultados e renderizá-los conforme necessário */}
            </div>
          ) : (
            <div>Busque um {tipo}</div>
          )}
        </div>
      );
    }