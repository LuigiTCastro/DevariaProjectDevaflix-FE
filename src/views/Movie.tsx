import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/styles/movie.scss";
import { SearchServices } from "../Services/SearchServices";
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
}

export const Movie: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: string }>();
  const [movie, setMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    const getMovie = async (imdbID: string | undefined)=> {
      const query = `imdbID=${imdbID}`;
      const details = await searchServices.details(query);
      setMovie(details.data);
    };
    getMovie(imdbID);
  }, [imdbID]);

  return (
    <div className="containerMovie">
      <div className="movie-page">
        {/* You can render your movie details here */}
        {movie && (
          <>
            <h1>{movie.title}</h1>
            <img src={movie?.poster || ''} alt={movie?.title} />
          
            {/* Add more details as needed */}
          </>
        )}
      </div>
    </div>
  );
};
