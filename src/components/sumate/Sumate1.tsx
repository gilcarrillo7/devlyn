import * as React from "react";
import { useState } from "react";

import Button from "../shared/Button";
import { useInView } from "react-intersection-observer";
import { useAppSelector } from "../../hooks";
import { selectDonateUrl } from "../../features/ui/uiSlice";

import Img1 from "../../images/sumate1.png";

const Textura1 = ({ animate }: { animate: boolean }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <>
      <svg
        ref={ref}
        width="117"
        height="117"
        viewBox="0 0 117 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`hidden sm:block absolute bottom-[150px] lg:bottom-96 z-20 left-[250px] lg:left-80 transition-all delay-1000 duration-500 ${
          inView ? "opacity-100" : "opacity-0 "
        } ${animate ? "animate-spin" : ""}`}
      >
        <path
          d="M45.2681 115.534L58.4945 66.1523L71.7289 115.534C72.0112 116.59 73.1 117.22 74.1564 116.929C75.213 116.647 75.842 115.566 75.5517 114.51L62.3253 65.128L98.472 101.275C99.2463 102.049 100.496 102.049 101.271 101.275C102.045 100.501 102.045 99.2508 101.271 98.4766L65.1238 62.3295L114.505 75.556C115.561 75.8383 116.65 75.2173 116.933 74.1527C117.215 73.1042 116.586 72.0155 115.529 71.7332L66.148 58.4986L115.529 45.2721C116.586 44.9898 117.215 43.9011 116.933 42.8445C116.65 41.788 115.561 41.159 114.505 41.4412L65.1238 54.6678L101.271 18.5207C102.045 17.7545 102.045 16.4964 101.271 15.7221C100.496 14.9479 99.2463 14.9479 98.472 15.7221L62.3253 51.8692L75.5517 2.49561C75.842 1.43104 75.213 0.350332 74.1564 0.0680604C73.1 -0.214213 72.0112 0.406788 71.7289 1.4633L58.4945 50.845L45.2681 1.4633C44.9858 0.406788 43.8971 -0.214213 42.8406 0.0680604C41.9534 0.301943 41.3728 1.10037 41.3728 1.97945C41.3728 2.14882 41.397 2.31818 41.4373 2.49561L54.6717 51.8692L18.525 15.7221C17.7508 14.9479 16.4927 14.9479 15.7184 15.7221C15.3313 16.1092 15.1458 16.6173 15.1458 17.1254C15.1458 17.6335 15.3313 18.1416 15.7184 18.5207L51.8652 54.6678L2.49204 41.4412C1.43555 41.159 0.34679 41.788 0.0645189 42.8445C0.0161308 43.0139 0 43.1833 0 43.3607C0 44.2317 0.58067 45.0302 1.4678 45.2721L50.8409 58.4986L1.4678 71.7332C0.58067 71.9671 0 72.7655 0 73.6446C0 73.814 0.0161308 73.9833 0.0645189 74.1527C0.34679 75.2173 1.43555 75.8383 2.49204 75.556L51.8652 62.3295L15.7184 98.4766C15.3313 98.8556 15.1458 99.3718 15.1458 99.8718C15.1458 100.38 15.3313 100.888 15.7184 101.275C16.4927 102.049 17.7508 102.049 18.525 101.275L54.6717 65.128L41.4373 114.51C41.397 114.679 41.3728 114.848 41.3728 115.018C41.3728 115.897 41.9534 116.695 42.8406 116.929C43.8971 117.22 44.9858 116.59 45.2681 115.534Z"
          fill="#0098A7"
        />
      </svg>
      <svg
        ref={ref2}
        width="85"
        height="85"
        viewBox="0 0 85 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`sm:hidden absolute bottom-[150px] lg:bottom-96 z-20 left-[250px] lg:left-80 transition-all delay-1000 duration-500 ${
          inView2 ? "opacity-100" : "opacity-0 "
        }`}
      >
        <path
          d="M33.0142 83.5662L42.5181 48.0825L52.0279 83.5662C52.2307 84.3253 53.013 84.7773 53.7722 84.5687C54.5313 84.3659 54.9834 83.5893 54.7747 82.8302L45.2708 47.3465L71.2444 73.3203C71.8007 73.8767 72.699 73.8767 73.2553 73.3203C73.8116 72.764 73.8116 71.8658 73.2553 71.3094L47.2817 45.3356L82.765 54.8396C83.5242 55.0424 84.3065 54.5962 84.5094 53.8312C84.7122 53.0779 84.2602 52.2955 83.501 52.0927L48.0177 42.5829L83.501 33.0788C84.2602 32.876 84.7122 32.0936 84.5094 31.3345C84.3065 30.5753 83.5242 30.1233 82.765 30.3261L47.2817 39.8302L73.2553 13.8563C73.8116 13.3058 73.8116 12.4017 73.2553 11.8454C72.699 11.2891 71.8007 11.2891 71.2444 11.8454L45.2708 37.8192L54.7747 2.34134C54.9834 1.57638 54.5313 0.79983 53.7722 0.597001C53.013 0.394171 52.2307 0.840397 52.0279 1.59956L42.5181 37.0833L33.0142 1.59956C32.8113 0.840397 32.029 0.394171 31.2699 0.597001C30.6324 0.76506 30.2151 1.33878 30.2151 1.97045C30.2151 2.09215 30.2325 2.21385 30.2615 2.34134L39.7712 37.8192L13.7977 11.8454C13.2413 11.2891 12.3373 11.2891 11.781 11.8454C11.5028 12.1236 11.3695 12.4886 11.3695 12.8537C11.3695 13.2188 11.5028 13.5839 11.781 13.8563L37.7546 39.8302L2.27701 30.3261C1.51786 30.1233 0.735517 30.5753 0.532689 31.3345C0.497919 31.4562 0.486328 31.5779 0.486328 31.7054C0.486328 32.3312 0.903575 32.905 1.54103 33.0788L37.0186 42.5829L1.54103 52.0927C0.903575 52.2608 0.486328 52.8345 0.486328 53.4662C0.486328 53.5879 0.497919 53.7095 0.532689 53.8312C0.735517 54.5962 1.51786 55.0424 2.27701 54.8396L37.7546 45.3356L11.781 71.3094C11.5028 71.5818 11.3695 71.9527 11.3695 72.312C11.3695 72.6771 11.5028 73.0422 11.781 73.3203C12.3373 73.8767 13.2413 73.8767 13.7977 73.3203L39.7712 47.3465L30.2615 82.8302C30.2325 82.9519 30.2151 83.0736 30.2151 83.1953C30.2151 83.8269 30.6324 84.4007 31.2699 84.5687C32.029 84.7773 32.8113 84.3253 33.0142 83.5662Z"
          fill="#0098A7"
        />
      </svg>
    </>
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
      className={`animate-spinz-10 lg:z-0 absolute left-[200px] lg:left-72  -bottom-[100px] lg:-bottom-28 transition-all delay-300 duration-500 ${
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
  const [animate, setAnimate] = useState(false);
  return (
    <div
      className={`min-h-screen flex items-center justify-center relative flex-col overflow-hidden`}
    >
      <div className="container relative z-30 pb-[450px] lg:pb-0 pt-32 lg:pt-0">
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
              Para el <strong>Día Mundial de la Visión</strong> (10 de octubre)
              queremos entregar 50 mil lentes y llevar a cada rincón del país el
              poder de ver y disfrutar el espectáculo de la vida.
            </p>
            <p className=" mb-4">
              Súmate al movimiento por la salud visual más grande de México.
            </p>
            <p className="text-xl sm:text-2xl text-complementary2 mb-8 sm:mb-16">
              Dona desde un par de lentes por $250.00
            </p>
            <Button
              variant="blue"
              onClick={() => window.open(donateUrl)}
              onMouseEnter={() => setAnimate(true)}
              onMouseLeave={() => setAnimate(false)}
            >
              Donar
            </Button>
          </div>
        </div>
      </div>
      <Textura1 animate={animate} />
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
