import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieBanner from "../components/MovieBanner";
import CompaniesCards from "../components/CompaniesCards";

const moviesURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const movieImageURL = import.meta.env.VITE_IMAGE_URL;

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie([data]);
    // console.log(data);
  };
  useEffect(() => {
    const movieURL = `${moviesURL}/${id}?${apiKey}`;
    getMovie(movieURL);
  }, [id]);
  return (
    <>
      {movie.map((mov) => (
        <div key={mov.id}>
          <MovieBanner mov={mov} />
          <div className="">
            <CompaniesCards companies={mov} imageURL={movieImageURL} />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieInfo;
