import * as React from "react";

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
          <img
            key={`alizna${index}`}
            src={logo}
            alt="alianza"
            className=""
          />
        ))}
      </div>
      <div className="hidden md:flex justify-around gap-8 mt-8">
        {lasts.map((logo, index) => (
          <img
            key={`aliznaend${index}`}
            src={logo}
            alt="alianza"
            className=""
          />
        ))}
      </div>
      <div className={`grid grid-cols-3 gap-8 md:hidden`}>
        {firstsMob.map((logo, index) => (
          <img
            key={`alizna${index}`}
            src={logo}
            alt="alianza"
            className=""
          />
        ))}
      </div>
      <div className="flex justify-around gap-8 mt-8 md:hidden">
        {lastsMob.map((logo, index) => (
          <img
            key={`aliznaend${index}`}
            src={logo}
            alt="alianza"
            className=""
          />
        ))}
      </div>
    </>
  );
};

export default GridLogos;
