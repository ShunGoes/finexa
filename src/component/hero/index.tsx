import helper from "../../helper/helper";
import Navbar from "../navbar";
import "./styles.css";
import { motion } from "framer-motion";

// import {motion} from "framer-motion"

const Hero = () => {
  return (
    <header className=" header h-auto ">
      <div className="header-bg  flex flex-col justify- ">
        <Navbar />
        <div className="w-full lg:mt-[50px] mt-[2rem] ">
          <motion.div
             initial={{ opacity: 0, y: 100 }}
             animate={{ opacity: 1, y: [0, 70, 0, 50,0,25,0,15,0,7,0] }}
             transition={{ duration: 1.5, delay: 1 }}
            className="lg:w-9/12 lg:mx-auto  flex flex-col items-center px-[20px] lg:px-0 ">
            <div className="lg:w-11/12  ">
              <h1 className="font-[700] lg:text-[64px] text-[36px] text-center text-[#FCF7FC] leading-[40px] lg:leading-[70px] mb-[5px] lg:mb-0">
                Finexa All Your Financial Needs In One Place
              </h1>
            </div>
            <p className="text-[#FFFFFF] mt-2 text-center w-10/12 lg:w-[90%] lg:font-[400] text-[14px] lg:text-[16px] leading-[16.94px] lg:leading-[19.36px] mb-[2rem] lg:mb-0">
              Discover a smarter way to manage, invest, and grow your wealth
              with Finexa. Our intuitive platform offers personalized insights,
              actionable advice, and cutting-edge tools to help you take control
              of your financial journey.
            </p>
            <div className="lg:mt-[40px] lg:mb-[60px] mb-[3rem] flex justify-center gap-[10px] h-[50px] lg:h-[70px] ">
              <img
                src={helper.AppleStore}
                alt="apple store icon"
                className="h-full"
              />
              <img
                src={helper.GooglePlay}
                alt="google play store icon"
                className="h-full"
              />
            </div>
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1, }}
                transition={{delay: 0.5, duration: 2}}
                viewport={{ once: true }}  
              className="h-[120px] lg:h-auto">
              <img src={helper.PayCards} alt="pay cards" className="h-full " />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
