import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <NavLink to={"/"} className="nav-link  px-4">
        Home
      </NavLink>
      <NavLink to={"/register"} className="nav-link  px-4">
        Register
      </NavLink>
      <NavLink to={"/login"} className="nav-link  px-4">
        Login
      </NavLink>
    </header>
  );
};

export default Navbar;
