import { motion } from "framer-motion";

const Finance = () => {
  return (
    <div className="bg-black h-[425px] flex justify-center items-center">
      <div className="  ">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="heading-2 text-white text-center mb-3"
        >
          Ready to Take Control of Your Finances?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring", bounce: 0.5 }}
          className="paragraph text-white text-center mx-auto w-10/12"
        >
          Join thousands of users who trust Finexa to manage their money smarter
          and easier. Get started today and explore the tools designed to meet
          your financial goals.
        </motion.p>
      </div>
    </div>
  );
};

export default Finance;
