/* eslint-disable react/prop-types */

const Pagination = ({handlePage, page}) => {
  return (
    <div className="flex mt-8 mx-7 items-center justify-center">
    <div
      className={`p-5 cursor-pointer ${
        page === 1 ? "cursor-not-allowed text-gray-400" : "text-lightPink"
      }`}
      onClick={() => handlePage("previous")}
    >
      Previous Page
    </div>
    <div className="py-1 px-3 text-lightPink rounded-full border-4 border-regularOrange font-2 text-xl font-semibold">
      {page}
    </div>
    <div className="p-5 cursor-pointer text-lightPink" onClick={() => handlePage("next")}>
      Next Page
    </div>
  </div>
  )
}

export default Pagination

