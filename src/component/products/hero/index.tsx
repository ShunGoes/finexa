import Navbar from "../../navbar"

const ProductHero = () => {
  return (
    <header className=" header h-auto ">
      <div className="header-bg  flex flex-col justify- ">
        <Navbar />
        <div className="w-full lg:mt-[50px] mt-[3rem] ">
          <div className="lg:w-9/12 lg:mx-auto  flex flex-col items-center px-[20px] lg:px-0 ">
          <div className="lg:w-11/12  ">
            <h1 className="heading-1">
            Explore Finexa’s Complete Suite of Financial Tools
            </h1>
          </div>
          <p className="header-paragraph w-11/12">
          Discover a smarter way to manage, invest, and grow your wealth with Finexa. Our intuitive platform offers personalized insights, actionableManage your finances with our diverse range of powerful and secure products. advice, and cutting-edge tools to help you take control of your financial journey. 
          </p>
            <div className="lg:mt-[40px] lg:mb-[60px] mb-[3rem] flex justify-between lg:justify-center lg:gap-[20px] h-[50px] lg:h-[70px] w-11/12 lg:w-full  ">
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