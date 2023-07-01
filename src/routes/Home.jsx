import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination";
import GenresButtons from "../components/GenresButtons";
import { MagnifyingGlass } from "react-loader-spinner";

const newMoviesURL = import.meta.env.VITE_NEW_MOVIES_API_URL;
const genresURL = import.meta.env.VITE_API_GENRES;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const getNewMovies = async (url) => {
    try {
      const res = await fetch(
        `${url}&page=${page}&with_genres=${Object.keys(selectedGenres)
          .filter((genre) => selectedGenres[genre])
          .join(",")}`
      );
      const data = await res.json();

      const movies = await data.results;

      setNewMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };
  const getGenres = async () => {
    try {
      const res = await fetch(`${genresURL}?${apiKey}`);
      const data = await res.json();

      const genresMap = {};
      data.genres.forEach((genre) => {
        genresMap[genre.id] = false;
      });

      setGenres(data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedGenres = (id) => {
    setSelectedGenres((prevSelectedGenres) => {
      const updatedGenres = { ...prevSelectedGenres };
      updatedGenres[id] = !updatedGenres[id];
      return updatedGenres;
    });
  };

  const handlePage = (stringAction) => {
    if (stringAction === "next") {
      setPage(page + 1);
    }
    if (stringAction === "previous" && page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getNewMovies(newMoviesURL);
    getGenres();
  }, [page, selectedGenres]);

  return (
    <>
      <Pagination handlePage={handlePage} page={page} />
      <h2 className="text-center font-semibold text-3xl my-4">Movies page</h2>
      <GenresButtons
        genres={genres}
        handleSelectedGenres={handleSelectedGenres}
        selectedGenres={selectedGenres}
      />
      {newMovies.length === 0 ? (
        <div className="flex items-center justify-center">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <MoviesList movies={newMovies} />
      )}

      <Pagination handlePage={handlePage} page={page} />
    </>
  );
};

export default Home;
