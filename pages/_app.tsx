import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { ComponentType, Fragment } from "react";
import Layout from "../src/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/Style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

config.autoAddCss = false;

export type ToDoAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any> & {
    Layout: ComponentType;
  };
};

function MyApp({ Component, router }: ToDoAppProps) {
  const siteLayout = router.pathname;
  return (
    <Fragment>
      {siteLayout !== "/login" && siteLayout !== "/register" && <Layout />}
      <Component />
    </Fragment>
  );
}

export default MyApp;
