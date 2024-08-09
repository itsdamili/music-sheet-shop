import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <div className="container">
        {children}
      </div>
    </>
  );
};

export default Layout;
