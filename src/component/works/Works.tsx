"use client";
import Image from "next/image";
import HTwoText from "@/component/text/HTwoText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

type WorksProps = {
  items: WorksItems[];
  title: string;
  isTop?: boolean;
  isSwiper?: boolean;
};

type WorksItems = {
  worksName: string;
  worksInfo?: string;
  src: string;
  alt: string;
  href: string;
};

export default function Works({
  items,
  title,
  isTop,
  isSwiper = false,
}: WorksProps) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const breakSetting = {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  };
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 my-20">
        <HTwoText className="text-3xl font-bold">{title}</HTwoText>

        {isSwiper ? (
          <Swiper
            className="gap-8 my-8"
            spaceBetween={24}
            slidesPerView={1.2}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={breakSetting}
            centeredSlides={true}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ el: "#pagination", clickable: true }}
          >
            {items.map((item) => (
              <SwiperSlide
                key={item.src}
                className="overflow-visible m-2 sm:m-4"
              >
                <a
                  className="p-4 flex flex-col items-center border-3 border-black dark:border-white rounded-tl-4xl shadow-xl transition-transform duration-300 hover:scale-[1.05]"
                  href={`/works/${item.href}/`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="rounded"
                  />
                  <p className="mt-4 text-lg font-semibold">{item.worksName}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {item.worksInfo}
                  </p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 my-8">
            {items.map((item) => (
              <a
                key={item.src}
                className="flex flex-col items-center border-3 border-black dark:border-white rounded-tl-4xl shadow-xl p-4 transition-transform duration-300 hover:scale-[1.05]"
                href={`/works/${item.href}/`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="rounded"
                />
                <p className="mt-4 text-lg font-semibold">{item.worksName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {item.worksInfo}
                </p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
