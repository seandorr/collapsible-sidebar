import React from "react";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import "../styles/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
