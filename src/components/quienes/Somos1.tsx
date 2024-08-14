import * as React from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import { RingLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";

import Page from "../layout/Page";

import Preview from "../../images/somos/preview.svg";
import Textura from "../../images/somos/textura.svg";

const Somos1 = () => {
  const [playing, setPlaying] = useState(false);
  const [loader, setLoader] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <Page className="bg-primary-gradient">
      <div ref={ref} className="flex flex-col sm:flex-row pt-16">
        <div className="w-full md:w-1/2 text-lg md:text-xl font-light">
          <p
            className={`text-gradient-complementary font-medium text-3xl sm:text-4xl lg:text-6xl mb-8 md:mb-12 text-center md:text-left transition-all delay-300 duration-500 ${
              inView ? "opacity-100" : "opacity-0 translate-y-32"
            }`}
          >
            Propósito
          </p>
          <div
            className={`transition-all delay-500 duration-300 ${
              inView ? "opacity-100" : "opacity-0 translate-y-32"
            }`}
          >
            <p className="text-complementary mb-4 md:mb-6">
              La motivación de Fundación Devlyn proviene de la profunda
              tradición de ayuda de la familia Devlyn.
            </p>
            <p className="text-white mb-4 md:mb-6">
              Desde hace 16 años nos consolidamos; recibiendo el legado de 80
              años para brindar{" "}
              <strong>
                el poder de ver y disfrutar el espectáculo de la vida.
              </strong>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center z-10">
          <div className="relative mt-20 sm:mt-0 min-h-[358px] min-w-[343px]">
            {loader && (
              <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <RingLoader color="#FFE882" size={30} />
              </div>
            )}
            {playing && (
              <div className="relative h-[358px] w-[343px]">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  controls
                  url={"https://vimeo.com/998393630"}
                  playing={true}
                  onStart={() => setLoader(false)}
                ></ReactPlayer>
              </div>
            )}
            {!playing && (
              <>
                <img
                  src={Textura}
                  className="absolute -left-[40px] -top-[50px] -z-10 scale-75 md:scale-100"
                  alt=""
                />
                <img
                  src={Preview}
                  className="max-w-[calc(100%-15px)] h-[358px] cursor-pointer z-10"
                  alt=""
                  onClick={() => {
                    setPlaying(true);
                    setLoader(true);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <svg
        ref={ref2}
        width="380"
        height="761"
        viewBox="0 0 380 761"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute right-0 top-[calc(100%-380px)] hidden md:block transition-all delay-1000 duration-500 ${
          inView2 ? "opacity-100" : "opacity-0 translate-x-40"
        }`}
      >
        <path
          d="M760.422 380.211C760.422 590.188 590.188 760.422 380.211 760.422C170.224 760.422 0 590.188 0 380.211C0 170.22 170.224 0 380.211 0C590.188 0 760.422 170.22 760.422 380.211Z"
          fill="#FFE882"
        />
        <path
          d="M553.399 373.972C553.399 469.627 475.857 547.155 380.211 547.155C284.565 547.155 207.028 469.627 207.028 373.972C207.028 278.326 284.565 200.797 380.211 200.797C475.857 200.797 553.399 278.326 553.399 373.972Z"
          fill="#FA8334"
        />
      </svg>
      <svg
        width="151"
        height="450"
        viewBox="0 0 151 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute right-0 top-[calc(100%-225px)] md:hidden transition-all delay-1000 duration-500 ${
          inView ? "opacity-100" : "opacity-0 translate-x-40"
        }`}
      >
        <path
          d="M450 225C450 349.26 349.26 450 225 450C100.735 450 0 349.26 0 225C0 100.732 100.735 0 225 0C349.26 0 450 100.732 450 225Z"
          fill="#FFE882"
        />
        <path
          d="M327.488 221.308C327.488 277.914 281.601 323.794 225 323.794C168.399 323.794 122.514 277.914 122.514 221.308C122.514 164.707 168.399 118.827 225 118.827C281.601 118.827 327.488 164.707 327.488 221.308Z"
          fill="#FA8334"
        />
      </svg>
    </Page>
  );
};

export default Somos1;
