import useEmblaCarousel from "embla-carousel-react";

const CardSlider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto", containScroll: "trimSnaps" });
  const SLIDE_COUNT = 8;
  const slide = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {/* <div className="embla__slide">
          <img className="embla__slide__img" src={Image} alt="Your alt text" />
        </div>
        <div className="embla__slide">
          <img className="embla__slide__img" src={Image} alt="Your alt text" />
        </div>
        <div className="embla__slide">
          <img className="embla__slide__img" src={Image} alt="Your alt text" />
        </div>
        <div className="embla__slide">
          <img className="embla__slide__img" src={Image} alt="Your alt text" />
        </div> */}
          {slide.map((data, index) => {
            return (
              <div className="embla__slide" key={index}>
                {children}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
