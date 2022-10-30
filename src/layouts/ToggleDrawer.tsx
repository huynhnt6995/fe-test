import { useState } from "react";

import MenuItem from "../types/MenuItem";

import "./ToggleDrawer.css";

interface Props {
  menu: MenuItem[];
}

function ToggleDrawer({ menu }: Props) {
  const [active, setActive] = useState<boolean>();

  return (
    <div className="relative">
      <div
        onClick={() => setActive(!active)}
        className="toggle-menu-button self-center ml-auto cursor-pointer flex justify-center items-center h-8 w-8 hover:opacity-70"
      >
        <div className={`icon${active ? " open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`${active ? "flex" : "hidden"} flex-col bg-gray-400 absolute top-8 right-0 z-10`}>
        {menu.map((item) => (
          <a key={item.url} href={item.url} className="border-b border-white/[0.15] px-8 py-6 whitespace-nowrap text-white relative hover:opacity-70">
            {item.text}
            <div className="w-full h-px bg-dark-600/[0.25] absolute left-0 bottom-0 right-0"></div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ToggleDrawer;
