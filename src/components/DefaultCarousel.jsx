import React from 'react'
import { Carousel } from "flowbite-react";

function DefaultCarousel() {
  return (
    <>
        <Carousel>
                  <img
                    alt="..."
                    src="https://picsum.photos/id/237/200/300"
                  />
                  <img
                    alt="..."
                    src="https://picsum.photos/seed/picsum/200/300"
                  />
                  <img
                    alt="..."
                    src="https://picsum.photos/200/300?grayscale"
                  />
                  <img
                    alt="..."
                    src="https://picsum.photos/200/300/?blur=2"
                  />
                </Carousel>
    </>
  )
}

export default DefaultCarousel