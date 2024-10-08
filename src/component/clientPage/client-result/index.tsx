import helper from "../../../helper/helper";
import ResultCard from "./result-card";
import { ResultCard as ResultItems } from "../../../component-data";

import { motion } from "framer-motion";

const ClientResult = () => {
  const backgroundImage = {backgroundImage: "linear-gradient(200deg, rgba(0,0,0,0.3), rgba(0,0,0,0.9))"}
  return (
    <div className="header">
      <div className="header-bg ">
        <div style={backgroundImage} className="h-full py-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
            className="md:mb-5"
          >
            <h2 className="heading-2 text-[#FCF7FC] text-center">
              Real Results for Real Businesses
            </h2>
            <p className="text-[14px] md:text-[16px] md:leading-[20px] font-[400] leading-[20px] text-[#FCF7FC] text-center mx-auto w-10/12 md:w-8/12">
              Discover how our tailored financial solutions have helped
              businesses unlock their potential, streamline operations, and
              achieve measurable growth.
            </p>
          </motion.div>
          <div className="relative w-full md:flex  gap-0 justify-center items-center">
            <img
              src={helper.CurvedArrow1}
              alt=""
              className=" mt-[120px] h-[300px] hidden md:block "
            />
            <div className="flex flex-col gap-y-[20px] md:flex-row md:flex-wrap md:gap-y-[40px] md:w-8/12  items-center mt-[40px] ">
              {ResultItems.map((items: iResultItems) => (
                <ResultCard {...items} />
              ))}
            </div>
            <img
              src={helper.CurvedArrow2}
              alt=""
              className="hidden md:block h-[300px]  mt-[90px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientResult;
