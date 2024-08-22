import * as React from "react";
import Layout from "../components/layout/Layout";
import Page from "../components/layout/Page";

const Page404 = () => {
  return (
    <Layout headerPrimary>
      <Page>
        <p className="text-2xl text-center">Página no encontrada</p>
      </Page>
    </Layout>
  );
};

export default Page404;
