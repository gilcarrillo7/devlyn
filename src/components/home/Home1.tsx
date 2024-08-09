import * as React from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie";
import * as animationData from "../../assets/animation.json";
import Page from "../layout/Page";
import Button from "../shared/Button";

const Home1 = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Page className="bg-primary-gradient">
      <div ref={ref} className="flex flex-col md:flex-row pt-24 md:pt-4">
        <div className="md:w-1/2 md:order-2 mb-12 md:mb-0 flex justify-center">
          <div className="max-w-[80%]">
            <Lottie options={defaultOptions} style={{ cursor: "auto" }} />
          </div>
        </div>
        <div className="md:w-1/2 md:order-1 md:pr-8 md:pr-20 flex items-center">
          <div>
            <p
              className={`font-light text-white text-2xl md:text-4xl transition-all delay-300 duration-300 ${
                inView ? "opacity-100" : "opacity-0 "
              }`}
            >
              Trabajamos para que más personas tengan acceso a la{" "}
              <span className="text-complementary font-semibold">
                salud visual
              </span>{" "}
              y con ello transformar sus vidas de forma positiva.
            </p>
            <Button variant="transparent" className="mt-6">
              Conoce más
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home1;
