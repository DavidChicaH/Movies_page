import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  // const [clicked, setClicked] = useState(false);
  const [menu, setmenu] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const handleToggleMenu = () => {
    setmenu(!menu);
  };

  return (
    <>
      <nav className="bg-slate-400 py-6 relative">
        <div className="container mx-auto flex px-8 xl:px-0">
          <div className="flex flex-grow items-center">
            <h1>Logo</h1>
          </div>
          <div className="flex lg:hidden">
            <img
              src="/assets/Vector.svg"
              alt="menu-bar"
              onClick={handleToggleMenu}
            />
          </div>
          {menu ? (
            <div className="md:hidden flex-grow justify-between absolute top-20 left-0 bg-gray-500 w-full items-center py-14 px-8 sm:px-24">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Search a movie..."
                  value={search}
                  className="mb-4 py-2 px-10 rounded-md"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
              <div className="flex flex-col">
                <Link to="/" className="text-white mb-4">
                  Top Rated Movies
                </Link>
              </div>

              <div className="flex flex-col text-center">
                <Link className="btn signin-btn mb-8">Sign In</Link>
                <Link className="btn signup-btn mb-8">Sign Up</Link>
              </div>
            </div>
          ) : (
            <div className="lg:flex hidden flex-grow justify-between">
              <div>
                <Link to="/genres" className="text-white lg:mr-7">
                  Genres
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  value={search}
                  placeholder="Search a movie..."
                  className="px-2 rounded-md py-1"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-yellow-300 border-2 rounded-md p-2 text-sm cursor-pointer ml-2 transition duration-500 ease-in-out hover:bg-black hover:text-white"
                >
                  <BiSearchAlt2 />
                </button>
              </form>
              <div>
                <Link className="btn signin-btn lg:mr-4">Sign In</Link>
                <Link className="btn signup-btn">Sign Up</Link>
              </div>
            </div>
          )}
        </div>{" "}
      </nav>
    </>
  );
};

export default Navbar;
