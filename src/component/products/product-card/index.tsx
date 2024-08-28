import helper from "../../../helper/helper"


const ProductCard = ({image,text,title}: iProductCard) => {
  return (
    <div className=" w-full h-auto  rounded-[20px]">
        <div className="lg:h-[200px] h-[250px]  ">
            <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="lg:h-[150px] h-auto  flex items-center justify-between bg-[#1A19194D] py-[20px] px-[10px]">
            <div className="h-full w-[70%]">
                <h4 className="product-card leading-[29px] lg:leading-[36px]  ">{title}</h4>
                <p className="font-[400] text-[13px] lg:text-[14px] text-[#FCF7FC] ">
                {text} 
                </p>
            </div>
            <div className="lg:h-2/5 w-[20%] h-[50px] ">
                <img src={helper.ArrowTopRifght} alt="arrow icon" className="h-full w-full object-contain " />
            </div>
        </div>
    </div>
  )
}

export default ProductCard