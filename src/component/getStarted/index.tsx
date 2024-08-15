import helper from "../../helper/helper";
import Testimonial from "../testimoniaal";
import "./styles.css";

const GetStarted = () => {
  return (
    <div className="getStarted ">
      <div className="getStarted-bg h-full lg:h-full flex flex-col gap-[50px] py-[40px] lg:py-[60px] items-center">
        <div className="lg:w-6/12 text-center">
          <h3 className="heading-2 text-[#FCF7FC] mb-2 lg:mb-0 ">
            How It Works
          </h3>
          <p className="font-[400] text-[#FCF7FC] text-[15px] lg:text-[20px] leading-[18.15px] lg:leading-[24.2px] ">
            Follow These Steps To Get Started
          </p>
        </div>

        {/* create account cards */}
        <div className=" w-10/12 flex flex-col gap-[20px]">
          <div className="card-container w-full border flex gap-[30px] lg:gap-0 flex-col lg:flex-row justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
            <div className="card-text w-full text-center lg:text-start lg:w-[50%]">
              <h3 className=" text-[#FCF7FC] heading-3 ">
                Create an account
              </h3>
              <p className="text-[#FCF7FC] paragraph ">
                Enter your email address and create a strong password.
                Alternatively, sign up using your social media accounts for
                faster access
              </p>
            </div>
            <div className=" h-full ">
              <div className="h-3/5 ">
                <img
                  src={helper.AuthorizationCode}
                  alt=" picture of an authorization code"
                  className="h-[120px] hidden lg:block"
                />
                <img
                  src={helper.SMAuthourization}
                  alt=" picture of an authorization code"
                  className="h-[100px] lg:hidden"
                />
              </div>
            </div>
          </div>
          <div className="card-container w-full border flex gap-[30px] lg:gap-0  flex-col lg:flex-row justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
            <div className="card-text w-full text-center lg:text-start lg:w-[50%]">
              <h3 className="text-[#FCF7FC] heading-3 ">
                Verify Your Email
              </h3>
              <p className="text-[#FCF7FC] paragraph">
                Check your inbox for a verification email and click the link to
                confirm your account. This step ensures your account’s security
              </p>
            </div>
            <div className=" h-full">
              <div className="h-3/5 ">
                <img
                  src={helper.Email}
                  alt=" picture of an Email Icon"
                  className="h-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="card-container w-full border flex gap-[40px] lg:gap-0  flex-col lg:flex-row justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
            <div className="card-text w-full text-center lg:text-start lg:w-[50%]">
              <h3 className="text-[#FCF7FC] heading-3">
                Create Your Bank Account & Debit Card
              </h3>
              <p className="text-[#FCF7FC] paragraph ">
                Complete your profile by adding basic details and preferences.
                You're now ready to explore and start using Finexa's features
              </p>
            </div>
            <div className=" h-full">
              <div className="h-3/5 ">
                <img
                  src={helper.DebitCard}
                  alt=" picture of an authorization code"
                  className="h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* create account cards end */}


        <div className="w-full money-card lg:py-[30px] ">
          <div className="lg:w-9/12  lg:mx-auto h-full">
            <div className="w-full flex flex-col lg:flex-row gap-[20px]  lg:h-[400px] lg:gap-[10px] lg:px-0 px-[20px] mb-5">
              <div className="w-full lg:w-[40%] ">
                <img
                  src={helper.MoneyImg}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[15px] lg:rounded-[20px]"
                />
              </div>
              <div className="w-full lg:w-[60%] relative">
                <img
                  src={helper.DollarSign}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[20px]"
                />
                <div className="absolute top-0 lg:px-[10px] h-full w-full  flex justify-end items-center">
                  <div className="w-6/12 ">
                    <h4 className="font-[700] text-[15px] lg:text-[20px] text-[#FCF7FC] lg:mb-2 lg:leading-[26px]">
                      Simplifying Financial Management
                    </h4>
                    <p className="text-[#FCF7FC] text-[9px] lg:text-[16px] font-[400]">
                      Streamline your financial tasks with our innovative
                      solutions designed for convenience.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-end  w-full p-[10px] h-[70px]">
                  <img src={helper.Money1} alt=" h-full lg:h-auto" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row px-[20px] lg:px-0 lg:h-[400px] gap-[20px] lg:gap-[10px] ">
              <div className="w-full lg:w-[60%] relative ">
                <img
                  src={helper.PoundSign}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[15px] lg:rounded-[20px]"
                />
                <div className="absolute top-0 px-[10px] h-full w-full  flex justify-end items-center">
                  <div className="w-6/12 ">
                    <h4 className="font-[700] text-[15px] lg:text-[20px] text-[#FCF7FC] lg:mb-2 lg:leading-[26px">
                      Connecting You with the Best Financial Tools
                    </h4>
                    <p className="text-[#FCF7FC] text-[9px] lg:text-[16px] font-[400]">
                      Access powerful features like virtual cards and currency
                      exchange to elevate your financial control.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-end w-full p-[10px] h-[70px] ">
                  <img src={helper.Money2} alt="h-full lg:h-auto" />
                </div>
              </div>
              <div className="w-full lg:w-[40%]  ">
                <img
                  src={helper.SmilingMan}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[15px] lg:rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial component */}
        <div className="w-full">
          <Testimonial />
        </div>
        {/* Testimonial component */}

        {/* connect with us section */}
        <div className="bg-[#7838884D] px-[20px] w-full h-[50vh] border-4 mb-[5rem]">
          <div className="w-10/12 lg:mx-auto flex  py-[] h-full items-center">
          <div className="lg:w-[60%] ">
            <h3 className="font-[700] text-[26px] text-[#FCF7FC] leading-[40px] ">Connect your account in one click</h3>
            <p className="paragraph">follow these steps to get strated</p>
            <button className="bg-[#783888] border border-[#83578E] rounded-[20px] w-[137px] h-[45px] text-[#FFFFFF] text-[16px] flex justify-center items-center mt-4 ">Start Now</button>
          </div>
          <div className="h-4/5   lg:w-[40%]">
            <img src={helper.baloon} alt="finexa balloon" className="h-full w-full  object-contain" />
          </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;
