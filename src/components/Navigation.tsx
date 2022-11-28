import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link--active" : undefined
        }
      >
        <p className="nav-link">Home</p>
      </NavLink>
      <NavLink
        to="/notes"
        className={({ isActive }) =>
          isActive ? "nav-link--active" : undefined
        }
      >
        <p className="nav-link">Notes</p>
      </NavLink>
    </nav>
  );
};

export default Navigation;
