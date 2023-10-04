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

interface MovieProps {
  
  tagline: string;
  runtime: number;
  overview: string;
  trailer: string;

}
const moviesURL: string = import.meta.env.VITE_API;
const apiKey: string = import.meta.env.VITE_API_KEY;

export const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieProps | null>(null);

  const getMovie = async (url: RequestInfo | URL) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, [id]);

  return (
    <div className="containerMovie">
      <div className="movie-page">
        {movie && (
          <>
            <MovieCard movie={movie} showLink={false} />
            <p className="tagline">{movie.tagline}</p>

            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className="info description">
              <h3>
                <BsFillFileEarmarkTextFill /> Descrição:
              </h3>
              <p>{movie.overview}</p>
            </div>

            <div className="trailer-link">
              <h3>
                <FaFileVideo /> Trailers
              </h3>
              {movie.trailer && (
                <>
                  <h3>
                    <BsFilm /> Trailer:
                  </h3>
                  <a
                    href={movie.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Assistir ao trailer
                  </a>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
