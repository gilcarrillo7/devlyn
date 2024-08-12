import * as React from "react";
import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Page from "../layout/Page";

import Img1 from "../../images/testimonio1.png";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";

const Testimonio = ({
  img,
  title,
  subtitle,
  content,
}: {
  img: any;
  title: string;
  subtitle: string;
  content: string;
}) => {
  return (
    <div className="text-center flex flex-col items-center">
      <img src={img} className="!w-1/2 sm:!w-1/4" alt={title} />
      <p className="text-primary text-base sm:text-lg md:text-lg my-8 font-semibold">
        {content}
      </p>
      <p className="text-primary text-xl sm:text-2xl md:text-3=2xl mb-2 font-light">
        {title}
      </p>
      <p className="text-primary text-base sm:text-lg md:text-lg font-semibold">
        {subtitle}
      </p>
    </div>
  );
};

const Home7 = () => {
  const testimonios = [
    {
      img: Img1,
      title: "Duis autem vel 1",
      subtitle: "Eum iriure dolor sit Amet 1",
      content:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",
    },
    {
      img: Img1,
      title: "Duis autem vel 2",
      subtitle: "Eum iriure dolor sit Amet 2",
      content:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",
    },
    {
      img: Img1,
      title: "Duis autem vel 3",
      subtitle: "Eum iriure dolor sit Amet 3",
      content:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",
    },
    {
      img: Img1,
      title: "Duis autem vel 4",
      subtitle: "Eum iriure dolor sit Amet 4",
      content:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",
    },
    {
      img: Img1,
      title: "Duis autem vel 5",
      subtitle: "Eum iriure dolor sit Amet 5",
      content:
        "“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.”",
    },
  ];
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current: any) => setActive(current),
  };
  return (
    <Page className="bg-secondary-gradient">
      <p className="text-primary text-3xl sm:text-6xl text-center mb-8 md:mb-24">
        Testimonios
      </p>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {testimonios.map((testimonio, index) => (
            <div key={`testimg${index}`} className="img-container">
              <img src={testimonio.img} className="" alt={testimonio.title} />
            </div>
          ))}
        </Slider>
        <div className="text-center sm:w-3/5 lg:w-2/3 mx-auto">
          <p className="text-primary text-base sm:text-lg md:text-lg mb-8 font-semibold">
            {testimonios[active].content}
          </p>
          <p className="text-primary text-xl sm:text-2xl md:text-3=2xl mb-2 font-light">
            {testimonios[active].title}
          </p>
          <p className="text-primary text-base sm:text-lg md:text-lg font-semibold">
            {testimonios[active].subtitle}
          </p>
        </div>
      </div>
      <Carousel
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        className="lg:hidden"
        autoPlay={false}
        infiniteLoop={true}
      >
        {testimonios.map((testimonio, index) => (
          <Testimonio
            key={`${index}testomony`}
            img={testimonio.img}
            title={testimonio.title}
            subtitle={testimonio.subtitle}
            content={testimonio.content}
          />
        ))}
      </Carousel>
    </Page>
  );
};

export default Home7;
