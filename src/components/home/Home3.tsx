import * as React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import { motion, useSpring, useTransform } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import Res2 from "../../images/resultados1.png";
import Res1 from "../../images/resultados2.png";
import Res3 from "../../images/resultados3.png";
import Res4 from "../../images/resultados4.png";

function AnimatedNumber({ number }: { number: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const value = 0;
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (inView) spring.set(number);
  }, [spring, value, inView]);

  return (
    <motion.span ref={ref} className="text-complementary2 font-bold text-4xl">
      {display}
    </motion.span>
  );
}

const Resultado = ({
  img,
  number,
  description,
  index,
}: {
  img: string;
  number: number;
  description: string;
  index: number;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`flex flex-col flex-1 gap-4 justify-content-center text-center px-4 transition-all delay-300 duration-300 ${
        inView ? "opacity-100" : "opacity-0 translate-y-24"
      } ${index !== 0 ? "md:border-l border-white" : ""}`}
    >
      <div className="flex items-center justify-center min-h-[80px] mb-4">
        <img
          alt=""
          className="!w-auto self-center hover:scale-[120%]"
          src={img}
        />
      </div>
      <AnimatedNumber number={number} />
      <p className="text-lg sm:text-xl text-secondary font-semibold">
        {description}
      </p>
    </div>
  );
};

const Home3 = () => {
  const results = [
    {
      img: Res1,
      number: 1589530,
      description: "Exámenes de la vista realizados",
    },
    {
      img: Res2,
      number: 1181758,
      description: "Lentes entregados",
    },
    {
      img: Res3,
      number: 131640,
      description: "Horas voluntarias dedicadas",
    },
    {
      img: Res4,
      number: 16455,
      description: "Personas voluntarias",
    },
  ];
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div className="bg-primary w-screen py-4 sm:py-8">
      <div ref={ref} className="container">
        <p
          className={`text-center md:text-left text-tertiary text-4xl sm:text-5xl transition-all delay-300 duration-300 ${
            inView ? "opacity-100" : "opacity-0 -translate-x-24"
          }`}
        >
          Resultados
        </p>
        <p
          className={`text-center md:text-left text-complementary text-lg sm:text-2xl font-light transition-all delay-500 duration-300 ${
            inView ? "opacity-100" : "opacity-0 -translate-x-24"
          }`}
        >
          En 16 años hemos logrado:
        </p>
        <div className="hidden md:flex gap-6 my-6">
          {results.map(({ number, img, description }, index) => (
            <Resultado
              key={description}
              index={index}
              img={img}
              number={number}
              description={description}
            />
          ))}
        </div>
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          className="md:hidden my-12"
          autoPlay={false}
          infiniteLoop={true}
        >
          {results.map(({ number, img, description }, index) => (
            <Resultado
              key={description}
              index={index}
              img={img}
              number={number}
              description={description}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home3;
