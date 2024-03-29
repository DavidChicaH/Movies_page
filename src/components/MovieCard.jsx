/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const movieImageURL = import.meta.env.VITE_IMAGE_URL;

// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="rounded-lg bg-lightPurple pb-4 shadow-xl">
        <img
          className="rounded-t-none rounded-b-md"
          src={`${movieImageURL}${movie.poster_path}`}
          alt="Movie Poster"
        />
        <div
          className={`text-center flex flex-col items-center justify-center gap-y-3`}
        >
          <h2 className="pt-2 font-bold text-xl text-lightPink">{movie.title}</h2>
          <Link
            to={`/movie/${movie.id}`}
            className="bg-lightPink text-boldBlue font-bold p-3 rounded-lg hover:bg-regularOrange transition-colors duration-200 ease-in"
          >
            More info
          </Link>
        </div>
        <p>{/* <Link to={`/movie/${movie.id}`}>More info</Link> */}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
