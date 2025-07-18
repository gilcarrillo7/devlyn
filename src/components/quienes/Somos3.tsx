import * as React from "react";
import { useInView } from "react-intersection-observer";

import Profile from "../../images/somos/profile.png";

const Informe = ({ anio, url }: { anio: string; url: string }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const handleOpen = () => {
    window.dataLayer.push({
      event: "click_informe",
      category: "Informes anuales",
      action: "Click",
      label: `Informe ${anio}`,
    });
    window.open(url);
  };
  return (
    <div
      ref={ref}
      className={`relative cursor-pointer border border-white transition-all delay-300 duration-500 ${
        inView ? "opacity-100" : "opacity-0 translate-y-32"
      }`}
      onClick={handleOpen}
      role="button"
    >
      <img src={Profile} className="w-full h-full opacity-0" alt="profile" />
      <div
        className={`absolute bg-secondary text-white bottom-0 left-0 flex flex-col z-10 text-center justify-center w-full h-full p-8`}
      >
        <div className="">
          <span className="font-light text-2xl lg:text-3xl mb-4">{anio}</span>
        </div>
      </div>
    </div>
  );
};

const Miembro = ({ title, role }: { title: string; role: string }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`relative mb-4 sm:mb-8 transition-all delay-300 duration-500 ${
        inView ? "opacity-100" : "opacity-0 translate-y-32"
      }`}
    >
      <p className="text-primary text-xl sm:text-2xl mb-0">{title}</p>
      <p className="text-complementary2 font-medium mb-0">{role}</p>
    </div>
  );
};

const Donut = ({ className }: { className: string }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`donut ${className} transition-all delay-1000 duration-500 ${
        inView ? "opacity-100" : "opacity-0 "
      }`}
    >
      <div className="donut-chart-block block">
        <div className="donut-chart">
          <div id="part1" className="portion-block">
            <div className="circle"></div>
          </div>
          <div id="part2" className="portion-block">
            <div className="circle"></div>
          </div>
          <p className="donut-center"></p>
        </div>
      </div>
    </div>
  );
};

