import { nav, path } from "framer-motion/client";
import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

function Header() {
  const [isMenuOpen, setIsOpenMenu] = useState(false); //menu açık mı kapalı mı işelvini sağlayacak

  //Menünün açılıp kapanmasını sağlayacak işlev
  const toogleMenu = () => {
    setIsOpenMenu(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsOpenMenu(false); //basılınca menu tekrar kapanacak(başlangıçtaki gibi)
  };

  const navItems = [
    {
      link: "Home", //link: Navbar'da görünen metin (görsel başlık).
      path: "home", //path: Tıklanınca gidilecek sayfa veya bölüm (genellikle id'ye denk gelen bölüm adı).
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Projects",
      path: "projects",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <nav className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-black md:text-4xl text-3xl font-bold font-rubik">
        Prime
        <span className="text-yellow-500 italic"> Sctructures</span>
      </h1>

      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-white text-[15px] transition-colors duration-300 ease-in-out"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      <button className="bg-yellow-500 hover:bg-black hover:text-white text-black px-10 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300 cursor-pointer md:flex hidden">
        REACH US
      </button>

      {/* MOBİL MENÜ BURDAN BAŞLIYCAK */}

      <div
        className="flex justify-between items-center lg:hidden"
        onClick={toogleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-yellow-500 text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-yellow-500 text-3xl cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-yellow-500 p-4 absolute top-[68px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-black uppercase font-semibold cursor-pointer p-2 rounded-lg hover:bg-black hover:text-white w-full text-center"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu} // Link'e tıklanınca menüyü kapat
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
