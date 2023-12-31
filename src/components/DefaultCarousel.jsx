import React from "react";
import { Carousel } from "flowbite-react";

function DefaultCarousel() {
  return (
    <>
      <Carousel className=" bg-lm-accent rounded-lg drop-shadow-lg">
        <img alt="..." src="src/assets/images/img1.jpg" />
        <img alt="..." src="src/assets/images/img2.jpg" />
        <img alt="..." src="src/assets/images/img3.jpg" />
        <img alt="..." src="src/assets/images/img4.jpg" />
      </Carousel>
    </>
  );
}

export default DefaultCarousel;
