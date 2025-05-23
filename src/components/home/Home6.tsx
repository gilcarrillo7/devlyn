import * as React from "react";
import { useInView } from "react-intersection-observer";

import Nino from "../../images/nino.png";
import NinoMob from "../../images/ninoMob.png";
import Button from "../shared/Button";

const Home6 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref} className="bg-primary relative overflow-hidden">
      <div className="container flex justify-end mb-16 md:mb-4 pt-4">
        <div className="lg:w-1/2 py-4 lg:py-8 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
          <p className="text-tertiary text-3xl sm:text-6xl mb-4">
            Sede de Fundación Devlyn
          </p>
          <p className="text-white text-xl sm:text-4xl mb-4">
            Obtén tus lentes con una cuota de recuperación accesible desde
          </p>
          <p className="text-complementary text-2xl sm:text-5xl mb-4">
            $ 190 MXN pesos
          </p>
          <Button
            variant="transparent"
            onClick={() =>
              window.open("https://maps.app.goo.gl/KopXhewaHBPuzmZK9")
            }
          >
            Ver ubicación
          </Button>
        </div>
      </div>
      <svg
        width="390"
        height="403"
        viewBox="0 0 390 403"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute left-0 bottom-0 z-0 transition-all delay-100 duration-300 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <path
          d="M-195.241 285.82L104.552 369.128L-195.241 452.449C-201.659 454.23 -205.464 461.07 -203.745 467.73C-202.027 474.378 -195.441 478.359 -189.015 476.546L110.77 393.23L-108.687 620.847C-113.382 625.718 -113.382 633.617 -108.687 638.5C-103.988 643.359 -96.3743 643.359 -91.6751 638.5L127.782 410.878L47.4539 721.808C45.7351 728.457 49.5437 735.296 55.9617 737.089C62.3757 738.878 68.9734 734.917 70.6921 728.269L151.02 417.339L231.345 728.269C233.067 734.917 239.661 738.878 246.079 737.089C252.497 735.296 256.302 728.457 254.583 721.808L174.259 410.878L393.716 638.5C398.411 643.359 406.028 643.359 410.723 638.5C415.423 633.617 415.423 625.718 410.723 620.847L191.266 393.23L491.052 476.546C497.477 478.347 504.067 474.378 505.786 467.73C507.505 461.07 503.696 454.23 497.282 452.449L197.489 369.128L497.282 285.82C503.696 284.039 507.505 277.199 505.786 270.539C504.345 264.957 499.485 261.289 494.173 261.289C493.141 261.289 492.095 261.429 491.052 261.718L191.266 345.027L410.723 117.417C415.423 112.546 415.423 104.64 410.723 99.769C408.376 97.3394 405.298 96.1167 402.22 96.1167C399.141 96.1167 396.063 97.3394 393.716 99.769L174.259 327.39L254.583 16.4565C256.302 9.79639 252.497 2.95654 246.079 1.1792C245.036 0.890136 243.989 0.749512 242.958 0.749512C237.645 0.749512 232.786 4.4292 231.345 9.99951L151.02 320.929L70.6921 9.99951C69.2507 4.41748 64.3914 0.749512 59.0828 0.749512C58.0515 0.749512 57.0046 0.890136 55.9617 1.1792C49.5437 2.95654 45.7351 9.79639 47.4539 16.4565L127.782 327.39L-91.6751 99.769C-94.0266 97.3394 -97.1047 96.1167 -100.183 96.1167C-103.261 96.1167 -106.339 97.3394 -108.687 99.769C-113.382 104.64 -113.382 112.546 -108.687 117.417L110.77 345.027L-189.015 261.718C-190.058 261.429 -191.105 261.289 -192.136 261.289C-197.445 261.289 -202.308 264.968 -203.745 270.539C-205.464 277.199 -201.659 284.039 -195.241 285.82Z"
          fill="#0098A7"
        />
      </svg>
      <img
        src={Nino}
        alt="nino lentes"
        className={`hidden sm:block z-10 relative sm:ml-[-30px] xl:ml-0  transition-all delay-500 duration-300 ${
          inView ? "opacity-100" : "opacity-0 translate-y-24"
        }`}
      />
      <img
        src={NinoMob}
        alt="nino lentes"
        className={`sm:hidden z-10 relative  transition-all delay-500 duration-300 ${
          inView ? "opacity-100" : "opacity-0 translate-y-24"
        }`}
      />
    </div>
  );
};

export default Home6;
