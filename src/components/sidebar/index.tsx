import { Overview } from "./overview";
import { Addstudent } from "./addstudent";
import { Performance } from "./performance";
import { Notifications } from "./notifications";
import { Logout } from "./logout";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillHome, AiFillFolder, AiOutlineBarChart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

export function Sidebar({ isopen }: { isopen: boolean }) {
  const menus = [
    { title: "Overview", URL: "/", Icon: <AiFillHome /> },
    { title: "Update/Add", URL: "/newstudent", Icon: <AiFillFolder /> },
    {
      title: "Performance",
      URL: "/performance",
      Icon: <AiOutlineBarChart />,
    },
  ];
  return (
    <div>
      <div className="menu">
        <ul className="menu-links text-xl">
          {menus.map((menu, index) => (
            <>
              <li key={index}>
                <NavLink
                  to={menu.URL}
                  className="text-grey-300 text-sm flex items-center gap-x-4 
                cursor-pointer p-2 hover:bg-gray-200 rounded-md mt-2"
                >
                  <span className="text-2xl block float-left">
                    {menu.Icon ? menu.Icon : <BsFillArrowLeftCircleFill />}
                  </span>
                  <span
                    className={`${
                      !isopen && "hidden"
                    } p-2 text-base font-medium flex-1 
                  duration-1000`}
                  >
                    {menu.title}
                  </span>
                </NavLink>
              </li>
            </>
          ))}

          <div
            className="text-grey-300 text-sm flex items-center gap-x-4 
                cursor-pointer p-2 hover:bg-gray-200 rounded-md mt-2"
          >
            <span className="text-2xl block float-left">
              <BiLogOut />
            </span>

            <button
              className={`${
                !isopen && "hidden"
              } p-2 text-base font-medium flex-1 
                  duration-1000 text-left`}
            >
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
