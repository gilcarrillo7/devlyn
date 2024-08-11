import * as React from "react";
import { useInView } from "react-intersection-observer";

const Somos2 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const valores = [
    {
      title: "Respeto",
      content:
        "Consideramos que todas las personas deben ser tratadas con una atención digna, sin excepción alguna.",
    },
    {
      title: "Compromiso",
      content:
        "Nuestro compromiso es por cada uno de los integrantes de la Fundación, aportando profesionalismo, responsabilidad, lealtad, confiabilidad y brindar nuestra pasión por el servicio.",
    },
    {
      title: "Honestidad",
      content:
        "Destinamos los recursos (donativos) a beneficio de las personas en situación de vulnerabilidad a favor de salud visual.",
    },
    {
      title: "Trabajo en equipo",
      content:
        "Se obtienen soluciones más competentes, valiosas y duraderas que provienen de los esfuerzos y capacidades de nuestros grandes aliados, beneficiarios y del equipo de trabajo.",
    },
  ];
  return (
    <>
      <div className="bg-tertiary pb-16 pt-36 md:py-12">
        <div className="container">
          <div className="w-full md:w-3/5">
            <p
              ref={ref}
              className={`text-complementary font-medium text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-8 transition-all delay-100 duration-300 ${
                inView ? "opacity-100" : "opacity-0 translate-y-24"
              }`}
            >
              Misión
            </p>
            <p
              className={`text-primary text-base md:text-lg mb-8 md:mb-16 transition-all delay-300 duration-300 ${
                inView ? "opacity-100" : "opacity-0 translate-y-24"
              }`}
            >
              Optimizar la calidad de vida de las personas mejorando su
              bienestar visual con un par de lentes y puedan disfrutar del
              espectáculo de la vida.
            </p>
            <p
              className={`text-complementary font-medium text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-8 transition-all delay-500 duration-300 ${
                inView ? "opacity-100" : "opacity-0 translate-y-24"
              }`}
            >
              Visión
            </p>
            <p
              className={`text-primary text-base md:text-lg transition-all delay-700 duration-300 ${
                inView ? "opacity-100" : "opacity-0 translate-y-24"
              }`}
            >
              Lograr concientizar a las personas que el gozar de una buena
              visión eleva su calidad de vida y su capacidad de inserción en la
              sociedad.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 md:py-12">
        <div className="container">
          <p
            ref={ref2}
            className={`text-tertiary font-medium text-3xl sm:text-4xl lg:text-5xl mb-8 md:mb-12 transition-all delay-300 duration-500 ${
              inView2 ? "opacity-100" : "opacity-0 translate-y-24"
            }`}
          >
            Valores
          </p>
          <div className="flex lg:grid lg:grid-cols-4 overflow-auto lg:overflow-hidden">
            {valores.map((valor, indx) => (
              <div
                className={`shrink-0 w-[300px] lg:w-auto border-tertiary px-8 ${
                  indx !== 0 ? "border-l" : ""
                } 
                transition-all delay-500 duration-500 ${
                  inView2 ? "opacity-100" : "opacity-0 translate-y-24"
                }`}
              >
                <p className="text-tertiary text-center text-xl md:text-2xl font-bold mb-8">
                  {valor.title}
                </p>
                <p className="text-primary text-base md:text-lg">
                  {valor.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Somos2;
