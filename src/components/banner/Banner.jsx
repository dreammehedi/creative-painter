// Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderItem from "../slider/SliderItem";

import slider1 from "../../assets/slider/slider1.jpg";
import slider2 from "../../assets/slider/slider2.jpg";
import slider3 from "../../assets/slider/slider3.jpg";
import slider4 from "../../assets/slider/slider4.jpg";
import Button from "../../components/button/Button";
function Banner() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        className="md:h-[400px] lg:h-[535px] w-full "
      >
        <SwiperSlide>
          <SliderItem
            bg={slider1}
            title="Nature's Palette: A Journey Through Landscape Paintings"
            des="Experience the tranquil beauty of nature captured on canvas in our immersive landscape painting collection. Let these breathtaking vistas transport you to serene and picturesque destinations."
          >
            <Button
              name="Explore Now"
              cls={"!bg-orange-500 !text-white hover:!bg-orange-900"}
            ></Button>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            bg={slider2}
            title="Watercolor Wonders: A Splash of Nature's Beauty"
            des="Dive into the mesmerizing world of watercolor painting and witness nature come alive with vibrant hues and fluid strokes. Explore our collection of watercolor masterpieces that capture the essence of landscapes in every brushstroke."
          >
            <Button
              name="Discover Now"
              cls={"!bg-orange-500 !text-white hover:!bg-orange-900"}
            ></Button>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            bg={slider3}
            title="Eternal Brushstrokes: Exploring the Majesty of Oil Landscapes"
            des="Embark on a journey through the rich textures and vivid colors of oil paintings, where landscapes are immortalized on canvas with timeless beauty. Immerse yourself in our collection and discover the allure of oil-painted panoramas."
          >
            <Button
              name="View Collection"
              cls={"!bg-orange-500 !text-white hover:!bg-orange-900"}
            ></Button>
          </SliderItem>
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem
            bg={slider4}
            title="Charcoal Chronicles: Capturing Landscapes in Shadows and Light"
            des="Uncover the raw and emotive power of charcoal sketching as landscapes unfold in dramatic contrasts of darkness and light. Experience the evocative allure of our charcoal sketches, where each stroke reveals the soul of nature."
          >
            <Button
              name="Explore Sketches"
              cls={"!bg-orange-500 !text-white hover:!bg-orange-900"}
            ></Button>
          </SliderItem>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Banner;
