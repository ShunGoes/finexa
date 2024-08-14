import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
// import "swiper/css/autoplay"
import "swiper/css/effect-fade";

import { TestimonialData } from "../../component-data";
import SwiperButtons from "../swiper-buttons";
import { useRef } from "react";
import helper from "../../helper/helper";

const Testimonial = () => {
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  function prevSlide() {
    prevBtnRef?.current?.click();
  }
  function nextSlide() {
    nextBtnRef?.current?.click();
  }

  return (
    <section className=" w-full relative  flex items-center ">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="w-8/12 "
      >
        {TestimonialData.map((testament: iTestimony) => {
          return (
            <SwiperSlide className=" h-[60vh] w-[50%] pt-5 " key={testament.id}>
              <div className="w-full h-full flex gap-[40px] items-center rounded-[30px] p-[40px] bg-[#1E1D1D] ">
                <div className="h-full w-[40%] rounded-[20px]">
                  <img
                    src={testament.image}
                    alt="picture of testimony sharer"
                    className="h-full w-full object-cover rounded-[20px]"
                  />
                </div>
                <div className="w-[60%]">
                  <h5 className="text-[24px] font-[24px] text-[#F0E0E0] mb-2">
                    {testament.testimony}
                  </h5>
                  <p className="paragraph">{testament.author}</p>
                  <p className="paragraph">{testament.role}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        ...
        <SwiperButtons prevBtnRef={prevBtnRef} nextBtnRef={nextBtnRef} />
      </Swiper>
      <div className=" w-full absolute top-0 h-full flex items-center justify-center">
        <div className="flex justify-between w-10/12">
          <div onClick={prevSlide} className="h-[40px] w-[40px] ">
            <img
              src={helper.ColouredArrowLeft}
              alt=" button previous testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div onClick={nextSlide} className="h-[40px] w-[40px] ">
            <img
              src={helper.ColouredArrowRight}
              alt=" button previous testimonial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
