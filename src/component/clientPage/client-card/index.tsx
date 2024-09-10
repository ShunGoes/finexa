import { motion } from "framer-motion";

const ClientCard = ({ text, image, title, subTitle, id }: iProductCard) => {
  const backgroundImage = {
    backgroundImage: "linear-gradient(200deg, #783888, #1B1919CC 45%)",
  };
  const background = { background: "rgba(27, 25, 25, 0.5)" };
  return (
    <motion.div
      initial={{opacity: 0, scale: 0}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{delay: id * 0.2, duration: 2, type: "spring", bounce: 0.3 }}
      viewport={{once: true}}
      style={backgroundImage}
      className="w-[93%] md:w-[30%] h-auto  shrink-0    rounded-[10px]  "
    >
      <div
        style={background}
        className="flex flex-col gap-4  p-5 md:p-0 md:py-5"
      >
        <div className="  h-[70px] flex gap-[10px] md:px-4 md:items-center">
          <div className="w-[30%] md:w-[20%]  h-full md:h-[50px] flex items-center  ">
            <img
              src={image}
              alt="peoples faces"
              className=" size-[80%]  md:size-full object-contain"
            />
          </div>
          <div className="w-[70%] h-full flex flex-col justify-center ">
            <h5 className="font-[700] text-[12px] md:text-[16px] md:leading-[20px] leading-[15px] text-[#FCF7FC]">
              {title}{" "}
            </h5>
            <span className="font-[400] text-[14px] md:text-[15px] md:leading-[30px] leading-[20px] text-[#FCF7FC]">
              {subTitle}{" "}
            </span>
          </div>
        </div>
        <div className=" md:px-5">
          <p className="text-[11px] md:text-[14px] md:leaading-[20px] font-[400] leading-[15px] text-[#FCF7FC]">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientCard;
