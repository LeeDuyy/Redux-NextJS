import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { ComponentType, Fragment } from "react";
import { wrapper } from "../src/redux/store";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/Style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

import Layout from "../src/Layout";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export type ToDoAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any> & {
    Layout: ComponentType;
  };
};

function ToDoApp({ Component, router }: ToDoAppProps) {
  const siteLayout = router.pathname;
  return (
    <Fragment>
      {siteLayout !== "/login" && siteLayout !== "/register" && <Layout />}
      <Component />
    </Fragment>
  );
}

export default wrapper.withRedux(ToDoApp);
