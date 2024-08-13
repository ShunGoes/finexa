import helper from "../../helper/helper";
import "./styles.css";

const GetStarted = () => {
  return (
    <div className="getStarted ">
      <div className="getStarted-bg h-full flex flex-col gap-[50px] lg:py-[60px] items-center">
        <div className="lg:w-6/12 text-center">
          <h3 className="font-[700] text-[40px] text-[#FCF7FC] leading-[70px] ">
            How It Works
          </h3>
          <p className="lg:font-[400] text-[#FCF7FC] lg:text-[20px] lg:leading-[24.2px] ">
            Follow These Steps To Get Started
          </p>
        </div>

        {/* create account cards */}
        <div className=" w-10/12 flex flex-col gap-[20px]">
          <div className="card-container w-full border flex justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
            <div className="card-text  w-[50%]">
              <h3 className="font-[700] text-[30px] text-[#FCF7FC] leading-[70px] ">
                Create an account
              </h3>
              <p className="lg:font-[400] text-[#FCF7FC] lg:text-[16px] lg:leading-[22px] ">
                Enter your email address and create a strong password.
                Alternatively, sign up using your social media accounts for
                faster access
              </p>
            </div>
            <div className=" h-full">
              <div className="h-3/5 ">
                <img
                  src={helper.AuthorizationCode}
                  alt=" picture of an authorization code"
                  className="h-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="card-container w-full border flex justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
            <div className="card-text  w-[50%]">
              <h3 className="font-[700] text-[30px] text-[#FCF7FC] leading-[70px] ">
                Verify Your Email
              </h3>
              <p className="lg:font-[400] text-[#FCF7FC] lg:text-[16px] lg:leading-[22px] ">
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
          <div className="card-container w-full border flex justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
            <div className="card-text  w-[50%]">
              <h3 className="font-[700] text-[30px] text-[#FCF7FC] leading-[40px] lg:mb-[15px] ">
                Create Your Bank Account & Debit Card
              </h3>
              <p className="lg:font-[400] text-[#FCF7FC] lg:text-[16px] lg:leading-[22px] ">
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


        <div className="w-full money-card lg:py-[30px]">
          <div className="lg:w-9/12  lg:mx-auto h-full">
            <div className="w-full flex lg:h-[400px] gap-[10px]  mb-5">
              <div className=" w-[40%] ">
                <img
                  src={helper.MoneyImg}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[20px]"
                />
              </div>
              <div className=" w-[60%] relative">
                <img
                  src={helper.DollarSign}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w- rounded-[20px]"
                />
                <div className="absolute top-0 px-[10px] h-full w-full  flex justify-end items-center">
                  <div className="w-6/12 ">
                    <h4 className="font-[700] text-[20px] text-[#FCF7FC] mb-2 lg:leading-[26px]">
                      Simplifying Financial Management
                    </h4>
                    <p className="text-[#FCF7FC] text-[16px] font-[400]">
                      Streamline your financial tasks with our innovative
                      solutions designed for convenience.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-end w-full p-[10px] ">
                  <img src={helper.Money1} alt="" />
                </div>
              </div>
            </div>
            <div className="w-full flex lg:h-[400px]  gap-[10px] ">
              <div className=" w-[60%] relative ">
                <img
                  src={helper.PoundSign}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[20px]"
                />
                <div className="absolute top-0 px-[10px] h-full w-full  flex justify-end items-center">
                  <div className="w-6/12 ">
                    <h4 className="font-[700] text-[20px] text-[#FCF7FC] mb-2 lg:leading-[26px]">
                      Connecting You with the Best Financial Tools
                    </h4>
                    <p className="text-[#FCF7FC] text-[16px] font-[400]">
                      Access powerful features like virtual cards and currency
                      exchange to elevate your financial control.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 flex justify-end w-full p-[10px] ">
                  <img src={helper.Money2} alt="" />
                </div>
              </div>
              <div className=" w-[40%]  ">
                <img
                  src={helper.SmilingMan}
                  alt="some random pictures of finexa"
                  className="h-full object-cover w-full rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
