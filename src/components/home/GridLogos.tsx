import * as React from "react";
import { useInView } from "react-intersection-observer";

const Imagen = ({
  logo,
  index,
  second,
}: {
  logo: string;
  index?: number;
  second?: boolean;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <img
      ref={ref}
      src={logo}
      alt="alianza"
      className={`transition-all delay-300 duration-300 ${
        inView ? "opacity-100" : "opacity-0 translate-y-24"
      } ${index === 2 && second ? "p-4" : ""}`}
    />
  );
};

const GridLogos = ({ logos }: { logos: any[] }) => {
  const cols = 7;
  const res = logos.length % cols;
  const end = logos.length - res;
  const firsts = logos.slice(0, end);
  const lasts = logos.slice(end, logos.length);
  const colsMob = 3;
  const resMob = logos.length % colsMob;
  const endMob = logos.length - resMob;
  const firstsMob = logos.slice(0, endMob);
  const lastsMob = logos.slice(endMob, logos.length);
  return (
    <>
      <div className={`hidden md:grid grid-cols-7 gap-8`}>
        {firsts.map((logo, index) => (
          <Imagen key={`alizna${index}`} logo={logo} index={index} />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-6 justify-around gap-8 mt-8">
        {lasts.map((logo, index) => (
          <Imagen
            key={`aliznaend${index}`}
            logo={logo}
            index={index}
            second={true}
          />
        ))}
      </div>
      <div className={`grid grid-cols-3 gap-8 md:hidden`}>
        {firstsMob.map((logo, index) => (
          <Imagen key={`alizna${index}`} logo={logo} index={index} />
        ))}
      </div>
      <div className="flex justify-around gap-8 mt-8 md:hidden">
        {lastsMob.map((logo, index) => (
          <Imagen key={`aliznaend${index}`} logo={logo} index={index} />
        ))}
      </div>
    </>
  );
};

export default GridLogos;
