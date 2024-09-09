import ProductCard from "../product-card"
import "./styles.css"
import {ProductData} from "../../../component-data"
import { motion } from "framer-motion"


const AllProducts = () => {
  return (
    <div className="header w-full">
      <div className="all-products-bg py-[3rem] lg:py-[4rem]">
        <motion.h2
        initial={{opacity: 0, y:100}}
        whileInView={{opacity: 1, y: 0 }}
        transition={{delay: 0.5, duration: 1}}
        viewport={{ once: true }} 
        className="heading-2 text-[#FCF7FC] text-center mb-[2rem] lg:mb-[4rem] w-10/12 lg:w-full lg:mx-0 mx-auto">All Our Products at a Glance</motion.h2>
        <div className="w-10/12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-3 mx-auto">
        {
          ProductData.map((product: iProductCard) => {
            return (
            <motion.div key={product.id}
            initial={{opacity: 0, x: -50, scale: 0,}}
            whileInView={{opacity: 1, x: 0, scale: 1}}
            transition={{duration: 3, delay: product.id * 0.2, type: "spring", bounce: 0.3}}
            viewport={{once: true}}
            className="col-span-1">
              <ProductCard id={product.id}  text={product.text} image={product.image} title={product.title} />
            </motion.div>

            )
})
        }
         
        </div>
      </div>
    </div>
  )
}

export default AllProducts