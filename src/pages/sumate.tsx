import * as React from "react";
import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";
import Sumate1 from "../components/sumate/Sumate1";
import Sumate2 from "../components/sumate/Sumate2";
import Sumate3 from "../components/sumate/Sumate3";
import { SEO } from "../components/layout/SEO";
import { HeadFC } from "gatsby";

const Sumate = () => {
  return (
    <Layout headerPrimary>
      <Sumate1 />
      <Sumate2 />
      <Sumate3 />
    </Layout>
  );
};

export default Sumate;

export const Head: HeadFC = () => <SEO title="Súmate" />;
