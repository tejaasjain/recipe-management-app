
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">🍋</span>
        <span>recipe<span className="brand-orange">book</span></span>
      </Link>

      <div className="nav-links">
        <NavLink to="/">Explore</NavLink>
        <NavLink to="/favorites">Favorites</NavLink>

        <Link to="/add-recipe" className="add-recipe-btn">
          + Add recipe
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
