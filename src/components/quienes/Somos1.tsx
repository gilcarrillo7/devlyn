import * as React from "react";
import Page from "../layout/Page";

const Somos1 = () => {
  return (
    <Page className="bg-primary-gradient">
      <div className="flex">
        <div className="w-full md:w-1/2 text-lg md:text-xl font-light">
          <p className="text-gradient-complementary font-medium text-3xl sm:text-4xl lg:text-6xl mb-8 md:mb-12 text-center md:text-left">
            Propósito
          </p>
          <p className="text-complementary mb-4 md:mb-6">
            La motivación de Fundación Devlyn proviene de la profunda tradición
            de ayuda de la familia Devlyn.
          </p>
          <p className="text-white mb-4 md:mb-6">
            Desde hace 16 años nos consolidamos; recibiendo el legado de 80 años
            para brindar{" "}
            <strong>
              el poder de ver y disfrutar el espectáculo de la vida.
            </strong>
          </p>
        </div>
      </div>
      <svg
        width="380"
        height="761"
        viewBox="0 0 380 761"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute right-0 top-[calc(100%-380px)] hidden md:block`}
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
        className={`absolute right-0 top-[calc(100%-225px)] md:hidden`}
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
