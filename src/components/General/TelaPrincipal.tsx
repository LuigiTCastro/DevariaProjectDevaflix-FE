import { useState, useEffect } from "react";
import "../../assets/styles/telaprincipal.scss";
import "../../assets/styles/movieGrid.scss";
import { MovieCard } from "./MovieCard";
import { SearchServices } from "../../Services/SearchServices";
import Search from "./Search";

const searchServices = new SearchServices();

export const TelaPrincipal = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);
  const [moviesFetched, setMoviesFetched] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const genres = ["comedy", "action", "drama", "romance", "adventure", "sci-fi", "short", "fantasy", "history"];

  const chooseRandomGenres = () => {
    const shuffledGenres = [...genres].sort(() => 0.5 - Math.random());
    console.log(shuffledGenres)
    const selected = shuffledGenres.slice(0, 3);
    console.log(selected)
    setSelectedGenres(selected);
    return
  };

  const fetchMovies = async () => {
    const allMovies = [];

    for (const genre of selectedGenres) {
      console.log(genre)
      const genreMovies = await getMoviesByCategory("genre", genre);
      console.log("genreMovies", genreMovies)
      allMovies.push(...genreMovies);
    }

    const uniqueMovies: { [key: string]: any } = {};

    allMovies.forEach((movie) => {
      if (!uniqueMovies[movie.imdbID]) {
        uniqueMovies[movie.imdbID] = movie;
      }
    });

    const uniqueMoviesArray = Object.values(uniqueMovies);

    setTopMovies(uniqueMoviesArray);
    setMoviesFetched(true);
  };

  const getMoviesByCategory = async (filter: string, value: string) => {
    console.log(`${filter}=${value}`)
    const query = `${filter}=${value}`;
    const response = await searchServices.filter(query);
    console.log(response.data)
    return response.data;
  };

  const updateSearchResults = (results:any) => {
    setTopMovies(results);
    setMoviesFetched(true);
  };
  

  useEffect(() => {
    chooseRandomGenres(); 
    fetchMovies();

    if (!moviesFetched) {
      console.log("moviesFetched", moviesFetched)
      chooseRandomGenres(); 
      fetchMovies();
    }
  }, [moviesFetched]);

  const renderMoviesByCategory = () => {
    return selectedGenres.map((category) => (
      <div key={category}>
        <h2 className="titleCategory">{category}</h2>
        <div className="movies-container">
          {topMovies
            .sort((a, b) => b.imdbRating - a.imdbRating)
            .filter((movie) => movie.genre.toLowerCase().includes(category))
            .slice(0, 10)
            .map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="container">
      <Search updateResults={updateSearchResults} />
      {/* ... */}
    </div>
      {/* {Chamar integração da api para retornar array de results} */}
      <h2 className="title">Filmes</h2>
      {renderMoviesByCategory()}
    </div>
  );
};
