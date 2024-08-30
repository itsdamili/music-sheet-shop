import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';
import { store } from '../store/store';
import { globalStyles } from '../styles/globalStyles';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import client from '../apolloClient';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Footer />
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;