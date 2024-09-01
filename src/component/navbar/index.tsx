import { NavLink } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import MobileDropdown from "../mobile-dropdown/index.tsx";
import "./styles.css";
import helper from "../../helper/helper.ts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openHamburgerMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="  w-full py-[40px] LG:py-[20px] flex items-center justify-center relative ">
      <div className="flex items-center justify-between lg:w-11/12 w-full px-[20px] lg:px-[0px]  h-full">
        <Link
          to="/"
          className="w-full lg:w-[20%] h-full flex gap-4 lg:gap-2 items-center cursor-pointer"
        >
          <div className="lg:h-[40px] h-[50px]">
            <img
              src={helper.Finexa}
              alt="finexa logo"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-[#783888] font-[700] text-[19px] lg:text-[24px]">
            Finexa
          </h3>
        </Link>

        <div onClick={openHamburgerMenu} className="lg:hidden h-full">
          <img
            src={helper.Hamburger}
            alt="hamburger icon"
            className="h-full w-full object-cover"
          />
        </div>

        {/* large screen menu items */}
        <div className=" w-[60%] h-full hidden lg:flex justify-center items-center">
          <div className="list-none flex gap-4">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `lg:text-[16px] pb-2 lg:font-[400] text-white cursor-pointer ${
                  isActive ? `active` : ""
                } `
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                `lg:text-[16px] pb-2 lg:font-[400] text-white cursor-pointer ${
                  isActive ? `active` : ""
                } `
              }
            >
              Our Clients
            </NavLink>
          </div>
        </div>
        <div className=" w-[20%] h-full lg:flex items-center hidden   gap-[10px] rounded-[20px]">
          <NavLink
            to="login"
            className={({ isActive }) =>
              `lg:text-[16px] pb-2 lg:font-[400] text-white cursor-pointer ${
                isActive ? `active` : ""
              } `
            }
          >
            Login
          </NavLink>
          <button className="bg-[#783888] text-white border border-[#83578E] rounded-[20px] flex justify-center items-center px-[20px] lg:h-[40px]">
            create an account
          </button>
        </div>
      </div>
      <AnimatePresence>{isOpen && <MobileDropdown />}</AnimatePresence>
    </nav>
  );
};

export default Navbar;
