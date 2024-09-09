import {SolutionData} from "../../../component-data"
import SolutionCard from "../solution-card"
import "./style.css"
import { motion } from "framer-motion"


const Solutions = () => {
  return (
    <section className="header ">
    <div className="solution-bg py-[3rem]">
        <div>
            <motion.h2 
            initial={{opacity: 0, y:100}}
            whileInView={{opacity: 1, y: 0 }}
            transition={{delay: 0.5, duration: 1}}
            viewport={{ once: true }} 
            className="heading-2 text-[#FCF7FC] text-center mb-[2rem] lg:mb-[4rem] lg:w-full w-8/12 mx-auto lg:mx-0">
            Our Solutions Tailored for You
            </motion.h2>
            <motion.div
            initial={{opacity: 0, y:100}}
            whileInView={{opacity: 1, y: 0 }}
            transition={{delay: 1, }}
            viewport={{ once: true }} 
            className="grid grid-cols-1 lg:grid-cols-3 w-10/12 mx-auto  gap-y-[30px] ">
                {
                    SolutionData.map((solutionObj: iProductCard) => (
                        <SolutionCard {...solutionObj} />
                    ))
                }
            </motion.div>
        </div>
    </div>
    </section>
  )
}

export default Solutions