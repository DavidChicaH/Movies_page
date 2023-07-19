/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const moviesContext = createContext();

const newMoviesURL = import.meta.env.VITE_NEW_MOVIES_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;


const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const getNewMovies = async (page, selectedGenres) => {
    try {
      const url = newMoviesURL;
      const res = await fetch(
        `${url}?${apiKey}&page=${page}&with_genres=${Object.keys(selectedGenres)
          .filter((genre) => selectedGenres[genre])
          .join(",")}`
      );
      const data = await res.json();

      const movies = await data.results;

      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  const data = { movies, getNewMovies };

  return (
    <moviesContext.Provider value={data}>{children}</moviesContext.Provider>
  );
};

export { MoviesProvider };
export default moviesContext;
