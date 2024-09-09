import helper from "../../../helper/helper";
import Navbar from "../../navbar";
import ClientTestimonial from "../client-testimonial";

const ClientHero = () => {
  return (
    <div className="">
      <header className=" header h-auto ">
        <div className="header-bg  flex flex-col justify- ">
          <Navbar />
          <div className="w-full lg:mt-[50px] mt-[3rem] ">
            <div className="lg:w-11/12 lg:mx-auto   flex flex-col items-center lg:px-0 ">
              <div className="lg:w-9/12  w-full  ">
                <h1 className="text-[28px] lg:text-[64px] lg:leading-[70px] font-[700] leading-[40px] text-[#FCF7FC] text-center">
                  Trusted by Leading Businesses Worldwide
                </h1>
              </div>
              <p className="header-paragraph w-11/12 lg:w-7/12">
                We are proud to partner with industry leaders and innovative
                startups. Our solutions help them achieve financial success, and
                we can do the same for you
              </p>
              <div className="lg:mt-[30px]  flex justify-center lg:justify-center  h-[50px] lg:h-[60px] w-11/12 lg:w-5/12  ">
                <img
                  src={helper.ClientHeroPics}
                  alt=" client hero pics"
                  className="h-full "
                />
              </div>
            </div>
          </div>
            <section className="mt-[60px] lg:mt-[40px]">
                <ClientTestimonial />
            </section>

        </div>
      </header>

    </div>
  );
};

export default ClientHero;
