


const SolutionCard = ({image, title, text}: iProductCard) => {
  return (
    <div className=" w-full h-auto  rounded-[20px]">
    <div className="h-[70px] w-[70px] ">
        <img src={image} alt="" className="h-full w-full object-cover" />
    </div>
    <div className="h-[150px]  w-[95%]  py-[20px]">
        <div className="h-full w-full">
            <h4 className="product-card lg:leading-[30px]  mb-[10px] ">{title}</h4>
            <p className="font-[400] text-[14px] text-[#FCF7FC] ">
            {text} 
            </p>
        </div>
    </div>
</div>
  )
}

export default SolutionCard