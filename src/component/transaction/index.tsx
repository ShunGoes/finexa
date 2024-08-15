import helper from "../../helper/helper"
import "./styles.css"

const Transaction = () => {
  return (

    <div className="transaction  h-auto">
      
      <div className="transaction-bg h-full lg:py-[70px]">
        <div className=" flex flex-col items-center py-[40px] lg:py-0">
          <h2 className="heading-2 text-[#FCF7FC] mb-2 lg:mb-0">
          Borderless Transactions
          </h2>
         <div className="flex gap-4 items-center ">
          <img src={helper.ArrowRight} alt="arrow right" className="h-[30px] lg:h-auto" />
          <h2 className="heading-2 text-[#D44DF5] ">
            Go Global
          </h2>
          <img src={helper.GlobalIcon} alt="finexa " className="h-[30px] lg:h-auto"/>
         </div>
         <div className="mt-[40px] w-10/12 lg:w-auto">
          <img src={helper.MobileApp} alt="finexa mobile app" className="lg:h-[600px]" />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction