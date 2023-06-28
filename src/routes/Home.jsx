import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const newMoviesURL = import.meta.env.VITE_NEW_MOVIES_API_URL;

const Home = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [topMovies, setTopMovies] = useState([]);
  const getNewMovies = async (url) => {
    try {
      const res = await fetch(`${url}&page=${page}`);
      const data = await res.json();

      const movies = await data.results;

      setNewMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePage = (stringAction) => {
    if (stringAction === "next") {
      setPage(page + 1);
    }
    if (stringAction === "previous" && page > 1) {
      setPage(page - 1);
    }
  };
  // const getTopMovies = async () => {
  //   const res = await fetch(`${moviesURL}/top_rated?${apiKey}`);
  //   const data = await res.json();

  //   const topRatedMovies = await data.results;

  //   setTopMovies(topRatedMovies);
  // };

  useEffect(() => {
    getNewMovies(newMoviesURL);
  }, [page]);

  return (
    <>
      <h2 className="text-center font-semibold text-3xl my-4">Movies page</h2>
      <MoviesList movies={newMovies} />
      <div className="flex my-2 mx-7 items-center justify-center">
        <div
          className={`p-5 cursor-pointer ${
            page === 1 ? "cursor-not-allowed text-gray-400" : null
          }`}
          onClick={() => handlePage("previous")}
        >
          Previous Page
        </div>
        <div className="py-1 px-3 rounded-full border-4 border-yellow-400 font-2 text-xl font-semibold">
          {page}
        </div>
        <div className="p-5 cursor-pointer" onClick={() => handlePage("next")}>
          Next Page
        </div>
      </div>
    </>
  );
};

export default Home;
