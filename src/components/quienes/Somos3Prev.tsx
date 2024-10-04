import * as React from "react";
import { useInView } from "react-intersection-observer";

import Profile from "../../images/somos/profile.png";

const Informe = ({ anio, url }: { anio: string; url: string }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`relative border border-white transition-all delay-300 duration-500 ${
        inView ? "opacity-100" : "opacity-0 translate-y-32"
      }`}
    >
      <img src={Profile} className="w-full h-full opacity-0" alt="profile" />
      <div
        className={`absolute bg-secondary text-white bottom-0 left-0 flex flex-col z-10 text-center justify-center w-full h-full p-8`}
      >
        <div className="">
          <a className="font-light text-2xl lg:text-3xl mb-4" href={url}>
            {anio}
          </a>
        </div>
      </div>
    </div>
  );
};

const Miembro = ({
  img,
  title,
  role,
  index,
}: {
  img: any;
  title: string;
  role: string;
  index: number;
}) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`relative transition-all delay-300 duration-500 ${
        inView ? "opacity-100" : "opacity-0 translate-y-32"
      }`}
    >
      <img src={img} className="w-full h-full" alt={role} />
      <div
        className={`absolute bottom-0 left-0 flex flex-col z-10 text-center justify-center w-full h-full p-4 md:p-8 opacity-80 ${
          index % 10 === 0 ? "bg-primary text-white" : ""
        } ${index % 10 === 1 ? "bg-complementary2 text-white" : ""} ${
          index % 10 === 2 ? "bg-tertiary text-primary" : ""
        } ${index % 10 === 3 ? "bg-secondary text-white" : ""} ${
          index % 10 === 4 ? "bg-secondary text-white" : ""
        } ${index % 10 === 5 ? "bg-tertiary text-primary" : ""} ${
          index % 10 === 6 ? "bg-primary text-white" : ""
        } ${index % 10 === 7 ? "bg-complementary text-primary" : ""} ${
          index % 10 === 8 ? "bg-complementary2 text-white" : ""
        }`}
      >
        <div className="">
          <p className="font-light text-xl lg:text-2xl mb-4">{title}</p>
          <p className="font-bold text-base lg:text-lg">{role}</p>
        </div>
      </div>
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
      img: Profile,
    },
    {
      title: "Lic. Patrick Edward Devlyn Mortensen",
      role: "Puesto",
      img: Profile,
    },
    {
      title: "Lic. Melanie Devlyn Gómez",
      role: "Puesto",
      img: Profile,
    },
    {
      title: "Lic. Michael Alexander Devlyn Joannis ",
      role: "Puesto",
      img: Profile,
    },
    {
      title: "Lic. Jennifer Devlyn Gómez",
      role: "Puesto",
      img: Profile,
    },
    {
      title: "Lic. Stephanie Devlyn Gómez ",
      role: "Puesto",
      img: Profile,
    },
    {
      title: "Dra. Panagiota Panopoulou",
      role: "Puesto",
      img: Profile,
    },
    {
      title: "Dr. Leonardo Alfonso Verduzco Dávila",
      role: "Puesto",
      img: Profile,
    },
    {
      title: "Lic. Jorge Bernal Cardell",
      role: "Puesto",
      img: Profile,
    },
  ];
  const informes = [
    {
      anio: "2019",
      url: "#",
    },
    {
      anio: "2020",
      url: "#",
    },
    {
      anio: "2021",
      url: "#",
    },
    {
      anio: "2022",
      url: "#",
    },
    {
      anio: "2023",
      url: "#",
    },
  ];
  return (
    <>
      <div className="relative bg-secondary">
        <img src={Profile} className="opacity-0 w-1/2 md:w-1/4" alt="profile" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="container">
            <p
              ref={ref}
              className={`text-white font-medium text-2xl md:text-5xl pr-[50%] sm:pr-96 md:pr-32 xl:pr-0 transition-all delay-300 duration-500 ${
                inView ? "opacity-100" : "opacity-0 -translate-x-32"
              }`}
            >
              Nuestro Consejo Consultivo
            </p>
          </div>
        </div>
        <div className="bg-tertiary absolute right-0 top-0 w-1/2 md:w-1/4 h-full"></div>
      </div>
      <div className="relative grid grid-cols-2 md:grid-cols-4">
        {consejo.map((miembro, index) => (
          <Miembro
            key={`miembro${index}`}
            index={index}
            img={miembro.img}
            title={miembro.title}
            role={miembro.role}
          />
        ))}
        <div className="hidden md:block absolute bottom-0 right-0 w-3/4 text-center">
          <div className="relative w-full h-full">
            <img src={Profile} className="opacity-0 md:w-1/4" alt="profile" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-2xl md:text-4xl font-medium">
              Informes anuales
            </p>
            <Donut className=" absolute -left-[160px] -bottom-[200px]" />
          </div>
        </div>
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
        <div className="md:w-1/4 hidden md:flex justify-center items-end pb-12">
          <svg
            width="217"
            height="218"
            viewBox="0 0 217 218"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-all delay-1000 duration-500 ${
              inViewText ? "opacity-100" : "opacity-0 translate-y-32"
            }`}
          >
            <path
              d="M133.04 3.2193L108.51 94.806L83.9637 3.2193C83.4402 1.25983 81.4209 0.0931287 79.4614 0.631611C77.5019 1.15513 76.3352 3.15947 76.8737 5.11895L101.405 96.7057L34.3636 29.6647C32.9277 28.2288 30.6092 28.2288 29.1733 29.6647C27.7373 31.1007 27.7373 33.4191 29.1733 34.8551L96.2142 101.896L4.62748 77.3652C2.66801 76.8417 0.648708 77.9934 0.125179 79.9679C-0.398335 81.9124 0.768367 83.9317 2.72784 84.4552L94.3145 109.001L2.72784 133.532C0.768369 134.055 -0.398333 136.075 0.125181 138.034C0.64871 139.994 2.66801 141.16 4.62748 140.637L96.2142 116.106L29.1733 183.147C27.7373 184.568 27.7373 186.901 29.1733 188.337C30.6092 189.773 32.9277 189.773 34.3636 188.337L101.405 121.296L76.8737 212.868C76.3353 214.842 77.502 216.847 79.4614 217.37C81.4209 217.894 83.4402 216.742 83.9637 214.783L108.51 123.196L133.04 214.783C133.564 216.742 135.583 217.894 137.543 217.37C139.188 216.937 140.265 215.456 140.265 213.825C140.265 213.511 140.22 213.197 140.145 212.868L115.6 121.296L182.64 188.337C184.076 189.773 186.41 189.773 187.846 188.337C188.564 187.619 188.908 186.677 188.908 185.735C188.908 184.792 188.564 183.85 187.846 183.147L120.805 116.106L212.377 140.637C214.336 141.16 216.355 139.994 216.879 138.034C216.969 137.72 216.999 137.406 216.999 137.077C216.999 135.461 215.922 133.981 214.276 133.532L122.704 109.001L214.276 84.4552C215.922 84.0214 216.999 82.5406 216.999 80.9102C216.999 80.5961 216.969 80.282 216.879 79.9678C216.355 77.9934 214.336 76.8417 212.377 77.3652L120.805 101.896L187.846 34.8551C188.564 34.1521 188.908 33.1948 188.908 32.2674C188.908 31.325 188.564 30.3827 187.846 29.6647C186.41 28.2288 184.076 28.2288 182.64 29.6647L115.6 96.7057L140.145 5.11894C140.22 4.80483 140.265 4.49073 140.265 4.17661C140.265 2.54621 139.188 1.06539 137.543 0.63161C135.583 0.093127 133.564 1.25983 133.04 3.2193Z"
              fill="#71C6B0"
            />
          </svg>
        </div>
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
          <div
            className={`md:hidden bg-tertiary transition-all delay-1000 duration-500 ${
              inViewText ? "opacity-100" : "opacity-0 translate-y-32"
            }`}
          >
            <img
              src={Profile}
              className="w-full h-full opacity-0"
              alt="profile"
            />
          </div>
          <div className="md:hidden flex items-center justify-center">
            <svg
              width="112"
              height="112"
              viewBox="0 0 112 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.6664 1.40341L56.0053 48.6748L43.3364 1.40341C43.0662 0.392054 42.024 -0.210127 41.0126 0.0678047C40.0013 0.338007 39.3991 1.37253 39.677 2.38389L52.3382 49.6552L17.7362 15.0529C16.995 14.3117 15.7984 14.3117 15.0573 15.0529C14.3161 15.794 14.3161 16.9907 15.0573 17.7318L49.6593 52.3342L2.38839 39.6729C1.37704 39.4027 0.334814 39.9972 0.0646035 41.0162C-0.205599 42.0199 0.396574 43.0621 1.40792 43.3323L48.6788 56.0013L1.40792 68.6626C0.396575 68.9328 -0.205598 69.9751 0.0646044 70.9864C0.334815 71.9978 1.37704 72.6 2.38839 72.3297L49.6593 59.6685L15.0573 94.2708C14.3161 95.0042 14.3161 96.2086 15.0573 96.9498C15.7984 97.6909 16.995 97.6909 17.7362 96.9498L52.3382 62.3474L39.677 109.611C39.3991 110.63 40.0013 111.665 41.0126 111.935C42.024 112.205 43.0662 111.611 43.3364 110.599L56.0053 63.3279L68.6664 110.599C68.9366 111.611 69.9789 112.205 70.9902 111.935C71.8394 111.711 72.3953 110.947 72.3953 110.105C72.3953 109.943 72.3721 109.781 72.3335 109.611L59.6647 62.3474L94.2667 96.9498C95.0078 97.6909 96.2122 97.6909 96.9533 96.9498C97.3239 96.5792 97.5014 96.0928 97.5014 95.6064C97.5014 95.1201 97.3239 94.6337 96.9533 94.2708L62.3513 59.6685L109.614 72.3297C110.626 72.6 111.668 71.9978 111.938 70.9864C111.985 70.8243 112 70.6622 112 70.4923C112 69.6585 111.444 68.8942 110.595 68.6626L63.3318 56.0013L110.595 43.3323C111.444 43.1084 112 42.3441 112 41.5026C112 41.3405 111.985 41.1784 111.938 41.0162C111.668 39.9972 110.626 39.4027 109.614 39.6729L62.3513 52.3342L96.9533 17.7318C97.3239 17.369 97.5014 16.8749 97.5014 16.3962C97.5014 15.9098 97.3239 15.4235 96.9533 15.0529C96.2122 14.3117 95.0078 14.3117 94.2667 15.0529L59.6647 49.6552L72.3335 2.38389C72.3721 2.22176 72.3953 2.05963 72.3953 1.89751C72.3953 1.056 71.8394 0.291688 70.9902 0.0678037C69.9789 -0.210127 68.9366 0.392053 68.6664 1.40341Z"
                fill="#71C6B0"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Somos3;
