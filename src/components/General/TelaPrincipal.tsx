import { useState, useEffect } from "react";
import "../../assets/styles/telaprincipal.scss";
import "../../assets/styles/movieGrid.scss";
import { MovieCard } from "./MovieCard";
import { SearchServices } from "../../Services/SearchServices";
import { BackToTop } from "./BackToTop";

const searchServices = new SearchServices();

export const TelaPrincipal = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);
  const [moviesFetched, setMoviesFetched] = useState(false);

  const fetchMovies = async () => {
    let imdbIdList: string[] = [];
    let uniqueMovies = [];

    const comedyMovies = await getMoviesByCategory("genre", "comedy");
    const actionMovies = await getMoviesByCategory("genre", "action");
    const dramaMovies = await getMoviesByCategory("genre", "drama");
    const romanceMovies = await getMoviesByCategory("genre", "romance");
    const adventureMovies = await getMoviesByCategory("genre", "adventure");
    const animationMovies = await getMoviesByCategory("genre", "animation");
    const sciFiMovies = await getMoviesByCategory("genre", "sci-fi");
    const fantasyMovies = await getMoviesByCategory("genre", "fantasy");
    const musicMovies = await getMoviesByCategory("genre", "music");
    const talkShowMovies = await getMoviesByCategory("genre", "talk-show");
    const terrorMovies = await getMoviesByCategory("genre", "horror");

    let allMovies = [
      ...comedyMovies,
      ...actionMovies,
      ...dramaMovies,
      ...romanceMovies,
      ...adventureMovies,
      ...animationMovies,
      ...sciFiMovies,
      ...fantasyMovies,
      ...musicMovies,
      ...talkShowMovies,
      ...terrorMovies,
    ];
    for (const movie of allMovies) {
      if (!imdbIdList.includes(movie.imdbID)) {
        imdbIdList.push(movie.imdbID);
        uniqueMovies.push(movie);
      }
    }

    setTopMovies(uniqueMovies);
    setMoviesFetched(true);
  };

  const getMoviesByCategory = async (filter: string, value: string) => {
    const query = `${filter}=${value}`;

    const response = await searchServices.filter(query);
    return response.data;
  };

  useEffect(() => {
    if (!moviesFetched) {
      fetchMovies();
    }
  }, [moviesFetched]);

  const renderMoviesByCategory = (category: string) => {
    const uniqueMovies = topMovies
      .sort((a, b) => b.imdbRating - a.imdbRating)
      .filter((movie) => movie.genre.toLowerCase().includes(category))
      .slice(0, 9);
    //.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />);

    return uniqueMovies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ));
  };

  return (
    <div className="container">
      <h2 className="title"></h2>
      <p className="titleCategory">Comédia</p>
      <div className="movies-container">{renderMoviesByCategory("comedy")}</div>
      <p className="titleCategory">Ação</p>
      <div className="movies-container">{renderMoviesByCategory("action")}</div>
      <p className="titleCategory">Drama</p>
      <div className="movies-container">{renderMoviesByCategory("drama")}</div>
      <p className="titleCategory">Romance</p>
      <div className="movies-container">
        {renderMoviesByCategory("romance")}
      </div>
      <p className="titleCategory">Aventura</p>
      <div className="movies-container">{renderMoviesByCategory("adventure")}</div>
      <p className="titleCategory">Animação</p>
      <div className="movies-container">{renderMoviesByCategory("animation")}</div>
      <p className="titleCategory">Ficção Científica</p>
      <div className="movies-container">{renderMoviesByCategory("sci-fi")}</div>
      <p className="titleCategory">Fantasia</p>
      <div className="movies-container">{renderMoviesByCategory("fantasy")}</div>
      <p className="titleCategory">Musical</p>
      <div className="movies-container">{renderMoviesByCategory("music")}</div>
      <p className="titleCategory">Talk-Show</p>
      <div className="movies-container">{renderMoviesByCategory("talk-show")}</div>
      <p className="titleCategory">Terror</p>
      <div className="movies-container">{renderMoviesByCategory("horror")}</div>
      <BackToTop />
    </div>
  );
};

