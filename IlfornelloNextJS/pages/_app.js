// pages/_app.js

import React from 'react';
import App from 'next/app';
import Head from 'next/head'; // Import Head from next/head

function MyApp({ Component, pageProps, router }) {
  // Check if the current page's path is '/'
  const isHomePage = router.pathname === '/';

  // Import and apply different CSS based on the page's path
  const pageCss = isHomePage ? '/styles/index.css' : '/styles/global.css';

  return (
    <>
      <Head>
        {pageCss && <link rel="stylesheet" href={pageCss} />}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
