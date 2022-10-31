import { NavLink } from "react-router-dom";

export function Addstudent({ isopen }: { isopen: boolean }) {
  return (
    <NavLink to="/newstudent">
      <div className={"inline-flex"}>
        <i className="bx bx-wallet icon"></i>
        <span className={`${!isopen && "scale-0"}`}>Add Student</span>
      </div>
    </NavLink>
  );
}
