import helper from "../../helper/helper";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="bg-black py-[7rem] lg:py-[6rem]">
      <div className="flex items-center lg:items-start justify-center lg:justify-start flex-wrap shrink-0 px-[20px] text-ce gap-x-4 lg:gap-x-0 gap-y-[7rem]  w-full lg:w-10/12 lg:mx-auto  ">
        <div className="w-[45%] lg:w-[24%]  flex flex-col gap-[10px] ">
          <h6 className="font-[7000] text-[16px] text-[#D0DAF5] mb-5  ">
            Product
          </h6>
          <p className="footer-paragraph"> Money Transfer</p>
          <p className="footer-paragraph"> Virtual Account</p>
          <p className="footer-paragraph"> Current Exchange</p>
          <p className="footer-paragraph"> Invoice</p>
        </div>
        <div className="w-[45%] lg:w-[24%] -mt-[25px] lg:mt-0  flex flex-col gap-[10px]">
          <h6 className="font-[7000] text-[16px] text-[#D0DAF5] mb-5 ">
            Legal
          </h6>
          <p className="footer-paragraph"> Privacy Policy</p>
          <p className="footer-paragraph"> Terms Of Service</p>
          <p className="footer-paragraph"> FAQ</p>
        </div>
        <div className="w-[90%] lg:w-[23%] flex flex-col gap-[10px]     ">
          <h6 className="font-[7000] text-[16px] text-[#D0DAF5] mb-5 ">
            Company
          </h6>
          <p className="footer-paragraph"> About Us</p>
          <p className="footer-paragraph"> Career</p>
          <p className="footer-paragraph"> Blog</p>
          <p className="footer-paragraph"> Contact Us</p>
        </div>
        <div className="w-[90%] lg:w-[29%]  flex flex-col p-[20px] lg:-mt-[25px]  gap-[10px] bg-[#25449B0D] h-full   ">
          <div className=" ">
            <h6 className="font-[7000] text-[16px] text-[#D0DAF5] mb-5 ">
              Subscribe
            </h6>
            <div className="mb-9 h-[50px] flex ">
              <input
                type="email"
                name="footerInput"
                placeholder="Email Address"
                className="bg-[#0D0D0D] outline-none border-2 border-[#161829] h-full rounded-[6px] footer-input lg:w-10/12"
              />
              <button className="bg-[#783888] h-full w-[50px] lg:w-2/12  flex items-center justify-center">
                <img
                  src={helper.Forward}
                  alt=" arrow forward button"
                  className=""
                />
              </button>
            </div>
            <p className="font-[400] text-[14px] text-[#D0DAF5]">
              {" "}
              Hello, we’re Finexa. We’re committed to connecting you with the
              best financial tools to help you achieve outstanding results.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-10/12 mx-auto h-auto mt-[4rem]">
        <div className="h-auto w-full flex  flex-col lg:flex-row">
          <div className="w-full lg:w-[60%] flex justify-between gap-3">
            <div className="h-[40px] w-3/12 ">
              <img
                src={helper.Finexa}
                alt=" finexa logo"
                className="h-full w-[40px] object-cover rounded-[11.69px]"
              />
            </div>
            <div className="w-9/12 h-full  flex justify-between lg:justify-around items-center">
              <p className="ffont-[700] text-[14px] text-[#D0DAF5]">Terms</p>
              <p className="ffont-[700] text-[14px] text-[#D0DAF5]">Privacy</p>
              <p className="ffont-[700] text-[14px] text-[#D0DAF5]">Cookie</p>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end gap-[10px] lg:gap-0 lg:pr-[10px] mt-[3rem] lg:mt-0">
            <div className="h-[40px] ">
              <img
                src={helper.instagram}
                alt="instagram icon"
                className="h-full"
              />
            </div>
            <div className="h-[40px] ">
              <img
                src={helper.facebook}
                alt="facebook icon"
                className="h-full"
              />
            </div>
            <div className="h-[40px] ">
              <img src={helper.Twitter} alt="twitter icon" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
