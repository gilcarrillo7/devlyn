import * as React from "react";

import Arc from "../../images/sumate/arc1.png";
import ImgSum1 from "../../images/sumate/imgSum1.png";
import Button from "../shared/Button";
import { useInView } from "react-intersection-observer";
import { navigate } from "gatsby";

const FooterSum = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div className="flex">
      <div
        ref={ref}
        className="sm:order-2 flex-grow bg-tertiary flex justify-around py-8"
      >
        <svg
          width="134"
          height="134"
          viewBox="0 0 134 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`block md:hidden transition-all delay-300 duration-300 ${
            inView ? "opacity-100" : "opacity-0 translate-x-24"
          }`}
        >
          <path
            d="M133.922 66.7417C133.922 103.52 104.107 133.335 67.3374 133.335C30.5587 133.335 0.743795 103.52 0.743798 66.7417C0.743802 29.9721 30.5587 0.157216 67.3374 0.15722C104.107 0.157224 133.922 29.9721 133.922 66.7417Z"
            fill="#FA8334"
          />
          <path
            d="M97.6621 66.7417C97.6621 83.4949 84.09 97.0762 67.3368 97.0762C50.5835 97.0762 37.0023 83.4949 37.0023 66.7417C37.0023 49.9976 50.5836 36.4164 67.3368 36.4164C84.09 36.4164 97.6621 49.9976 97.6621 66.7417Z"
            fill="#FFE882"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="219"
          height="220"
          viewBox="0 0 219 220"
          fill="none"
          className={`hidden md:block transition-all delay-300 duration-300 ${
            inView ? "opacity-100" : "opacity-0 translate-x-24"
          }`}
        >
          <path
            d="M1.30299e-06 109.827C2.02272e-06 49.472 48.927 0.544999 109.267 0.544999C169.622 0.545 218.549 49.472 218.549 109.827C218.549 170.167 169.622 219.094 109.267 219.094C48.927 219.094 5.83449e-07 170.167 1.30299e-06 109.827Z"
            fill="#FA8334"
          />
          <path
            d="M59.5022 109.827C59.5022 82.3343 81.7744 60.0472 109.267 60.0472C136.759 60.0472 159.046 82.3343 159.046 109.827C159.046 137.304 136.759 159.591 109.267 159.591C81.7744 159.591 59.5022 137.304 59.5022 109.827Z"
            fill="#FFE882"
          />
        </svg>
        <svg
          width="218"
          height="218"
          viewBox="0 0 218 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`hidden md:block transition-all delay-500 duration-300 ${
            inView ? "opacity-100" : "opacity-0 translate-x-24"
          }`}
        >
          <path
            d="M214.781 133.358L123.194 108.827L214.781 84.2811C216.74 83.7576 217.907 81.7383 217.368 79.7788C216.845 77.8193 214.841 76.6526 212.881 77.1911L121.294 101.722L188.335 34.681C189.771 33.2451 189.771 30.9266 188.335 29.4906C186.899 28.0547 184.581 28.0547 183.145 29.4906L116.104 96.5316L140.635 4.94487C141.158 2.9854 140.007 0.966097 138.032 0.442568C136.088 -0.0809463 134.068 1.08576 133.545 3.04523L108.999 94.6319L84.4682 3.04523C83.9447 1.08576 81.9254 -0.0809469 79.9659 0.442567C78.0064 0.966096 76.8397 2.9854 77.3632 4.94487L101.894 96.5316L34.8531 29.4906C33.4321 28.0547 31.0987 28.0547 29.6628 29.4906C28.2268 30.9266 28.2268 33.2451 29.6628 34.681L96.7037 101.722L5.13195 77.1911C3.15752 76.6526 1.15317 77.8193 0.629649 79.7788C0.106125 81.7383 1.25788 83.7576 3.21735 84.2811L94.8041 108.827L3.21735 133.358C1.25788 133.881 0.106124 135.901 0.629648 137.86C1.06342 139.505 2.54425 140.582 4.17465 140.582C4.48876 140.582 4.80288 140.537 5.13195 140.463L96.7037 115.917L29.6628 182.958C28.2268 184.394 28.2268 186.727 29.6628 188.163C30.3807 188.881 31.3231 189.225 32.2654 189.225C33.2078 189.225 34.1501 188.881 34.8531 188.163L101.894 121.122L77.3632 212.694C76.8397 214.653 78.0064 216.673 79.9659 217.196C80.28 217.286 80.5941 217.316 80.9232 217.316C82.5386 217.316 84.0195 216.239 84.4682 214.594L108.999 123.022L133.545 214.594C133.979 216.239 135.459 217.316 137.09 217.316C137.404 217.316 137.718 217.286 138.032 217.196C140.007 216.673 141.158 214.653 140.635 212.694L116.104 121.122L183.145 188.163C183.848 188.881 184.805 189.225 185.733 189.225C186.675 189.225 187.617 188.881 188.335 188.163C189.771 186.727 189.771 184.394 188.335 182.958L121.294 115.917L212.881 140.463C213.195 140.537 213.509 140.582 213.823 140.582C215.454 140.582 216.935 139.505 217.368 137.86C217.907 135.901 216.74 133.881 214.781 133.358Z"
            fill="#FFE882"
          />
        </svg>
        <svg
          width="222"
          height="223"
          viewBox="0 0 222 223"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`hidden xl:block transition-all delay-700 duration-300 ${
            inView ? "opacity-100" : "opacity-0 translate-x-24"
          }`}
        >
          <mask
            id="mask0_2152_1897"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="222"
            height="223"
          >
            <path
              d="M0 222.094L2.64844e-06 0.000137329L221.705 0.000139973L221.705 222.094L0 222.094Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2152_1897)">
            <path
              d="M112.438 161.515C84.9455 161.515 62.6584 139.227 62.6584 111.735C62.6584 84.2425 84.9455 61.9554 112.438 61.9554C139.93 61.9554 162.218 84.2425 162.218 111.735C162.218 139.227 139.93 161.515 112.438 161.515ZM112.438 3.54512C52.0832 3.54512 3.17114 52.4721 3.17114 112.827C3.17114 173.167 52.0832 222.094 112.438 222.094C172.793 222.094 221.705 173.167 221.705 112.827C221.705 52.4721 172.793 3.54512 112.438 3.54512Z"
              fill="#0C4C61"
            />
          </g>
        </svg>
      </div>
      <div className="sm:order-1 bg-complementary w-1/2 sm:w-[320px]"></div>
    </div>
  );
};

const Sumate3 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <>
      <div ref={ref} className="relative flex bg-complementary relative">
        <div className="container h-[250px] sm:h-[250px] flex items-center">
          <p
            className={`text-primary font-medium text-2xl sm:text-4xl lg:text-5xl pr-[50%] sm:pr-[30%] md:pr-0 transition-all delay-300 duration-300 ${
              inView ? "opacity-100" : "opacity-0 translate-y-24"
            }`}
          >
            Voluntariado corporativo
          </p>
        </div>
        <div className="absolute right-0 top-0 bg-tertiary w-1/2 sm:w-auto h-[250px] sm:h-auto">
          <img
            className={`absolute bottom-0 sm:relative transition-all delay-500 duration-700 ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            alt="textura"
            src={Arc}
          />
        </div>
      </div>
      <div className="relative flex flex-col sm:flex-row">
        <img
          ref={ref2}
          className={`w-full sm:w-auto transition-all delay-300 duration-500 ${
            inView ? "opacity-100" : "opacity-0 -translate-x-24"
          }`}
          src={ImgSum1}
          alt=""
        />
        <div className="bg-white mt-[-350px] sm:mt-0 w-full md:w-[calc(100%-350px)] lg:w-[calc(100%-650px)] md:absolute sm:right-4 lg:right-[250px] md:top-1/2 md:-translate-y-1/2 z-10 container text-primary text-lg md:text-lg py-8 md:py-0">
          <p className="mb-4">
            El trabajo que realizan todos nuestros voluntarios es primordial
            para que nuestras jornadas visuales sean un éxito e impacten de
            forma profunda a las comunidades que atendemos en todo México.
          </p>
          <p className="mb-4">
            Si eres una empresa, puedes traer a tu equipo a nuestras jornadas
            visuales para que apoyen con distintas actividades como servicio de
            optometría (sólo profesionales), apoyo en la logística como
            registro, guía y atención a personas beneficiarias y entrega de
            lentes.
          </p>
          <p className="mb-8 sm:mb-12 font-bold">
            Únete a este gran voluntariado y marca la diferencia en el acceso a
            la salud visual para todas las personas.
          </p>
          <Button
            variant="complementary2"
            onClick={() => navigate("/contacto")}
          >
            Quiero hacer voluntariado
          </Button>
        </div>
      </div>
      <FooterSum />
    </>
  );
};

export default Sumate3;
