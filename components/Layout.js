import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <div className="container">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
