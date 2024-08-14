import { useSwiper } from "swiper/react";

const SwiperButtons = ({prevBtnRef, nextBtnRef}: iChildProps) => {
    const swiper = useSwiper()

    return(
        <div className="w-full flex  items-center px-[40px] absolute top-0 h-full hidden z-[999]">
            <div className="w-full flex justify-between">
                <button ref={prevBtnRef} className="text-white paragraph" onClick={() => swiper.slidePrev()}>prev</button>
                <button ref={nextBtnRef} className="text-white paragraph" onClick={() => swiper.slideNext()}>next</button>
            </div>
        </div>
    )
}

export default SwiperButtons;