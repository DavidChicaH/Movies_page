import { IMAGE_URL } from "../api/ApiData";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0}}
      transition={{duration: 0.7}}
    >
      <h2>{movie.title}</h2>
      <img src={`${IMAGE_URL}${movie.backdrop_path}`} alt="Movie Poster" />
    </motion.div>
  );
};

export default MovieCard;
