import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination";
import pageContext from "../context/pagesContext";
import genresContext from "../context/genresContext";

const moviesURL = import.meta.env.VITE_NEW_MOVIES_API_URL;

const GenreMovies = () => {
  const { genre } = useParams();
  const { page, handlePage } = useContext(pageContext);
  const { getGenres, genreName, getGenreName } = useContext(genresContext);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const getMoviesByGenre = async () => {
    try {
      const res = await fetch(`${moviesURL}&page=${page}&with_genres=${genre}`);
      const data = await res.json();

      setMoviesByGenre(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesByGenre();
    getGenres(genre);
    getGenreName(genre);
  }, [page]);

  return (
    <div className="text-center">
      <h2 className="text-lightPink mt-10 font-semibold text-5xl md:text-6xl">
        <span className="text-regularOrange font-bold">{genreName.name}</span> Movies
      </h2>
      <Pagination handlePage={handlePage} page={page} />
      <MoviesList movies={moviesByGenre} />
    </div>
  );
};

export default GenreMovies;
