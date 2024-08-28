import helper from "../../../helper/helper"
import "./style.css"

const GetStarted = () => {
  return (
    <div className="header">
        <div className="get-started-bg py-[2rem] lg:py-[4rem]">
            <div>
                <h2 className="text-center heading-2 text-[#FCF7FC] lg:w-full w-9/12 mx-auto lg:mx-0 mb-[2rem] lg:mb-[3rem]">Simple Steps to Get Started</h2>
                <div className="lg:h-[500px]  w-10/12 lg:w-9/12 mx-auto">
                    <img src={helper.ProductStarted} alt="product page card" className="h-full w-full object-contain" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted