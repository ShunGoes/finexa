import Navbar from "../../navbar"

const ProductHero = () => {
  return (
    <header className=" header h-auto ">
      <div className="header-bg  flex flex-col justify- ">
        <Navbar />
        <div className="w-full lg:mt-[50px] mt-[2rem] ">
          <div className="lg:w-9/12 lg:mx-auto  flex flex-col items-center px-[20px] lg:px-0 ">
          <div className="lg:w-11/12  ">
            <h1 className="font-[700] lg:text-[64px] text-[36px] text-center text-[#FCF7FC] leading-[40px] lg:leading-[70px] mb-[5px] lg:mb-0">
            Explore Finexa’s Complete Suite of Financial Tools
            </h1>
          </div>
          <p className="text-[#FFFFFF] mt-2 text-center w-10/12 lg:w-[90%] lg:font-[400] text-[14px] lg:text-[16px] leading-[16.94px] lg:leading-[19.36px] mb-[2rem] lg:mb-0">
          Discover a smarter way to manage, invest, and grow your wealth with Finexa. Our intuitive platform offers personalized insights, actionableManage your finances with our diverse range of powerful and secure products. advice, and cutting-edge tools to help you take control of your financial journey. 
          </p>
            <div className="lg:mt-[40px] lg:mb-[60px] mb-[3rem] flex justify-center gap-[20px] h-[50px] lg:h-[70px] ">
              <button className="btn bg-[#783888] text-[#FFFFFF]">Get Started</button>
              <button className="btn bg-transparent text-[#783888]">View products</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ProductHero