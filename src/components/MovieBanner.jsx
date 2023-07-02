/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BiSolidStar } from "react-icons/bi";

const movieImageURL = import.meta.env.VITE_IMAGE_URL;

const MovieBanner = ({ mov }) => {
  return (
    <section className="bg-lightPurple py-16 rounded-b-3xl">
      <div className="container mx-auto flex items-center flex-col sm:flex-row">
        <div className="flex flex-col justify-center w-1/2">
          <div className="pr-0 md:pr-6">
            <h2 className="text-lightPink text-3xl font-bold py-3">{mov.title}</h2>
            <span className="text-regularOrange italic font-semibold text-xl">{mov.tagline}</span>
            <div className="flex gap-3 my-3">
              <BiSolidStar className="text-yellow-400" />
              <h3 className="text-yellow-400">{mov.vote_average.toFixed(1)}</h3>
            </div>
            <p className="text-lightPink font-semibold pb-4">{mov.overview}</p>
            <Link
              to={mov.homepage}
              target="_blank"
              className="bg-regularOrange font-bold text-lightPink hover:bg-boldBlue inline-block px-6 py-2 rounded-xl"
            >
              Watch Now
            </Link>
          </div>
        </div>
        <div className="w-1/2 hidden sm:block">
          <img
            src={`${movieImageURL}${mov.backdrop_path}`}
            className="w-full rounded-lg shadow-2xl"
            alt="banner-bg"
          />
          <div className="hidden sm:flex justify-center gap-x-4">
            {mov.genres.map((genre) => (
              <Link to={`/genres/${genre.id}`} key={genre.id} className="mt-4 text-lightPink hover:underline hover:underline-offset-8">{genre.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieBanner;
