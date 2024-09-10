import ClientCard from "../client-card";
import { ClientTestimonial as Testimonial } from "../../../component-data";
import "./style.css";
import { motion } from "framer-motion";

const ClientTestimonial = () => {
  return (
    <div className="py-[60px] w-full testimonial-bg">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center mb-[40px]"
      >
        <h2 className="heading-2 text-[#FCF7FC] text-center w-10/12">
          What Our Clients Say about us
        </h2>
        <p className="paragraph text-[#FCF7FC] text-center w-10/12 lg:w-9/12">
          Hear from businesses that have experienced success with Finexa and see
          how our solutions are making a difference.
        </p>
      </motion.div>
      <div className=" w-full ">
        <div className="w-full testimonial overflow-auto flex gap-[20px] flex-nowrap px-[15px] py-[30px] md:px-[40px]">
          {Testimonial.map((card: iProductCard) => (
            <ClientCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
