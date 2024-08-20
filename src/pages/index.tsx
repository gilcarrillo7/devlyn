import * as React from "react";
import { HeadFC, type PageProps, Script } from "gatsby";
import { SEO } from "../components/layout/SEO";
import Layout from "../components/layout/Layout";
import Home1 from "../components/home/Home1";
import Home2 from "../components/home/Home2";
import Home3 from "../components/home/Home3";
import Home4 from "../components/home/Home4";
import Home5 from "../components/home/Home5";
import Home6 from "../components/home/Home6";
import Home7 from "../components/home/Home7";
import Home8 from "../components/home/Home8";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Home6 />
      {/* <div id="testimonios">
        <Home7 />
      </div> */}
      <Home8 />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Inicio" />;
