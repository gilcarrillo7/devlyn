import * as React from "react";
import Button from "../shared/Button";

import ImgDktp from "../../images/sumate/img1Desktop.png";
import ImgMob from "../../images/sumate/img1Mob.png";
import ImgDktpBg from "../../images/sumate/img1DesktopBg.png";
import { useInView } from "react-intersection-observer";

const Sumate2 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div
      className={`bg-primary-gradient relative min-h-screen flex items-center justify-center pt-16 pb-56 lg:pb-4 overflow-hidden`}
    >
      <div ref={ref} className="container">
        <div
          className={`w-full lg:w-2/3 xl:w-1/2 text-white text-base md:text-lg transition-all delay-300 duration-300 ${
            inView ? "opacity-100" : "opacity-0 translate-y-24"
          }`}
        >
          <p className="text-complementary text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 md:mb-10">
            Productos con causa
          </p>
          <p className="mb-4">
            Nuestra línea de accesorios paños y estuches inspirados en las
            artesanías mexicanas - no sólo son un homenaje a nuestra riqueza
            cultural y a nuestros hermanos artesanos - sino que son una forma de
            hacernos de recursos económicos para poder operar las jornadas
            visuales en comunidades de extrema pobreza y donando completamente
            los exámenes y anteojos a quien lo necesite.
          </p>
          <p className="text-complementary font-semibold mb-4">
            El 100% de lo recaudado, es destinado a comunidades indígenas,
            actualmente trabajamos con los estados de:
          </p>
          <ul className="font-medium list-disc mb-4 pl-4">
            <li>Puebla</li>
            <li>Oaxaca</li>
            <li>Hidalgo</li>
            <li>Veracruz</li>
          </ul>
          <p className="text-sm md:text-base">
            * Disponibles sólo en tiendas corporativas (que no se encuentran
            dentro de tiendas comerciales)
          </p>

          <Button
            variant="transparent"
            className="mt-6 md:mt-12"
            onClick={() =>
              window.open("https://www.devlyn.com.mx/localizador-de-opticas")
            }
          >
            Sucursales
          </Button>
        </div>
      </div>
      <img
        src={ImgDktpBg}
        className={`hidden lg:block absolute top-0 lg:-right-48 xl:right-0 h-full transition-all delay-500 duration-500 ${
          inView ? "opacity-100" : "opacity-0 translate-x-24"
        }`}
        alt=""
      />
      <img
        src={ImgDktp}
        className={`hidden lg:block absolute top-0 lg:-right-48 xl:right-0 h-full transition-all delay-500 duration-500 ${
          inView ? "opacity-100" : "opacity-0 translate-x-24"
        }`}
        alt=""
      />
      <img
        ref={ref2}
        src={ImgMob}
        className={`lg:hidden absolute w-full bottom-0 sm:-bottom-32 md:-bottom-64 transition-all delay-300 duration-500 ${
          inView2 ? "opacity-100" : "opacity-0 translate-y-24"
        }`}
        alt=""
      />
    </div>
  );
};

export default Sumate2;
