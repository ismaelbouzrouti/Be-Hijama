import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";


export default function About() {

    const description = `
  be.hijama is a leading cupping therapy center specializing in both dry and humid cupping techniques.
  With a focus on traditional healing methods combined with modern techniques, we offer a unique approach
  to pain relief, relaxation, and overall well-being. Experience the transformative power of cupping therapy at be.hijama.
`;

  const imageCollection = [
    {
      label: "Image About",
      imgPath: "WhatsApp Image 2025-01-20 at 18.15.22 (1).jpeg",
      description: description
    },

    {
      label: "Hadith 1",
      imgPath: "WhatsApp Image 2025-01-20 at 21.12.46.jpeg",
    },

    {
      label: "Hadith 2",
      imgPath: "WhatsApp Image 2025-01-20 at 21.12.46 (1).jpeg",
    },

    {
      label: "Hadith 3",
      imgPath: "WhatsApp Image 2025-01-20 at 22.18.08.jpeg",
      },

    {
      label: "Hadith 4",
      imgPath: "WhatsApp Image 2025-01-20 at 22.18.09.jpeg",
      },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">About be.hijama</h2>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination,Autoplay]}
        className="max-w-[90%] mx-auto"
      >
        {imageCollection.map((item, index) => (
          <SwiperSlide key={index} className="relative group">
            <div className="w-full h-[500px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg relative">
              <img
                src={item.imgPath}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              {item.description && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-center text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              )}
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
