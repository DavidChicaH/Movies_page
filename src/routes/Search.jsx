import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const searchURL = import.meta.env.VITE_API_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    const movies = await data.results;

    setMovies(movies);
  };

  useEffect(() => {
    const searchByQuery = `${searchURL}?${apiKey}&query=${query}`;

    getSearchedMovies(searchByQuery);
  }, [query]);

  return (
    <div>
      <h2>
        Search results for: <span>{query}</span>
      </h2>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Search;
