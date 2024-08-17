import * as React from "react";
import { navigate } from "gatsby";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

import Page from "../layout/Page";
import Button from "../shared/Button";

import VectorImg from "../../images/jornadasVector.svg";
import Imagen from "../../images/jornadas1.png";
import ImagenMob from "../../images/jornadas1Mob.png";

const Home5 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const [animate, setAnimate] = useState(false);

  return (
    <Page className="bg-secondary-gradient overflow-hidden pt-4">
      <div className="flex flex-col md:flex-row mb-4 sm:mb-0 relative">
        <div ref={ref} className="md:w-1/2 lg:w-[40%] z-10">
          <p
            className={`text-5xl sm:text-7xl font-light text-complementary2 mb-4 transition-all delay-300 duration-500 ${
              inView ? "opacity-100" : "opacity-0 -translate-x-24"
            } `}
          >
            Jornadas visuales
          </p>
          <div
            className={`text-primary text-sm sm:text-base mb-8 sm:mb-12 transition-all delay-300 duration-500 ${
              inView ? "opacity-100" : "opacity-0 -translate-x-24"
            } `}
          >
            <p className="mb-4">
              Llevamos los servicios de salud visual a comunidades rurales y
              urbanas de escasos recursos en México a través de la alianza con
              Organizaciones de la Sociedad Civil y empresas, en las cuales se
              realiza a cada persona un examen de la vista y se le entrega un
              kit de lentes (armazón oftálmico, micas con graduación y estuche).
            </p>
            <p className="mb-4 text-complementary2 font-semibold text-base sm:text-lg md:text-xl">
              En 2023 realizamos más de 80 jornadas beneficiando a más de 19 mil
              personas.
            </p>
            <p className="mb-4">
              Nuestras alianzas nos permiten impactar con mayor alcance en la
              salud visual de México.
            </p>
            <p className="mb-4 font-extrabold">
              Sé parte de nuestros aliados y únete al poder de ver para
              transformar el mundo.
            </p>
          </div>
          <Button
            variant="primary"
            onClick={() => navigate("/contacto")}
            onMouseEnter={() => setAnimate(true)}
            onMouseLeave={() => setAnimate(false)}
          >
            Contacto
          </Button>
        </div>
      </div>
      <img
        src={Imagen}
        alt="jornadas visuales"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2"
      />
      <img
        className={`absolute mt-8 ml-10 md:ml-8 md:right-[430px] md:top-12 z-10 transition-all delay-1000 duration-500 ${
          inView ? "opacity-100" : "opacity-0 translate-y-24"
        } ${animate ? "animate-spin" : ""}`}
        src={VectorImg}
        alt="textura"
      />
      <div className="flex justify-end">
        <img
          src={ImagenMob}
          alt="jornadas visuales"
          className="z-0 md:hidden mt-8 translate-x-4 z-0"
        />
      </div>
    </Page>
  );
};

export default Home5;
