/* eslint-disable react/prop-types */

const Pagination = ({handlePage, page}) => {
  return (
    <div className="flex my-2 mx-7 items-center justify-center">
    <div
      className={`p-5 cursor-pointer ${
        page === 1 ? "cursor-not-allowed text-gray-400" : null
      }`}
      onClick={() => handlePage("previous")}
    >
      Previous Page
    </div>
    <div className="py-1 px-3 rounded-full border-4 border-yellow-400 font-2 text-xl font-semibold">
      {page}
    </div>
    <div className="p-5 cursor-pointer" onClick={() => handlePage("next")}>
      Next Page
    </div>
  </div>
  )
}

export default Pagination