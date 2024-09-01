import helper from "../../helper/helper";
import Testimonial from "../testimoniaal";
import "./styles.css";
import { HowItWorks } from "../../component-data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";




const GetStarted = () => {
  const imageRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollYProgress1 = useScroll({
    target: imageRefs[0],
    offset: ["start end", "end start"]
  }).scrollYProgress;

  const scrollYProgress2 = useScroll({
    target: imageRefs[1],
    offset: ["start end", "end start"]
  }).scrollYProgress;

  const scrollYProgress3 = useScroll({
    target: imageRefs[2],
    offset: ["start end", "end start"]
  }).scrollYProgress;

  const scrollYProgress4 = useScroll({
    target: imageRefs[3],
    offset: ["start end", "end start"]
  }).scrollYProgress;

  // Example transformations (you can customize these)
  const translateY1 = useTransform(scrollYProgress1, [0, 1], [100, -100]);
  const translateY2 = useTransform(scrollYProgress2, [0, 1], [200, -200]);
  const translateY3 = useTransform(scrollYProgress3, [0, 1], [50, -200]);
  const translateY4 = useTransform(scrollYProgress4, [0, 1], [50, -300]);
  // const opacity = useTransform(scrollYProgress, [0,1], [1, 0.8])

  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1
      }
    }
  };
  const textVariants = {
    offscreen: {
      y: 300,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8
      }
    }
  };
  const containerVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      transition: { when: "afterChildren" },
    },
  };
  const childVariants = {
    visible: { opacity: 1, y: 0, transition: {duration: 2} },
    hidden: { opacity: 0,y: 100 },
  };
  return (
    <div className="getStarted h-auto">
      <div className="getStarted-bg h-full lg:h-full flex flex-col gap-[50px] pt-[40px] lg:pt-[60px] items-center">
        <motion.div
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{delay:0.5, duration: 1}}
          viewport={{once: true}}
          className="lg:w-6/12 text-center">
          <h3 className="heading-2 text-[#FCF7FC] mb-2 lg:mb-0 ">
            How It Works
          </h3>
          <p className="font-[400] text-[#FCF7FC] text-[15px] lg:text-[20px] leading-[18.15px] lg:leading-[24.2px] ">
            Follow These Steps To Get Started
          </p>
        </motion.div>

        {/* create account cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariant}
          viewport={{once: true}}
          className=" w-10/12 flex flex-col gap-[20px]"
        >
          {
            HowItWorks.map((obj: iHowItWorks) => {
              return(
          <motion.div
            variants={childVariants}
            className="card-container w-full border flex gap-[30px] lg:gap-0 flex-col lg:flex-row justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]"
          >
            <motion.div 
              initial="offscreen"
              whileInView="onscreen"
              variants={textVariants}
              viewport={{ once: true}}
              className="card-text w-full text-center lg:text-start lg:w-[50%]">
              <h3 className=" text-[#FCF7FC] heading-3 ">{obj.title}</h3>
              <p className="text-[#FCF7FC] paragraph ">
                {obj.text}
              </p>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              viewport={{ once: true}}
              className=" h-full ">
              <div 
                
                className="h-3/5 ">
                <img
                 
                  src={obj.imageSrcLarge}
                  alt=" picture of an authorization code"
                  className="h-[120px] hidden lg:block  "
                />
                <img
                 
                  src={obj.imageSmall}
                  alt=" picture of an authorization code"
                  className="h-[100px] lg:hidden "
                />
              </div>
            </motion.div>
          </motion.div>

              )
            })
          }
          
        </motion.div>
        {/* create account cards end */}

        <div className="w-full money-card  lg:py-[30px] ">
          <div className="lg:w-9/12  lg:mx-auto h-full">
            <div
              
              className="w-full  flex flex-col lg:flex-row gap-[20px]  lg:h-[400px] lg:gap-[10px] lg:px-0 px-[20px] mb-5">
              <motion.div 
                ref={imageRefs[0]}
                style={{translateY:translateY1}}
                className="w-[95%] mx-auto lg:mx-0 lg:w-[40%] ">
                <img
                  src={helper.MoneyImg}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[15px] lg:rounded-[20px]"
                />
              </motion.div>
              <motion.div
                ref={imageRefs[1]}
                style={{translateY: translateY2}}
                className="w-[95%] mx-auto lg:mx-0 lg:w-[60%] relative ">
                <img
                  src={helper.DollarSign}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[20px]"
                />
                <div className="absolute top-0 lg:px-[10px] h-full w-full  flex justify-end items-center">
                  <div className="w-6/12 ">
                    <h4 className="font-[700] text-[15px] lg:text-[20px] text-[#FCF7FC] lg:mb-2 lg:leading-[26px]">
                      Simplifying Financial Management
                    </h4>
                    <p className="text-[#FCF7FC] text-[9px] lg:text-[16px] font-[400]">
                      Streamline your financial tasks with our innovative
                      solutions designed for convenience.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-end  w-full p-[10px] h-[70px]">
                  <img src={helper.Money1} alt=" h-full lg:h-auto" />
                </div>
              </motion.div>
            </div>
            <div
            
            className="w-full flex flex-col lg:flex-row px-[20px] lg:px-0 lg:h-[400px] gap-[20px] lg:gap-[10px] ">
              <motion.div 
              ref={imageRefs[2]}
              style={{translateY: translateY3}}
              className="w-[95%] mx-auto lg:mx-0 lg:w-[60%] relative ">
                <img
                  src={helper.PoundSign}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[15px] lg:rounded-[20px]"
                />
                <div className="absolute top-0 px-[10px] h-full w-full  flex justify-end items-center">
                  <div className="w-6/12 ">
                    <h4 className="font-[700] text-[15px] lg:text-[20px] text-[#FCF7FC] lg:mb-2 lg:leading-[26px">
                      Connecting You with the Best Financial Tools
                    </h4>
                    <p className="text-[#FCF7FC] text-[9px] lg:text-[16px] font-[400]">
                      Access powerful features like virtual cards and currency
                      exchange to elevate your financial control.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-end w-full p-[10px] h-[70px] ">
                  <img src={helper.Money2} alt="h-full lg:h-auto" />
                </div>
              </motion.div>
              <motion.div 
              ref={imageRefs[3]}
              style={{translateY: translateY4}}
              className="w-[95%] mx-auto lg:mx-0 lg:w-[40%]  ">
                <img
                  src={helper.SmilingMan}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[15px] lg:rounded-[20px]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Testimonial component */}
        <motion.div 
          initial={{opacity: 0, x: -100, scale: 0}}
          whileInView={{opacity: 1, x: 0, scale: 1}}
          transition={{delay:0.5, duration: 1}}
          viewport={{once: true}}
          className="w-full">
          <Testimonial />
        </motion.div>
        {/* Testimonial component */}

        {/* connect with us section */}
        <div className="bg-[#7838884D]  py-[20px] lg:py-0 px-[20px] w-full h-auto lg:h-[50vh]  ">
          <div className="w-full lg:w-10/12 lg:mx-auto flex flex-col gap-[40px] lg-gap-0 lg:flex-row   py-[30px] lg:py-0 h-full items-center">
            <div className="lg:w-[60%] w-full  text-center lg:text-start">
              <h3 className="heading-3 text-[#FCF7FC] w-10/12 lg:w-full mx-auto lg:mx-0 ">
                Connect your account in one click
              </h3>
              <p className="paragraph text-[#FCF7FC] mb-[4rem] lg:mb-0">
                follow these steps to get strated
              </p>
              <button className="bg-[#783888] border border-[#83578E] rounded-[20px] w-11/12 lg:w-[137px] h-[45px] text-[#FFFFFF] font-[600] text-[16px] outline-none flex justify-center items-center mb-[3rem] lg:mb-0  lg:mt-4 mx-auto lg:mx-0 ">
                Start Now
              </button>
            </div>
            <div className="lg:h-4/5  w-full  lg:w-[40%]">
              <img
                src={helper.baloon}
                alt="finexa balloon"
                className="lg:h-full h-[200px] w-full  object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
