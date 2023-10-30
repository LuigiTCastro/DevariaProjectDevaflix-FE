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
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const getGenre = async () => {
    const genresArray = await searchServices.findAll();

    if (Array.isArray(genresArray)) {
      const genresString = genresArray.join(",");
      const genresArraySplit = genresString.split(",").map((genre: string) => genre.trim());
      const shuffledGenres = [...genresArraySplit].sort(() => 0.5 - Math.random());
      const selected = shuffledGenres.slice(0, 3);
      setSelectedGenres(selected);
    } else {
      console.error("Erro ao buscar gêneros");
    }
  };

  const fetchMovies = async () => {
    const uniqueMovies: { [key: string]: any } = {}; // Usar um objeto para armazenar filmes únicos

    for (const genre of selectedGenres) {
      console.log(genre);
      const genreMovies = await getMoviesByCategory("genre", genre);
      genreMovies.forEach((movie) => {
        // Adicione cada filme ao objeto usando o imdbID como chave
        uniqueMovies[movie.imdbID] = movie;
      });
    }

    // Obtenha os filmes únicos como um array
    const uniqueMoviesArray = Object.values(uniqueMovies);

    setTopMovies(uniqueMoviesArray);
    setMoviesFetched(true);
  };

  const getMoviesByCategory = async (filter: string, value: string) => {
    console.log(`${filter}=${value}`);
    const query = `${filter}=${value}`;
    const response = await searchServices.filter(query);
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    getGenre(); // Busca gêneros e escolhe aleatoriamente 3
  }, []);

  useEffect(() => {
    if (selectedGenres.length === 3 && !moviesFetched) {
      fetchMovies(); // Busca filmes quando os gêneros são selecionados
    }
  }, [selectedGenres, moviesFetched]);

  const renderMoviesByCategory = () => {
    return selectedGenres.map((category) => (
      <div key={category}>
        <h2 className="titleCategory">{category}</h2>
        <div className="movies-container">
          {topMovies
            .sort((a, b) => b.imdbRating - a.imdbRating)
            // .filter((movie) => movie.genre.toLowerCase().includes(category))
            .slice(0, 9)
            .map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      
      {renderMoviesByCategory()}
      <BackToTop/>
    </div>
  );
};


