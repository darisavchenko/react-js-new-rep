import "./Menu.css";
import { Link, Outlet } from "react-router-dom";

export function Menu() {
  return (
    <>
      <div className="menu-wrap">
        <Link to="/" className="menu-link">
          Home
        </Link>
        <Link to="/hooks" className="menu-link">
          Hooks
        </Link>
        <Link to="/multiply" className="menu-link">
          Multiply
        </Link>
        <Link to="/card" className="menu-link">
          Cards
        </Link>
      </div>
      <Outlet />
    </>
  );
}
