import helper from "../../../helper/helper"


const ProductCard = ({image,text,title}: iProductCard) => {
  return (
    <div className=" w-full h-auto  rounded-[20px]">
        <div className="h-[200px]  ">
            <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-[150px]  flex items-center justify-between bg-[#1A19194D] py-[20px] px-[10px]">
            <div className="h-full w-[70%]">
                <h4 className="font-[500] lg:text-[20px] lg:leading-[36px] lg:text-[#FCF7FC] ">{title}</h4>
                <p className="font-[400] text-[14px] text-[#FCF7FC] ">
                {text} 
                </p>
            </div>
            <div className="h-2/5 w-[20%] ">
                <img src={helper.ArrowTopRifght} alt="arrow icon" className="h-full w-full object-contain " />
            </div>
        </div>
    </div>
  )
}

export default ProductCard