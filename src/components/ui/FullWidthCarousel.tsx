import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { promotionsCards } from "@/helpers/data/data";
import PromotionCard from "@/components/ui/PromotionCard";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MyStyledBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
}));

const FullWidthCarousel = () => {
  return (
    <MyStyledBox>
      <div className="row-inner">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            411: { slidesPerView: 1.2, spaceBetween: 5 },
            500: { slidesPerView: 1.6, spaceBetween: 5 },
            768: { slidesPerView: 2.2, spaceBetween: 5 },
            1700: { slidesPerView: 3.2, spaceBetween: 15 },
            1920: { slidesPerView: 5, spaceBetween: 15 },
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
          loop={true}
        >
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-scrollbar"></div>
          {promotionsCards &&
            promotionsCards.map((item) => {
              return (
                <SwiperSlide key={item._id}>
                  <PromotionCard data={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </MyStyledBox>
  );
};
export default FullWidthCarousel;
