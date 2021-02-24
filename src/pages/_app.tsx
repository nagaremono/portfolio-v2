import { AppProps } from 'next/dist/next-server/lib/router/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
