import * as React from "react";
import Somos1 from "../components/quienes/Somos1";
import Layout from "../components/layout/Layout";
import Somos2 from "../components/quienes/Somos2";
import Somos3 from "../components/quienes/Somos3";

const QuienesSomos = () => {
  return (
    <Layout>
      <Somos1 />
      <Somos2 />
      <Somos3 />
    </Layout>
  );
};

export default QuienesSomos;
