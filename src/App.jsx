import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import MovieInfo from "./routes/MovieInfo";
import Search from "./routes/Search";
import Layout from "./components/Layout";
import Genres from "./routes/Genres";
import GenreMovies from "./routes/GenreMovies";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieInfo />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/genres" element={<Genres />}></Route>
        <Route path="genres/:genre" element={<GenreMovies />}></Route>
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
