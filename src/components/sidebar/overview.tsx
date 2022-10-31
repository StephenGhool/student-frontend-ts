import { NavLink } from "react-router-dom";

export function Overview({ isopen }: { isopen: boolean }) {
  return (
    <div>
      <NavLink to="/">
        <i className="bx bx-home-alt icon"></i>
        <div className={`${!isopen && "scale-0"} inline-flex`}>Overview</div>
      </NavLink>
    </div>
  );
}