const Somos3 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: refText, inView: inViewText } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const consejo = [
    {
      title: "Dr. Miguel Ángel Santinelli Ramos",
      role: "Presidente del Consejo",
    },
    {
      title: "Lic. Patrick Edward Devlyn Mortensen",
      role: "",
    },
    {
      title: "Lic. Melanie Devlyn Gómez",
      role: "",
    },
    {
      title: "Lic. Michael Alexander Devlyn Joannis ",
      role: "",
    },
    {
      title: "Lic. Jennifer Devlyn Gómez",
      role: "",
    },
    {
      title: "Lic. Stephanie Devlyn Gómez ",
      role: "",
    },
    {
      title: "Dra. Panagiota Panopoulou",
      role: "",
    },
    {
      title: "Dr. Leonardo Alfonso Verduzco Dávila",
      role: "",
    },
    {
      title: "Lic. Jorge Bernal Cardell",
      role: "",
    },
  ];
  const informes = [
    {
      anio: "2020",
      url: "/Informe_Anual_F_Devlyn_2020.pdf",
    },
    {
      anio: "2021",
      url: "/Informe_Anual_F_Devlyn_2021.pdf",
    },
    {
      anio: "2022",
      url: "/Informe_Anual_F_Devlyn_2022.pdf",
    },
    {
      anio: "2023",
      url: "/Informe_Anual_F_Devlyn_2023.pdf",
    },
    {
      anio: "2024",
      url: "/Informe_Anual_F_Devlyn_2024.pdf",
    },
  ];
  return (
    <>
      <div className="flex relative">
        <div className="w-1/2 sm:w-1/4 bg-complementary">
          <img src={Profile} className="opacity-0 w-full" alt="profile" />
        </div>
        <div className="w-1/2 sm:w-3/4 relative">
          <p className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-2xl md:text-4xl font-medium">
            Informes anuales
          </p>
        </div>
        <Donut className="hidden sm:block absolute left-[calc(25%-160px)] top-[calc(100%-160px)]" />
      </div>
      <div className="flex flex-col md:hidden relative text-center -mt-[50%]">
        <div className="">
          <img src={Profile} className="opacity-0 w-1/2" alt="profile" />
        </div>
        <div className="flex">
          <img src={Profile} className="opacity-0 w-1/2" alt="profile" />
          <div className="relative w-1/2">
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-2xl md:text-4xl font-medium">
              Informes anuales
            </p>
          </div>
        </div>
        <Donut className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="flex w-full flex-col md:flex-row">
        <div className="md:w-1/4 hidden md:flex justify-center items-end pb-12"></div>
        <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-3">
          {informes.map((informe, index) => (
            <Informe
              key={`informe${index}`}
              anio={informe.anio}
              url={informe.url}
            />
          ))}
          <div
            ref={refText}
            className={`relative border border-white transition-all delay-300 duration-500 ${
              inViewText ? "opacity-100" : "opacity-0 translate-y-32"
            }`}
          >
            <img
              src={Profile}
              className="w-full h-full opacity-0"
              alt="profile"
            />
            <div
              className={`absolute bg-complementary text-primary bottom-0 left-0 flex flex-col z-10 text-center justify-center w-full h-full p-8`}
            >
              <p className={`text-xl md:text-3xl`}>
                Descarga el informe dando clic
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex">
        <div
          className={`w-1/2 sm:w-3/4 bg-tertiary flex items-center justify-center`}
        >
          <p
            className={`text-center text-2xl md:text-4xl lg:text-5xl font-medium text-primary transition-all delay-1000 duration-500 ${
              inViewText ? "opacity-100" : "opacity-0 translate-y-32"
            }`}
          >
            Nuestro Consejo Consultivo
          </p>
        </div>
        <div className="relative w-1/2 sm:w-1/4 bg-primary">
          <img
            src={Profile}
            className="w-full h-full opacity-0 z-0"
            alt="profile"
          />
          <svg
            width="217"
            height="217"
            viewBox="0 0 217 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <path
              d="M133.04 2.71906L108.51 94.3058L83.9637 2.71906C83.4402 0.759587 81.4209 -0.407115 79.4614 0.131367C77.5019 0.654881 76.3352 2.65923 76.8737 4.6187L101.405 96.2054L34.3636 29.1645C32.9277 27.7285 30.6092 27.7285 29.1733 29.1645C27.7373 30.6004 27.7373 32.9189 29.1733 34.3548L96.2142 101.396L4.62748 76.865C2.66801 76.3414 0.648708 77.4932 0.125179 79.4676C-0.398335 81.4121 0.768367 83.4314 2.72784 83.955L94.3145 108.501L2.72784 133.032C0.768369 133.555 -0.398333 135.574 0.125181 137.534C0.64871 139.493 2.66801 140.66 4.62748 140.137L96.2142 115.606L29.1733 182.647C27.7373 184.068 27.7373 186.401 29.1733 187.837C30.6092 189.273 32.9277 189.273 34.3636 187.837L101.405 120.796L76.8737 212.368C76.3353 214.342 77.502 216.347 79.4614 216.87C81.4209 217.394 83.4402 216.242 83.9637 214.282L108.51 122.696L133.04 214.282C133.564 216.242 135.583 217.394 137.543 216.87C139.188 216.436 140.265 214.956 140.265 213.325C140.265 213.011 140.22 212.697 140.145 212.368L115.6 120.796L182.64 187.837C184.076 189.273 186.41 189.273 187.846 187.837C188.564 187.119 188.908 186.177 188.908 185.234C188.908 184.292 188.564 183.35 187.846 182.647L120.805 115.606L212.377 140.137C214.336 140.66 216.355 139.493 216.879 137.534C216.969 137.22 216.999 136.906 216.999 136.577C216.999 134.961 215.922 133.48 214.276 133.032L122.704 108.501L214.276 83.955C215.922 83.5212 216.999 82.0404 216.999 80.41C216.999 80.0958 216.969 79.7817 216.879 79.4676C216.355 77.4932 214.336 76.3414 212.377 76.8649L120.805 101.396L187.846 34.3548C188.564 33.6518 188.908 32.6945 188.908 31.7671C188.908 30.8248 188.564 29.8824 187.846 29.1645C186.41 27.7285 184.076 27.7285 182.64 29.1645L115.6 96.2054L140.145 4.6187C140.22 4.30458 140.265 3.99048 140.265 3.67636C140.265 2.04596 139.188 0.565142 137.543 0.131365C135.583 -0.407117 133.564 0.759585 133.04 2.71906Z"
              fill="#71C6B0"
            />
          </svg>
          <svg
            width="112"
            height="112"
            viewBox="0 0 112 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <path
              d="M68.6664 1.40341L56.0053 48.6748L43.3364 1.40341C43.0662 0.392054 42.024 -0.210127 41.0126 0.0678047C40.0013 0.338007 39.3991 1.37253 39.677 2.38389L52.3382 49.6552L17.7362 15.0529C16.995 14.3117 15.7984 14.3117 15.0573 15.0529C14.3161 15.794 14.3161 16.9907 15.0573 17.7318L49.6593 52.3342L2.38839 39.6729C1.37704 39.4027 0.334814 39.9972 0.0646035 41.0162C-0.205599 42.0199 0.396574 43.0621 1.40792 43.3323L48.6788 56.0013L1.40792 68.6626C0.396575 68.9328 -0.205598 69.9751 0.0646044 70.9864C0.334815 71.9978 1.37704 72.6 2.38839 72.3297L49.6593 59.6685L15.0573 94.2708C14.3161 95.0042 14.3161 96.2086 15.0573 96.9498C15.7984 97.6909 16.995 97.6909 17.7362 96.9498L52.3382 62.3474L39.677 109.611C39.3991 110.63 40.0013 111.665 41.0126 111.935C42.024 112.205 43.0662 111.611 43.3364 110.599L56.0053 63.3279L68.6664 110.599C68.9366 111.611 69.9789 112.205 70.9902 111.935C71.8394 111.711 72.3953 110.947 72.3953 110.105C72.3953 109.943 72.3721 109.781 72.3335 109.611L59.6647 62.3474L94.2667 96.9498C95.0078 97.6909 96.2122 97.6909 96.9533 96.9498C97.3239 96.5792 97.5014 96.0928 97.5014 95.6064C97.5014 95.1201 97.3239 94.6337 96.9533 94.2708L62.3513 59.6685L109.614 72.3297C110.626 72.6 111.668 71.9978 111.938 70.9864C111.985 70.8243 112 70.6622 112 70.4923C112 69.6585 111.444 68.8942 110.595 68.6626L63.3318 56.0013L110.595 43.3323C111.444 43.1084 112 42.3441 112 41.5026C112 41.3405 111.985 41.1784 111.938 41.0162C111.668 39.9972 110.626 39.4027 109.614 39.6729L62.3513 52.3342L96.9533 17.7318C97.3239 17.369 97.5014 16.8749 97.5014 16.3962C97.5014 15.9098 97.3239 15.4235 96.9533 15.0529C96.2122 14.3117 95.0078 14.3117 94.2667 15.0529L59.6647 49.6552L72.3335 2.38389C72.3721 2.22176 72.3953 2.05963 72.3953 1.89751C72.3953 1.056 71.8394 0.291688 70.9902 0.0678037C69.9789 -0.210127 68.9366 0.392053 68.6664 1.40341Z"
              fill="#71C6B0"
            />
          </svg>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row">
        <div className="sm:order-2 w-full sm:w-3/4 px-12 sm:px-20 py-8 sm:py-24">
          {consejo.map((miembro, index) => (
            <Miembro
              key={`miembro${index}`}
              title={miembro.title}
              role={miembro.role}
            />
          ))}
        </div>
        <div className="sm:order-1 bg-complementary w-full sm:w-1/4 min-h-[120px]"></div>
      </div>
    </>
  );
};

export default Somos3;
