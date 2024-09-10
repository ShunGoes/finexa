import { useRef } from "react"
import helper from "../../../helper/helper"
import "./style.css"
import { motion, useScroll, useTransform } from "framer-motion"


const GetStarted = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const translateY = useTransform(scrollYProgress, [0,1], [100,0])
  const opacity = useTransform(scrollYProgress, [0,1], [0.7,1])


  return (
    <div className="header">
        <div className="get-started-bg py-[2rem] lg:py-[4rem]">
            <div>
                <motion.h2
                initial={{opacity: 0, y:100}}
                whileInView={{opacity: 1, y: 0 }}
                transition={{delay: 0.5, duration: 1}}
                viewport={{ once: true }} 
                className="text-center heading-2 text-[#FCF7FC] lg:w-full w-9/12 mx-auto lg:mx-0 mb-[2rem] lg:mb-[3rem]">Simple Steps to Get Started</motion.h2>
                <motion.div ref={ref} 
                style={{translateY, opacity}}
                className="lg:h-[500px]  w-10/12 lg:w-9/12 mx-auto">
                    <img src={helper.ProductStarted} alt="product page card" className="h-full w-full object-contain" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted