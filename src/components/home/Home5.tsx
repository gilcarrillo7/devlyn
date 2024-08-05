import * as React from "react";
import Page from "../layout/Page";
import Button from "../shared/Button";

import VectorImg from "../../images/jornadasVector.svg";
import Imagen from "../../images/jornadas1.png";
import ImagenMob from "../../images/jornadas1Mob.png";

const Home5 = () => {
  return (
    <Page className="bg-secondary-gradient overflow-hidden pt-4">
      <div className="flex flex-col sm:flex-row mb-4 sm:mb-0 relative">
        <div className="md:w-1/2 z-10">
          <p className="text-5xl sm:text-7xl font-light text-complementary2 mb-4">
            Jornadas visuales
          </p>
          <div className="text-primary text-sm sm:text-base mb-8 sm:mb-12">
            <p className="mb-4">
              Llevamos los servicios de salud visual a comunidades rurales y
              urbanas de escasos recursos en México a través de la alianza con
              Organizaciones de la Sociedad Civil y empresas, en las cuales se
              realiza a cada persona un examen de la vista y se le entrega un
              kit de lentes (armazón oftálmico, micas con graduación y estuche).
            </p>
            <p className="mb-4 text-complementary2 font-semibold text-base sm:text-lg">
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
          <Button variant="primary">Contacto</Button>
        </div>
      </div>
      <img
        src={Imagen}
        alt="jornadas visuales"
        className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2"
      />
      <img
        className="absolute translate-y-8 ml-10 sm:ml-8 sm:right-[430px] sm:top-12 z-10"
        src={VectorImg}
        alt="textura"
      />
      <div className="flex justify-end">
        <img
          src={ImagenMob}
          alt="jornadas visuales"
          className="z-0 sm:hidden mt-8 translate-x-4 z-0"
        />
      </div>
    </Page>
  );
};

export default Home5;
