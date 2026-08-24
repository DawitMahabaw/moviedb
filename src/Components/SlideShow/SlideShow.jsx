import React from 'react';
import styles from './SlideShow.module.css';
import MovieCard from '../MovieCard/MovieCard';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

   // movies?.map(...) is called optional chaining  which means:
   // "Map over movies only if movies exists((is not null or undefined)"

function SlideShow({title, movies}) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={5}
          spaceBetween={55}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SlideShow
