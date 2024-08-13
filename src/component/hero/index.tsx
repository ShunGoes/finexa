import helper from "../../helper/helper";
import Navbar from "../navbar";
import "./styles.css";

const Hero = () => {
  return (
    <header className=" header h-auto">
      <div className="header-bg  flex flex-col justify- ">
        <Navbar />
        <div className="w-full lg:mt-[50px] ">
          <div className="lg:w-9/12 lg:mx-auto  flex flex-col items-center">
          <div className="lg:w-11/12  ">
            <h1 className="lg:font-[700] lg:text-[64px] text-center text-[#FCF7FC] leading-[70px] ">
              Finexa All Your Financial Needs In One Place
            </h1>
          </div>
          <p className="text-[#FFFFFF] mt-2 text-center lg:w-[90%] lg:font-[400] lg:text-[16px] lg:leading-[19.36px] ">
          Discover a smarter way to manage, invest, and grow your wealth with Finexa. Our intuitive platform offers personalized insights, actionable advice, and cutting-edge tools to help you take control of your financial journey.
          </p>
            <div className="lg:mt-[40px] lg:mb-[60px] flex justify-center gap-[10px] h-[70px] ">
              <img src={helper.AppleStore} alt="apple store icon" className="h-full"/>
              <img src={helper.GooglePlay} alt="google play store icon" className="h-full" />
            </div>
            <div>
              <img src={helper.PayCards} alt="pay cards" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
