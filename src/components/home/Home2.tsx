import * as React from "react";
import Page from "../layout/Page";
import Button from "../shared/Button";

const Home2 = () => {
  return (
    <Page className="bg-white !items-start overflow-hidden">
      <div className="md:pr-16 lg:pr-72 pt-8 sm:pt-32">
        <p className="text-4xl md:text-6xl font-light text-primary mb-6">
          En México <span className="font-bold">60 millones</span> de personas
          necesitan lentes, pero sólo{" "}
          <span className="font-bold text-tertiary">15 millones</span> tienen
          acceso a ellos.
        </p>
        <p className="text-complementary2 font-bold text-lg sm:text-2xl mb-8">
          Tú puedes cambiar la situación.
        </p>
        <Button variant="complementary2">Súmate</Button>
      </div>
      <div className="absolute bottom-[-60px] sm:bottom-0 right-0 h-[188px] sm:h-[319px] w-full sm:w-[638px] bg-complementary rounded-tl-full rounded-tr-full "></div>
      <div className="absolute bottom-[-60px] sm:bottom-0 right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-[160px] h-[112px] sm:h-[145px] w-[232px] sm:w-[290px] bg-complementary2 rounded-tl-full rounded-tr-full "></div>
    </Page>
  );
};

export default Home2;
