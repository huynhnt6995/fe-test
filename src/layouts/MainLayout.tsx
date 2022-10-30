import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import footerMenu from "../constants/footerMenu";
import ToggleDrawer from "./ToggleDrawer";

import mainMenu from "../constants/mainMenu";

import logo from "./../assets/images/logo.png";
import drawMenu from "../constants/drawMenu";
import ScrollTopButton from "./ScrollTopButton";

function MainLayout() {
  const navRef = useRef<HTMLHeadingElement>(null);
  const [contentWidth, setContentWidth] = useState<number>(960);

  useEffect(() => {
    setContentWidth(navRef.current?.offsetWidth || 960);
  }, []);

  return (
    <>
      <header className="bg-dark-500">
        <nav ref={navRef} className="container mx-auto h-16 flex box-border">
          <a href="/" className="h-12 my-auto hover:opacity-70">
            <img src={logo} alt="Logo" className="h-full" />
          </a>
          <div className="flex flex-1 justify-end">
            {mainMenu.map((item) => (
              <a className="flex items-center lg:px-3 px-2 lg:w-40 hover:bg-gray-400" href={item.url} key={item.url}>
                <div className="w-8 h-8 object-contain relative">
                  <img src={item.icon} alt="Menu Icon" />
                  {item.bagde && (
                    <div className="absolute -right-2 -top-2 bg-primary-500 text-white w-4 h-4 rounded-lg text-[10px] flex justify-center items-center font-inter">
                      {item.bagde}
                    </div>
                  )}
                </div>
                <span className="lg:block hidden text-white ml-2">{item.text}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center lg:mr-0 mr-4 lg-ml-0 ml-2">
            <ToggleDrawer menu={drawMenu} />
          </div>
        </nav>
      </header>

      <main>
        <Outlet />

        <ScrollTopButton contentWidth={contentWidth} />
      </main>

      <footer className="bg-dark-500">
        <div className="container mx-auto py-14 flex flex-wrap lg:px-0 px-4">
          {footerMenu.map((item) => (
            <a className="text-white text-xxs lg:mr-10 lg:mb-0 mb-4 mr-4 hover:opacity-70" key={item.url} href={item.url}>
              {item.text}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
