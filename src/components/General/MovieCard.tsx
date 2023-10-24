
import { useState } from "react";

import React, { useState, useEffect } from "react";

import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgPosterNotFound from "../../assets/imagens/PosterNotFound.jpg"
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
    duracao:string;
    director: string;
    actor: string;
    plot: string;
    videos: string;
    genre: string;
  };
  showLink?: boolean;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, showLink = true }) => {
  const myId = localStorage.getItem("id") || "";
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [ratingObj, setRatingObj] = useState<{
    likes: string[];
    dislikes: string[];
    percentageLikes: number;
  }>({
    likes: [],
    dislikes: [],
    percentageLikes: 0,
  });
  let movieRating

  const loggedUserLiked = () => {
    return ratingObj && ratingObj.likes.includes(myId);
  };
  
  const loggedUserDisliked = () => {
    return ratingObj && ratingObj.dislikes.includes(myId);
  };

  const handleLikeToggle = async () => {
    try {
      await searchServices.like(movie._id);
      if (loggedUserLiked()) {
        setRatingObj((prevRatingObj) => ({
          ...prevRatingObj,
          likes: prevRatingObj.likes.filter((idUsersLiked) => idUsersLiked !== myId),
        }));
      } else {
        setRatingObj((prevRatingObj) => ({
          ...prevRatingObj,
          likes: [...prevRatingObj.likes, myId],
        }));
      }
      
    } catch (error) {
      alert(`Erro ao Curtir o filme`);
    }
  };

  const handleDislikeToggle = async () => {
    try {
      await searchServices.dislike(movie._id);
      if (loggedUserDisliked()) {
        setRatingObj((prevRatingObj) => ({
          ...prevRatingObj,
          dislikes: prevRatingObj.dislikes.filter((idUsersDisliked) => idUsersDisliked !== myId),
        }));
      } else {
        setRatingObj((prevRatingObj) => ({
          ...prevRatingObj,
          dislikes: [...prevRatingObj.dislikes, myId],
        }));
      }
    } catch (error) {
      alert(`Erro ao Descurtir o filme`);
    }
    
  };

  const isOnMyPage = () => {
    return window.location.pathname === "/me"; // Assumindo que '/me' é a rota da página "MyPage"
  };

  useEffect(() => {
    async function fetchRating() {
      try {
        movieRating = await searchServices.rating(movie.imdbID);
        setRatingObj(movieRating);
        

        const userLiked = ratingObj.likes.includes(myId);
        const userDisliked = ratingObj.dislikes.includes(myId);

        setIsLiked(userLiked);
        setIsDisliked(userDisliked);
      } catch (error) {
        console.error("Erro ao buscar dados de classificação:", error);
      }
    }
  
    fetchRating();
  }, [movie._id, ratingObj.likes, ratingObj.dislikes, myId]);
  return (
    
    <div className="movie-card">
      <p>{movie.translatedTitle}</p>
      <img src={movie.poster == "N/A" ? imgPosterNotFound : movie.poster} alt={movie.title} />
      <div className="icons-container">
        <FaStar className="star-icon" /> {movie.imdbRating != 0 ? movie.imdbRating : "N/A"}
        {isOnMyPage() && (
          <>
            <button className="like-button" onClick={handleLikeToggle}>
              {isLiked ? <FaThumbsUp color="blue" /> : <FaThumbsUp />}
            </button>
            <button className="dislike-button" onClick={handleDislikeToggle}>
              {isDisliked ? <FaThumbsDown color="red" /> : <FaThumbsDown />}
            </button>
          </>
        )}
        <span>{(ratingObj.percentageLikes)*100}%</span>
      </div>
      {showLink && <Link to={`/movie/${movie.imdbID}`}>Detalhes</Link>}
    </div>   
  );
}; 



