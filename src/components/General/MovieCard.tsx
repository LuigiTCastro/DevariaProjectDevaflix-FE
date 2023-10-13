import React, { useState } from "react";
import { FaStar, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/styles/likeCard.scss";

interface MovieCardProps {
  movie: {
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
  };
  showLink?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  showLink = true,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
  };

  const isOnMyPage = () => {
    return window.location.pathname === "/me"; // Assumindo que '/me' é a rota da página "MyPage"
  };

  return (
    <> 
      <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.translatedTitle}</h2>
      <div className="icons-container">
        <FaStar className="star-icon " /> {movie.imdbRating}
        <button className="like-button" onClick={handleLikeToggle}>
          {isOnMyPage() &&
            (isLiked ? <FaThumbsUp color="blue" /> : <FaThumbsUp />)}
        </button>
      </div>
      {showLink && <Link to={`/movie/${movie.imdbID}`}>Detalhes</Link>}
    </div>
    </>
  );
};
