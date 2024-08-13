import helper from "../../helper/helper"
import "./styles.css"


const GetStarted = () => {
  return (
    <div className="getStarted ">
        <div className="getStarted-bg h-full flex flex-col gap-[50px] lg:py-[60px] items-center">
            <div className="lg:w-6/12 text-center">
                <h3 className="font-[700] text-[40px] text-[#FCF7FC] leading-[70px] ">How It Works</h3>
                <p className="lg:font-[400] text-[#FCF7FC] lg:text-[20px] lg:leading-[24.2px] ">Follow These Steps To Get Started</p>
            </div>

            <div className=" w-10/12 flex flex-col gap-[20px]">
                <div className="card-container w-full border flex justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
                    <div className="card-text  w-[50%]">
                    <h3 className="font-[700] text-[30px] text-[#FCF7FC] leading-[70px] ">Create an account</h3>
                    <p className="lg:font-[400] text-[#FCF7FC] lg:text-[16px] lg:leading-[22px] ">
                    Enter your email address and create a strong password. Alternatively, sign up using your social media accounts for faster access
                    </p>
                    </div>
                    <div className=" h-full">
                        <div className="h-3/5 ">
                        <   img src={helper.AuthorizationCode} alt=" picture of an authorization code"  className="h-[100px]"/>
                        </div>
                    </div>
                </div>
                <div className="card-container w-full border flex justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
                    <div className="card-text  w-[50%]">
                    <h3 className="font-[700] text-[30px] text-[#FCF7FC] leading-[70px] ">Verify Your Email</h3>
                    <p className="lg:font-[400] text-[#FCF7FC] lg:text-[16px] lg:leading-[22px] ">
                    Check your inbox for a verification email and click the link to confirm your account. This step ensures your account’s security
                    </p>
                    </div>
                    <div className=" h-full">
                        <div className="h-3/5 ">
                        <   img src={helper.Email} alt=" picture of an Email Icon"  className="h-[100px]"/>
                        </div>
                    </div>
                </div>
                <div className="card-container w-full border flex justify-between items-center py-[30px] px-[20px] rounded-[30px]  border-[#783888]">
                    <div className="card-text  w-[50%]">
                    <h3 className="font-[700] text-[30px] text-[#FCF7FC] leading-[40px] lg:mb-[15px] ">Create Your Bank Account & Debit Card</h3>
                    <p className="lg:font-[400] text-[#FCF7FC] lg:text-[16px] lg:leading-[22px] ">
                    Complete your profile by adding basic details and preferences. You're now ready to explore and start using Finexa's features
                    </p>
                    </div>
                    <div className=" h-full">
                        <div className="h-3/5 ">
                        <   img src={helper.DebitCard} alt=" picture of an authorization code"  className="h-[100px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted