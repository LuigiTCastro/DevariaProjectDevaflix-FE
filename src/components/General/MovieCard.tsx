import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: {
    imdbID:string;
    title:string;
    translatedTitle:string;
    poster:string;
    imdbRating: number;
    director:string;
    actor:string;
    plot: string;
    videos: string;
  };
  showLink?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  showLink = true,
}) => {

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.translatedTitle}</h2>
      <p>
        <FaStar /> {movie.imdbRating}
      </p>
      {showLink && <Link to={`/movie/${movie.imdbID}`}>Ver mais</Link>}
  </div>
  
);
};
