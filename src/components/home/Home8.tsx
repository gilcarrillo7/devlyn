import * as React from "react";
import Page from "../layout/Page";

import Logo1 from "../../images/alianzas/logo1.png";
import Logo2 from "../../images/alianzas/logo2.png";
import Logo3 from "../../images/alianzas/logo3.png";
import Logo4 from "../../images/alianzas/logo4.png";
import Logo5 from "../../images/alianzas/logo5.png";
import Logo6 from "../../images/alianzas/logo6.png";
import Logo7 from "../../images/alianzas/logo7.png";
import Logo8 from "../../images/alianzas/logo8.png";
import Logo9 from "../../images/alianzas/logo9.png";
import Logo10 from "../../images/alianzas/logo10.png";
import Logo11 from "../../images/alianzas/logo11.png";
import Logo12 from "../../images/alianzas/logo12.png";
import Logo13 from "../../images/alianzas/logo13.png";
import Logo14 from "../../images/alianzas/logo14.png";
import Logo15 from "../../images/alianzas/logo15.png";
import Logo16 from "../../images/alianzas/logo16.png";
import Logo17 from "../../images/alianzas/logo17.png";
import Logo18 from "../../images/alianzas/logo18.png";
import Logo19 from "../../images/alianzas/logo19.png";
import GridLogos from "./GridLogos";

const Home8 = () => {
  const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
    Logo11,
    Logo12,
    Logo13,
    Logo14,
    Logo15,
    Logo16,
    Logo17,
    Logo18,
    Logo19,
  ];
  return (
    <Page className="py-8 sm:py-4">
      <p className="text-primary text-3xl sm:text-6xl text-center mb-8 sm:mb-16 lg:mb-24">
        Nuestras alianzas
      </p>
      <GridLogos logos={logos} />
    </Page>
  );
};

export default Home8;
