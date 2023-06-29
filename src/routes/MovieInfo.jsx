import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie([data]);
    // console.log(data);
  };
  console.log(movie);
  useEffect(() => {
    const movieURL = `${moviesURL}/${id}?${apiKey}`;
    getMovie(movieURL);
  }, [id]);

  return (
    <div>
      {movie.map((mov) => (
        <h1 key={mov.id}>{mov.title}</h1>
      ))}
    </div>
  );
};

export default MovieInfo;
