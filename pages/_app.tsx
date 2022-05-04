import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import { ComponentType, Fragment } from "react";
import Layout from "../src/Layout";
import "antd/dist/antd.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/SideBar.scss";
import "../styles/Login.scss";

config.autoAddCss = false;

export type ToDoAppProps = AppProps & {
  Component: NextComponentType<NextPageContext, any> & {
    Layout: ComponentType;
  };
};

function MyApp({ Component }: ToDoAppProps) {
  return (
    <Fragment>
      {/* <Layout /> */}
      <Component />
    </Fragment>
  );
}

export default MyApp;
