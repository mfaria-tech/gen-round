import '../styles/globals.css';
import '../styles/sidebar.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name="author" content="Marcus Faria" />
        <link rel='icon' href='/img/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
};
