// CarouselSettings.js
export const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 9, // Adjust the number of visible slides
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 10,
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
};
