import "font-awesome/css/font-awesome.min.css";
import React from "react";
import Head from "next/head";
import State from "@/context/state";
import PreLoader from "@/layout/PreLoader";
import "@/assets/css/globals.css";
import "@/assets/css/new-skin/new-skin.css";
import "@/assets/css/demos/demo-1-colors.css";
import "@/assets/css/basic.css";
import "@/assets/css/layout.css";
import "@/assets/css/blogs.css";
import "@/assets/css/ionicons.css";
import "@/assets/css/magnific-popup.css";
import "@/assets/css/animate.css";
import "@/assets/css/gradient.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <State>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        <title>Resume for Edward Whitehead (ultracoolbru)</title>
        <link rel="shortcut icon" href="/assets/images/favicons/favicon.ico" />
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}

export default MyApp;
