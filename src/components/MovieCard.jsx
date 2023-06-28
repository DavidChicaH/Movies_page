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
      <h2 className="text-center text-lg">{movie.title}</h2>
      <img
        className="rounded-md"
        src={`${movieImageURL}${movie.backdrop_path}`}
        alt="Movie Poster"
      />
      <p>
        <Link to={`/movie/${movie.id}`}>More info</Link>
      </p>
    </motion.div>
  );
};

export default MovieCard;
