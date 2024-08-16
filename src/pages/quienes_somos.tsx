import * as React from "react";
import Somos1 from "../components/quienes/Somos1";
import Layout from "../components/layout/Layout";
import Somos2 from "../components/quienes/Somos2";
import Somos3 from "../components/quienes/Somos3";
import { SEO } from "../components/layout/SEO";
import { HeadFC } from "gatsby";

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

export const Head: HeadFC = () => <SEO title="Quiénes somos" />;
