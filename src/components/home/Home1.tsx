import * as React from "react";
import Page from "../layout/Page";
import Button from "../shared/Button";

const Home1 = () => {
  return (
    <Page className="bg-primary-gradient">
      <div className="flex">
        <div className="sm:w-1/2 sm:order-2"></div>
        <div className="sm:w-1/2 sm:order-1 sm:pr-8 md:pr-20">
          <p className="font-light text-white text-2xl sm:text-4xl">
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
    </Page>
  );
};

export default Home1;
