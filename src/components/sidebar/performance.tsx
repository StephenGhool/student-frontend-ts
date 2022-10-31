import { NavLink } from "react-router-dom";

export function Performance({ isopen }: { isopen: boolean }) {
  return (
    <div>
      <NavLink to="/create">
        <div className={"inline-flex"}>
          <i className="bx bx-bar-chart-alt-2 icon"></i>
          <span className={`${!isopen && "scale-0"}`}>Performance</span>
        </div>
      </NavLink>
    </div>
  );
}
