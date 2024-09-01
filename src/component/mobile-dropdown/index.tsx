import { motion } from "framer-motion";
import "./style.css"


const MobileDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute right-[20px] rounded-[10px] z-[999] top-[100px] dropdown border-2 w-[80%] h-[300px]"
    >
      <div className="dropdown-bg rounded-[10px] h-full w-full text-white">MobileDropdown</div>
    </motion.div>
  );
};

export default MobileDropdown;
