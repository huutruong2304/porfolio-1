'use client';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ProjectCard, { Project } from './project-card';
import { Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type Props = {
  data: Project[];
};

const ProjectCarousel = ({ data }: Props) => {
  // Refs for custom buttons
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <Swiper
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },

        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        if (typeof swiper.params.navigation === 'object') {
          if (typeof swiper.params.navigation !== 'boolean') {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <button
        ref={prevRef}
        className={`w-8 h-8 absolute bg-yellow-500 left-0 top-1/2 -translate-y-full z-50 rounded-full flex justify-center items-center`}
      >
        <IoIosArrowBack />
      </button>

      {data.map((project, index) => (
        <SwiperSlide key={index} className="px-2">
          <ProjectCard name={project.name} image={project.image} description={project.description} />
        </SwiperSlide>
      ))}

      <button
        ref={nextRef}
        className="w-8 h-8 absolute bg-yellow-500 right-0 top-1/2 -translate-y-full z-50 rounded-full flex justify-center items-center"
      >
        <IoIosArrowForward />
      </button>
    </Swiper>
  );
};

export default ProjectCarousel;
