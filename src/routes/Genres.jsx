import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const genresURL = import.meta.env.VITE_API_GENRES;
const apiKey = import.meta.env.VITE_API_KEY;
const Genres = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const res = await fetch(`${genresURL}?${apiKey}`);
      const data = await res.json();

      setGenres(data.genres);
    };
    getGenres();
  }, []);
  return (
    <div className="">
      <h2 className="text-center text-lightPink mt-4 text-6xl font-bold">Explore all genres</h2>
      <div className="md:h-screen grid grid-cols-1 md:grid-cols-3 container mx-auto gap-y-4 py-3">
        {genres.map((genre) => (
          <div key={genre.id} className="flex justify-center items-center">
            <Link
              to={`/genres/${genre.id}`}
              className="text-center font-bold text-lightPink bg-lightPurple hover:bg-regularOrange rounded-lg py-4 px-8 w-4/5"
            >
              {genre.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
