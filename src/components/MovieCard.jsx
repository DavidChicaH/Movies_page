/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const movieImageURL = import.meta.env.VITE_IMAGE_URL;

// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie }) => {
  const [showDesc, setShowDesc] = useState(false);

  const toggleDesc = () => {
    setShowDesc(!showDesc);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-red-200 px-2 py-11 rounded-lg relative">
        <img
          className="rounded-md"
          src={`${movieImageURL}${movie.poster_path}`}
          alt="Movie Poster"
        />
        <div className={`absolute top-0 right-0 bg-red-100 w-full h-full rounded-lg text-center p-8 opacity-0 hover:opacity-100 transition-opacity duration-700`}
        >
          <h2 className="">{movie.title}</h2>
          <p className="absolute top-24 px-8 left-0 right-0">{movie.overview}</p>
          <Link to={`/movie/${movie.id}`} className="absolute left-20 right-0 bottom-12 p-2 bg-red-600 w-1/2">More info</Link>
        </div>
        <h2 className="text-center text-lg">{movie.title}</h2>
        <p>{/* <Link to={`/movie/${movie.id}`}>More info</Link> */}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
