import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./Row.css";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const NextArrow = ({ onClick }) => (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    className: 'dark-carousel',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="homepage">
      <h2 className="title">{title}</h2>
      <Slider {...settings}>
        {movies.map((item, id) => (
          <div className='custom-width inline-block cursor-pointer relative padding-2' key={id}>
            <img
              className='full-width auto-height block'
              src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
              alt="Movie Poster"
            />
            <div className='absolute-overlay hover:bg-black/80 text-white'>
              <p>{item?.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Row;
