import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination";

const moviesURL = import.meta.env.VITE_NEW_MOVIES_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const genresURL = import.meta.env.VITE_API_GENRES;

const GenreMovies = () => {
  const { genre } = useParams();
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [getGenreName, setGetGenreName] = useState({});
  const getMoviesByGenre = async () => {
    try {
      const res = await fetch(`${moviesURL}&page=${page}&with_genres=${genre}`);
      const data = await res.json();

      setMoviesByGenre(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenres = async () => {
    try {
      const res = await fetch(`${genresURL}?${apiKey}`);
      const data = await res.json();
      const getGenres = data.genres;

      setGetGenreName(getGenres.find((gen) => gen.id === parseInt(genre)));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(getGenreName);
  const handlePage = (stringAction) => {
    if (stringAction === "next") {
      setPage(page + 1);
    }
    if (stringAction === "previous" && page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getMoviesByGenre();
    getGenres();
  }, [page]);

  return (
    <div className="text-center">
      <Pagination handlePage={handlePage} page={page} />
      <h2>Movies with the genre {getGenreName.name}</h2>
      <MoviesList movies={moviesByGenre} />
    </div>
  );
};

export default GenreMovies;
