import React, { useState } from "react";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/styles/likeCard.scss";
import { SearchServices } from "../../Services/SearchServices";

const searchServices = new SearchServices();


interface MovieCardProps {
  movie: {
    _id:string;
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

export const MovieCard: React.FC<MovieCardProps> = ({ movie, showLink = true }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const ratingObj = searchServices.rating(movie._id)


  const handleLikeToggle = async () => {
    try {
      await searchServices.like(movie._id)
      console.log(!isLiked)
      setIsLiked(!isLiked);
      setIsDisliked(false);
      
    } catch (error) {
      alert(`Erro ao Descurtir o filme`)
    }
  };

  const handleDislikeToggle = async() => {
    try {
      await searchServices.dislike(movie._id)
      console.log(isDisliked)
      setIsDisliked(!isDisliked);
      setIsLiked(false);
      
      
    } catch (error) {
      alert(`Erro ao Descurtir o filme`)
    }
  };

  const isOnMyPage = () => {
    console.log(ratingObj)
    return window.location.pathname === "/me"; // Assumindo que '/me' é a rota da página "MyPage"
  };

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.translatedTitle}</h2>
      <div className="icons-container">
        <FaStar className="star-icon" /> {movie.imdbRating}
        {isOnMyPage() && (
          <>
            <button className="like-button" onClick={handleLikeToggle}>
              {isLiked ? <FaThumbsUp color="blue" /> : <FaThumbsUp />}
            </button>
            <button className="dislike-button" onClick={handleDislikeToggle}>
              {isDisliked ? <FaThumbsDown color="red" /> : <FaThumbsDown />}
            </button>
            <span>{ratingObj}%</span>
          
          </>
        )}
      </div>
      {showLink && <Link to={`/movie/${movie.imdbID}`}>Detalhes</Link>}
    </div>
  );
};
