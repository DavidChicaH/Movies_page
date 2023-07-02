/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const genresContext = createContext();

const apiKey = import.meta.env.VITE_API_KEY;
const genresURL = import.meta.env.VITE_API_GENRES;

const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState([]);
  const [genreName, setGenreName] = useState({ name: "" });

  const getGenres = async () => {
    try {
      const res = await fetch(`${genresURL}?${apiKey}`);
      const data = await res.json();
      const getGenres = data.genres;

      setGenres(getGenres);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenreName = async (genre) => {
    try {
      const res = await fetch(`${genresURL}?${apiKey}`);
      const data = await res.json();
      const getGenres = data.genres;

      const getName = getGenres.find((gen) => gen.id === parseInt(genre));
      setGenreName(getName);
    } catch (error) {
      console.log(error);
    }
  };
  const data = { genres, getGenres, genreName, getGenreName };
  return (
    <genresContext.Provider value={data}>{children}</genresContext.Provider>
  );
};

export { GenresProvider };
export default genresContext;
