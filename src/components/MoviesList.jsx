/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  
  return (
    <>
      <motion.div layout className="popular-movies">
        <AnimatePresence className="grid grid-cols-3">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </AnimatePresence>
      </motion.div>
    </> 
  );
};

export default MoviesList;
