import { useContext, useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import Pagination from "../components/Pagination";
import GenresButtons from "../components/GenresButtons";
import { MagnifyingGlass } from "react-loader-spinner";
import moviesContext from "../context/moviesContext";
import pageContext from "../context/pagesContext";
import genresContext from "../context/genresContext";

const Home = () => {
  const { movies, getNewMovies } = useContext(moviesContext);
  const { genres, getGenres } = useContext(genresContext);
  const { page, handlePage } = useContext(pageContext);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleSelectedGenres = (id) => {
    setSelectedGenres((prevSelectedGenres) => {
      const updatedGenres = { ...prevSelectedGenres };
      updatedGenres[id] = !updatedGenres[id];
      return updatedGenres;
    });
  };

  useEffect(() => {
    getNewMovies(page, selectedGenres);
    getGenres();
  }, [page, selectedGenres]);

  return (
    <>
      <h2 className="text-center text-lightPink font-semibold text-5xl my-10">Discover the latest releases</h2>
      <GenresButtons
        genres={genres}
        handleSelectedGenres={handleSelectedGenres}
        selectedGenres={selectedGenres}
      />
      <Pagination handlePage={handlePage} page={page} />
      {movies.length === 0 ? (
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
        <MoviesList movies={movies} />
      )}

      <Pagination handlePage={handlePage} page={page} />
    </>
  );
};

export default Home;
