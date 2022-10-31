import { NavLink } from "react-router-dom";

export function Notifications({ isopen }: { isopen: boolean }) {
  return (
    <div>
      <NavLink to="/notif">
        <li className="nav-link">
          <a href="#">
            <i className="bx bx-bell icon"></i>
            <span className="text nav-text">Notifications</span>
          </a>
        </li>
      </NavLink>
    </div>
  );
}
