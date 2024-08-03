import * as React from "react";
import { HeadFC, type PageProps, Script } from "gatsby";
import { SEO } from "../components/layout/SEO";
import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Page className="bg-primary-gradient">
        <h1 className="text-secondary"> Hola</h1>
      </Page>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
