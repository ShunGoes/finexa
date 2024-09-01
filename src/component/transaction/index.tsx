import { useRef } from "react";
import helper from "../../helper/helper";
import "./styles.css";

import { motion, useScroll, useTransform } from "framer-motion";

const Transaction = () => {
  const imageRef = useRef(null)
const {scrollYProgress} = useScroll({
  target: imageRef,
  offset: ["start end", "end start"]
})
const translateY = useTransform(scrollYProgress, [0,1], [200, -100])
// const opacity = useTransform(scrollYProgress, [0,1], [1, 0.8])

  return (
    <div className="transaction  h-auto">
      <div className="transaction-bg h-full lg:py-[70px]">
        <motion.div 
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay:0.5, duration: 1}}
          viewport={{once: true}}
          className=" flex flex-col items-center py-[60px] lg:py-0">
          <h2 className="heading-2 text-[#FCF7FC] mb-2 lg:mb-0">
            Borderless Transactions
          </h2>
          <div className="flex gap-4 items-center ">
            <img
              src={helper.ArrowRight}
              alt="arrow right"
              className="h-[30px] lg:h-auto"
            />
            <h2 className="heading-2 text-[#D44DF5] ">Go Global</h2>
            <img
              src={helper.GlobalIcon}
              alt="finexa "
              className="h-[30px] lg:h-auto"
            />
          </div>
          <motion.div
            ref={imageRef}
            style={{translateY}}
            className="mt-[70px] lg:mt-[40px] w-10/12 lg:w-auto">
            <img
              src={helper.MobileApp}
              alt="finexa mobile app"
              className="lg:h-[600px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Transaction;
