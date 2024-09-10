import { motion } from "framer-motion";

const ResultCard = ({ text, hasBorder, hasEdge, title, id }: iResultItems) => {
  let carded;

  if (hasEdge === true && hasBorder === false) {
    carded = "  md:rounded-tr-none md:rounded-br-none border-none";
  } else if (hasEdge === false && hasBorder === true) {
    carded = "md:rounded-none md:border-x border-[#FCF7FC]";
  } else if (hasEdge === false && hasBorder === false) {
    carded = "  md:rounded-tl-none md:rounded-bl-none border-none";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: id * 0.2, duration: 2, type: "spring", bounce: 0.3 }}
      viewport={{ once: true }}
      className={`h-[357px] w-10/12 md:w-4/12 rounded-[20px] shrink-0 overflow-hidden flex flex-col  bg-black/70  ${carded}`}
    >
      <div className="h-[20%] border-b-2 w-full border-b-[#FCF7FC] bg-[#783888] flex justify-center items-center">
        <h4 className="text-[20px]   leading-[20px] font-[500] text-[#FFFFFF]">
          {title}
        </h4>
      </div>
      <div className="h-[80%]  p-[20px] flex justify-center items-center">
        <p className="font-[400] text-[16px] leading-[20px] text-[#FCF7FC]">
          {text}.
        </p>
      </div>
    </motion.div>
  );
};

export default ResultCard;
