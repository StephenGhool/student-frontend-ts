import { NavLink } from "react-router-dom";

export function Logout() {
  return (
    <div>
      <NavLink to="/auth">
        <li className="">
          <a href="#">
            <i className="bx bx-log-out icon"></i>
            <span className="text nav-text">Logout</span>
          </a>
        </li>
      </NavLink>
    </div>
  );
}
