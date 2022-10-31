import { Overview } from "./overview";
import { Addstudent } from "./addstudent";
import { Performance } from "./performance";
import { Notifications } from "./notifications";
import { Logout } from "./logout";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillHome, AiFillFolder, AiOutlineBarChart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
              <li
                key={index}
                className="text-grey-300 text-sm flex items-center gap-x-4 
                cursor-pointer p-2 hover:bg-gray-200 rounded-md mt-2 "
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
                  <NavLink to={menu.URL}>{menu.title}</NavLink>
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>

      {/* <div className="bottom-content">
        <Logout />
      </div> */}
    </div>
  );
}
