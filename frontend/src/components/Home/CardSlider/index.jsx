import useEmblaCarousel from "embla-carousel-react";

const CardSlider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto", containScroll: "trimSnaps" });
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>
    </div>
  );
};

export default CardSlider;
