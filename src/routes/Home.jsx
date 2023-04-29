import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { API_URL } from "../api/ApiData";
import MovieCard from "../components/MovieCard";
import { motion, AnimatePresence } from "framer-motion";

export const homeLoader = async () => {
  const res = await fetch(API_URL);

  const json = await res.json();

  const movies = json.results;

  return { movies };
};

const Home = () => {
  const { movies } = useLoaderData();

  return (
    <>
      <Navbar />
      <main>
        <motion.div layout className="popular-movies">
          <AnimatePresence>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
