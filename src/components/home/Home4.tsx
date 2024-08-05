import * as React from "react";
import { useInView } from "react-intersection-observer";

import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";

const Agenda = ({ img, description }: { img: string; description: string }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`flex flex-col flex-1 gap-2 sm:gap-4 justify-content-center text-center px-4 mb-4 md:mb-0 transition-all delay-300 duration-500 ${
        inView ? "opacity-100" : "opacity-0 translate-y-24"
      } `}
    >
      <div className="flex items-center justify-center min-h-[80px] ">
        <img alt="" className="!w-auto self-center" src={img} />
      </div>
      <p className="text-xs sm:text-sm text-blue font-light">{description}</p>
    </div>
  );
};
const Home4 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const agenda = [
    {
      img: c1,
      description:
        "Promovemos la prevención y concientización en temas de salud visual al público en general.",
    },
    {
      img: c2,
      description:
        "Procuramos que las y los niños tengan mejor desempeño educativo, el cual elevan de forma inmediata su capacidad de aprendizaje y comprensión al recibir unos anteojos.",
    },
    {
      img: c3,
      description:
        "Fomentamos el crecimiento económico de las personas adultas para que aumenten su productividad, a través de la buena visión proporcionada por unos lentes.",
    },
    {
      img: c4,
      description:
        "Constantemente generamos alianzas para implementar más jornadas visuales en toda la República Mexicana.",
    },
  ];
  return (
    <div ref={ref} className="container py-4 sm:py-8">
      <p
        className={`text-primary text-xl sm:text-2xl font-light transition-all delay-300 duration-300 ${
          inView ? "opacity-100" : "opacity-0 -translate-x-24"
        } `}
      >
        Contribuimos al cumplimiento de la Agenda 2023:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mt-8">
        {agenda.map(({ img, description }) => (
          <Agenda key={description} img={img} description={description} />
        ))}
      </div>
    </div>
  );
};

export default Home4;
