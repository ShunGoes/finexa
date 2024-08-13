import { Link } from "react-router-dom"
import helper from "../../helper/helper.ts"

const Navbar = () => {
  return (
    <nav className="  w-full py-[20px] flex items-center justify-center ">
      <div className="flex items-center justify-between lg:w-11/12  h-full">

        <div className=" w-[20%] h-full flex gap-2 items-center cursor-pointer">
          <div className="lg:h-[60px]">
            <img src={helper.Finexa} alt="finexa logo"  className="h-full w-full object-cover"/>
          </div>
          <h3 className="text-[#783888] font-[700] text-[24px]">Finexa</h3>
        </div>

        <div className=" w-[60%] h-full flex justify-center items-center">
          <div className="list-none flex gap-4">
              <Link to="" className="lg:text-[16px] lg:font-[400] text-white cursor-pointer">Products</Link>
              <Link to="" className="lg:text-[16px] lg:font-[400] text-white cursor-pointer">Our Clients</Link>
          </div>
        </div>
        <div className=" w-[20%] h-full flex items-center  gap-[10px] rounded-[20px]">
          <Link to="" className="lg:text-[16px] lg:font-[400] text-white cursor-pointer">
            Login
          </Link>
          <button className="bg-[#783888] text-white border border-[#83578E] rounded-[20px] flex justify-center items-center px-[20px] lg:h-[40px]">
              create an account
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar