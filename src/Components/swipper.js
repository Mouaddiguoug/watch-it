import React, { useRef, useState, useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import MoviesContext from '../Context/MoviesContext';

const Swipper = ({setId}) => {
  const { setType, movies, type, fetchPopular, movie, loading } = useContext(MoviesContext);
  
  return loading ? (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper bg-[#151515b7]"
      >
      {movies.map((item) => (
        <SwiperSlide key={item.id} onClick={() => setId(item.id)}>
          <div className="bg-black"></div>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  ) : (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper bg-[#151515b7]"
      >
      {movies.map((item) => (
        <SwiperSlide key={item.id} onClick={() => setId(item.id)}>
          <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}

export default Swipper;