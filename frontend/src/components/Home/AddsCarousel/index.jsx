import { Carousel, IconButton } from "@material-tailwind/react";
import ImagePromo from "../../../assets/image-promo.png";

const AddsCarousel = () => {
  return (
    // <div className="relative">
    //   <div className="carousel w-full ">
    //     <div id="item1" className="carousel-item w-full">
    //       <img src={ImagePromo} className="w-full" />
    //     </div>
    //     <div id="item2" className="carousel-item w-full">
    //       <img
    //         src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
    //         className="w-full"
    //       />
    //     </div>
    //     <div id="item3" className="carousel-item w-full">
    //       <img
    //         src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
    //         className="w-full"
    //       />
    //     </div>
    //     <div id="item4" className="carousel-item w-full">
    //       <img
    //         src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
    //         className="w-full"
    //       />
    //     </div>
    //   </div>
    //   <div className="flex justify-center w-full py-2 gap-2 absolute bottom-3 z-50">
    //     <a href="#item1" className="btn btn-xs"></a>
    //     <a href="#item2" className="btn btn-xs"></a>
    //     <a href="#item3" className="btn btn-xs"></a>
    //     <a href="#item4" className="btn btn-xs"></a>
    //   </div>
    // </div>

    <Carousel
      className="h-[500px]"
      transition={{ duration: 2 }}
      autoplayDelay={5000}
      loop={true}
      autoplay={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img src={ImagePromo} alt="image 1" className="h-full w-full object-cover" />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
};

export default AddsCarousel;
