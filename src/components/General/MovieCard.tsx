import React, { useState, useEffect} from "react";
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
  const myId = localStorage.getItem("id") || "";
  const [ratingObj, setRatingObj] = useState<{
    likes: string[];
    dislikes: string[];
    percentageLikes: number;
  }>({
    likes: [],
    dislikes: [],
    percentageLikes: 0,
  });
  const isLiked = ratingObj?.likes.includes(myId);
  const isDisliked = ratingObj?.dislikes.includes(myId);
  const percentageLikes = ratingObj?.percentageLikes;

  const loggedUserLiked = () => {
    console.log(ratingObj.likes.includes(myId))
    return ratingObj && ratingObj.likes.includes(myId);
  };
  
  const loggedUserDisliked = () => {
    console.log(ratingObj.dislikes.includes(myId))
    return ratingObj && ratingObj.dislikes.includes(myId);
  };

  const isOnMyPage = () => {
    console.log(window.location.pathname === "/me")
    return window.location.pathname === "/me"; 
  };

  useEffect(() => {
    async function fetchRating() {
      try {
        const ratingData = await searchServices.rating(movie._id);
        console.log(ratingData)
        ratingObj.percentageLikes = ratingData.percentageLikes;
        console.log(ratingObj)
        setRatingObj(ratingData);
      } catch (error) {
        console.error("Erro ao buscar dados de classificação:", error);
      }
    }
  
    fetchRating();
  }, [movie._id]);


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

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.translatedTitle}</h2>
      <div className="icons-container">
        <FaStar className="star-icon" /> {movie.imdbRating}
        {isOnMyPage() && (
          <>
            <button className="like-button" onClick={handleLikeToggle}>
            {isLiked ? (
              <FaThumbsUp color="blue" />
            ) : (
              <FaThumbsUp />
            )}
            </button>
            <button className="dislike-button" onClick={handleDislikeToggle}>
            {isDisliked ? (
              <FaThumbsDown color="red" />
            ) : (
              <FaThumbsDown />
            )}
            </button>
            {percentageLikes && percentageLikes !== null ? <span>{percentageLikes} %</span> : ""}
          </>
        )}
      </div>
      {showLink && <Link to={`/movie/${movie.imdbID}`}>Detalhes</Link>}
    </div>
  );
};
