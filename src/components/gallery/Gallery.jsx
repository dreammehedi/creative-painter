import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import SectionTitle from "../section/SectionTitle";

// Import Swiper React components
import { Autoplay, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./myGallery.css";

function Gallery() {
  // loading state
  const [loading, setLoading] = useState(true);
  // gallery data
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://server-sand-two.vercel.app/art-craft-category"
        );
        const data = await response.json();
        setGallery(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <section className="dark:bg-black dark:text-white">
        {/* service title */}
        <div>
          <SectionTitle title="Gallery"></SectionTitle>
        </div>

        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              grid: { rows: 2, fill: "row" },
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              grid: { rows: 2, fill: "row" },
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
          slidesPerView={1}
          grid={{
            rows: 1,
            fill: "row",
          }}
          modules={[Grid, Autoplay, Navigation]}
          navigation
          spaceBetween={30}
          className="container py-4 md:py-6 lg:py-8"
        >
          {gallery.map((galleryItem, ind) => {
            return (
              <SwiperSlide key={ind}>
                <div className="relative hover:shadow-lg rounded-md transition-all duration-300 ease-linear overflow-hidden group cursor-pointer">
                  <img
                    className="rounded-md object-cover w-full h-[300px] md:h-[250px]"
                    src={galleryItem?.image}
                    alt=""
                  />
                  <h3 className="group-hover:top-1/2 group-hover:opacity-100 transition-all duration-300 ease-linear opacity-0 flex justify-center items-center text-center absolute top-full -translate-x-1/2 -translate-y-1/2 left-1/2 w-full h-full bg-orange-200/50 dark:bg-orange-950/80 rounded-md text-xl md:text-2xl text-orange-900 dark:text-orange-500 uppercase font-bold ">
                    {galleryItem?.main_category}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default Gallery;
