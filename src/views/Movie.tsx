/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsFilm,
} from "react-icons/bs";
import { MovieCard } from "../components/General/MovieCard";
import "../assets/styles/movie.scss";
import { FaFileVideo } from "react-icons/fa";
import { SearchServices } from "../Services/SearchServices";


const searchServices = new SearchServices();

interface MovieProps {
  imdbID:string;
  title:string;
  translatedTitle:string;
  poster:string;
  imdbRating: number;
  director:string;
  actor:string;
  plot: string;
  videos: string;
}

// const moviesURL: string = import.meta.env.VITE_API;
// const apiKey: string = import.meta.env.VITE_API_KEY;

export const Movie: React.FC = () => {
  const imdbID  = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<MovieProps>([]);
  
  
  useEffect(() => {
        
    const getMovie = async (imdbID: string) => {
      console.log("dentro do getMovie", imdbID)
      const query = `imdbID=${imdbID}`; // title ID
      const details = await searchServices.details(query);
      setMovie(details.data);
    };
    console.log("fora do getMovie", imdbID)
    getMovie(imdbID.id);
    
    
    }, [imdbID]);
    
    

  return (
    <div className="containerMovie">
      <div className="movie-page">
        <h1>FILME : {movie.translatedTitle}</h1>
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false} />
            <p className="tituloTraduzido">{movie?.translatedTitle}</p>

            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>Trailers Disponíveis: {movie.videos}</p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill /> Descrição:
              </h3>
              <p>{movie.plot}</p>
            </div>

            <div className="trailer-link">
              <h3>
                <FaFileVideo /> Trailers
              </h3>
              {movie.videos && (
                <>
                  <h3>
                    <BsFilm /> Assistir aos trailers:
                  </h3>

                  {/* {trailers?.length > 0 &&
                     trailers?.map((trailer) => <a
                      href={trailer}
                      >
                        <Link to={trailer}/>
                    </a>)} */}
                  
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
