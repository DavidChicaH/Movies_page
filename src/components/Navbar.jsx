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
      <nav className="bg-lightPurple py-6 relative">
        <div className="container mx-auto flex px-8 xl:px-0">
          <div className="flex flex-grow items-center">
            <h1 className="font-logo font-bold text-3xl text-lightPink">
              <Link to="/">MooBees</Link>
            </h1>
          </div>
          <div className="flex text-lightPink lg:hidden">
            <img
              src="/assets/Vector.svg"
              alt="menu-bar"
              onClick={handleToggleMenu}
            />
          </div>
          {menu ? (
            <div className="lg:hidden flex-grow justify-between text-center absolute top-20 left-0 bg-lightPurple w-full items-center py-8 px-8 sm:px-24">
              <div className="flex flex-col justify-center w-full hover:bg-lightPink border p-1.5 gap-y-3 border-lightPink">
                <Link
                  onClick={handleToggleMenu}
                  to="/"
                  className="text-lightPink hover:text-boldBlue text-2xl lg:mr-7"
                >
                  Discover
                </Link>
                <hr />
                <Link
                  onClick={handleToggleMenu}
                  to="/genres"
                  className="text-lightPink hover:text-boldBlue text-2xl lg:mr-7"
                >
                  Genres
                </Link>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col text-center mt-4"
              >
                <input
                  type="search"
                  placeholder="Search a movie..."
                  value={search}
                  className="mb-4 py-2 px-10 rounded-md"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  onClick={handleToggleMenu}
                  type="submit"
                  className="w-1/2 self-center bg-lightPink border-2 text-boldBlue rounded-md text-sm cursor-pointer ml-2 transition duration-500 ease-in-out hover:bg-boldBlue hover:text-lightPink"
                >
                  Search
                </button>
              </form>
              <div className="flex flex-col"></div>

              {/* <div className="flex flex-col text-center gap-y-4">
                <Link className="btn signin-btn ">Sign In</Link>
                <Link className="btn signup-btn ">Sign Up</Link>
              </div> */}
            </div>
          ) : (
            <div className="lg:flex hidden flex-grow justify-between">
              <div className="flex items-center gap-x-10">
                <Link
                  to="/"
                  className="text-lightPink lg:mr-7 text-2xl hover:underline hover:underline-offset-8"
                >
                  Home
                </Link>
                <Link
                  to="/genres"
                  className="text-lightPink lg:mr-7 text-2xl hover:underline hover:underline-offset-8"
                >
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
                  className="bg-lightPink border-2 rounded-md p-2 text-sm cursor-pointer ml-2 transition duration-500 ease-in-out hover:bg-regularOrange hover:text-lightPink"
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
