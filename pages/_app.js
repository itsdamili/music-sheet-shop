import { store } from '../store/store';
import { Provider } from 'react-redux';
import { globalStyles } from '../styles/globalStyles';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </Provider>
  );
}

export default MyApp;
