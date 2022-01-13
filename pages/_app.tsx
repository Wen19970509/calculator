import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.Fragment>
            <Head>
                <title>Ratio Calculator</title>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
            </Head>
            <Component {...pageProps} />
        </React.Fragment>
    );
}

export default MyApp;
