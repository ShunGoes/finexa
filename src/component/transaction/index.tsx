import helper from "../../helper/helper"
import "./styles.css"

const Transaction = () => {
  return (
    <div className="transaction  ">
      <div className="transaction-bg h-full lg:py-[70px]">
        <div className=" flex flex-col items-center ">
          <h2 className="font-[700] text-[#FCF7FC] lg:text-[50px] lg:leading-[70px]">
          Borderless Transactions
          </h2>
         <div className="flex gap-4 ">
          <img src={helper.ArrowRight} alt="arrow right" />
          <h2 className="font-[700] text-[#D44DF5] lg:text-[50px] lg:leading-[70px]">
            Go Global
          </h2>
          <img src={helper.GlobalIcon} alt="finexa " />
         </div>
         <div className="mt-[40px]">
          <img src={helper.MobileApp} alt="finexa mobile app" className="lg:h-[600px]" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction