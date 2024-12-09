import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const reviews = [
  { image: "/images/Asanka.png" },
  { image: "/images/Aadham.png" },
  { image: "/images/Achintha.png" },
  { image: "/images/Naveen.png" },
  { image: "/images/Thilina.png" },
  { image: "/images/Dinuka.png" },
  { image: "/images/Bathiya.png" },
];

const CustomerReviews = () => {
  return (
    <div className="bg-black text-white py-12">
      <h2 className="text-4xl fascinate-inline-regular text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg overflow-hidden"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={review.image}
                  alt={`Review ${index + 1}`}
                  className="w-full h-full object-contain max-h-[500px] rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReviews;