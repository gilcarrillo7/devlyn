import * as React from "react";

import Button from "../shared/Button";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "../../hooks";
import { selectDonateUrl } from "../../features/ui/uiSlice";

import Img1 from "../../images/sumate1.png";

const Textura1 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <svg
      ref={ref}
      width="117"
      height="117"
      viewBox="0 0 117 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute bottom-[150px] lg:bottom-96 z-20 left-[250px] lg:left-80 scale-75 lg:scale-100 transition-all delay-1000 duration-500 ${
        inView ? "opacity-100" : "opacity-0 "
      }`}
    >
      <path
        d="M45.2681 115.534L58.4945 66.1523L71.7289 115.534C72.0112 116.59 73.1 117.22 74.1564 116.929C75.213 116.647 75.842 115.566 75.5517 114.51L62.3253 65.128L98.472 101.275C99.2463 102.049 100.496 102.049 101.271 101.275C102.045 100.501 102.045 99.2508 101.271 98.4766L65.1238 62.3295L114.505 75.556C115.561 75.8383 116.65 75.2173 116.933 74.1527C117.215 73.1042 116.586 72.0155 115.529 71.7332L66.148 58.4986L115.529 45.2721C116.586 44.9898 117.215 43.9011 116.933 42.8445C116.65 41.788 115.561 41.159 114.505 41.4412L65.1238 54.6678L101.271 18.5207C102.045 17.7545 102.045 16.4964 101.271 15.7221C100.496 14.9479 99.2463 14.9479 98.472 15.7221L62.3253 51.8692L75.5517 2.49561C75.842 1.43104 75.213 0.350332 74.1564 0.0680604C73.1 -0.214213 72.0112 0.406788 71.7289 1.4633L58.4945 50.845L45.2681 1.4633C44.9858 0.406788 43.8971 -0.214213 42.8406 0.0680604C41.9534 0.301943 41.3728 1.10037 41.3728 1.97945C41.3728 2.14882 41.397 2.31818 41.4373 2.49561L54.6717 51.8692L18.525 15.7221C17.7508 14.9479 16.4927 14.9479 15.7184 15.7221C15.3313 16.1092 15.1458 16.6173 15.1458 17.1254C15.1458 17.6335 15.3313 18.1416 15.7184 18.5207L51.8652 54.6678L2.49204 41.4412C1.43555 41.159 0.34679 41.788 0.0645189 42.8445C0.0161308 43.0139 0 43.1833 0 43.3607C0 44.2317 0.58067 45.0302 1.4678 45.2721L50.8409 58.4986L1.4678 71.7332C0.58067 71.9671 0 72.7655 0 73.6446C0 73.814 0.0161308 73.9833 0.0645189 74.1527C0.34679 75.2173 1.43555 75.8383 2.49204 75.556L51.8652 62.3295L15.7184 98.4766C15.3313 98.8556 15.1458 99.3718 15.1458 99.8718C15.1458 100.38 15.3313 100.888 15.7184 101.275C16.4927 102.049 17.7508 102.049 18.525 101.275L54.6717 65.128L41.4373 114.51C41.397 114.679 41.3728 114.848 41.3728 115.018C41.3728 115.897 41.9534 116.695 42.8406 116.929C43.8971 117.22 44.9858 116.59 45.2681 115.534Z"
        fill="#0098A7"
      />
    </svg>
  );
};

const Textura2 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <svg
      ref={ref}
      width="443"
      height="687"
      viewBox="0 0 443 687"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`z-10 absolute -bottom-[300px] lg:-bottom-28  -left-[100px] lg:left-0 transition-all delay-500 duration-500 ${
        inView
          ? "opacity-100  -left-[100px] lg:left-0"
          : "opacity-0 -left-[100px]"
      }`}
    >
      <path
        d="M99.4394 0C289.142 0 442.926 153.784 442.926 343.439C442.926 533.142 289.142 686.926 99.4394 686.926C-90.2162 686.926 -244 533.142 -244 343.439C-244 153.784 -90.2162 0 99.4394 0Z"
        fill="#B1D59B"
      />
      <path
        d="M99.4395 187.023C185.852 187.023 255.903 257.027 255.903 343.439C255.903 429.852 185.852 499.903 99.4395 499.903C13.0742 499.903 -56.9771 429.852 -56.9771 343.439C-56.9771 257.027 13.0742 187.023 99.4395 187.023Z"
        fill="#FFE882"
      />
    </svg>
  );
};

const Textura3 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <svg
      ref={ref}
      width="215"
      height="214"
      viewBox="0 0 215 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`z-10 lg:z-0 absolute left-[200px] lg:left-72  -bottom-[100px] lg:-bottom-28 transition-all delay-300 duration-500 ${
        inView ? "opacity-100  " : "opacity-0 "
      }`}
    >
      <mask
        id="mask0_2204_48"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="215"
        height="214"
      >
        <path d="M0 0H214.375V214H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_2204_48)">
        <path
          d="M58.4739 108.53C58.4739 81.9934 79.9865 60.4808 106.524 60.4808C133.061 60.4808 154.573 81.9934 154.573 108.53C154.573 135.067 133.061 156.58 106.524 156.58C79.9865 156.58 58.4739 135.067 58.4739 108.53ZM210.954 108.53C210.954 50.2731 163.727 3.06087 105.47 3.06087C47.2267 3.06087 0 50.2731 0 108.53C0 166.788 47.2267 214 105.47 214C163.727 214 210.954 166.788 210.954 108.53Z"
          fill="#FA8334"
        />
      </g>
    </svg>
  );
};

const Sumate1 = () => {
  const donateUrl = useAppSelector(selectDonateUrl);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div
      className={`min-h-screen flex items-center justify-center relative flex-col overflow-hidden`}
    >
      <div className="container relative z-30 pb-[450px] lg:pb-0 pt-32">
        <div className="lg:flex items-center justify-end">
          <div
            ref={ref}
            className={`w-full lg:w-1/2 xl:w-2/3 xl:pl-32 text-primary text-base lg:text-xl transition-all delay-300 duration-300 ${
              inView ? "opacity-100" : "opacity-0 translate-y-24"
            }`}
          >
            <p
              className={`text-secondary text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 font-medium`}
            >
              ¡Tu poder de ver es el poder de transformar el mundo!
            </p>
            <p className=" mb-4">
              Para el <strong>Día Mundial de la Visión</strong> (14 de octubre)
              queremos entregar 50 mil lentes y llevar a cada rincón del país el
              poder de ver y disfrutar el espectáculo de la vida.
            </p>
            <p className=" mb-4">
              Súmate al movimiento por la salud visual más grande de México y
              América Latina.
            </p>
            <p className="text-xl sm:text-2xl text-complementary2 mb-8 sm:mb-16">
              Dona desde un par de lentes por $250.00
            </p>
            <Button variant="blue" onClick={() => window.open(donateUrl)}>
              Donar
            </Button>
          </div>
        </div>
      </div>
      <Textura1 />
      <Textura2 />
      <Textura3 />
      <img
        src={Img1}
        className={`z-10 absolute -left-[55px] -bottom-[150px] lg:bottom-0 scale-75 lg:scale-100 transition-all delay-700 duration-500 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        alt="Súmate"
      />
    </div>
  );
};

export default Sumate1;
