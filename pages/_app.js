import React from "react";
import App from "next/app";
import NextNProgress from "../components/nprogress";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <NextNProgress />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
