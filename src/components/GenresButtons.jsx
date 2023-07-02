/* eslint-disable react/prop-types */

const GenresButtons = ({ genres, handleSelectedGenres, selectedGenres }) => {
  return (
    <div className="w-4/5 flex flex-wrap justify-center items-center my-2.5 mx-auto">
      {genres.map((genre) => (
        <div
          key={genre.id}
          onClick={() => handleSelectedGenres(genre.id)}
          className={`py-2.5 px-4 rounded-md m-1 inline-block cursor-pointer hover:bg-regularOrange float-btn hover:float-btn-hover ${selectedGenres[genre.id] ? "bg-regularOrange" : "bg-lightPurple"}`}
        >
          <span className={`font-bold ${selectedGenres[genre.id] ? "text-lightPurple" : "text-lightPink"}`}>{genre.name}</span>
        </div>
      ))}
    </div>
  );
};

export default GenresButtons;
