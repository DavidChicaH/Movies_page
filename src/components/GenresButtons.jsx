/* eslint-disable react/prop-types */

const GenresButtons = ({genres, handleSelectedGenres, selectedGenres}) => {


  return (
    <div className="w-4/5 flex flex-wrap justify-center items-center my-2.5 mx-auto">
    {genres.map((genre) => (
      <div
        key={genre.id}
        onClick={() => handleSelectedGenres(genre.id)}
        className={`py-2.5 px-4 bg-blue-600 rounded-md m-1 inline-block cursor-pointer hover:bg-blue-700 float-btn hover:float-btn-hover ${
          selectedGenres[genre.id] ? "text-red-500" : "text-black"
        }`}
      >
        {genre.name}
      </div>
    ))}
  </div>
  )
}

export default GenresButtons