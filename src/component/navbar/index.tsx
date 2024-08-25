import { Link } from "react-router-dom";
import helper from "../../helper/helper.ts";

const Navbar = () => {
  return (
    <nav className="  w-full py-[40px] LG:py-[20px] flex items-center justify-center ">
      <div className="flex items-center justify-between lg:w-11/12 w-full px-[20px] lg:px-[0px]  h-full">
        <div className="w-full lg:w-[20%] h-full flex gap-4 lg:gap-2 items-center cursor-pointer">
          <div className="lg:h-[40px] h-[50px]">
            <img
              src={helper.Finexa}
              alt="finexa logo"
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="text-[#783888] font-[700] text-[19px] lg:text-[24px]">Finexa</h3>
        </div>

        <div className="lg:hidden h-full">
          <img src={helper.Hamburger} alt="hamburger icon" className="h-full w-full object-cover" />
        </div>

          {/* large screen menu items */}
        <div className=" w-[60%] h-full hidden lg:flex justify-center items-center">
          <div className="list-none flex gap-4">
            <Link
              to=""
              className="lg:text-[16px] lg:font-[400] text-white cursor-pointer"
            >
              Products
            </Link>
            <Link
              to=""
              className="lg:text-[16px] lg:font-[400] text-white cursor-pointer"
            >
              Our Clients
            </Link>
          </div>
        </div>
        <div className=" w-[20%] h-full lg:flex items-center hidden   gap-[10px] rounded-[20px]">
          <Link
            to=""
            className="lg:text-[16px] lg:font-[400] text-white cursor-pointer"
          >
            Login
          </Link>
          <button className="bg-[#783888] text-white border border-[#83578E] rounded-[20px] flex justify-center items-center px-[20px] lg:h-[40px]">
            create an account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
