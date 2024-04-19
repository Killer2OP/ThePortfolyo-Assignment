import Head from "next/head";

import { Fragment } from "react";
import "../styles/globals.css";
import { UserProvider } from "../src/userContext/userContext";
import { GlobalStyle } from "./_document";

function MyApp({ Component, pageProps }) {
  
  return (
    <Fragment>
      <Head>
      </Head>
      <UserProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </UserProvider>
    </Fragment>
  );
}


export default MyApp;
