import { useState } from "react";
import { Sidebar } from "../../components/sidebar";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function SidebarPage() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-orange-700 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <Sidebar isopen={open} />
        <BsFillArrowLeftCircleFill
          className={`cursor-pointer text-3xl absolute -right-3 top-9 text-white bg-black rounded-full
        border-black ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
}
