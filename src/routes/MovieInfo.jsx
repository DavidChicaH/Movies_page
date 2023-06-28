import { useParams } from "react-router-dom";
import {
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";

const moviesURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
    console.log(data);
  };

  useEffect(() => {
    const movieURL = `${moviesURL}/${id}?${apiKey}`;
    getMovie(movieURL);
  }, []);

  return <div>aa</div>;
};

export default MovieInfo;
