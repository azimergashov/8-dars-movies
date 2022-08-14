import { NavLink } from "react-router-dom";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <nav className="d-flex justify-content-between">
          <ul className="d-flex aligin-items-center m-0 p-0 list">
            <li className="me-4 ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "an-active d-inline-block  text-decoration-none"
                    : " d-inline-block text-light text-decoration-none"
                }
                to="/"
              >
                Home Page
              </NavLink>
            </li>

            <li className="me-4 ">
              <NavLink
               className={({ isActive }) =>
               isActive
                 ? "an-active d-inline-block  text-decoration-none"
                 : " d-inline-block text-light text-decoration-none"
             }
                to="/movies"
              >
                Popular Movies
              </NavLink>
            </li>
            <li className="me-4 ">
              <NavLink
               className={({ isActive }) =>
               isActive
                 ? "an-active d-inline-block  text-decoration-none"
                 : " d-inline-block text-light text-decoration-none"
             }
                to="/top"
              >
                Top-rated Movies
              </NavLink>
            </li>
            <li className="me-4 ">
              <NavLink
               className={({ isActive }) =>
               isActive
                 ? "an-active d-inline-block  text-decoration-none"
                 : " d-inline-block text-light text-decoration-none"
             }
                to="/up"
              >
                Up coming Movies
              </NavLink>
            </li>
            <li className="me-4 ">
              <NavLink
               className={({ isActive }) =>
               isActive
                 ? "an-active d-inline-block  text-decoration-none"
                 : " d-inline-block text-light text-decoration-none"
             }
                to="/tv"
              >
                Tv-show
              </NavLink>
            </li>
          </ul>
        </nav>

        <form className="form">
            <input className="form__input" type="text" placeholder="search"/>
        </form>
      </div>
    </header>
  );
};
