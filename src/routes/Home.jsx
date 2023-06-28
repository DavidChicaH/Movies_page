import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const newMoviesURL = import.meta.env.VITE_NEW_MOVIES_API_URL;

const Home = () => {
  const [newMovies, setNewMovies] = useState([]);
  // const [topMovies, setTopMovies] = useState([]);
  const getNewMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    const movies = await data.results;

    setNewMovies(movies);
  };

  // const getTopMovies = async () => {
  //   const res = await fetch(`${moviesURL}/top_rated?${apiKey}`);
  //   const data = await res.json();

  //   const topRatedMovies = await data.results;

  //   setTopMovies(topRatedMovies);
  // };

  useEffect(() => {
    getNewMovies(newMoviesURL);
  }, []);

  return (
    <>
      <h2 className="text-center font-semibold text-3xl my-4">Movies page</h2>
      <MoviesList movies={newMovies} />
    </>
  );
};

export default Home;
