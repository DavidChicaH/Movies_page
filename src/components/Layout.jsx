import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div className="font-sans bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-pink-300 via-regularOrange to-boldBlue">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
