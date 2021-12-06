import { appWithTranslation } from 'next-i18next';
import App from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
      <a
        href="https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb"
        target="_blank"
      >
        credit
      </a>
      <a href="https://www.youtube.com/watch?v=UwzN8R6h9-U" target="_blank">
        credit
      </a>
    </div>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
