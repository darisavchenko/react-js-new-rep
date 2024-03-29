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
        <Link to="/urlaub" className="menu-link">
          Urlaub
        </Link>
        <Link to="/currency" className="menu-link">
          Currency
        </Link>
        <Link to="/months" className="menu-link">
          Months
        </Link>
        <Link to="/mui" className="menu-link">
          Mui
        </Link>
      </div>
      <Outlet />
    </>
  );
}
