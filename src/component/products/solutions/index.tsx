import {SolutionData} from "../../../component-data"
import SolutionCard from "../solution-card"

const Solutions = () => {
  return (
    <section className="header ">
    <div className="header-bg py-[3rem]">
        <div>
            <h2 className="heading-2 text-[#FCF7FC] text-center mb-[4rem]">
            Our Solutions Tailored for You
            </h2>
            <div className="grid grid-cols-3 w-10/12 mx-auto  gap-y-[30px] ">
                {
                    SolutionData.map((solutionObj: iProductCard) => (
                        <SolutionCard {...solutionObj} />
                    ))
                }
            </div>
        </div>
    </div>
    </section>
  )
}

export default Solutions