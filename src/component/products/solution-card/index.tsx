import { motion } from "framer-motion";

const SolutionCard = ({ image, title, text, id}: iProductCard) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, scale: 0 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 3,
        delay: id * 0.02,
        type: "spring",
        bounce: 0.3,
      }}
      viewport={{ once: true }}
      className=" w-full h-auto  rounded-[20px]"
    >
      <div className="h-[70px] w-[70px] ">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="h-[150px]  w-[95%]  py-[20px]">
        <div className="h-full w-full">
          <h4 className="product-card lg:leading-[30px]  mb-[10px] ">
            {title}
          </h4>
          <p className="font-[400] text-[14px] text-[#FCF7FC] ">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionCard;
